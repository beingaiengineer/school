import {useEffect, useMemo, useState} from 'react';
import styles from './styles.module.css';

type CheatRow = {
  area: string;
  remember: string;
  trap: string;
};

type Question = {
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

type Topic = {
  id: string;
  title: string;
  level: string;
  useCase: string;
  cheatSheet: CheatRow[];
  questions: Question[];
};

type StoredProgress = Record<
  string,
  {
    answers: Record<number, number>;
    score: number;
    submitted: boolean;
  }
>;

const storageKey = 'python-interview-prep-progress-v1';

const topics: Topic[] = [
  {
    id: 'python-basics',
    title: 'Python Basics',
    level: 'Beginner',
    useCase: 'Language fundamentals, syntax, and runtime basics',
    cheatSheet: [
      {area: 'Language type', remember: 'High-level, interpreted, general-purpose', trap: 'Calling Python only a scripting language'},
      {area: 'Typing', remember: 'Dynamic typing with optional type hints', trap: 'Assuming type hints enforce runtime checks'},
      {area: 'Execution', remember: 'Source code becomes bytecode', trap: 'Thinking text is executed directly'},
      {area: 'Indentation', remember: 'Whitespace defines blocks', trap: 'Mixing tabs and spaces'},
    ],
    questions: [
      {
        prompt: 'What is Python mainly known for?',
        options: ['Readable syntax and strong ecosystem', 'Only browser development', 'Manual memory management', 'Kernel programming'],
        answer: 0,
        explanation: 'Python is valued for readability, fast development, and a huge ecosystem, bro.',
      },
      {
        prompt: 'Python variables store what?',
        options: ['References to objects', 'Only raw memory addresses typed by the user', 'Fixed-size primitive boxes only', 'Compiled machine instructions'],
        answer: 0,
        explanation: 'A Python variable name points to an object. This matters for mutable objects like lists.',
      },
      {
        prompt: 'What does dynamic typing mean?',
        options: ['Types are checked at runtime', 'Types never exist', 'All values are strings', 'Python cannot use type hints'],
        answer: 0,
        explanation: 'Python objects have types, but variable annotations are not required before runtime.',
      },
      {
        prompt: 'What is CPython?',
        options: ['The default Python implementation written in C', 'A Python package manager', 'A web framework', 'A database driver'],
        answer: 0,
        explanation: 'CPython is the most common Python implementation and the one most people mean by Python.',
      },
      {
        prompt: 'What does indentation control in Python?',
        options: ['Code blocks', 'Package installation', 'CPU cache size', 'Database indexes'],
        answer: 0,
        explanation: 'Indentation defines blocks for if statements, loops, functions, and classes.',
      },
      {
        prompt: 'Which file extension is normally used for Python source files?',
        options: ['.py', '.java', '.html', '.sql'],
        answer: 0,
        explanation: 'Python source files normally use the `.py` extension.',
      },
      {
        prompt: 'Why is Python popular in AI engineering?',
        options: ['Strong libraries and fast experimentation', 'It runs only on GPUs', 'It has no dependencies', 'It replaces all databases'],
        answer: 0,
        explanation: 'Libraries like NumPy, pandas, PyTorch, and many AI tools make Python practical for AI work.',
      },
      {
        prompt: 'When is Python usually not the first choice?',
        options: ['Ultra-low-latency CPU-heavy systems', 'Automation scripts', 'Data cleaning', 'API prototypes'],
        answer: 0,
        explanation: 'For very tight CPU or latency constraints, lower-level or compiled languages may be better.',
      },
      {
        prompt: 'What is the GIL in CPython related to?',
        options: ['Thread execution of Python bytecode', 'HTML rendering', 'Package naming', 'SQL joins'],
        answer: 0,
        explanation: 'The Global Interpreter Lock affects how CPython threads execute Python bytecode.',
      },
      {
        prompt: 'What should beginners learn beyond syntax?',
        options: ['Debugging, testing, data structures, and production habits', 'Only print statements', 'Only memorized definitions', 'Only package names'],
        answer: 0,
        explanation: 'Bro, syntax starts the journey. Engineering skill comes from using Python safely in real systems.',
      },
    ],
  },
  {
    id: 'setup-environments',
    title: 'Setup & Environments',
    level: 'Beginner',
    useCase: 'Installing Python, virtual environments, and dependency isolation',
    cheatSheet: [
      {area: 'Check version', remember: '`python --version`', trap: 'Using a different Python than expected'},
      {area: 'Install packages', remember: '`python -m pip install package`', trap: 'Using the wrong `pip` command'},
      {area: 'Virtual env', remember: '`python -m venv .venv`', trap: 'Installing dependencies globally'},
      {area: 'Dependency file', remember: '`requirements.txt` or `pyproject.toml`', trap: 'Not pinning important versions'},
    ],
    questions: [
      {
        prompt: 'Why do teams use virtual environments?',
        options: ['To isolate dependencies per project', 'To make Python slower', 'To replace Git', 'To compile Python to Java'],
        answer: 0,
        explanation: 'Virtual environments prevent dependency conflicts between projects.',
      },
      {
        prompt: 'Which command creates a basic virtual environment?',
        options: ['python -m venv .venv', 'python install env', 'pip run python', 'venv start python'],
        answer: 0,
        explanation: '`python -m venv .venv` creates an isolated environment folder.',
      },
      {
        prompt: 'Why prefer `python -m pip`?',
        options: ['It uses pip for the selected Python interpreter', 'It skips package installation', 'It deletes global packages', 'It only works on Linux'],
        answer: 0,
        explanation: 'This avoids the classic mismatch where `pip` and `python` point to different installations.',
      },
      {
        prompt: 'Should `.venv` usually be committed to Git?',
        options: ['No', 'Yes, always', 'Only if it is large', 'Only for APIs'],
        answer: 0,
        explanation: 'Commit dependency manifests, not the environment folder.',
      },
      {
        prompt: 'What does `requirements.txt` help with?',
        options: ['Recreating installed dependencies', 'Formatting Python code', 'Starting a database', 'Creating HTML pages'],
        answer: 0,
        explanation: 'It lists dependencies so another environment can install them.',
      },
      {
        prompt: 'What is a common setup mistake?',
        options: ['Installing packages globally for every project', 'Using project folders', 'Checking Python version', 'Documenting setup steps'],
        answer: 0,
        explanation: 'Global installs become messy when projects need different versions.',
      },
      {
        prompt: 'What should CI be able to do?',
        options: ['Recreate the environment predictably', 'Depend on one developer laptop', 'Ignore dependency versions', 'Run without source code'],
        answer: 0,
        explanation: 'Bro, CI setup should prove that the project is reproducible.',
      },
      {
        prompt: 'What does activating a virtual environment change?',
        options: ['Which Python and packages your shell uses', 'Your operating system kernel', 'Your Git branch', 'Your database schema'],
        answer: 0,
        explanation: 'Activation adjusts shell paths so commands use the environment.',
      },
      {
        prompt: 'Which file is modern Python packaging centered around?',
        options: ['pyproject.toml', 'index.html', 'docker.log', 'main.css'],
        answer: 0,
        explanation: '`pyproject.toml` is the modern config file for Python packaging and tooling.',
      },
      {
        prompt: 'What is the production reason for clean setup?',
        options: ['Repeatable builds and fewer deployment surprises', 'More random versions', 'Manual server fixes', 'No need for tests'],
        answer: 0,
        explanation: 'A clean setup reduces environment drift between dev, CI, and production.',
      },
    ],
  },
  {
    id: 'execution-flow',
    title: 'Execution Flow',
    level: 'Beginner',
    useCase: 'Understanding parse, compile, import, and runtime behavior',
    cheatSheet: [
      {area: 'Run file', remember: '`python app.py`', trap: 'Running from the wrong folder'},
      {area: 'Bytecode', remember: 'Python compiles to bytecode first', trap: 'Thinking syntax errors happen after prints'},
      {area: 'Imports', remember: 'Import statements execute code', trap: 'Doing heavy work at import time'},
      {area: 'Cache', remember: '`__pycache__` stores bytecode', trap: 'Deleting it to fix logical bugs'},
    ],
    questions: [
      {
        prompt: 'What happens before Python executes a file?',
        options: ['It parses and compiles code to bytecode', 'It sends code to the browser', 'It converts code to SQL', 'It deletes imports'],
        answer: 0,
        explanation: 'Python checks syntax and creates bytecode before execution.',
      },
      {
        prompt: 'What is bytecode?',
        options: ['Instructions for the Python virtual machine', 'Raw CPU assembly only', 'A package installer', 'A test framework'],
        answer: 0,
        explanation: 'Bytecode is a lower-level representation executed by Python.',
      },
      {
        prompt: 'What is `__pycache__`?',
        options: ['A folder for cached bytecode', 'A secret password file', 'A package registry', 'A logging tool'],
        answer: 0,
        explanation: 'Python may cache compiled bytecode there to speed imports.',
      },
      {
        prompt: 'Can a syntax error stop earlier print statements from running?',
        options: ['Yes, syntax errors can stop the file before execution', 'No, prints always run first', 'Only in web apps', 'Only on Windows'],
        answer: 0,
        explanation: 'Bro, syntax errors are caught before the file starts executing.',
      },
      {
        prompt: 'What is a runtime error?',
        options: ['An error while code is executing', 'A CSS issue', 'A package download', 'A database table'],
        answer: 0,
        explanation: 'Runtime errors happen after execution has started.',
      },
      {
        prompt: 'Why can imports slow app startup?',
        options: ['Modules execute top-level code during import', 'Imports always use the internet', 'Imports disable bytecode', 'Imports run only after shutdown'],
        answer: 0,
        explanation: 'Heavy top-level work in modules can slow startup and tests.',
      },
      {
        prompt: 'Which command runs a module correctly?',
        options: ['python -m pytest', 'python module pytest', 'pip -m pytest', 'run pytest.py only'],
        answer: 0,
        explanation: '`python -m` runs a module using the selected Python interpreter.',
      },
      {
        prompt: 'What should production modules avoid at import time?',
        options: ['Heavy network or database work', 'Function definitions', 'Constants', 'Type aliases'],
        answer: 0,
        explanation: 'Start expensive resources in explicit startup code.',
      },
      {
        prompt: 'What usually dominates API runtime?',
        options: ['Network and database I/O', 'Only Python parsing', 'Only comments', 'Only file names'],
        answer: 0,
        explanation: 'Real apps often wait on external systems more than CPU.',
      },
      {
        prompt: 'Why understand execution flow?',
        options: ['To debug imports, startup, and errors faster', 'To avoid writing code', 'To skip tests', 'To remove functions'],
        answer: 0,
        explanation: 'Execution flow gives you a practical debugging map.',
      },
    ],
  },
  {
    id: 'first-program',
    title: 'First Program',
    level: 'Beginner',
    useCase: 'Writing simple scripts and reading terminal output',
    cheatSheet: [
      {area: 'Output', remember: '`print()` writes to console', trap: 'Using print as production logging'},
      {area: 'File', remember: 'Save as `.py`', trap: 'Naming files after standard modules'},
      {area: 'Order', remember: 'Statements run top to bottom', trap: 'Using variables before assignment'},
      {area: 'Comments', remember: '`#` explains intent', trap: 'Commenting obvious code'},
    ],
    questions: [
      {
        prompt: 'What does `print()` do?',
        options: ['Writes output to the console', 'Installs Python', 'Creates a virtual environment', 'Starts a database'],
        answer: 0,
        explanation: '`print()` displays values, usually in the terminal.',
      },
      {
        prompt: 'Which file name is safest for a first script?',
        options: ['hello.py', 'json.py', 'random.py', 'typing.py'],
        answer: 0,
        explanation: 'Avoid names that shadow standard library modules, bro.',
      },
      {
        prompt: 'What is the output of `print("1" + "2")`?',
        options: ['12', '3', 'Error always', 'None'],
        answer: 0,
        explanation: 'Both values are strings, so `+` concatenates them.',
      },
      {
        prompt: 'What is the output of `print(1 + 2)`?',
        options: ['3', '12', 'None', 'Error always'],
        answer: 0,
        explanation: 'Both values are numbers, so `+` performs addition.',
      },
      {
        prompt: 'What does a comment do?',
        options: ['Explains code and is ignored by Python', 'Runs before code', 'Changes variable types', 'Installs packages'],
        answer: 0,
        explanation: 'Comments help humans understand code. Python ignores them.',
      },
      {
        prompt: 'What is a common beginner terminal issue?',
        options: ['Running the script from the wrong folder', 'Using a clear file name', 'Checking output', 'Saving code'],
        answer: 0,
        explanation: 'The terminal must point to the folder where the file exists, or use the full path.',
      },
      {
        prompt: 'What is better than random prints in production?',
        options: ['Structured logging', 'More random prints', 'No observability', 'Deleting errors'],
        answer: 0,
        explanation: 'Logs are searchable, structured, and useful during incidents.',
      },
      {
        prompt: 'What happens if you use a variable before assigning it?',
        options: ['Python raises an error', 'Python guesses the value', 'Python creates a database row', 'Python imports it from the internet'],
        answer: 0,
        explanation: 'Names must exist before you use them.',
      },
      {
        prompt: 'Why start with small scripts?',
        options: ['They give fast feedback while learning', 'They avoid all bugs forever', 'They replace architecture', 'They need no execution'],
        answer: 0,
        explanation: 'Small programs make the write-run-fix loop clear.',
      },
      {
        prompt: 'What should a first program teach?',
        options: ['Write, save, run, observe, and fix', 'Only memorization', 'Only package installation', 'Only UI design'],
        answer: 0,
        explanation: 'Bro, the habit matters: run code, read output, and improve.',
      },
    ],
  },
];

function getStoredProgress(): StoredProgress {
  if (typeof window === 'undefined') {
    return {};
  }

  try {
    const raw = window.localStorage.getItem(storageKey);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export default function PythonInterviewPrep() {
  const [activeTopicId, setActiveTopicId] = useState(topics[0].id);
  const [progress, setProgress] = useState<StoredProgress>({});
  const [isHydrated, setIsHydrated] = useState(false);
  const activeTopic = useMemo(
    () => topics.find((topic) => topic.id === activeTopicId) ?? topics[0],
    [activeTopicId],
  );
  const activeProgress = progress[activeTopic.id] ?? {
    answers: {},
    score: 0,
    submitted: false,
  };

  useEffect(() => {
    setProgress(getStoredProgress());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated && typeof window !== 'undefined') {
      window.localStorage.setItem(storageKey, JSON.stringify(progress));
    }
  }, [isHydrated, progress]);

  const answeredCount = Object.keys(activeProgress.answers).length;

  function updateTopicProgress(nextProgress: StoredProgress[Topic['id']]) {
    setProgress((current) => ({
      ...current,
      [activeTopic.id]: nextProgress,
    }));
  }

  function selectAnswer(questionIndex: number, optionIndex: number) {
    if (activeProgress.submitted) {
      return;
    }

    updateTopicProgress({
      ...activeProgress,
      answers: {
        ...activeProgress.answers,
        [questionIndex]: optionIndex,
      },
    });
  }

  function submitQuiz() {
    const score = activeTopic.questions.reduce((total, question, index) => {
      return total + (activeProgress.answers[index] === question.answer ? 1 : 0);
    }, 0);

    updateTopicProgress({
      ...activeProgress,
      score,
      submitted: true,
    });
  }

  function resetTopic() {
    updateTopicProgress({
      answers: {},
      score: 0,
      submitted: false,
    });
  }

  function resetAll() {
    setProgress({});
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(storageKey);
    }
  }

  return (
    <section className={styles.shell}>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Python Interview Lab</p>
          <h2>Cheat sheets plus validated quizzes</h2>
          <p>
            Pick a topic, revise the table, answer 10 questions, then submit to
            see score and explanations. Progress is saved in browser memory.
          </p>
        </div>
        <button className={styles.secondaryButton} type="button" onClick={resetAll}>
          Reset all progress
        </button>
      </div>

      <div className={styles.layout}>
        <aside className={styles.topicList} aria-label="Interview topics">
          {topics.map((topic) => {
            const topicProgress = progress[topic.id];
            const scoreText = topicProgress?.submitted
              ? `${topicProgress.score}/10`
              : `${Object.keys(topicProgress?.answers ?? {}).length}/10`;

            return (
              <button
                className={`${styles.topicButton} ${
                  topic.id === activeTopic.id ? styles.activeTopic : ''
                }`}
                key={topic.id}
                type="button"
                onClick={() => setActiveTopicId(topic.id)}>
                <span>{topic.title}</span>
                <small>{scoreText}</small>
              </button>
            );
          })}
        </aside>

        <div className={styles.content}>
          <div className={styles.topicHeader}>
            <div>
              <h3>{activeTopic.title}</h3>
              <p>{activeTopic.useCase}</p>
            </div>
            <span className={styles.level}>{activeTopic.level}</span>
          </div>

          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Remember</th>
                  <th>Interview Trap</th>
                </tr>
              </thead>
              <tbody>
                {activeTopic.cheatSheet.map((row) => (
                  <tr key={row.area}>
                    <td>{row.area}</td>
                    <td>{row.remember}</td>
                    <td>{row.trap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.quizHeader}>
            <strong>
              Quiz: {answeredCount}/10 answered
              {activeProgress.submitted ? ` • Score ${activeProgress.score}/10` : ''}
            </strong>
            <div className={styles.actions}>
              <button
                className={styles.primaryButton}
                type="button"
                onClick={submitQuiz}
                disabled={answeredCount < activeTopic.questions.length}>
                Validate answers
              </button>
              <button className={styles.secondaryButton} type="button" onClick={resetTopic}>
                Reset topic
              </button>
            </div>
          </div>

          <ol className={styles.questions}>
            {activeTopic.questions.map((question, questionIndex) => {
              const selectedAnswer = activeProgress.answers[questionIndex];
              const isSubmitted = activeProgress.submitted;
              const displayOptions = question.options.map((option, optionIndex) => ({
                option,
                optionIndex,
              }));
              const shift = questionIndex % question.options.length;
              const rotatedOptions = [
                ...displayOptions.slice(shift),
                ...displayOptions.slice(0, shift),
              ];

              return (
                <li className={styles.question} key={question.prompt}>
                  <p>{question.prompt}</p>
                  <div className={styles.options}>
                    {rotatedOptions.map(({option, optionIndex}) => {
                      const isSelected = selectedAnswer === optionIndex;
                      const isCorrect = question.answer === optionIndex;
                      const stateClass =
                        isSubmitted && isCorrect
                          ? styles.correct
                          : isSubmitted && isSelected && !isCorrect
                            ? styles.incorrect
                            : '';

                      return (
                        <button
                          className={`${styles.option} ${
                            isSelected ? styles.selected : ''
                          } ${stateClass}`}
                          key={option}
                          type="button"
                          onClick={() => selectAnswer(questionIndex, optionIndex)}>
                          {option}
                        </button>
                      );
                    })}
                  </div>
                  {isSubmitted && (
                    <div className={styles.explanation}>
                      <strong>
                        {selectedAnswer === question.answer ? 'Correct' : 'Correct answer'}
                      </strong>
                      <span>{question.explanation}</span>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

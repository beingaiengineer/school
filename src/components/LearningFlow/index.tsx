import BrowserOnly from '@docusaurus/BrowserOnly';
import {
  Background,
  BackgroundVariant,
  Controls,
  Handle,
  MarkerType,
  MiniMap,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import styles from './styles.module.css';

type FlowStep = {
  title: string;
  detail: string;
};

type DiagramNode = {
  id: string;
  title: string;
  detail: string;
  x: number;
  y: number;
  kind?: 'core' | 'process' | 'data' | 'tool' | 'warning' | 'output';
};

type DiagramEdge = {
  id?: string;
  source: string;
  target: string;
  label?: string;
  animated?: boolean;
  type?: 'default' | 'smoothstep' | 'step' | 'straight';
};

type Diagram = {
  title?: string;
  height?: number;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  miniMap?: boolean;
};

type LearningFlowProps = {
  steps?: FlowStep[];
  diagram?: Diagram;
};

type ConceptNodeData = {
  title: string;
  detail: string;
  kind: NonNullable<DiagramNode['kind']>;
};

const kindClass: Record<ConceptNodeData['kind'], string> = {
  core: styles.core,
  process: styles.process,
  data: styles.data,
  tool: styles.tool,
  warning: styles.warning,
  output: styles.output,
};

function ConceptNode({data}: NodeProps<Node<ConceptNodeData>>) {
  return (
    <div className={`${styles.node} ${kindClass[data.kind]}`}>
      <Handle type="target" position={Position.Left} className={styles.handle} />
      <Handle type="target" position={Position.Top} className={styles.handle} />
      <div className={styles.nodeLabel}>
        <strong>{data.title}</strong>
        <span>{data.detail}</span>
      </div>
      <Handle type="source" position={Position.Right} className={styles.handle} />
      <Handle type="source" position={Position.Bottom} className={styles.handle} />
    </div>
  );
}

const nodeTypes = {
  concept: ConceptNode,
};

function diagramFromSteps(steps: FlowStep[]): Diagram {
  return {
    nodes: steps.map((step, index) => ({
      id: String(index + 1),
      title: step.title,
      detail: step.detail,
      x: index * 230,
      y: 40,
      kind: index === 0 ? 'core' : index === steps.length - 1 ? 'output' : 'process',
    })),
    edges: steps.slice(1).map((_, index) => ({
      id: `${index + 1}-${index + 2}`,
      source: String(index + 1),
      target: String(index + 2),
      animated: true,
      type: 'smoothstep',
    })),
  };
}

export function LearningFlow({steps, diagram}: LearningFlowProps) {
  const spec = diagram ?? diagramFromSteps(steps ?? []);
  const nodes: Node<ConceptNodeData>[] = spec.nodes.map((node) => ({
    id: node.id,
    position: {x: node.x, y: node.y},
    data: {
      title: node.title,
      detail: node.detail,
      kind: node.kind ?? 'process',
    },
    type: 'concept',
  }));

  const edges: Edge[] = spec.edges.map((edge) => ({
    id: edge.id ?? `${edge.source}-${edge.target}`,
    source: edge.source,
    target: edge.target,
    label: edge.label,
    animated: edge.animated,
    type: edge.type ?? 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 18,
      height: 18,
    },
    style: {
      strokeWidth: 2,
    },
  }));

  return (
    <BrowserOnly fallback={<div className={styles.flowFallback}>Loading flow...</div>}>
      {() => (
        <figure className={styles.figure}>
          {spec.title && <figcaption>{spec.title}</figcaption>}
          <div className={styles.flow} style={{height: spec.height ?? 320}}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              fitView
              fitViewOptions={{padding: 0.18}}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
              panOnDrag
              zoomOnScroll={false}
              proOptions={{hideAttribution: true}}>
              <Background variant={BackgroundVariant.Dots} gap={18} size={1} />
              <Controls showInteractive={false} />
              {spec.miniMap && <MiniMap pannable zoomable />}
            </ReactFlow>
          </div>
        </figure>
      )}
    </BrowserOnly>
  );
}

export default LearningFlow;

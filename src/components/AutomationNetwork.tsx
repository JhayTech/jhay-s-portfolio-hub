import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
  size: "sm" | "md" | "lg";
}

interface Edge {
  from: string;
  to: string;
}

const TOOL_NODES: Omit<Node, "x" | "y">[] = [
  { id: "zapier", label: "Zapier", color: "hsl(25, 95%, 55%)", size: "md" },
  { id: "n8n", label: "n8n", color: "hsl(330, 80%, 55%)", size: "lg" },
  { id: "make", label: "Make.com", color: "hsl(270, 70%, 60%)", size: "md" },
  { id: "ghl", label: "GHL", color: "hsl(175, 70%, 45%)", size: "md" },
  { id: "power", label: "Power Automate", color: "hsl(210, 80%, 55%)", size: "sm" },
  { id: "asana", label: "Asana", color: "hsl(350, 70%, 55%)", size: "sm" },
  { id: "azure", label: "Azure AD", color: "hsl(200, 90%, 50%)", size: "sm" },
  { id: "m365", label: "M365", color: "hsl(25, 80%, 50%)", size: "sm" },
  { id: "connectwise", label: "ConnectWise", color: "hsl(140, 60%, 45%)", size: "sm" },
  { id: "intune", label: "Intune", color: "hsl(200, 70%, 55%)", size: "sm" },
  { id: "gworkspace", label: "Google WS", color: "hsl(45, 90%, 50%)", size: "sm" },
  { id: "crm", label: "CRM", color: "hsl(175, 60%, 40%)", size: "sm" },
];

const EDGES: Edge[] = [
  { from: "n8n", to: "zapier" },
  { from: "n8n", to: "make" },
  { from: "n8n", to: "ghl" },
  { from: "zapier", to: "ghl" },
  { from: "zapier", to: "power" },
  { from: "make", to: "asana" },
  { from: "ghl", to: "crm" },
  { from: "power", to: "azure" },
  { from: "azure", to: "m365" },
  { from: "azure", to: "intune" },
  { from: "m365", to: "gworkspace" },
  { from: "connectwise", to: "crm" },
  { from: "n8n", to: "connectwise" },
  { from: "make", to: "power" },
];

const AutomationNetwork = () => {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setPulse((p) => p + 1), 3000);
    return () => clearInterval(interval);
  }, []);

  const nodes = useMemo<Node[]>(() => {
    const positions = [
      { x: 12, y: 18 }, { x: 50, y: 12 }, { x: 82, y: 22 },
      { x: 30, y: 40 }, { x: 70, y: 35 }, { x: 8, y: 55 },
      { x: 88, y: 50 }, { x: 45, y: 60 }, { x: 20, y: 75 },
      { x: 75, y: 72 }, { x: 55, y: 82 }, { x: 38, y: 25 },
    ];
    return TOOL_NODES.map((node, i) => ({
      ...node,
      x: positions[i].x,
      y: positions[i].y,
    }));
  }, []);

  const nodeMap = useMemo(() => {
    const map: Record<string, Node> = {};
    nodes.forEach((n) => (map[n.id] = n));
    return map;
  }, [nodes]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Edges */}
        {EDGES.map((edge, i) => {
          const from = nodeMap[edge.from];
          const to = nodeMap[edge.to];
          if (!from || !to) return null;
          return (
            <g key={`edge-${i}`}>
              <line
                x1={`${from.x}%`}
                y1={`${from.y}%`}
                x2={`${to.x}%`}
                y2={`${to.y}%`}
                stroke="hsl(175, 70%, 45%)"
                strokeOpacity={0.15}
                strokeWidth={1}
              />
              {/* Traveling dot */}
              <motion.circle
                r={2}
                fill="hsl(175, 70%, 45%)"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.8, 0],
                  cx: [`${from.x}%`, `${to.x}%`],
                  cy: [`${from.y}%`, `${to.y}%`],
                }}
                transition={{
                  duration: 2 + (i % 3),
                  repeat: Infinity,
                  delay: (i * 0.7) % 4,
                  ease: "linear",
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => {
        const sizeClasses = {
          sm: "px-2 py-1 text-[9px]",
          md: "px-3 py-1.5 text-[10px]",
          lg: "px-4 py-2 text-xs",
        };
        return (
          <motion.div
            key={node.id}
            className={`absolute font-mono font-semibold rounded border ${sizeClasses[node.size]}`}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
              borderColor: node.color,
              color: node.color,
              backgroundColor: `${node.color}15`,
              boxShadow: `0 0 15px ${node.color}20`,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.5, 0.9, 0.5],
              scale: [0.95, 1.02, 0.95],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {node.label}
            {/* Corner dots */}
            <div className="absolute -top-0.5 -left-0.5 w-1 h-1 rounded-full" style={{ backgroundColor: node.color }} />
            <div className="absolute -top-0.5 -right-0.5 w-1 h-1 rounded-full" style={{ backgroundColor: node.color }} />
            <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 rounded-full" style={{ backgroundColor: node.color }} />
            <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 rounded-full" style={{ backgroundColor: node.color }} />
          </motion.div>
        );
      })}

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 4) * 18}%`,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [-20, 20],
            x: [-10, 10],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default AutomationNetwork;

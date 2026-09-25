import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useState } from "react";

export default function TopHeader() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="flex items-center justify-between p-3.5 border-b border-(--border)">
      {!isCollapsed && (
        <div className="flex items-center gap-2.5 px-1">
          <div className="w-7 h-7 rounded-lg bg-(--primary) flex items-center justify-center text-white font-bold text-sm shadow-sm">
            E
          </div>
          <span className="font-semibold tracking-tight text-base">
            EchoGPT
          </span>
        </div>
      )}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        className={`p-2 rounded-lg text-(--muted) hover:text-(--foreground) hover:bg-(--surface-elevated) transition-colors ${
          isCollapsed ? "mx-auto" : ""
        }`}
      >
        {isCollapsed ? (
          <PanelLeftOpen size={18} />
        ) : (
          <PanelLeftClose size={18} />
        )}
      </button>
    </div>
  );
}

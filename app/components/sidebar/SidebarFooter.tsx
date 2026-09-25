import { Moon, Settings, Sun } from "lucide-react";
import { useState } from "react";

interface SidebarFooterProps {
  isCollapsed: boolean;
  userName:string; 
  userEmail: string;
}

export default function SidebarFooter({ isCollapsed, userName, userEmail }: SidebarFooterProps) {

  const [isDarkMode, setIsDarkMode] = useState(true);


  // Toggle light/dark
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (document.documentElement.classList.contains("light")) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
  };

  return (
    <div className="p-3 border-t border-[var(--border)]">
      {isCollapsed ? (
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={toggleTheme}
            title="Toggle Theme"
            className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
          >
            {isDarkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <div className="w-9 h-9 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center text-xs font-bold text-[var(--foreground)]">
            {userName.charAt(0)}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center text-xs font-bold shrink-0 text-[var(--foreground)]">
              {userName.charAt(0)}
            </div>
            <div className="flex flex-col truncate">
              <span className="text-xs font-medium text-[var(--foreground)] truncate">
                {userName}
              </span>
              <span className="text-[10px] text-[var(--muted)] truncate">
                {userEmail}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-0.5 shrink-0">
            <button
              onClick={toggleTheme}
              title="Toggle Theme"
              className="p-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-elevated)] transition-colors"
            >
              {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              title="Settings"
              className="p-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-elevated)] transition-colors"
            >
              <Settings size={15} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

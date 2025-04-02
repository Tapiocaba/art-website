
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import './ThemeToggle.css';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label="Toggle theme">
      <div className="theme-toggle-icon">
        {isDark ? (
          <DarkModeIcon className="icon moon" />
        ) : (
          <LightModeIcon className="icon sun" />
        )}
      </div>
    </button>
  );
};

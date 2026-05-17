import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Home, Users, Activity as ActivityIcon, Settings as SettingsIcon, User, Search } from 'lucide-react';

// Placeholders for Pages
import Dashboard from './pages/Dashboard';
import TripExpenses from './pages/TripExpenses';
import TripBalances from './pages/TripBalances';
import AddExpense from './pages/AddExpense';
import Profile from './pages/Profile';
import Groups from './pages/Groups';
import Activity from './pages/Activity';
import Settings from './pages/Settings';

// Global Components
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  const toggleSidebar = () => setIsSidebarCollapsed(prev => !prev);

  return (
    <div className="app-container">
      <aside className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header" onClick={toggleSidebar} title="Toggle Sidebar">
          <span className="brand">{isSidebarCollapsed ? 'oS' : 'onlySplit'}</span>
        </div>
        
        <nav className="sidebar-nav">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} title={isSidebarCollapsed ? "Dashboard" : ""}>
            <Home size={16} />
            <span className="nav-text">Dashboard</span>
          </Link>
          <Link to="/groups" className={`nav-link ${location.pathname.startsWith('/group') || location.pathname.startsWith('/trip') ? 'active' : ''}`} title={isSidebarCollapsed ? "Groups" : ""}>
            <Users size={16} />
            <span className="nav-text">Groups</span>
          </Link>
          <Link to="/activity" className={`nav-link ${location.pathname === '/activity' ? 'active' : ''}`} title={isSidebarCollapsed ? "Activity" : ""}>
            <ActivityIcon size={16} />
            <span className="nav-text">Activity</span>
          </Link>
          <Link to="/settings" className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`} title={isSidebarCollapsed ? "Settings" : ""}>
            <SettingsIcon size={16} />
            <span className="nav-text">Settings</span>
          </Link>
        </nav>
      </aside>

      <div className="content-wrapper">
        <header className="top-nav">
          <div className="search-bar">
            <Search size={16} className="search-icon" />
            <input type="text" placeholder="Search groups..." className="search-input" />
          </div>
          
          <div className="top-nav-actions">
            <button onClick={toggleDarkMode} className="icon-btn" aria-label="Toggle Dark Mode">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/profile" className="profile-link">
              <User size={18} />
            </Link>
          </div>
        </header>

        <main className="main-content">
          <div className="page-transition">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/trip/:id/expenses" element={<TripExpenses />} />
              <Route path="/trip/:id/balances" element={<TripBalances />} />
              <Route path="/add-expense" element={<AddExpense />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          <Footer />
        </main>
      </div>

      <style>{`
        .app-container {
          min-height: 100vh;
          display: flex;
        }
        
        .sidebar {
          width: 220px;
          background-color: var(--color-surface-container-lowest);
          border-right: 1px solid var(--color-outline-variant);
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 0;
          height: 100vh;
          z-index: 10;
          padding: 24px 12px;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease, border-color 0.3s ease, padding 0.3s ease;
        }

        .sidebar.collapsed {
          width: 72px;
          padding: 24px 8px;
        }

        .sidebar-header {
          margin-bottom: 32px;
          padding: 0 8px;
          cursor: pointer;
          user-select: none;
          text-align: left;
          transition: padding 0.3s ease, text-align 0.3s ease;
        }

        .sidebar.collapsed .sidebar-header {
          padding: 0;
          text-align: center;
        }

        .brand {
          font-family: var(--font-fancy);
          font-size: 26px;
          font-weight: 700;
          color: var(--color-primary);
          text-decoration: none;
          background: linear-gradient(135deg, var(--color-primary), var(--color-surface-tint));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: font-size 0.3s ease;
        }

        .sidebar.collapsed .brand {
          font-size: 22px;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--color-on-surface-variant);
          font-weight: 500;
          padding: 10px 12px;
          border-radius: var(--radius-md);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }

        .sidebar.collapsed .nav-link {
          justify-content: center;
          padding: 12px;
          gap: 0;
        }

        .sidebar.collapsed .nav-text {
          display: none;
          opacity: 0;
        }

        .nav-text {
          font-size: 14px;
          transition: opacity 0.3s ease;
          opacity: 1;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: var(--color-primary);
          opacity: 0;
          transform: translateX(-100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
          z-index: -1;
          border-radius: var(--radius-md);
        }

        .nav-link:hover {
          color: var(--color-on-surface);
        }
        
        .sidebar:not(.collapsed) .nav-link:hover {
          transform: translateX(4px);
        }

        .nav-link.active {
          color: var(--color-on-primary-container);
          background-color: var(--color-primary-container);
        }

        .content-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .top-nav {
          height: 56px;
          background-color: var(--color-surface-container-lowest);
          border-bottom: 1px solid var(--color-outline-variant);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          position: sticky;
          top: 0;
          z-index: 9;
        }

        .search-bar {
          position: relative;
          width: 260px;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-outline);
        }

        .search-input {
          width: 100%;
          height: 36px;
          padding: 0 16px 0 36px;
          border-radius: var(--radius-pill);
          border: 1px solid var(--color-outline-variant);
          background-color: var(--color-surface-container);
          color: var(--color-on-surface);
          font-family: var(--font-sans);
          font-size: 14px;
          transition: border-color 0.2s ease, background-color 0.2s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--color-primary);
          background-color: var(--color-surface-container-lowest);
        }

        .top-nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .icon-btn, .profile-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background-color: transparent;
          color: var(--color-on-surface-variant);
          cursor: pointer;
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        .icon-btn:hover, .profile-link:hover {
          background-color: var(--color-surface-container);
          color: var(--color-primary);
        }

        .main-content {
          flex: 1;
          background-color: var(--color-background);
          padding: 32px;
          display: flex;
          flex-direction: column;
        }
        
        .page-transition {
          flex: 1;
          animation: slideUpFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 992px) {
          .app-container {
            flex-direction: column;
          }
          .sidebar {
            width: 100%;
            height: auto;
            position: relative;
            padding: 16px;
            border-right: none;
            border-bottom: 1px solid var(--color-outline-variant);
          }
          .sidebar.collapsed {
            width: 100%;
            padding: 16px;
          }
          .sidebar-header {
            margin-bottom: 16px;
            text-align: center;
          }
          .sidebar-nav {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 8px;
          }
          .nav-link {
            flex-direction: column;
            gap: 4px;
            padding: 8px 12px;
            flex-shrink: 0;
          }
          .sidebar.collapsed .nav-text {
            display: block;
            opacity: 1;
          }
          .sidebar:not(.collapsed) .nav-link:hover {
            transform: none;
          }
          .top-nav {
            padding: 0 16px;
          }
          .search-bar {
            width: 200px;
          }
          .main-content {
            padding: 24px 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoutButton from '../LogoutButton/LogoutButton';

const AdminNavbar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', label: 'Usuarios' },
    { path: '/kpis', label: 'KPIs' },
    { path: '/events', label: 'Eventos' }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <h2 className="text-xl font-bold text-white">Admin Panel</h2>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center space-x-1">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`
                      px-4 py-2 rounded-md font-medium transition-all duration-200 
                      ${location.pathname === item.path
                        ? 'text-white bg-blue-500 shadow-md'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="h-6 w-px bg-gray-600"></div>
            <div className="flex items-center space-x-4">
              <LogoutButton />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-md hover:bg-gray-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  block px-3 py-2 rounded-md text-base font-medium
                  ${location.pathname === item.path
                    ? 'text-white bg-blue-500'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <div className="flex items-center px-3">
                <LogoutButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
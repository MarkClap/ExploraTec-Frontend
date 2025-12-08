import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../LogoutButton/LogoutButton';
import { useAuth } from '../../hooks/useAuth';

const UserNavbar = () => {
    const { isAuthenticated } = useAuth();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black dark:bg-gray-800/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    <h2 className="text-xl font-bold text-white dark:text-white">
                        EXPLORATEC
                    </h2>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        {isAuthenticated ? (
                            <LogoutButton />
                        ) : (
                            <Link
                                to="/login"
                                className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors"
                            >
                                Iniciar Sesión
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none p-2"
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
                <div className="md:hidden bg-black dark:bg-gray-900 border-t border-gray-700 px-6 py-4">
                    <div className="flex flex-col space-y-4">
                        {isAuthenticated ? (
                            <LogoutButton />
                        ) : (
                            <Link
                                to="/login"
                                className="bg-blue-400 text-white px-4 py-2 rounded-md text-center hover:bg-blue-500 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Iniciar Sesión
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default UserNavbar;
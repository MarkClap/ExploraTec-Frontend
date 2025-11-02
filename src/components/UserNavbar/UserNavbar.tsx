import { Link } from 'react-router-dom';
import LogoutButton from '../LogoutButton/LogoutButton';
import { useAuth } from '../../hooks/useAuth';

const UserNavbar = () => {
    const { isAuthenticated } = useAuth();

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-black dark:bg-gray-800/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 px-6 py-5">
            <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
                <h2 className="text-xl font-bold text-white dark:text-white">
                    EXPLORATEC
                </h2>
                {isAuthenticated ? (
                    <LogoutButton />
                ) : (
                    <Link
                        to="/login"
                        className="bg-blue-400 text-white px-4 py-2 rounded-md"
                    >
                        Iniciar Sesión
                    </Link>
                )}
            </div>
        </div>
    );
};

export default UserNavbar;
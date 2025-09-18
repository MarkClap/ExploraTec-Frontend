import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import tecsupImage from '../../assets/tecsup.jpg';

interface LoginFormProps {
    email: string;
    password: string;
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
    error?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
    email,
    password,
    onEmailChange,
    onPasswordChange,
    onSubmit,
    error
}) => {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-sky-100 to-sky-20 flex items-center justify-center p-4 overflow-hidden">
            <div className="w-full max-w-4xl h-[85vh] max-h-[600px] grid md:grid-cols-2 bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 sm:p-8 bg-gradient-to-br from-white to-sky-50 flex items-center justify-center">
                    <div className="w-full max-w-md space-y-6">
                        <div className="text-center">
                            <h1 className="text-2xl sm:text-3xl font-bold text-sky-900">
                                Bienvenido a ExploraTec
                            </h1>
                            <h2 className="text-sky-600 text-base sm:text-lg mt-2">
                                Ingresa a tu cuenta
                            </h2>
                        </div>

                        <form className="space-y-4" onSubmit={onSubmit}>
                            <div className="space-y-3">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <FiMail className="h-5 w-5 text-sky-400" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        className="block w-full pl-12 pr-4 py-2.5 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition duration-150 ease-in-out bg-white text-base"
                                        placeholder="Correo electrónico"
                                        value={email}
                                        onChange={onEmailChange}
                                    />
                                </div>
                                
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <FiLock className="h-5 w-5 text-sky-400" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        className="block w-full pl-12 pr-4 py-2.5 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition duration-150 ease-in-out bg-white text-base"
                                        placeholder="Contraseña"
                                        value={password}
                                        onChange={onPasswordChange}
                                    />
                                </div>
                            </div>

                            {error && (
                                <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded text-sm">
                                    <p className="text-red-600">{error}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 transition duration-150 ease-in-out text-base font-semibold shadow-md"
                            >
                                Iniciar Sesión
                            </button>
                            <div className="text-center">
                                <span className="text-gray-600">¿No tienes una cuenta? </span>
                                <a href="/register" className="text-sky-600 hover:text-sky-700 font-medium">
                                    Regístrate
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="hidden md:block relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-sky-600/20 z-10"></div>
                    <img 
                        src={tecsupImage}
                        alt="Tecnología educativa"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};
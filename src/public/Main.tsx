import LogoutButton from "../components/LogoutButton/LogoutButton";
import { useNavigate } from "react-router-dom";

export const Main: React.FC = () => {
    const navigate = useNavigate();

    const goToVirtualTour = () => {
        navigate("/test-chatbot");

    };
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Main - Accesible para Usuarios y Admins</h2>
                <LogoutButton />
            </div>
            <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-sky-300 text-center px-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-sky-800 mb-4">
                    Bienvenido a ExploraTec 🌐
                </h1>
                <p className="text-lg text-sky-700 mb-8 max-w-xl">
                    Descubre nuestro recorrido virtual interactivo y explora todas las áreas
                    con la mejor experiencia educativa.
                </p>
                <button
                    onClick={goToVirtualTour}
                    className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-all"
                >
                    Entrar al recorrido virtual
                </button>
            </div>
        </div>
    );
};
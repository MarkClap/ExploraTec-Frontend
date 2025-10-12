import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import EncryptButton from "../components/EncryptButton/EncryptButton";
import { fadeIn } from "../components/Reveal/variants";
import { Reveal } from "../components/Reveal/Reveal";
import LogoutButton from "../components/LogoutButton/LogoutButton";

// Importa las imágenes
import Logo360Img from "../assets/img/360.png";
import TecsuImg from "../assets/img/TecsupLima.png";
import AdverstingImg from "../assets/img/adversting.jpg";
import VisitImg from "../assets/img/visit.jpg";
import Frontend from "../assets/img/frontend.png";
import Backend from "../assets/img/backend.png";
import DoubtsImg from "../assets/img/doubt.jpg";
import ActivityImg from "../assets/img/activity.jpg";
import LabImg from "../assets/img/lab.jpg";
import CampusImg from "../assets/img/campus.png";
import CodeSvg from "../assets/svg/code.svg";
import EntranceImg from "../assets/img/entrance.png";

import Footer from "../components/Footer/Footer";
import "../App.css";

export const Main: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const goToVirtualTour = () => {
        navigate("/tour360");
    };

    useEffect(() => {
        const preloader = document.getElementById("preloader");
        const timer = setTimeout(() => {
            if (preloader) {
                preloader.classList.add("fade-out");
                setLoading(false);
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div id="preloader">
                <div className="loader">
                    <span className="loader--blue">Exploratec</span>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
            {/* Header con Logout */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 px-6 py-5">
                <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                        Main
                    </h2>
                    <LogoutButton />
                </div>
            </div>

            {/* Contenido principal */}
            <main className="flex-1 pt-20">

                {/* Sección Hero con imagen de fondo */}
                <section
                    className="min-h-screen relative flex items-center justify-center bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: `url(${EntranceImg})` }}
                >
                    {/* Overlay para mejor contraste */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Texto */}
                            <div className="text-center lg:text-left space-y-8">
                                <Reveal>
                                    <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-black uppercase tracking-tight">
                                        Exploratec
                                    </h1>
                                </Reveal>
                                <Reveal>
                                    <h2 className="text-2xl md:text-4xl lg:text-5xl text-tecsup font-bold uppercase leading-tight">
                                        Recorrido 360° del campus<br />sede Lima Tecsup
                                    </h2>
                                </Reveal>
                                <Reveal>
                                    <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                                        Descubre nuestras instalaciones de manera virtual e interactiva desde cualquier dispositivo
                                    </p>
                                </Reveal>
                            </div>

                            {/* Imagen 360° */}
                            <div className="flex justify-center items-center">
                                <Reveal>
                                    <div className="relative">
                                        <img
                                            src={Logo360Img}
                                            alt="Logo360°"
                                            className="bouncing-image w-40 md:w-56 lg:w-72 xl:w-80 transform hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute -inset-6 bg-tecsup/20 rounded-full blur-xl animate-pulse"></div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>

                        {/* Botón CTA */}
                        <div className="mt-16 flex justify-center">
                            <Reveal>
                                <div
                                    onClick={goToVirtualTour}
                                    className="cursor-pointer transform hover:scale-105 transition-all duration-300"
                                >
                                    <EncryptButton />
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* Sección Explore */}
                <section className="py-24 bg-white dark:bg-gray-800">
                    <div className="container mx-auto px-4">
                        <motion.div
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.7 }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                                En este recorrido virtual{" "}
                                <span className="text-tecsup">conocerás</span>
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                Explora cada rincón de nuestro campus y descubre todo lo que Tecsup tiene para ofrecerte
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {data.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    variants={fadeIn("up", 0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden hover:scale-105 transition-all duration-500 border border-gray-100 dark:border-gray-700"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={item.img}
                                            alt={item.alt}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-800 dark:text-white text-center">
                                            {item.textH3}
                                            <span className="text-tecsup">{item.textSpan}</span>
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sección Tecsup Lima */}
                <section className="bg-gray-900 dark:bg-black">
                    <img
                        src={TecsuImg}
                        alt="Tecsup Lima"
                        className="w-full h-auto max-h-96 object-cover"
                    />
                </section>

                {/* Sección Information */}
                <section className="py-24 bg-gray-50 dark:bg-gray-800">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                variants={fadeIn("right", 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.3 }}
                                className="space-y-6"
                            >
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
                                    ¿Te gustaría participar en una{" "}
                                    <span className="text-tecsup">visita guiada</span> en persona?
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Inscríbete para ser parte de nuestras visitas presenciales y conocer
                                    más sobre nuestro campus, laboratorios y la experiencia educativa de Tecsup.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <button className="bg-tecsup hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                        Inscribirme ahora
                                    </button>
                                    <button className="border-2 border-tecsup text-tecsup hover:bg-tecsup hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                                        Más información
                                    </button>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={fadeIn("up", 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.3 }}
                                className="grid grid-cols-2 gap-6"
                            >
                                <div className="space-y-6">
                                    <img
                                        src={VisitImg}
                                        alt="Visita Tecsup"
                                        className="w-full rounded-2xl shadow-lg hover:scale-105 transition-all duration-500 cursor-pointer"
                                    />
                                </div>
                                <div className="space-y-6 mt-12">
                                    <img
                                        src={AdverstingImg}
                                        alt="Publicidad Tecsup"
                                        className="w-full rounded-2xl shadow-lg hover:scale-105 transition-all duration-500 cursor-pointer"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Sección Statistics */}
                <section className="py-24 bg-gray-900 dark:bg-black">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto bg-white/5 dark:bg-gray-800/50 backdrop-blur-lg rounded-3xl p-12 border border-white/10 dark:border-gray-600/30">
                            <div className="flex flex-col items-center text-center space-y-8">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                    ¿Por qué mostramos estas{" "}
                                    <span className="text-tecsup">estadísticas?</span>
                                </h2>
                                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
                                    Presentamos estadísticas de las carreras que nuestros visitantes
                                    seleccionan al inscribirse para visitas guiadas. Esta información
                                    nos ayuda a entender mejor los intereses de los futuros estudiantes
                                    y preparar experiencias más personalizadas.
                                </p>
                                <div className="bg-white/10 dark:bg-gray-800/70 p-8 rounded-2xl w-full max-w-md border border-white/10 dark:border-gray-600/30 mt-8">
                                    <div className="text-tecsup text-5xl font-bold mb-4">85%</div>
                                    <p className="text-gray-300 font-medium text-lg">
                                        de visitantes eligen carreras tecnológicas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección Team */}
                <section className="py-24 bg-slate-900 dark:bg-black">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Nuestro{" "}
                                <span className="text-tecsup">Equipo</span>
                            </h2>
                            <div className="inline-flex items-center bg-tecsup px-6 py-3 rounded-xl">
                                <img src={CodeSvg} alt="Desarrollo" className="w-6 mr-3" />
                                <span className="text-white font-semibold text-lg">Desarrollo</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            {/* Backend */}
                            <motion.div
                                variants={fadeIn("right", 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-gray-800 rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-500 border border-gray-700 shadow-2xl">
                                    <div className="flex flex-col items-center text-center space-y-6">
                                        <div className="w-40 h-40 rounded-full bg-tecsup/20 p-3">
                                            <img src={Backend} alt="Backend" className="w-full h-full object-cover rounded-full" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                Benjamín Veli
                                            </h3>
                                            <h4 className="text-xl font-bold text-red-400 mb-4 uppercase tracking-wide">
                                                Backend Developer
                                            </h4>
                                            <p className="text-gray-300 leading-relaxed">
                                                Responsable de la gestión del proceso de visitas al campus
                                                y de la administración de cuentas de usuarios.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Frontend */}
                            <motion.div
                                variants={fadeIn("left", 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-gray-800 rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-500 border border-gray-700 shadow-2xl">
                                    <div className="flex flex-col items-center text-center space-y-6">
                                        <div className="w-40 h-40 rounded-full bg-purple-500/20 p-3">
                                            <img src={Frontend} alt="Frontend" className="w-full h-full object-cover rounded-full" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                Benjamín Veli
                                            </h3>
                                            <h4 className="text-xl font-bold text-green-400 mb-4 uppercase tracking-wide">
                                                Frontend Developer
                                            </h4>
                                            <p className="text-gray-300 leading-relaxed">
                                                Responsable de la maquetación, la experiencia del usuario,
                                                la interactividad y la creación del sitio web.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

const data = [
    {
        id: 1,
        textH3: `Resuelve dudas `,
        textSpan: `y consultas`,
        img: DoubtsImg,
        alt: `Dudas y consultas`,
    },
    {
        id: 2,
        textH3: `Laboratorios y `,
        textSpan: `Talleres de Carreras`,
        img: LabImg,
        alt: `Laboratorios y talleres`,
    },
    {
        id: 3,
        textH3: `El campus sede `,
        textSpan: `Santa Anita`,
        img: CampusImg,
        alt: `Campus Santa Anita`,
    },
    {
        id: 4,
        textH3: `Cómo funciona cada `,
        textSpan: `lab y otras actividades`,
        img: ActivityImg,
        alt: `Laboratorios y actividades`,
    },
];

export default Main;
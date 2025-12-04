import React, { useState, useEffect } from "react";
import { Event, EventCreate, EventUpdate } from "../../types/Event";
import { FiCalendar, FiMapPin, FiType, FiFileText, FiLink, FiMonitor } from "react-icons/fi";
import appData from "../VirtualTour/appData";

interface EventFormProps {
    event?: Event | null;
    onSubmit: (data: EventCreate | EventUpdate) => Promise<void>;
    onCancel: () => void;
    loading?: boolean;
}

export const EventForm: React.FC<EventFormProps> = ({
    event,
    onSubmit,
    onCancel,
    loading = false,
}) => {
    const [formData, setFormData] = useState<{
        title: string;
        description: string;
        event_date: string;
        location: string | null;
        scene_id: number | null;
        modalidad: string;
        link: string;
    }>({
        title: "",
        description: "",
        event_date: "",
        location: "",
        scene_id: 1,
        modalidad: "",
        link: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        if (event) {
            setFormData({
                title: event.title,
                description: event.description,
                event_date: event.event_date.slice(0, 16),
                location: event.location,
                scene_id: event.scene_id,
                modalidad: event.modalidad || "",
                link: event.link || "",
            });
        }
    }, [event]);

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formData.title.trim()) {
            newErrors.title = "El título es requerido";
        }

        if (!formData.description.trim()) {
            newErrors.description = "La descripción es requerida";
        }

        if (!formData.event_date) {
            newErrors.event_date = "La fecha del evento es requerida";
        }

        if (!formData.modalidad.trim()) {
            newErrors.modalidad = "La modalidad es requerida";
        }

        if (formData.modalidad === "Presencial") {
            if (!formData.location || !formData.location.trim()) {
                newErrors.location = "La ubicación es requerida para eventos presenciales";
            }
            if (!formData.scene_id || formData.scene_id < 1) {
                newErrors.scene_id = "El ID de escena debe ser mayor a 0 para eventos presenciales";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            const submitData = {
                ...formData,
                event_date: new Date(formData.event_date).toISOString(),
                location: formData.modalidad === "Virtual" ? null : formData.location,
                scene_id: formData.modalidad === "Virtual" ? null : formData.scene_id,
            };

            await onSubmit(submitData);
        } catch (error) {
            // El error se maneja en el componente padre
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => {
            let newData = { ...prev, [name]: value };

            if (name === "scene_id") {
                newData.scene_id = parseInt(value) || 0;
            }

            // Si la modalidad cambia a Virtual, limpiar ubicación y escena
            if (name === "modalidad" && value === "Virtual") {
                newData.location = null;
                newData.scene_id = null;
            }

            return newData;
        });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Título */}
            <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <FiType className="h-4 w-4" />
                    Título del Evento
                </label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition duration-150 ${errors.title ? "border-red-300" : "border-gray-300"
                        }`}
                    placeholder="Ingresa el título del evento"
                    disabled={loading}
                />
                {errors.title && (
                    <p className="text-red-600 text-sm mt-1">{errors.title}</p>
                )}
            </div>

            {/* Descripción */}
            <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <FiFileText className="h-4 w-4" />
                    Descripción
                </label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition duration-150 ${errors.description ? "border-red-300" : "border-gray-300"
                        }`}
                    placeholder="Describe el evento"
                    disabled={loading}
                />
                {errors.description && (
                    <p className="text-red-600 text-sm mt-1">{errors.description}</p>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Fecha del Evento */}
                <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <FiCalendar className="h-4 w-4" />
                        Fecha y Hora
                    </label>
                    <input
                        type="datetime-local"
                        name="event_date"
                        value={formData.event_date}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition duration-150 ${errors.event_date ? "border-red-300" : "border-gray-300"
                            }`}
                        disabled={loading}
                    />
                    {errors.event_date && (
                        <p className="text-red-600 text-sm mt-1">{errors.event_date}</p>
                    )}
                </div>

                {/* ID de Escena */}
                <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <FiMapPin className="h-4 w-4" />
                        Escena
                    </label>
                    <select
                        name="scene_id"
                        value={formData.scene_id || 0}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition duration-150 ${errors.scene_id ? "border-red-300" : "border-gray-300"
                            } ${formData.modalidad === "Virtual" ? "bg-gray-100 text-gray-400" : ""}`}
                        disabled={loading || formData.modalidad === "Virtual"}
                    >
                        <option value={0}>Seleccionar escena...</option>
                        {appData.scenes.map((scene) => {
                            const sceneId = parseInt(scene.id.split("-")[0]);
                            return (
                                <option key={scene.id} value={sceneId}>
                                    {scene.name}
                                </option>
                            );
                        })}
                    </select>
                    {errors.scene_id && (
                        <p className="text-red-600 text-sm mt-1">{errors.scene_id}</p>
                    )}
                </div>
            </div>

            {/* Ubicación */}
            <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <FiMapPin className="h-4 w-4" />
                    Ubicación
                </label>
                <input
                    type="text"
                    name="location"
                    value={formData.location || ""}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition duration-150 ${errors.location ? "border-red-300" : "border-gray-300"
                        } ${formData.modalidad === "Virtual" ? "bg-gray-100 text-gray-400" : ""}`}
                    placeholder="¿Dónde será el evento?"
                    disabled={loading || formData.modalidad === "Virtual"}
                />
                {errors.location && (
                    <p className="text-red-600 text-sm mt-1">{errors.location}</p>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Modalidad */}
                <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <FiMonitor className="h-4 w-4" />
                        Modalidad
                    </label>
                    <select
                        name="modalidad"
                        value={formData.modalidad}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition duration-150 ${errors.modalidad ? "border-red-300" : "border-gray-300"
                            }`}
                        disabled={loading}
                    >
                        <option value="">Seleccionar modalidad...</option>
                        <option value="Presencial">Presencial</option>
                        <option value="Virtual">Virtual</option>
                    </select>
                    {errors.modalidad && (
                        <p className="text-red-600 text-sm mt-1">{errors.modalidad}</p>
                    )}
                </div>

                {/* Link */}
                <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <FiLink className="h-4 w-4" />
                        Enlace
                    </label>
                    <input
                        type="text"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition duration-150 ${errors.link ? "border-red-300" : "border-gray-300"
                            }`}
                        placeholder="https://..."
                        disabled={loading}
                    />
                    {errors.link && (
                        <p className="text-red-600 text-sm mt-1">{errors.link}</p>
                    )}
                </div>
            </div>

            {/* Botones */}
            <div className="flex gap-3 pt-4">
                <button
                    type="submit"
                    disabled={loading}
                    className={`flex-1 bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 transition duration-150 ${loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                >
                    {loading
                        ? "Guardando..."
                        : event
                            ? "Actualizar Evento"
                            : "Crear Evento"}
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    disabled={loading}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-150"
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
};

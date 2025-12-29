# ExploraTec - Frontend

**ExploraTec** es una plataforma web interactiva diseñada para ofrecer recorridos virtuales de 360° por el campus de Tecsup. El proyecto integra un asistente virtual basado en IA para guiar a los usuarios y un panel administrativo completo para la gestión de contenido.

## 🚀 Características Principales

*   **Recorridos Virtuales 360°**: Navegación inmersiva utilizando la librería [Marzipano](https://www.marzipano.net/).
*   **Asistente Virtual (Chatbot)**:
    *   Integración con IA para responder preguntas sobre el campus.
    *   Capacidad de "Guiar paso a paso" a los usuarios a ubicaciones específicas dentro del tour.
    *   Mantiene el contexto de la conversación y la ubicación actual del usuario.
*   **Panel Administrativo**:
    *   Gestión de eventos y usuarios.
    *   Dashboard de métricas y feedback de usuarios.
    *   Control de escenas y mensajes del chatbot.
*   **Diseño Responsivo**: Experiencia optimizada para dispositivos móviles y de escritorio.
*   **Autenticación y Seguridad**: Sistema de login y registro con gestión de roles.

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con un stack moderno y eficiente:

*   **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
*   **Virtual Tour**: [Marzipano](https://www.marzipano.net/)
*   **Enrutamiento**: [React Router v7](https://reactrouter.com/)
*   **Iconos**: [React Icons](https://react-icons.github.io/react-icons/)
*   **Cliente HTTP**: Axios

## 📦 Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto localmente:

### Prerrequisitos

*   Node.js (versión LTS recomendada)
*   Bun

### Pasos

1.  **Clonar el repositorio**:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd ExploraTec-Frontend
    ```

2.  **Instalar dependencias**:
    ```bash
    bun install
    ```

3.  **Configurar variables de entorno**:
    Crea un archivo `.env` en la raíz del proyecto basado en `.env.example`.
    ```env
    VITE_API_URL=http://localhost:8000
    # Añade otras variables necesarias aquí
    ```

4.  **Ejecutar el servidor de desarrollo**:
    ```bash
    bun dev
    ```

## 📂 Estructura del Proyecto

El código fuente se encuentra en la carpeta `src` y sigue una estructura modular:

*   `src/components`: Componentes reutilizables de UI (Chatbot, Navbars, etc.).
*   `src/pages`: Vistas principales de la aplicación.
*   `src/services`: Lógica de comunicación con el backend (API services).
*   `src/context`: React Context para manejo de estado global (e.g., ChatbotContext).
*   `src/hooks`: Custom hooks.
*   `src/types`: Definiciones de tipos TypeScript.
*   `src/assets`: Imágenes, iconos y recursos estáticos.
*   `src/routes`: Configuración de rutas de la aplicación.
*   `src/private`: Componentes y páginas protegidas (Admin).

import { useState } from "react";
import { ChatbotModal } from "../../components";
import chatbotImage from "../../assets/robottecsup.png";

export default function TestChatbot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-sky-200">
      <h1 className="text-3xl font-bold text-sky-900">Recorrido Virtual</h1>

      {/* Botón flotante del chatbot */}
      <div className="fixed bottom-6 left-6 z-50">
        <img
          src={chatbotImage}
          alt="Chatbot"
          className="w-16 h-8/12 cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setOpen(true)}
        />
      </div>

      {/* Modal del chatbot */}
      {open && <ChatbotModal onClose={() => setOpen(false)} />}
    </div>
  );
}
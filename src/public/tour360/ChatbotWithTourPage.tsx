import React from "react";
import { useState } from "react";
import VirtualTour from "../../components/VirtualTour/VirtualTour";
import { ChatbotModal } from "../../components";
import chatbotImage from "../../assets/robottecsup.png";


const ChatbotTourPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative min-h-screen">
      {/* Recorrido Virtual */}
      <VirtualTour />

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
};
export default ChatbotTourPage;
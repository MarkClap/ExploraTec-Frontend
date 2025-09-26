import React, { useState, useRef, useEffect } from "react";
import { FiSend, FiX } from "react-icons/fi";
import { useChatbot } from "../../hooks/useChatbot";

export const ChatbotModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { messages, sendUserMessage, loading } = useChatbot();
  const [input, setInput] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleSend = () => {
    if (!input.trim()) return;
    sendUserMessage(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-28 left-18 z-50">
      <div
        ref={modalRef}
        className="w-80 h-[450px] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden border"
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-2 bg-sky-600 text-white">
          <h2 className="text-sm font-semibold">Asistente Virtual</h2>
          <button onClick={onClose} className="hover:text-gray-200">
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Chat body */}
        <div className="flex-1 p-3 space-y-2 overflow-y-auto bg-sky-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-3 py-2 rounded-lg text-sm break-words max-w-[70%] ${
                  msg.sender === "user"
                    ? "bg-sky-600 text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && <p className="text-gray-500 text-xs">Escribiendo...</p>}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-2 border-t bg-white flex items-center">
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 border rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <button
            onClick={handleSend}
            className="ml-2 bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-full"
          >
            <FiSend className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

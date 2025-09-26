import { useState } from "react";
import { sendMessage } from "../services/user/chatService";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "¡Hola! Soy tu asistente virtual 🤖, ¿en qué puedo ayudarte?" }
  ]);
  const [conversationId, setConversationId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const sendUserMessage = async (content: string) => {
    if (!content.trim()) return;

    // agregar mensaje del usuario
    setMessages((prev) => [...prev, { sender: "user", text: content }]);
    setLoading(true);

    try {
      const response = await sendMessage({
        content,
        conversation_id: conversationId,
      });

      // guardar conversationId si es nuevo
      if (response.is_new_conversation) {
        setConversationId(response.conversation.id);
      }

      // mensaje del bot
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: response.assistant_message.content }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "❌ Error al conectar con el servidor" }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return { messages, sendUserMessage, loading };
};

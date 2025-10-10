// hooks/useChatbot.ts
import { useState, useEffect } from "react";
import { sendMessage } from "../services/user/chatService";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const STORAGE_KEY = "chatbot_messages";
const CONVERSATION_ID_KEY = "chatbot_conversation_id";

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [
      { sender: "bot", text: "¡Hola! Soy tu asistente virtual 🤖, ¿en qué puedo ayudarte?" }
    ];
  });
  
  const [conversationId, setConversationId] = useState<number | null>(() => {
    const saved = localStorage.getItem(CONVERSATION_ID_KEY);
    return saved ? JSON.parse(saved) : null;
  });
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (conversationId !== null) {
      localStorage.setItem(CONVERSATION_ID_KEY, JSON.stringify(conversationId));
    } else {
      localStorage.removeItem(CONVERSATION_ID_KEY);
    }
  }, [conversationId]);

  const sendUserMessage = async (content: string) => {
    if (!content.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: content }]);
    setLoading(true);

    try {
      const response = await sendMessage({
        content,
        conversation_id: conversationId,
      });

      if (response.is_new_conversation) {
        setConversationId(response.conversation.id);
      }

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

  const clearConversation = () => {
    setMessages([
      { sender: "bot", text: "¡Hola! Soy tu asistente virtual 🤖, ¿en qué puedo ayudarte?" }
    ]);
    setConversationId(null);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(CONVERSATION_ID_KEY);
  };

  return { 
    messages, 
    sendUserMessage, 
    loading, 
    clearConversation,
    conversationId
  };
};
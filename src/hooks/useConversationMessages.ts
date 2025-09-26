import { useEffect, useState } from "react";
import config from "../services/config";

export type Feedback = {
  is_positive: boolean;
  comment: string;
  id: number;
  message_id: number;
  user_id: number;
  created_at: string;
  updated_at: string | null;
};

export type Message = {
  id: number;
  content: string;
  is_from_user: boolean;
  scene_context_id: number | null;
  conversation_id: number;
  tokens_used: number | null;
  created_at: string;
  feedback: Feedback | null;
};

export type ConversationWithMessages = {
  id: number;
  title: string;
  scene_id: string | null;
  is_active: boolean;
  user_id: number;
  created_at: string;
  updated_at: string | null;
  messages: Message[];
};

export const useConversationMessages = (
  userId: number | null,
  conversationId: number | null
) => {
  const [conversation, setConversation] =
    useState<ConversationWithMessages | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId || !conversationId) return;

    const fetchMessages = async () => {
      setLoading(true);
      try {
        const response = await config.get<ConversationWithMessages>(
          `/chatbot/admin/users/${userId}/conversations/${conversationId}/messages`
        );
        setConversation(response.data);
      } catch (err) {
        setError("Error al cargar mensajes");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [userId, conversationId]);

  return { conversation, loading, error };
};

import { useEffect, useState } from "react";
import config from "../services/config";

export type Conversation = {
  id: number;
  title: string;
  scene_id: number | null;
  is_active: boolean;
  user_id: number;
  created_at: string;
  updated_at: string | null;
  message_count: number;
};

export const useUserConversations = (userId: number | null) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchConversations = async () => {
      setLoading(true);
      try {
        const response = await config.get<Conversation[]>(
          `chatbot/admin/users/${userId}/conversations`
        );
        setConversations(response.data);
      } catch (err) {
        setError("Error al obtener conversaciones");
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, [userId]);

  return { conversations, loading, error };
};
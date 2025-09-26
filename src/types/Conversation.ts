export type Feedback = {
  id: number;
  is_positive: boolean;
  comment: string;
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

export type ConversationDetail = {
  id: number;
  title: string;
  scene_id: number | null;
  is_active: boolean;
  user_id: number;
  created_at: string;
  updated_at: string | null;
  messages: Message[];
};

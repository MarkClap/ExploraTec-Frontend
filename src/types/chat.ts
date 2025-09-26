export interface MessagePayload {
  content: string;
  conversation_id?: string | null;
  scene_context_id?: string | null;
}

export interface UserMessage {
  id: string;
  role: "user";
  content: string;
  timestamp: string;
}

export interface AssistantMessage {
  id: string;
  role: "assistant";
  content: string;
  timestamp: string;
}

export interface SendMessageResponse {
  user_message: UserMessage;
  assistant_message: AssistantMessage;
  is_new_conversation: boolean;
  conversation: {
    id: string;
    title: string;
    created_at: string;
  };
}

// src/components/ConversationMessages/ConversationMessages.tsx
import React from "react";
import { useConversationMessages } from "../../hooks/useConversationMessages";

type Props = {
  userId: number | null;
  conversationId: number | null;
};

const ConversationMessages: React.FC<Props> = ({ userId, conversationId }) => {
  const { conversation, loading, error } = useConversationMessages(
    userId,
    conversationId
  );

  if (!userId || !conversationId) return <p>Selecciona una conversación</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-white shadow rounded-lg p-4 mt-4">
      <h3 className="text-lg font-semibold mb-3">{conversation?.title}</h3>
      <div className="space-y-3">
        {conversation?.messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-3 rounded-lg max-w-[70%] ${
              msg.is_from_user
                ? "bg-blue-100 text-blue-800 ml-auto text-right"
                : "bg-gray-100 text-gray-800 mr-auto text-left"
            }`}
          >
            <p>{msg.content}</p>
            <span className="block text-xs text-gray-500">
              {new Date(msg.created_at).toLocaleString()}
            </span>

            {msg.feedback && (
              <div className="mt-1 text-sm italic">
                Feedback:{" "}
                <span
                  className={
                    msg.feedback.is_positive ? "text-green-600" : "text-red-600"
                  }
                >
                  {msg.feedback.comment}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationMessages;

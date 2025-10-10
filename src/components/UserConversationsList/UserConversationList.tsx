import React from "react";
import { useUserConversations } from "../../hooks/useConversation";
import { Link } from "react-router-dom";

type ConversationListProps = {
  userId: number | null;
};

const UserConversationsList: React.FC<ConversationListProps> = ({ userId }) => {
  const { conversations, loading, error } = useUserConversations(userId);

  if (!userId) return <p>Selecciona un usuario</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <ul>
        {conversations.map((conv) => (
          <li key={conv.id} className="p-3 border-b flex justify-between items-center">
            <div>
              <strong>{conv.title}</strong> ({conv.message_count} mensajes)
              {conv.is_active && <span className="ml-2 text-blue-500">● Activa</span>}
            </div>
            <Link
              to={`/user/${userId}/conversations/${conv.id}/messages`}
              className="px-3 py-1 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Ver mensajes
            </Link>

          </li>
        ))}
      </ul>

    </div>
  );
};

export default UserConversationsList;

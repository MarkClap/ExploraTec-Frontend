import UserList from "../components/UserList/UserList";
import LogoutButton from "../components/LogoutButton/LogoutButton";

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          👥 Usuarios registrados
        </h2>
        <LogoutButton />
      </div>

      {/* Contenedor principal */}
      <div className="bg-white shadow-lg rounded-xl p-6">
        <p className="text-gray-600 mb-4">
          Aquí puedes visualizar y gestionar a todos los usuarios registrados en el sistema.
        </p>
        <UserList />
      </div>
    </div>
  );
};
import { useEffect, useState } from "react";
import { getAllUsers, AdminUser } from "../../services/admin/AdminServices";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (err: any) {
        setError("Error al cargar los usuarios");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="p-4">Cargando usuarios...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Username</th>
            <th className="p-2 border">Activo</th>
            <th className="p-2 border">Admin</th>
            <th className="p-2 border">Creado</th>
            <th className="p-2 border">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="text-center hover:bg-gray-50">
              <td className="p-2 border">{u.id}</td>
              <td className="p-2 border">{u.email}</td>
              <td className="p-2 border">{u.username}</td>
              <td className="p-2 border">{u.is_active ? "✅" : "❌"}</td>
              <td className="p-2 border">{u.is_admin ? "Si" : "No"}</td>
              <td className="p-2 border">
                {new Date(u.created_at).toLocaleDateString()}
              </td>
              <td className="p-2 border">
                <Link
                  to={`/users/${u.id}/conversations`}
                  className="px-3 py-1 text-sm bg-sky-600 text-white rounded hover:bg-sky-700"
                >
                  Ver conversaciones
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

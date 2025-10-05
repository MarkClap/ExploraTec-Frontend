import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./public/Login";
import { Register } from "./public/Register";
import { Main } from "./public/Main";
import { Dashboard } from "./private/Dashboard";
import { PublicRoute } from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import ChatbotTourPage from "./public/tour360/ChatbotWithTourPage";
import UserConversationsPage from "./private/UserConversationsPage";
import ConversationMessagesPage from "./private/ConversationMessagesPage ";

function App() {
  return (
    <Router>
      <Routes>
        {/* Público (solo si no está logeado) */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        {/* Protegidos */}
        <Route
          path="/main"
          element={
            <ProtectedRoute roles={["USER", "ADMIN"]}>
              <Main />
            </ProtectedRoute>
          }
        />

        <Route
          path="/test-chatbot"
          element={
            <ProtectedRoute roles={["USER", "ADMIN"]}>
              <ChatbotTourPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute roles={["ADMIN"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/users/:userId/conversations"
          element={
            <ProtectedRoute roles={["ADMIN"]}>
              <UserConversationsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/:userId/conversations/:conversationId/messages"
          element={
            <ProtectedRoute roles={["ADMIN"]}>
              <ConversationMessagesPage />
            </ProtectedRoute>
          }
        />


        {/* Redirección default */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
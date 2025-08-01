import { useAuth } from "../hooks/useAuth";
import App from "../App";
import Login from "../Login";

export default function AppWithAuth() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        読み込み中...
      </div>
    );
  }

  if (!user) {
    return <Login onSignInSuccess={() => window.location.reload()} />;
  }

  return <App />;
}

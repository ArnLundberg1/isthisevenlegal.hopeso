const { useState, useEffect } = React;

import Login from "./Login.jsx";
import Chat from "./Chat.jsx";
import { getUser } from "./auth.js";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <>
      {!user ? (
        <Login onLogin={(u) => setUser(u)} />
      ) : (
        <Chat user={user} onLogout={() => setUser(null)} />
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

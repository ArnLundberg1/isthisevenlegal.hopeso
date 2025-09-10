export default function Login({ onLogin }) {
  const [name, setName] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim()) {
      localStorage.setItem("discord_user", name.trim());
      onLogin(name.trim());
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-[#0f1724]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1a2236] p-8 rounded-2xl shadow-xl w-80"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Logga in</h1>
        <input
          type="text"
          placeholder="Ditt namn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded bg-[#0b1220] mb-4 outline-none"
        />
        <button
          type="submit"
          className="w-full bg-[#5865f2] hover:bg-[#4752c4] py-3 rounded font-semibold"
        >
          Gå in
        </button>
      </form>
    </div>
  );
}

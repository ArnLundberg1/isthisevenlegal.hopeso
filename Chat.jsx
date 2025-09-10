import Sidebar from "./Sidebar.jsx";
import Members from "./Members.jsx";
import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";

export default function Chat({ user, onLogout }) {
  const [channels, setChannels] = React.useState({
    general: { id: "general", name: "general", messages: [] },
    random: { id: "random", name: "random", messages: [] },
  });
  const [active, setActive] = React.useState("general");

  function sendMessage(text) {
    if (!text.trim()) return;
    const msg = {
      id: Date.now().toString(),
      user,
      text,
      ts: new Date().toISOString(),
    };
    setChannels((prev) => {
      const copy = { ...prev };
      copy[active].messages = [...copy[active].messages, msg];
      return copy;
    });
  }

  return (
    <div className="flex h-screen">
      <Sidebar channels={channels} active={active} setActive={setActive} />
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center px-6 py-4 border-b border-black/30">
          <div>
            <h2 className="font-semibold text-lg">#{channels[active].name}</h2>
          </div>
          <button
            onClick={onLogout}
            className="bg-red-500/30 px-3 py-1 rounded hover:bg-red-500/50"
          >
            Logga ut
          </button>
        </div>
        <Messages messages={channels[active].messages} />
        <MessageInput onSend={sendMessage} active={active} />
      </div>
      <Members />
    </div>
  );
}

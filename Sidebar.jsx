export default function Sidebar({ channels, active, setActive }) {
  return (
    <div className="w-64 bg-[#0b1220] p-3 flex flex-col border-r border-black/20">
      <h1 className="text-xl font-bold mb-4">Server Demo</h1>
      {Object.values(channels).map((ch) => (
        <div
          key={ch.id}
          onClick={() => setActive(ch.id)}
          className={`px-3 py-2 rounded cursor-pointer ${
            active === ch.id ? "bg-white/10" : "hover:bg-white/5"
          }`}
        >
          # {ch.name}
        </div>
      ))}
    </div>
  );
}

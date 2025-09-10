export default function Members() {
  const members = ["Anna", "Björn", "Cara"];

  return (
    <div className="w-64 bg-[#071428] p-3 border-l border-black/20">
      <h2 className="font-semibold mb-2">Medlemmar</h2>
      {members.map((m) => (
        <div
          key={m}
          className="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded"
        >
          <div className="w-8 h-8 rounded-full bg-[#1e2a3a] flex items-center justify-center">
            {m[0]}
          </div>
          <span>{m}</span>
        </div>
      ))}
    </div>
  );
}

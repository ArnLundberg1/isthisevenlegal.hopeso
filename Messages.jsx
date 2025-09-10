export default function Messages({ messages }) {
  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="flex flex-col gap-4 max-w-2xl">
        {messages.map((m) => (
          <div key={m.id} className="flex gap-3">
            <div className="w-10 h-10 bg-[#20324a] rounded-full flex items-center justify-center">
              {m.user[0]}
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <span className="font-medium">{m.user}</span>
                <span className="text-xs text-gray-400">
                  {new Date(m.ts).toLocaleTimeString()}
                </span>
              </div>
              <div>{m.text}</div>
            </div>
          </div>
        ))}
        {messages.length === 0 && (
          <div className="text-gray-400">Inga meddelanden än...</div>
        )}
      </div>
    </div>
  );
}

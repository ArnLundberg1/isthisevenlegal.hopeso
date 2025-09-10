export default function MessageInput({ onSend, active }) {
  const ref = React.useRef();

  function handleSend() {
    if (ref.current.value.trim()) {
      onSend(ref.current.value);
      ref.current.value = "";
    }
  }

  return (
    <div className="p-4 border-t border-black/20">
      <div className="max-w-2xl mx-auto flex gap-2">
        <input
          ref={ref}
          placeholder={`Skriv i #${active}...`}
          className="flex-1 bg-[#071225] rounded px-4 py-2 outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 px-4 rounded hover:bg-blue-600"
        >
          Skicka
        </button>
      </div>
    </div>
  );
}

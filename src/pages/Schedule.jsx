export default function Schedule() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center py-10">
      <h2 className="text-3xl tracking-widest mb-6">CLASS SCHEDULE</h2>

      <div className="w-full max-w-5xl px-4">
        <iframe
          name="frame2"
          src="https://app.punchpass.com/org/20290/classes?embed=true"
          height="1200"
          width="100%"
          frameBorder="0"
          allowFullScreen
          title="Azu Studio Class Schedule"
        ></iframe>
      </div>
    </div>
  );
}

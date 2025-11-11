export default function Account() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center py-10">
      <h2 className="text-3xl tracking-widest mb-6">YOUR RESERVATION</h2>

      <div className="w-full max-w-4xl px-4">
        <iframe name="frame2" src="https://app.punchpass.com/org/20290/timeslot?embed=true" 
                height="700" 
                width="100%" 
                frameborder="0" 
                allowfullscreen>

                </iframe>
      </div>
    </div>
  );
}

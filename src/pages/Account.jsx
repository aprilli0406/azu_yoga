export default function Account() {
  return (
    <div 
      className="min-h-screen bg-white text-gray-800 flex items-center justify-center" 
      // ⭐ CHANGED: fully center content vertically + horizontally
    >
      <a
        href="https://app.punchpass.com/account/sign_in" // ⭐ CHANGED
        target="_blank"
        rel="noreferrer"
        className="bg-black text-white text-lg font-semibold tracking-widest px-10 py-4 rounded-xl hover:opacity-90" 
        // ⭐ CHANGED: styled login button
      >
        LOGIN TO YOUR ACCOUNT
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 text-white">
        <h1 className="text-7xl md:text-8xl font-light tracking-[0.35em] text-[#302a22]">
            AZU STUDIO
        </h1>
        
        <p className="mt-4 text-5xl md:text-4xl font-light text-[#302a22] tracking-widest">
            Yoga & Pilates
        </p>
        <div className="text-center mt-6 border border-[#302a22] rounded-none px-6 py-3 inline-block">
            <p className="text-5xl md:text-4xl font-semibold text-white/90 tracking-widest animate-blink "
                //style={{
                //    WebkitTextStroke: "1px #302a22", // 🟤 adds border around each letter
                 //   color: "white",                  // keeps text filled white
                //}}
                >
                Ouverture Le 22 Novembre
            </p>
            <p className="mt-2 text-xl md:text-2xl text-white/70 tracking-widest">
                Opening on November 22nd
            </p>
        </div>

       

    </main>


    
  );
}

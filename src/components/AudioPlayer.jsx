import { useEffect, useRef } from "react";

export default function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const playAudio = () => {
      audio.play().catch((err) => {
        console.warn("Lecture bloquée par le navigateur :", err);
      });
    };

    playAudio();
    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto mt-8 p-6 rounded-2xl shadow-xl bg-gradient-to-br from-red-600 via-yellow-400 to-black text-white border-4 border-black">
      <h2 className="text-center text-2xl font-bold mb-4 drop-shadow-sm">
        🔊 Supporters en direct !
      </h2>
      <div className="rounded-lg overflow-hidden bg-black shadow-inner">
        <audio
          ref={audioRef}
          src="https://ns3076776.ip-217-182-194.eu/stream"
          preload="auto"
          autoPlay
          controls
          className="w-full bg-black text-white p-2"
        >
          Votre navigateur ne supporte pas l'élément audio.
        </audio>
      </div>
      <p className="text-center mt-4 text-sm italic opacity-80">
        La radio de tout espérantiste• ⚽ ❤️💛🖤
      </p>
    </div>
  );
}

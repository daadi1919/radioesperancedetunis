import AudioPlayer from "./components/AudioPlayer";
import logo from "/logoradio.webp"; // à mettre dans public/

function App() {
  return (
    <div className="min-h-screen bg-[#800000]  flex flex-col items-center justify-center p-6 text-center">
      <img src={logo} alt="Radio Espérance de Tunis" className="w-48 mb-6" />
     
 
 <h2 className="text-2xl text-yellow-400 font-semibold mb-4">radioesperancedetunis.com
 </h2>
      <AudioPlayer />
    </div>
  );
}

export default App;

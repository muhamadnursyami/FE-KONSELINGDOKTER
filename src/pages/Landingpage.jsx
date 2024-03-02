import Navbar from "../components/Navbar";
import Cuate from "../assets/cuate.svg";

export default function Landingpage() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-950  min-h-[100vh] w-full justify-between bg-gradient-to-tr from-blue-700 to-blue-600 mt-10 pt-20  flex flex-col md:flex-row px-20 ">
        <div className="pt-20 order-last md:order-first w-full text-center md:text-left">
          <p className="lg:text-5xl text-center  md:text-left  text-2xl font-bold  md:pb-3 text-white ">
            Perjalanan
          </p>
          <p className="lg:text-5xl  text-center  md:text-left text-2xl font-bold  md:pb-3 text-white">
            Kesehatan Mental
          </p>
          <p className="lg:text-5xl text-center md:text-left text-2xl font-bold pb-3  text-white">
            Anda
            <span className="text-yellow-300"> Dimulai Di Sini </span>
          </p>

          <p className="text-sm text-white pb-10 max-w-lg text-center md:text-left">
            Tentukan langkah pertama menuju kesejahteraan mental Anda. Segera
            hubungi kami untuk mendapatkan panduan dan dukungan yang Anda
            butuhkan.
          </p>
          <button className="hover:bg-blue-400  bg-yellow-300 px-4 py-2 text-blue-950 font-semibold rounded-2xl text-lg">
            Jadwalkan Konsultasi
          </button>
        </div>
        <div className="mt-16 mx-auto">
          <img src={Cuate} alt="ImgHero" width={900} />
        </div>
      </div>
    </>
  );
}

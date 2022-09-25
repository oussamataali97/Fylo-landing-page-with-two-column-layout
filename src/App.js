import Access from "./components/Access";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Prodcution from "./components/Prodcution";
import curve from './images/bg-curve-desktop.svg'

function App() {
  return (
    <>
    <div className="max-w-[75rem] mx-auto">
      <Navbar/>
      <Hero/>
    
    </div>
    <div className="w-full">
        <img src={curve} alt="" className="w-full mr-auto"/>
      </div>
      <div className=" bg-lightblue w-full">
        <Prodcution/>
        </div>

        <div className=" bg-desaturateblue w-full">
        <Access/>

        </div>
        <div className=" bg-darkblue w-full">
        <Footer/>

        </div>



    </>
  );
}

export default App;

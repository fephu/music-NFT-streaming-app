import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SlideShow from "../../components/SlideShow/SlideShow";
import Content from '../../components/Content/Content';

function HomePage() {
   return ( 
   <div className="bg-neutral-100">
      <div className=" py-0 ">
         <div className="w-full px-16 shadow-lg "><Header /></div>
         <div className="px-16 pt-20 w-full pb-20"><SlideShow /></div>
         <div className="px-16"><Content /></div>
      </div>
      <div className="w-full bg-blue-700 ">
         <Footer />
      </div>
   </div>
 );
}

export default HomePage;
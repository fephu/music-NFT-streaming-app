import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SlideShow from "../../components/SlideShow/SlideShow";

function DefaultLayout() {
   return ( 
   <div className="bg-gradient-to-b from-neutral-500 from-20% via-neutral-100 via-50% to-neutral-100 to-40%">
      <div className="px-16 py-0">
            <div className=""><Header /></div>
            <div className=" pt-20 w-full pb-20"><SlideShow /></div>
         <div><Content /></div>
      </div>
      <div className="w-full bg-blue-700 ">
            <Footer />
      </div>
   </div> );
}

export default DefaultLayout;
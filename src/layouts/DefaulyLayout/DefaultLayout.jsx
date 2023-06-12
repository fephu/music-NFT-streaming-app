import Content from "../../components/Content/Content";
import Header from "../../components/Header/Header";
import SlideShow from "../../components/SlideShow/SlideShow";

function DefaultLayout() {
   return ( 
   <div className="bg-gradient-to-b from-neutral-500 from-50% to-neutral-0">
      <div className="px-16 py-0">
         <div><Header /></div>
         <div className=" pt-20 w-full pb-20"><SlideShow /></div>
         <div><Content /></div>
      </div>
   </div> );
}

export default DefaultLayout;
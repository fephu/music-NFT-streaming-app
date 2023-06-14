import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InfAuthor from "../../components/InfAuthor/InfAuthor";


function DetailPage() {
   return ( 
   <div className="bg-neutral-500">
      <div className="px-16 py-0">
         <div className=""><Header/></div>
      </div>
      <div className="bg-white"><InfAuthor/></div>
      <div className="w-full bg-blue-700 ">
         <Footer />
      </div>
   </div> 
   );
}

export default DetailPage;
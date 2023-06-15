import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InfAuthor from "../../components/Author/InfAuthor/InfAuthor";


function DetailPage() {
   return ( 
   <div className="bg-neutral-100">
      <div className="px-16 py-0">
         <div className=""><Header/></div>
      </div>
      <div className="bg-slate-100"><InfAuthor/></div>
      <div className="w-full bg-blue-700 ">
         <Footer />
      </div>
   </div> 
   );
}

export default DetailPage;
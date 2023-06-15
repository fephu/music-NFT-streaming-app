import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InfMusic from "../../components/InfMusic/InfMusic";
import WhatThis from '../../components/Content/WhatThis/WhatThis'

function DetailMusic() {
   return ( 
      <div className="bg-neutral-100">
         <div className="px-16 py-0 shadow-xl">
            <div className="mb-4"><Header/></div>
         </div>
      <div className="pt-8 px-8"><InfMusic/></div>
      <div className="pt-8 px-8"><WhatThis/></div>

      <div className="w-full bg-blue-700 ">
         <Footer />
      </div>
   </div>    
   );
}

export default DetailMusic;
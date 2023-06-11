import Search from "../Search/Search";

function Header() {
   return ( 
      <div className="h-16 top-0 sticky">
         <nav className="flex h-full justify-center items-center" >
            <div>logo</div>
            <div>
               <div className="flex">
                     <div className="h-8 ">
                        <div className="bg-gray-300 h-full w-1 mx-6"></div>
                     </div>
               </div>
            </div>
            <div className="flex items-center gap-x-8 pr-8">
                  <a href="/" className="text-white ">
                     <span className="font-semibold">Drops</span>
                  </a>
                  <a href="/" className="text-white ">
                     <span className="font-semibold">Stats</span>
                  </a>
            </div>
            <Search />
         </nav>
      </div>
    );
}

export default Header;
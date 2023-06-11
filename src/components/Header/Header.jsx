import Search from "../Search/Search";
import {FaWallet, FaRegUserCircle } from 'react-icons/fa';
import {MdOutlineLocalGroceryStore} from 'react-icons/md';

function Header() {
   return ( 
      <div className="h-16 top-0 sticky">
         <nav className="flex h-full justify-center items-center" >
            <div>logo</div>
            <div>
               <div className="flex">
                     <div className="h-8 ">
                        <div className="bg-neutral-300 h-full w-0.5 mx-6"></div>
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
            <ul className="flex md:flex-shrink-0">
               <div className="flex">
                  <div className="block">
                     <div className="flex justify-center items-center h-full pr-3">
                        <div className="inline-flex">
                           <div className="block">
                              <button className="items-stretch gap-x-3 inline-flex h-12 p-3 rounded-tl-xl rounded-bl-xl border-r border-solid bg-neutral-400">
                                 <FaWallet style={{ color: 'white' }} className=" leading-none tracking-normal normal-case inline-block text-2xl"/>
                                 <span className="font-semibold text-white">Connect Wallet</span>
                              </button>
                           </div>
                           <a className="h-12 rounded-tr-xl rounded-br-xl border-solid bg-neutral-400 no-underline" >
                              <div className="flex justify-center flex-col h-full py-2 px-3 ">
                                 <div className="flex justify-center items-center">
                                    <FaRegUserCircle className="leading-none text-2xl" style={{ color: 'white' }}/>
                                 </div>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               <li className="flex justify-center items-center">
                  <ul className="flex">
                     <div className="flex justify-center flex-col">
                        <div className="block">
                           <button className="rounded-xl p-3 relative h-12 w-12 border-solid bg-neutral-400">
                              <MdOutlineLocalGroceryStore className="flex items-center text-2xl" style={{ color: 'white' }}/>
                           </button>
                        </div>
                     </div>
                  </ul>
               </li>
            </ul>
         </nav>
      </div>
    );
}

export default Header;
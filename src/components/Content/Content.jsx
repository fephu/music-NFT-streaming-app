import {FaArrowDown} from 'react-icons/fa'
import Products from './Products/Product';
import Category from './Category/Category';
import WhatThis from './WhatThis/WhatThis';

function Content() {
   return ( 
   <div className="gap-x-6">
      <div className="mb-4 w-full">
         <nav className="w-full">
            <div className="flex justify-between items-end">
               <ul className="px-2 justify-start w-full flex">
                  <div className="flex -ml-2 ">
                     <li className="relative mr-10">
                        <button className="flex pb-4 cursor-pointer text-3xl font-bold">
                           Trending
                        </button>
                     </li>
                     <li className="relative">
                        <button className="flex pb-4 cursor-pointer text-3xl font-bold">
                           Top
                        </button>
                     </li>
                  </div>
               </ul>
               <div className="flex mb-2 items-center shrink-0 ">
                  <div className="flex">
                     <div className="mr-4 border-solid border-2 border-slate-300 rounded-xl ">
                        <div className="w-fit flex flex-row">
                           <button className="py-2 px-3 w-12 inline-flex flex-col items-center justify-center font-bold leading-5 ">1h</button>
                           <button className="py-2 px-3 w-12 inline-flex flex-col items-center justify-center font-bold leading-5 ">6h</button>
                           <button className="py-2 px-3 w-12 inline-flex flex-col items-center justify-center font-bold leading-5 ">24h</button>
                           <button className="py-2 px-3 w-12 inline-flex flex-col items-center justify-center font-bold leading-5 ">7d</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex mb-2 items-center shrink-0 ">
                  <div className="flex">
                     <div className="mr-4 border-solid border-2 border-slate-300 rounded-xl ">
                        <div className="w-fit flex flex-row">
                           <button className="py-2 px-3 w-24 inline-flex flex-col items-center justify-center font-bold leading-5 ">All chains</button>
                           <div className="self-stretch  flex justify-center">
                           <div className="justify-center flex flex-col ml-2 pr-2">
                              <FaArrowDown />
                           </div>
                        </div>
                        </div>
                        
                     </div>
                  </div>
               </div>
               <div className="flex mb-2 items-center shrink-0 ">
                  <div className="flex">
                     <div className="mr-4 border-solid border-2 border-slate-300 rounded-xl ">
                        <div className="w-fit flex flex-row">
                           <button className="py-2 px-3 w-24 inline-flex flex-col items-center justify-center font-bold leading-5 ">View All</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="border-solid border-2 border-slate-200 block ">
            </div>
         </nav>
      </div>
      <div className='mr-12 '>
            <Products />
      </div>
      <div className='flex'>
         <Category />
      </div>
      <div className='flex'>
         <WhatThis />
      </div>

   </div> );
}

export default Content;
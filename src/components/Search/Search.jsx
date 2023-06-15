import {FaSearch } from 'react-icons/fa';

function Search() {
   return ( 
   <div className="w-full">
      <div className="flex h-full w-full items-center">
         <div className="w-full justify-center flex-col ">
            <div className="flex  leading-7 p-2 border-2 border-solid bg-white h-12 rounded-xl mr-3" >
               <div className='flex justify-center flex-col mr-2'>
                  <FaSearch style={{ color: 'gray' }} className='leading-none text-xl'/>
               </div>
               <input placeholder='Search song author, music NFT' className='bg-white w-full cursor-text overflow-ellipsis focus:outline-none placeholder-gray text-black text-base'/>
            </div>
         </div>
      </div>
   </div> );
}

export default Search;
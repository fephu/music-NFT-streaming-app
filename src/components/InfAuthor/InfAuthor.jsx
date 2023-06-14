function InfAuthor() {
   return ( 
   <div className="flex w-full flex-col">
      <div className="relative max-h-80 overflow-hidden">
         <div className="relative pb-96 ">
            <span className="block  overflow-hidden absolute">
               <img src="https://i.seadn.io/gcs/files/ef01ed322ffb9762c830c4fc72ce60ff.jpg?auto=format&dpr=1&w=1920" className="object-cover"></img>
            </span>
         </div>
      </div>
      <div className="px-8 w-full">
         <div className="flex items-center">
            <div className="-mt-40 mb-4 block">
               <div className="border-solid rounded-md m-44 h-44 relative z-10">
                  <button className="w-full h-full inline-flex items-center cursor-pointer">
                     <span className="opacity-100">
                        <img src="https://i.seadn.io/gcs/files/7a8b4eb666266e7bcbc2678349d3f1bc.gif?auto=format&dpr=1&w=256" className="object-cover rounded-xl"></img>
                     </span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   </div> 
   );
}

export default InfAuthor;
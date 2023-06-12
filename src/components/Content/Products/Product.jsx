import {MdVerified} from 'react-icons/md';

function Products() {
   return ( 
   <div className="block">
      <div>
         <div className="pt-1 pr-2 pl-2 sticky top-16 flex">
            <div className="w-8 flex justify-start items-center basis-8"> 
               <span className="text-gray-500">#</span>
            </div>
            <div className="flex justify-start items-center w-60">
               <span className="text-gray-500">Collection</span>
            </div>
            <div className="flex w-1/5 justify-end items-center">
               <span className="text-gray-500">Floor price</span>
            </div>
            <div className="flex w-32 justify-end items-center">
               <span className="text-gray-500">Volume</span>
            </div>
         </div>
      </div>
      <div className="relative w-full h-96 max-w-full max-h-96 ">
         <div className=" w-1/2 absolute">
            <div className="block">
               <a className="cursor-pointer w-full py-3 px-2 relative justify-between font-semibold text-left flex" href="/">
                  <div className="flex w-3/5 justify-start basis-8/12 items-center cursor-pointer font-semibold">
                     <div className="flex items-center ">
                        <div className="block ">
                           <div className="mr-2 w-6 block">
                              <span>1</span>
                           </div>
                        </div>
                        <div className="block cursor-pointer">
                           <div className="flex justify-center items-center">
                              <div className="w-20 h-20 relative rounded-xl">
                                 <span className="">
                                    <img className="absolute object-cover" src="https://i.seadn.io/gcs/files/78242dd5b7cb75d770f02f90bedf7484.gif?auto=format&dpr=1&w=136&h=136&fr=1"></img>
                                 </span>
                              </div>
                           </div>
                        </div>
                        <div className="pl-6 items-start self-center flex-row flex">
                           <div className="block">
                              <span className="font-semibold">
                                 <div className="flex items-center max-w-sm">
                                    <div className="w-full text-ellipsis whitespace-nowrap">PIXELATED by Sammy Arriaga</div>
                                 </div>
                              </span>
                           </div>
                           <div className="inline-flex ml-1 align-middle">
                              <MdVerified className='w-5 h-5' style={{ color: 'blue' }}/>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='w-1/5 flex items-center justify-end'>
                     <span className='font-semibold'>
                        <div className='w-full text-ellipsis'>0.07 ETH</div>
                     </span>
                  </div>
                  <div className='w-1/5 flex items-center justify-end'>
                     <span className='font-semibold'>
                        <div className='w-full text-ellipsis'>0.37 ETH</div>
                     </span>
                  </div>
               </a>
            </div>

            <div className="block">
               <a className="cursor-pointer w-full py-3 px-2 relative justify-between font-semibold text-left flex" href="/">
                  <div className="flex w-3/5 justify-start basis-8/12 items-center cursor-pointer font-semibold">
                     <div className="flex items-center ">
                        <div className="block ">
                           <div className="mr-2 w-6 block">
                              <span>2</span>
                           </div>
                        </div>
                        <div className="block cursor-pointer">
                           <div className="flex justify-center items-center">
                              <div className="w-20 h-20 relative rounded-xl">
                                 <span className="">
                                    <img className="absolute object-cover" src="https://i.seadn.io/gcs/files/7a8b4eb666266e7bcbc2678349d3f1bc.gif?auto=format&dpr=1&w=136&h=136&fr=1"></img>
                                 </span>
                              </div>
                           </div>
                        </div>
                        <div className="pl-6 items-start self-center flex-row flex">
                           <div className="block">
                              <span className="font-semibold">
                                 <div className="flex items-center max-w-sm">
                                    <div className="w-full text-ellipsis whitespace-nowrap">KINGSHIP</div>
                                 </div>
                              </span>
                           </div>
                           <div className="inline-flex ml-1 align-middle">
                              <MdVerified className='w-5 h-5' style={{ color: 'blue' }}/>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='w-1/5 flex items-center justify-end'>
                     <span className='font-semibold'>
                        <div className='w-full text-ellipsis'>0.06 ETH</div>
                     </span>
                  </div>
                  <div className='w-1/5 flex items-center justify-end'>
                     <span className='font-semibold'>
                        <div className='w-full text-ellipsis'>0.23 ETH</div>
                     </span>
                  </div>
               </a>
            </div>
            <div className="block">
               <a className="cursor-pointer w-full py-3 px-2 relative justify-between font-semibold text-left flex" href="/">
                  <div className="flex w-3/5 justify-start basis-8/12 items-center cursor-pointer font-semibold">
                     <div className="flex items-center ">
                        <div className="block ">
                           <div className="mr-2 w-6 block">
                              <span>3</span>
                           </div>
                        </div>
                        <div className="block cursor-pointer">
                           <div className="flex justify-center items-center">
                              <div className="w-20 h-20 relative rounded-xl">
                                 <span className="">
                                    <img className="absolute object-cover" src="https://i.seadn.io/gcs/files/d148777713d23edd9d0ea146ffca76c9.gif?auto=format&dpr=1&w=136&h=136&fr=1"></img>
                                 </span>
                              </div>
                           </div>
                        </div>
                        <div className="pl-6 items-start self-center flex-row flex">
                           <div className="block">
                              <span className="font-semibold">
                                 <div className="flex items-center max-w-sm">
                                    <div className="w-full text-ellipsis whitespace-nowrap">Please Take a Step Back by <br/>Snoop Dogg &amp;. GaryVee</div>
                                 </div>
                              </span>
                           </div>
                           <div className="inline-flex ml-1 align-middle">
                              <MdVerified className='w-5 h-5' style={{ color: 'blue' }}/>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='w-1/5 flex items-center justify-end'>
                     <span className='font-semibold'>
                        <div className='w-full text-ellipsis'>0.04 ETH</div>
                     </span>
                  </div>
                  <div className='w-1/5 flex items-center justify-end'>
                     <span className='font-semibold'>
                        <div className='w-full text-ellipsis'>0.22 ETH</div>
                     </span>
                  </div>
               </a>
            </div>
         </div>
         
      </div>
      
      
   </div> 
   
   );
}

export default Products;
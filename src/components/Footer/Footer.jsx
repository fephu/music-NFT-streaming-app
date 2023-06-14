import {FaTwitter, FaInstagram, FaDiscord, FaRedditAlien, FaYoutube, FaTiktok} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'; 
function Footer() {
   return ( 
   <div className="px-16 py-0">
      <div className="flex flex-wrap pb-10 mb-5 border-b-2 border-solid border-slate-400">
         <div className="pr-16 pt-10 w-1/2 items-start text-left flex-col text-white">
            <div className="text-xl font-semibold my-2 ">Stay in the loop</div>
            <div className="text-base">Join our music submission list to stay up to date with our latest feature releases, NFT drops, and tips and tricks for navigating the Music_NFT-streaming-app.</div>
            <form className="w-full mt-4">
               <div className="flex w-full">
                  <div className="pr-4 flex-col w-3/4">
                     <input className="w-full h-12 rounded-xl pr-2" placeholder="Your email address"/>
                  </div>
                  <div className="bg-blue-500 items-center flex rounded-xl">
                     <button className="w-40 font-semibold text-base">Sign up</button>
                  </div>
               </div>
            </form>
         </div>
         <div className="w-1/2 pt-10 pl-16 text-left items-start flex-col text-white">
         <div className="text-xl font-semibold my-2 ">Join the community</div>
         <div className="flex flex-wrap justify-start text-left">
            <a className="no-underline cursor-pointer">
               <button className="mr-3 w-14 h-14 mt-2 inline-flex items-center rounded-xl justify-center font-semibold bg-blue-500">
                  <FaTwitter/>
               </button>
            </a>
            <a className="no-underline cursor-pointer">
               <button className="mr-3 w-14 h-14 mt-2 inline-flex items-center rounded-xl justify-center font-semibold bg-blue-500">
                  <FaInstagram/>
               </button>
            </a>
            <a className="no-underline cursor-pointer">
               <button className="mr-3 w-14 h-14 mt-2 inline-flex items-center rounded-xl justify-center font-semibold bg-blue-500">
                  <FaDiscord/>
               </button>
            </a>
            <a className="no-underline cursor-pointer">
               <button className="mr-3 w-14 h-14 mt-2 inline-flex items-center rounded-xl justify-center font-semibold bg-blue-500">
                  <FaRedditAlien/>
               </button>
            </a>
            <a className="no-underline cursor-pointer">
               <button className="mr-3 w-14 h-14 mt-2 inline-flex items-center rounded-xl justify-center font-semibold bg-blue-500">
                  <FaYoutube/>
               </button>
            </a>
            <a className="no-underline cursor-pointer">
               <button className="mr-3 w-14 h-14 mt-2 inline-flex items-center rounded-xl justify-center font-semibold bg-blue-500">
                  <FaTiktok/>
               </button>
            </a>
            <a className="no-underline cursor-pointer">
               <button className="mr-3 w-14 h-14 mt-2 inline-flex items-center rounded-xl justify-center font-semibold bg-blue-500">
                  <AiOutlineMail/>
               </button>
            </a>
         </div>
         </div>
      </div>
      <div className='flex flex-wrap pb-10'>
      <div className="pr-16 pt-10 w-1/2 items-start text-left flex-col text-white">
            <div className="relative w-16 h-16 ">
               <img src='https://res.cloudinary.com/dnj5kt9rv/image/upload/v1686643842/3B_1_xxig9w.svg'></img>
            </div>
            <div className="text-xl font-semibold my-2 ">Music-NFTs-streaming-app</div>
            <div className="text-base">The world first and largest digital marketplace for electronic music collections and non-fungible tokens (NFTs). Buy, sell and discover exclusive digital items.</div>
         </div>
         {/* <div className="flex w-1/2 pt-10 pl-16 text-left items-start flex-col text-white justify-around">
            <div className='flex mb-4 h-full w-1/5 items-start pt-0 flex-col'>
                     <h3 className='text-base font-semibold my-4'>Marketplace</h3>
               <ul className='mb-4'>
                  <li>
                     <span>Music NFT</span>
                  </li>
               </ul>
            </div>
            <div className='flex mb-4 h-full w-1/5 items-start pt-0 flex-col'>
                     <h3 className='text-base font-semibold my-4'>My Account</h3>
               <ul className='mb-4'>
                  <li>
                     <span>Profile</span>
                  </li>
               </ul>
            </div>
         </div> */}
         
      </div>
   </div> );
}

export default Footer;
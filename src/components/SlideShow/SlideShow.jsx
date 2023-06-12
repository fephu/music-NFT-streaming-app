import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px',
  borderRadius: '1rem'

}
const slideImages = [
  {
    url: 'https://i.seadn.io/gcs/files/e3fbee95e16b183a24056c9b098d4627.png?auto=format&dpr=1&w=1920',
    caption: 'Slide 1'
  },
  {
    url: 'https://i.seadn.io/gae/PoiTYmXF06jFZ88f_QZNGIQCewAs3V1_DPGHw_YEMiX24EzgwJS8LS9waOcboa2DVfvjeUfl0NpQChu4brVyBnmTkoiCu3CRWZ5R5g?auto=format&dpr=1&w=1920',
    caption: 'Slide 2'
  },
  {
    url: 'https://i.seadn.io/gae/JtV8EvfBzISJSUEo53uM7K1l1wT59X5SuGf8ZkX-_CqxAkOsvMy-5GdCUv_--fNUlCi9UqMRSE8KpqGekOFsUrIif3-YEcS6NlSv1E0?auto=format&dpr=1&w=1920',
    caption: 'Slide 3'
  },
];

function SlideShow() {
   return ( <div className="slide-container">
   <Slide>
    {slideImages.map((slideImage, index)=> (
       <div key={index}>
         <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>          
         </div>
       </div>
     ))} 
   </Slide>
 </div> );
}

export default SlideShow;

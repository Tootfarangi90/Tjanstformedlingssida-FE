import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
import { CarouselData } from './CarouselData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import Allcategories from '../../routes/categories/Allcategories'






const Home = ({slides}) => {
const [currentSlide, setCurrentSlide] = useState(0);
const length = slides.length;

const nextSlide = ()=> {
  setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide +1)
};

const preSlide = () => {
  setCurrentSlide (currentSlide === 0 ? length - 1 : currentSlide - 1);

};

console.log(currentSlide);

if(!Array.isArray(slides) || slides.length <= 0) {
  return null;
}

let navigator = useNavigate(); 
const routeChange = () =>{ 
  let path = `Allcategories`; 
  navigator(path);
}

  return (

    <div>
        <h1 id="main-title">
            Populära tjänster
        </h1>

        <section className='carousel'>
          <FaArrowAltCircleLeft className='left-arrow' onClick={preSlide} />
          <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
          {CarouselData.map((slides, index)=> {
            return (
              <div className={index ===currentSlide ? 'slide active' : 'slide'} key={index}>
                {index === currentSlide && (< img src={slides.img} alt="Service image" className='img' />)}
                {index === currentSlide && (<p> {slides.name} </p>)}

               
                
                
                
              </div>
            )
          })}
        </section>
        <button className='category-btn' onClick={routeChange}> Alla kategorier </button>
     
    </div>
  )
}

export default Home
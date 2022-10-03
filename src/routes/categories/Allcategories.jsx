import React from 'react'
import { useState } from 'react';
import { CarouselData } from '../../components/home/CarouselData';
import './allcategories.css';


const Allcategories = () => {

    const [data, setData] = useState (CarouselData);

    const catFilter = (catItem) => {
      const result = CarouselData.filter((filtData) => {
        return filtData.category === catItem;
      }) ;
      setData(result);
    }

 

  
  return (
    <>
      <div className='main'>

        <nav className='nav'>
            <button className='btn' onClick={()=> setData (CarouselData)}>All</button>  
            <button className='btn' onClick={()=> catFilter ('Craftmanship')}>Craftmanship</button>
            <button className='btn' onClick={()=> catFilter ('Music')}>Music</button>
            <button className='btn' onClick={()=> catFilter ('Coaching')}>Coaching</button>
            <button className='btn' onClick={()=> catFilter ('Tech')}>Tech</button>
            <button className='btn' onClick={()=> catFilter ('Cooking')}>Cooking</button>
            
        </nav>

      <section className='category-items'>
        {data.map((values) => {
          const{id, name, category, img, text, phone, mail} = values;
          return (
            <>
              <div className='category-items' key={id}>
                    <div className='item-name' key={name}>
                       <h2 className='title'>{name}</h2>
                       <h4 className='cat'>{category}</h4>
                       <p className='text'>{text}</p>
                       <p className='phone'>{phone}</p>
                       <p className='mail'>{mail}</p>

                    </div>
                    <div className='item-img' key={img}> 
                    
                      <img className='service-img' src={img} alt={category} />
                    </div>

              </div>
            </>
          )

        })}
      </section>
      </div>
  
    </>

  )
}

export default Allcategories
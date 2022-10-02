import React from 'react'
import { useState } from 'react';
import { CarouselData } from '../../components/home/CarouselData';


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
            
        </nav>

      <section className='category-items'>
        {data.map((values) => {
          const{id, name, category, img, text, phone, mail} = values;
          return (
            <>
              <div className='category-items' key={id}>
                    <div className='item-name' key={name}>
                       <h2>{name}</h2>
                       <h4>{category}</h4>
                       <p>{text}</p>
                       <p>{phone}</p>
                       <p>{mail}</p>

                    </div>
                    <div className='item-img' key={img}> 
                    
                      <img src={img} alt={category} />
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
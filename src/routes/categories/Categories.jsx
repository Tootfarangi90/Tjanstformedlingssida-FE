import { useState } from 'react';
import { CarouselData } from '../../components/home/CarouselData';
import './categories.css'
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Categories() {
    const [data, setData] = useState (CarouselData);

    const catFilter = (catItem) => {
      const result = CarouselData.filter((filtData) => {
        return filtData.category === catItem;
      }) ;
      setData(result);
    }
  
    return (
        <>
        <div className="top-nav">
          <div className="inner-nav">
          <button className='btn-top' onClick={()=> setData (CarouselData)}>All</button>  
            <button className='btn-top' onClick={()=> catFilter ('Craftmanship')}>Craftmanship</button>
            <button className='btn-top' onClick={()=> catFilter ('Music')}>Music</button>
            <button className='btn-top' onClick={()=> catFilter ('Coaching')}>Coaching</button>
            <button className='btn-top' onClick={()=> catFilter ('Tech')}>Tech</button>
            <button className='btn-top' onClick={()=> catFilter ('Cooking')}>Cooking</button>
          </div>
        </div>
    <div className="category-container">

<div className="category-right">

       <div className="all-categories">
       {data.map((values) => {
           const{id, name, category, img, text, phone, mail} = values;
           return (
               <>
                <div className='category-items' key={id}>
                    <div className='item-name' key={name}>
                       <h2 className='title'>{name}</h2>
                    <div className='item-img' key={img}>
                    
                      <img className='service-img' src={img} alt={category} />
                    </div>
                       <h4 className='cat'>{category}</h4>
                       <p className='text'>{text}</p>
                       <p className='phone'>{phone}</p>
                       <a href={`mailTo:${mail}`}><EmailOutlinedIcon /></a>
                    </div>
              </div>
            </>
          )
          
        })}
        </div>
       </div>
    </div>
        </>
  )
}

import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Tjänster = () => {
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [message, setMessage] = useState('')

    const params = useParams()
    //const token = localStorage.getItem('accessToken')

    const categoryChanged  = (e) => setCategory(e.target.value)
    const descriptionChanged   = (e) => setDescription(e.target.value)
    const titleChanged      = (e) => setTitle(e.target.value)
    const priceChanged   = (e) => setPrice(e.target.value)
    
    
    const postAd = async (e) => {

        e.preventDefault();

        try {
        const res = await fetch(`${process.env.REACT_APP_API_ADRESS}advertisement`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                category,
                description,
                title,
                price
            })
          })

            const data = await res.json()
            console.log(res.status)
            console.log(data)
        
              if(res.status == 200) {
                setMessage(data.message)
                return
              }


        } catch (error) {
            console.log(error)
        }
    }

return (

    <section id="form">
        <h1>Annonsera din tjänst här</h1>
    
    <form onSubmit={postAd}>

        <p>{message}</p>
        <div className="input-group">

            <input
            type="text" 
            name='category' 
            value={category} 
            placeholder="Kategori"
            onChange={categoryChanged} 
            />

        </div>

            <input 
            type="text" 
            name='title' 
            value={title} 
            placeholder="Titel"
            onChange={titleChanged}
            />

        <div className="input-group">

            <textarea type="text" 
            name='description' 
            value={description} 
            placeholder="Beskrivning"
            onChange={descriptionChanged}
            />

        </div>

        <div className="input-group">

            <input type="number" 
            name='price' 
            value={price} 
            placeholder="Pris"
            onChange={priceChanged}
            />

        </div>

        <button className='button'>Skapa annons</button>

    </form>
</section>
  )
}

export default Tjänster
import React,{useState} from 'react';
import {db} from '../config/fbConfig'


const AddData = () => {

    const [title,setTitle] = useState('')
    const [img,setImg] = useState('')
    const [price, setPrice] = useState('')
    const [content,setContent] = useState('')
    const [card,setCard] = useState('')

    const date = new Date()
    const handleSubmit = (e) => {
        const body ={ title:title, img:img, price:price, content:content, card:card,date:date}
        e.preventDefault()
        db.collection('item').add(body).then((doc) => {
            console.log('success:',doc)
            setTitle('')
            setImg('')
            setPrice('')
            setContent('')
            setCard('')
        }).catch((error) => {
            console.log('error:',error)
        })
        console.log(body)
    }



    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label>title</label>
                <input name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>img</label>
                <input name="image" type="text" value={img} onChange={(e) => setImg(e.target.value)}></input>
                <label>price</label>
                <input name="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                <label>content</label>
                <input name="content" type="text" value={content} onChange={(e) => setContent(e.target.value)}></input>
                <label>card</label> 
                <input name="card" list="card-list" value={card} onChange={(e) => setCard(e.target.value)}></input>
                <datalist id="card-list">
                    <option value="top-left" />
                    <option value="top-right" />
                    <option value="bottom-left" />
                    <option value="bottom-right" />
                </datalist>

                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default AddData;
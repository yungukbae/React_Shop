import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import {ImgData} from '../DataDummy'
import { useHistory } from 'react-router-dom'
import { FaArrowAltCircleRight } from "react-icons/fa";
import {db} from '../../config/fbConfig'
import { Link } from 'react-router-dom' 

const SliderComp = () => {

    const history = useHistory();
    const rand = Math.floor(Math.random() * 4);
    const rand2 = Math.floor(Math.random() * 2)
    const array = ['title','date','content','price']
    const array2 = ['asc','desc']
    const fetch = db.collection('item').orderBy(array[rand],array2[rand2])
    const [item,setItem] = useState([]);
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrow:false,
        autoplay:true,
        };


        useEffect(() => {
            
            fetch.limit(5).get().then(res => {
                res.docs.forEach((data) => {
                    setItem((item) => [...item,data])
                })
            })
            
        }, [])


    return(
        <div className="slider-contain">
                            <Slider {...settings}>
                            {item.map((item,index) => {
                                return(
                                    <div key={index}>
                                        <div className="card-container"> <div className={ 'card '+ item.data().card}> 
                                        <h2 style={{ textTransform:'uppercase'}}>{ item.data().title }</h2>
                                        <h4>Price: ${ item.data().price }</h4>
                                        <p>{item.data().content}</p>
                                        <Link to={`/item/${item.id}`}>{item.data().title} <FaArrowAltCircleRight style={{ paddingTop:'7px'}}/></Link>
                                        </div></div>
                                        <img src={item.data().img}></img>
                                        <div className="background-img" style={{ backgroundImage:`url(${item.data().img})`}}></div>
                                    </div>
                                )
                            })}

                            {/* <div>
                                <div className="card top-left">Name: camaro Color:Aqua Blue Engine:V8 Click -{`>`}</div>
                                <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                                <div className="background-img"></div>
                            </div>

                            <div>
                                <div className="card top-right">Name: camaro Color:Aqua Blue Engine:V8 Click -{`>`}</div>
                                <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                                <div className="background-img"></div>
                            </div>


                            <div>
                                <div className="card bottom-left">Name: camaro Color:Aqua Blue Engine:V8 Click -{`>`}</div>
                                <img src="https://images.unsplash.com/photo-1498595664159-2df8dee7e63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                                <div className="background-img"></div>
                            </div>


                            <div>
                                <div className="card botton-right">Name: camaro Color:Aqua Blue Engine:V8 Click -{`>`}</div>
                                <img src="https://images.unsplash.com/photo-1605515197928-7dee6907e5ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1113&q=80" />
                                <div className="background-img"></div>
                            </div>


                            <div>
                                <div className="card top-left">Name: camaro Color:Aqua Blue Engine:V8 Click -{`>`}</div>
                                <img src="https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/>
                                <div className="background-img"></div>
                            </div> */}
                            </Slider>
                        </div>
    )


}

export default SliderComp;
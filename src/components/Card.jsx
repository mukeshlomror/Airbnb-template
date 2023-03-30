import React from 'react'
import katie from '../images/katie-zaferes.png'
import star from "../images/star.png"
import wedding from '../images/wedding.png'
import bike from '../images/bike.png'
const Card = () => {
  return (
    <div className='cards'>
    <div className='card'>
        <img src={katie} alt="katie" className="card--image" />
        <div className="card--stats">
                <img className="card--star" src={star} alt='star' />
                <span className="gray">5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
    </div>

     <div className='card'>
     <img src={wedding} alt="wedding" className="card--image" />
     <div className="card--stats">
        <img className="card--star" src={star} alt='star' />
        <span className="gray">5.0</span>
        <span className="gray">(30) • </span>
        <span className="gray">USA</span>
    </div>
    <p>Life Learn wedding photography</p>
    <p><span className="bold">From $136</span> / person</p>
</div>

     <div className='card'>
        <img src={bike} alt="bike" className="card--image" />
        <div className="card--stats">
                <img className="card--star" src={star} alt='star' />
                <span className="gray">4.8</span>
                <span className="gray">(2) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Group biking</p>
            <p><span className="bold">From $136</span> / person</p>
    </div>

    </div>
  )
}

export default Card
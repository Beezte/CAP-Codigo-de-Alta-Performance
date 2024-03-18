import React from 'react'
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';

const Sobre = () => {
  return (
    <div className="sobre-section-container">
        
        <div className="sobre-section-image-container">
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="sobre-section-text-container">
            <p className="primary-subheading">Sobre</p>
            <h1 className="primary-heading">
            A comida desempenha um papel fundamental em uma alimentação balanceada.
            </h1>
            <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt 
            magna non et elit. Dolor  turpis molestie dui
            magnis facilisis at fringilla quam.
            </p>
            <p className="primary-text">
            Non tincidunt 
            magna non et elit. Dolor  turpis molestie dui
            magnis facilisis at fringilla quam.
            </p>
            <div className="sobre-buttons-container">
                <button className="secondary-button">Saber mais</button>
                <button className="watch-video-button"> {" "} <BsFillPlayCircleFill/> Assistir video </button>
            </div>
        </div>
    </div>
  )
}

export default Sobre
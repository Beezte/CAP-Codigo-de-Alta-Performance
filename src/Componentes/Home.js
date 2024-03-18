import React from 'react'
import Navbar from './Navbar'
import BannerImage from "../Assets/home-banner-image.png";
import {FiArrowRight} from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
        <Navbar/>
        <div className="home-banner-container">
            
            <div className="home-text-section">
                <hi className="primary-heading">
                Seu prato predileto
                Chega quente e
                Recém-preparado
                </hi>
                <p className="primary-text">
                Cozinheiros cuidam de todas as etapas da preparação,
                como cortar, fatiar e temperar, 
                para que você possa desfrutar de refeições frescas. 
                </p>
                <button className="secondary-button">
                    Peça agora <FiArrowRight/>
                </button>
            </div>
            <div className="home-image-container">
                <img src={BannerImage} alt= "" />

            </div>
        </div>
    </div>
  )
}

export default Home
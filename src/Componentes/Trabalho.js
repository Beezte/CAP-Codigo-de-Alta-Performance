import React from 'react'
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import PickMeals from "../Assets/pick-meals-image.png";


const Trabalho = () => {
    const trabalhoInfoData = [
        {
        image: PickMeals,
        title: "Escolha as refeições",
        text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
        image: ChooseMeals,
        title: "Escolha com que frequência",
        text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et.",
        },
        {
        image: DeliveryMeals,
        title: "Entregas rápidas",
        text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum.",
        },
        
    ]
  return (
    <div className="trabalho-section-wrapper">
        <div className="trabalho-section-top">
            <p className="primary-subheading">Trabalho</p>
            <h1 className="primary-heading">Como funciona</h1>
            <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt 
            magna non et elit. Dolor  turpis molestie dui
            magnis facilisis at fringilla quam.
            </p>
        </div>
        <div className="trabalho-section-bottom">
            {
                trabalhoInfoData.map((data) => (
                    <div className="trabalho-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Trabalho
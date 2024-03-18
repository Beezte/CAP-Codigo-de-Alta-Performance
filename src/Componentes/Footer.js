import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualidade</span>
          <span>Ajuda</span>
          <span>Compartilhar</span>
          <span>Carreiras</span>
          <span>Depoimentos</span>
          <span>Trabalho</span>
        </div>
        <div className="footer-section-columns">
          <span>4002-8922</span>
          <span>ola@food.com</span>
          <span>imprensa@food.com</span>
          <span>contato@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Termos e Condições</span>
          <span>Política de Privacidade</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

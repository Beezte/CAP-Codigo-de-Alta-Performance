import React from "react";

const Contatos = () => {
  return (
    <div className="contato-page">
      
      <h1 className="primary-heading">Tem uma pergunta em mente?</h1>
      <h1 className="primary-heading">Deixe-nos ajudá-lo</h1>
      <div className="contato-form-container">
        <input type="text" placeholder="seumail@gmail.com" />
        <button className="secondary-button"  type="submit" required>Enviar</button>
      </div>
    </div>
    
  );
};

export default Contatos;
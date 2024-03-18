import React, { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    telefone: "",
    email: "",
    dataReserva: "",
    numeroPessoas: "",
    preferencia: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h1 className="primary-heading">Faça sua Reserva</h1>
      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="nomeCompleto">Nome Completo:</label>
          <input
            type="text"
            id="nomeCompleto"
            name="nomeCompleto"
            value={formData.nomeCompleto}
            placeholder="seu nome completo"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Número de Telefone:</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            placeholder="(99) 9 9999-9999"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Endereço de E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="seuemail@gmail.com"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dataReserva">Data da Reserva:</label>
          <input
            type="date"
            id="dataReserva"
            name="dataReserva"
            value={formData.dataReserva}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numeroPessoas">Número de Pessoas:</label>
          <input
            type="number"
            id="numeroPessoas"
            name="numeroPessoas"
            value={formData.numeroPessoas}
            placeholder=" 1 ou mais pessoas"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="preferencia">Preferências:</label>
          <input
            type="text"
            id="preferencia"
            name="preferencia"
            value={formData.preferencia}
            placeholder="pratos, atendimento..."
            onChange={handleChange}
          />
        </div>
        
        <button className="secondary-button" type="submit">
          Enviar
        </button>
        
      </form>
    </div>
  );
};

export default Formulario;

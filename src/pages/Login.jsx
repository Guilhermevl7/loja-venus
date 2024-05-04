import React, { useState } from "react";
import "./Login.css";

function Formulario() {
  const [usuario, setUsuario] = useState({ nome: "", senha: "" });
  const [usuarios, setUsuarios] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!usuario.nome.trim() || !usuario.senha.trim()) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setUsuarios([...usuarios, usuario]);
    setUsuario({ nome: "", senha: "" });
  };

  const handleEdit = (index) => {
    const selectedUser = usuarios[index];
    setUsuario({ ...selectedUser });
    setUsuarios(usuarios.filter((_, i) => i !== index));
  };

  const handleDelete = (index) => {
    setUsuarios(usuarios.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="box">
        <h1>VÊNUS</h1>
        <p>HANDMADE</p>

        <form onSubmit={handleSubmit}>
          <div className="inputbox">
            <label htmlFor="nome"></label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Telefone, nome de usuário ou email"
              value={usuario.nome}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputbox">
            <label htmlFor="email"></label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              value={usuario.senha}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="botao">
            Entrar
          </button>
        </form>
      </div>

      <div className="containerusuarios">
        <div className="boxusuarios">
          <h2>Usuários :</h2>
          <ul>
            {usuarios.map((user, index) => (
              <li key={index}>
                <div>
                  <strong>Usuário:</strong> {user.nome}
                </div>
                <div>
                  <strong> Senha:</strong> {user.senha}
                </div>
                <div>
                  <button
                    onClick={() => handleEdit(index)}
                    className="botaoeditar"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="botaoexcluir"
                  >
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Formulario;

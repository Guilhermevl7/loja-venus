import React from "react";
import { useParams } from "react-router-dom";
import { produtos } from "../utils/mock";
import { Container } from "../components";
import "./produtos.css";

function ProdutoDetalhes() {
  const { id } = useParams();
  const produto = produtos.find((produto) => produto.id === id);

  if (!produto) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <Container>
      <div>
        <h2>{produto.nome}</h2>
        <img src={produto.image} alt={produto.nome} />
        <h2>{produto.preço}</h2>
        <p>
          <h3>Descrição: {produto.descriçao}</h3>
        </p>
        <button>Comprar</button>
      </div>
    </Container>
  );
}

export default ProdutoDetalhes;

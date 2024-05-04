import React from "react";
import { Card, Container } from "../components";
import { useNavigate } from "react-router-dom";
import { produtos } from "../utils/mock";

export default function Home() {
  const navigate = useNavigate();

  const handleProdutoClick = (produto) => {
    navigate(`/produto/${produto.id}`);
  };

  return (
    <Container>
      <div
        style={{
          padding: "0px",
          backgroundColor: "rgb(235, 209, 209)",
          textAlign: "center",
          border: "dashed 1px",
          margin: "0px",
          borderColor: "#2A1810",
        }}
      >
        <h4>5% de desconto no PIX | 30 dias pra a troca de produtos</h4>
      </div>
      <h1 style={{ fontFamily: "sans-serif" }}>Lançamentos</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {produtos.map((produto) => (
          <div>
            <Card
              title={produto.nome}
              valor={produto.preço}
              image={produto.image}
              // onClick={() => navigate("/carrinho", { state: produto })}
              onClick={() => handleProdutoClick(produto)}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}

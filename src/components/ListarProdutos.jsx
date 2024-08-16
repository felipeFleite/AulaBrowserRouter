import { useState } from "react";
export default function ListaProduto() {
        const [listaProduto, setProduto] = useState([
          {id: 1, nome: "a", preco: "R$ 2,00"},
          {id: 2, nome: "b", preco: "R$ 5,00"},
          {id: 3, nome: "c", preco: "R$ 12,00"},
        ])   
        return (
          <div>
              
              {
                listaProduto.map((produto) =>
                <div key = {produto.id}>
                <p>{produto.nome}</p>
                <p>{produto.preco}</p>
                <button>Comprar</button>
                </div>
                )
              }
          </div>
         
        );
            }
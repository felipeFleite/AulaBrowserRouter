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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0YQ0U77Xk4LJu3u1-E-0YIxlLRJcneKhOAA1jWlnbcr4i2qP9l_5tYibzA&s"/>
                <p>{produto.nome}</p>
                <p>{produto.preco}</p>
                <button>Comprar</button>
                </div>
                )
              }
          </div>
         
        );
            }
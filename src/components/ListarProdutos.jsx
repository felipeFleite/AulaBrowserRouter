import { useState } from "react";
import "/src/globals.css"
export default function ListaProduto() {
        const [listaProduto, setProduto] = useState([
          {id: 1, nome: "a", preco: "R$ 2,00"},
          {id: 2, nome: "b", preco: "R$ 5,00"},
          {id: 3, nome: "c", preco: "R$ 12,00"},
          {id: 4, nome: "c", preco: "R$ 12,00"},
          {id: 5, nome: "c", preco: "R$ 12,00"},
          {id: 6, nome: "c", preco: "R$ 12,00"},
          {id: 7, nome: "c", preco: "R$ 12,00"},
          {id: 8, nome: "c", preco: "R$ 12,00"},
          {id: 9, nome: "c", preco: "R$ 12,00"},
          {id: 10, nome: "c", preco: "R$ 12,00"},
          {id: 11, nome: "c", preco: "R$ 12,00"},
          {id: 12, nome: "c", preco: "R$ 12,00"},
          {id: 13, nome: "c", preco: "R$ 12,00"},
          {id: 14, nome: "c", preco: "R$ 12,00"},
          {id: 15, nome: "c", preco: "R$ 12,00"},
        ])   
        return (
          <div id="cards">
              
              {
                
                listaProduto.map((produto) =>
                <div id ="produte" key = {produto.id}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0YQ0U77Xk4LJu3u1-E-0YIxlLRJcneKhOAA1jWlnbcr4i2qP9l_5tYibzA&s"/>
                <p class="text">{produto.nome}</p>
                <p class="text">{produto.preco}</p>
                <button>Comprar</button>
                </div>
                )
              }
          </div>
         
        );
            }
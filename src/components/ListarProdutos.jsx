import { useState } from "react";
import "/src/globals.css"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
export default function ListaProduto() {
        const [listaProduto, setProduto] = useState([
          {id: 1, nome: "a", preco: "R$ 2,00", imgUrl: ""},
          {id: 2, nome: "a", preco: "R$ 2,00", imgUrl: ""},
          {id: 3, nome: "a", preco: "R$ 2,00", imgUrl: ""},
          {id: 4, nome: "a", preco: "R$ 2,00", imgUrl: ""},
          {id: 5, nome: "a", preco: "R$ 2,00", imgUrl: ""},
          {id: 6, nome: "a", preco: "R$ 2,00", imgUrl: ""},
          {id: 7, nome: "a", preco: "R$ 2,00", imgUrl: ""},
          {id: 8, nome: "a", preco: "R$ 2,00", imgUrl: ""},
          {id: 9, nome: "a", preco: "R$ 2,00", imgUrl: ""},
          {id: 10, nome: "a", preco: "R$ 2,00", imgUrl: ""},
          {id: 11, nome: "a", preco: "R$ 2,00", imgUrl: ""},
          {id: 12, nome: "a", preco: "R$ 2,00", imgUrl: ""},
          {id: 13, nome: "a", preco: "R$ 2,00", imgUrl: ""},
          {id: 14, nome: "a", preco: "R$ 2,00", imgUrl: ""},
          {id: 15, nome: "a", preco: "R$ 2,00", imgUrl: ""},
        ])   
        const [listaPedidos, setlistaPedidos] = useState([])
        const adicionarPedido = (nome) => {
          toast(`O produto foi adicionado ao carrinho`)
          setlistaPedidos([...listaPedidos, nome])
      }
        return (
          <div id="cards">
              
              {
                
                listaProduto.map((produto) =>
                <div id ="produte" key = {produto.id}>
                <img src={produto.imgUrl}/>
                <p class="text">{produto.nome}</p>
                <p class="text">{produto.preco}</p>
                <button onClick={adicionarPedido}>Comprar</button>
                </div>
                )
              }
               <ToastContainer/>
          </div>
         
        );
            }
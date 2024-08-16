import { useState } from "react";
export default function ListaProduto() {
        const [listaProduto, setProduto] = useState([
          {id: 1, nome: "a", preco: "R$ 2,00"},
          {id: 2, nome: "b", preco: "R$ 5,00"},
          {id: 3, nome: "c", preco: "R$ 12,00"},
        ])
      
        const [listaPedidos, setListaPedidos] = useState([])
      
        const adicionarItemPedidos = (objeto) => {
            setListaPedidos([...listaPedidos,objeto])
        }
      
        const removerPedido = (id) => {
          let remover = false
          let listaAux = listaPedidos.filter((produto)=> {
            if(remover == false) {
              if(produto.id != id) {
                return produto
              } else{
                remover = true
                return null
              }
            } else {
              return produto
            }
          })
          setListaPedidos(listaAux)
        }
        return (
          <div>
              
              {
                listaProduto.map((produto) =>
                <div key = {produto.id}>
                <p>{produto.nome}</p>
                <p>{produto.preco}</p>
                <button onClick={()=> adicionarItemPedidos(produto)}>Comprar</button>
                </div>
                )
              }
              {
                listaPedidos.map((produto)=>
                <div key = {produto.id}>
                <p>{produto.nome}</p>
                <p>{produto.preco}</p>
                <button onClick={()=> removerPedido(produto.id)}>Remover</button>
                </div>
                )
              }
          </div>
         
        );
      }
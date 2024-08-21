import { useState } from "react";
import "/src/globals.css"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
export default function ListarPoucosProdutos() {
  const precoFinal = function (preco, desconto) {
    if(desconto != 0){
    const transformaNumber = parseFloat(preco.replace('R$ ', '').replace('.', '').replace(',', '.'))
    const descontoDado = transformaNumber * desconto / 100
      return descontoDado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }else{
    return preco
  }
}
        const [listaProduto, setProduto] = useState([
          {id: 1, promocao: 25, marca: "Fiat", nome: "Titano", preco: "R$ 219.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/titano.webp"},
          {id: 2, promocao: 0, marca: "Fiat", nome: "500e", preco: "R$ 214.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/500e.webp"},
          {id: 3, promocao: 25, marca: "Fiat", nome: "Mobi", preco: "R$ 73.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/mobi.webp"},
          {id: 4, promocao: 25, marca: "Fiat", nome: "Argo", preco: "R$ 85.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/argo.webp"},
          {id: 5, promocao: 0, marca: "Fiat", nome: "Cronos", preco: "R$ 94.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/cronos.webp"},
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
                <img id="carros" src={produto.imgUrl}/>
                <h3 id="text">{produto.nome}-{produto.marca}</h3>
                <h3 id="text">{precoFinal(produto.preco, produto.promocao)}</h3>
                <button onClick={adicionarPedido}>Comprar</button>
                </div>
                )
              }
               <ToastContainer/>
          </div>
         
        );
            }
import { useState } from "react"
import "/src/globals.css"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
export default function ListarProdutos({lista}) {
  const precoFinal = function (preco, desconto) {
    if(desconto != 0){
    const transformaNumber = parseFloat(preco.replace('R$ ', '').replace('.', '').replace(',', '.'))
    const descontoDado = transformaNumber * desconto / 100
    return (
      <div>
        <div className="precoOg">Preço original: {transformaNumber.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
        <div className="precoDesconto">Preço com desconto de {desconto}%: {descontoDado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
      </div>
    );
  }else{
    return preco
  }
}
const [listaPedidos, setlistaPedidos] = useState([])
const adicionarPedido = (nome) => {
  toast(`O produto foi adicionado ao carrinho`)
  setlistaPedidos([...listaPedidos, nome])
}
        return (
          <div id="cards">
              
              {
                lista.map((produto) =>
                <div id ="produte" key = {produto.id}>
                <img id="carros" src={produto.imgUrl}/>
                <h3 id="text">{produto.nome} -{produto.marca}</h3>
                <h3 id="text">{precoFinal(produto.preco, produto.promocao)}</h3>
                <button id="buton"onClick={adicionarPedido}>Comprar</button>
                </div>
                )
              }
              <ToastContainer/>
          </div>
         
        );
            }
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Header from "../components/Header"
import "/src/globals.css"
import Footer from "../components/Footer"
import ListarProdutos from '../components/ListarProdutos'
import { useState } from 'react'
export default function Home() {
    const [listaProduto, setProduto] = useState([
        {id: 1, promocao: 25, marca: "Fiat", nome: "Titano", preco: "R$ 219.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/titano.webp"},
        {id: 2, promocao: 0, marca: "Fiat", nome: "500e", preco: "R$ 214.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/500e.webp"},
        {id: 3, promocao: 25, marca: "Fiat", nome: "Mobi", preco: "R$ 73.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/mobi.webp"},
        {id: 4, promocao: 25, marca: "Fiat", nome: "Argo", preco: "R$ 85.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/argo.webp"},
        {id: 5, promocao: 0, marca: "Fiat", nome: "Cronos", preco: "R$ 94.000,00", imgUrl: "https://www.fiat.com.br/content/dam/fiat/nova-home/carrossel/cronos.webp"},
        ]) 

    return(
        <>
        
        <Header/>
        <Carousel
        infiniteLoop
        autoPlay
        usekeyboardArrows
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        dynamicHeight
        >

        <div>
        <img src ="https://www.designi.com.br/images/preview/10102113.jpg"/>
        </div>

        <div>
        <img src ="img\388_resized_resized.webp"/>
        </div>

        <div>
        <img src ="https://www.designi.com.br/images/preview/10172138.jpg"/>
        </div>

        </Carousel>
        <h1 id="title">PRODUTOS</h1>
        <ListarProdutos lista={listaProduto}/>
        <Footer/>
        </>
    )
}
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Header from "../components/Header"
import "/src/globals.css"
import ListaProduto from '../components/ListarProdutos'
import Footer from "../components/Footer"

export default function Home() {
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
        <img src ="https://cdn.appdealersites.com.br/barigui/eva/conteudo/388.webp" alt="Carro"/>
        </div>

        <div>
        <img src ="https://cdn.appdealersites.com.br/discasa/agosto/PC%20-%20T-Cross%20(1).webp" alt="Foto de homem na frente de um carro"/>
        </div>

        <div>
        <img src ="https://www.designi.com.br/images/preview/10172138.jpg" alt="Carro Branco"/>
        </div>

        </Carousel>
        <ListaProduto/>
        <Footer/>
        </>
    )
}
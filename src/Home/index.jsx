import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Header from "../components/Header"
import "/src/globals.css"
import Footer from "../components/Footer"
import ListarPoucosProdutos from '../components/ListarPoucosProdutos'

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
        <ListarPoucosProdutos/>
        <Footer/>
        </>
    )
}
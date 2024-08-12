import Header from "../components/Header"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
    return(
        <>
        <Carousel
        <div>
        <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRicA5AYQwSbfKZZlB52Ar_yLUfdu_mRzTMRA&s" alt="Carro"></img>
        </div>
        <div>
        <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dMRIWoNixPmIw5wfxWm90vHEdE72rPJqkA&s" alt="Foto de homem na frente de um carro"
        </div>
        >
        </Carousel>
        </>
    )
}
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function Home() {
    return(
        <>
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
        <img src ="https://www.designi.com.br/images/preview/10243023.jpg" alt="Carro"/>
        </div>

        <div>
        <img src ="https://www.designi.com.br/images/preview/11876061.jpg" alt="Foto de homem na frente de um carro"/>
        </div>

        <div>
        <img src ="https://www.designi.com.br/images/preview/10172138.jpg" alt="Carro Branco"/>
        </div>

        </Carousel>
        </>
    )
}
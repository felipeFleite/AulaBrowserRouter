import ListarProdutosOferta from "../../components/ListarProdutosOferta"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
export default function Produto() {
    return(
        <>
        <Header/>
        <h1 id="title">OFERTAS</h1>
        <ListarProdutosOferta/>
        <Footer/>
        </>
    )
}
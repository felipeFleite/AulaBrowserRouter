import ListarProdutos from "../../components/ListarProdutos"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
export default function Produto() {
    return(
        <>
        <Header/>
        <h1 id="title">PRODUTOS</h1>
        <ListarProdutos/>
        <Footer/>
        </>
    )
}
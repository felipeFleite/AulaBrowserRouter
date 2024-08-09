import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header>
            <Link to="/">
            <p>Home</p>
            </Link>
            <Link to="/produto">
           <p>Produtos</p> 
            </Link>
            <Link to="/oferta">
           <p> Oferta</p> 
            </Link>
        </header>
    )
}
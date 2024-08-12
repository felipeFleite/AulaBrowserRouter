import { Link } from "react-router-dom";
export default function Header() {
    return (
     <header>
        <nav>
            <ul>
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/produto">
           <li>Produtos</li> 
            </Link>
            <Link to="/oferta">
           <li> Ofertas</li> 
            </Link>
            </ul>
        </nav>
     </header>
    )
}
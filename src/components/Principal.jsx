import Pedidos from "../pages/Pedidos";
import Home from "../pages/Home";
import Novo from "../pages/Novo";
import Sobre from "../pages/Sobre";

export default function Principal() {
    return(
        <main>
        <Home/>
        <Pedidos/>
        <Novo/>
        <Sobre/>

        </main>
    )
}
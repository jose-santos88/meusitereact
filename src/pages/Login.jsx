import { useNavigate } from "react-router-dom"
import Section from "../components/Section"

export default function Login(props) {
    const navigate = useNavigate()


    function handleClick(event) {
        props.onLogin()
        navigate("/home")
    }
    return(
        <Section titulo="Login">
            <button onClick={handleClick}>Entrar</button>
        </Section>
    )
}
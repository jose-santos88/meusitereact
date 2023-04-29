import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import Section from "../components/Section"

export default function Login(props) {
    const [email, setEmail] = useState()

    const navigate = useNavigate()


    function handleClick(event) {
        props.onLogin()
        navigate("/home")
    }

    function handleFocus(event) {
     console.log('entrar no campo email');
    }

     function handleBlur(event) {
            console.log('saiu do campo email');
        }

        function handleChance(event) {
            setEmail(event.target.value)
        }
    
    return(
        <Section titulo="Login">
            <p>{email}</p>
            <input type="email" placeholder="E-mail" onChange={handleChance} onFocus={handleFocus} onBlur={handleBlur} />
            <input type="password" placeholder="Senha" />
            <button onClick={handleClick}>Entrar</button>
        </Section>
    )
}
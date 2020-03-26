import React from 'react'
import { FiLogIn } from 'react-icons/fi'

import logoImage from '../../assets/logo.svg'
import heroesImage from '../../assets/heroes.png'

import './styles.css'

function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="Be The Hero" />
                <form>
                    <h1>Faça seu login</h1>

                    <input type="text" placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <a href="/register"><FiLogIn size={16} color="#E02041" /> Não tenho cadastro</a>
                </form>
            </section>

            <img src={heroesImage} alt="Heroes"/>
        </div>
    )
}

export default Login
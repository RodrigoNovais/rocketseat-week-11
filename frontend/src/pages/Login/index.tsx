import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import logoImage from '../../assets/logo.svg'
import heroesImage from '../../assets/heroes.png'
import api from '../../services/api'

import './styles.css'

const Login: React.FC = () => {
    const history = useHistory()

    const [id, setId] = useState('')

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()

        api.post<{ name: string }>('sessions', { id })
            .then(response => {
                localStorage.setItem('ngoId', id)
                localStorage.setItem('ngoName', response.data.name)

                history.push('/profile')
            })
            .catch(error => alert('Falha no login, tente novamente'))
    }

    if (localStorage.getItem('ngoId'))
        history.push('/profile')

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input type="text" placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register"><FiLogIn size={16} color="#E02041" /> Não tenho cadastro</Link>
                </form>
            </section>

            <img src={heroesImage} alt="Heroes"/>
        </div>
    )
}

export default Login

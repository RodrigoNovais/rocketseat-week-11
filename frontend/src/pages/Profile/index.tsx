import React from 'react'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import logoImage from '../../assets/logo.svg'

import './styles.css'

export default () => (
    <div className="profile-container">
        <header>
            <img src={logoImage} alt="Be The Hero"/>
            <span>Bem vinda, APAD</span>

            <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
            <button><FiPower size={18} color="#E02041" /></button>
        </header>

        <h1>Casos cadastrados</h1>
        <ul>
            <li>
                <strong>CASO:</strong>
                <p>Caso teste</p>

                <strong>DESCRIÇÃO:</strong>
                <p>Descrição teste</p>

                <strong>VALOR:</strong>
                <p>R$ 120,00</p>

                <button><FiTrash2 size={20} color="#a8a8b3" /></button>
            </li>
        </ul>
    </div>
)

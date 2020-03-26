import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import logoImage from '../../assets/logo.svg'

import './styles.css'

export default () => (
    <div className="register-container">
        <div className="content">
            <section>
                <img src={logoImage} alt="Be The Hero" />

                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos da sua ONG.</p>

                <Link className="back-link" to="/"><FiArrowLeft size={16} color="#E02041" /> Voltar para o login</Link>
            </section>
            <form>
                <input type="text" placeholder="Nome da ONG" />
                <input type="email" name="" id="" placeholder="Email" />
                <input type="text" placeholder="Whatsapp" />

                <div className="input-group">
                    <input type="text" placeholder="Cidade"/>
                    <input type="text" placeholder="UF" style={{ width: 80 }} />
                </div>

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
)

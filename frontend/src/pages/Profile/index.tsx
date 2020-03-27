import React, { useEffect, useState } from 'react'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import logoImage from '../../assets/logo.svg'
import api from '../../services/api'

import './styles.css'

const Profile: React.FC = () => {
    const history = useHistory()

    const [incidents, setIncidents] = useState<{ id: number, title: string, description: string, value: number, ngo_id: string }[]>([])

    const ngoId = localStorage.getItem('ngoId')
    const ngoName = localStorage.getItem('ngoName')

    useEffect(() => {
        api.get('profile', { headers: { Authorization: ngoId }})
            .then(response => setIncidents(response.data))
    }, [ngoId])

    const handleDeleteIncident = async (id: number) => {
        api.delete(`incidents/${id}`, { headers: { Authorization: ngoId }})
            .then(response => setIncidents(incidents.filter(incident => incident.id !== id)))
            .catch(error => alert('Erro ao deletar caso, tente novamente'))
    }

    const handleLogout = () => {
        localStorage.clear()

        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImage} alt="Be The Hero"/>
                <span>Bem vinda, {ngoName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout}><FiPower size={18} color="#E02041" /></button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                {
                    incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>CASO:</strong>
                            <p>{incident.title}</p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>{incident.description}</p>

                            <strong>VALOR:</strong>
                            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                            <button onClick={() => handleDeleteIncident(incident.id)}><FiTrash2 size={20} color="#a8a8b3" /></button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Profile

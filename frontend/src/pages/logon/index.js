import React, { useState } from 'react'
import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import {FiLogIn} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api'

export default function Logon() {
    const history = useHistory()
    const [id, setId] = useState('')

    async function handleLogin(e) {
        e.preventDefault()
        
        try {
            const response = await api.post('session', {id})
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
        } catch (error) {
            alert('Sessão Não Inciada, tente novamente')
        }
    }
    
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>
                        Faça seu Logon
                    </h1>
                    <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}/>
                    <button className="button" type="submit">
                        Entrar
                    </button>
                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tem Cadastro?
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}
import React, {useState} from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'

export default function NewIncident() {
    const [title, setTitle] = useState('')
    const [description, setDescripiton] = useState('')
    const [value, setValue] = useState('')
    const history = useHistory()
    const ongId = localStorage.getItem('ongId')

    async function handlerNewIncident(e) {
        e.preventDefault()
        const data = {
            title,
            description,
            value,
        }
        
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })
            history.push('/profile')
        } catch (error) {
            alert('Erro ao criar o caso. Tente Novamente')
        }
    }

    return(
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>
                        Cadastrar novo caso
                    </h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </p>
                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar
                    </Link>
                </section>
                <form onSubmit={handlerNewIncident}>
                    <input placeholder="Título do Caso" value={title} onChange={e => setTitle(e.target.value)}/>
                    <textarea placeholder="Descrição" value={description} onChange={e => setDescripiton(e.target.value)}/>
                    <input placeholder="Valor em reais" value={value} onChange={e => setValue(e.target.value)}/>

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}
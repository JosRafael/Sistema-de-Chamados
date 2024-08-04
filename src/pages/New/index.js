import { useState } from "react"
import Header from "../../components/Header"
import Title from "../../components/Title"
import './new.css'
import {FiPlusCircle} from 'react-icons/fi'

export default function New(){
    const [customers, setCustomers] = useState([])
    const [complemento, setComplemento] = useState('')
    const [assunto, setAssunto] = useState('')
    const [status, setStatus] = useState('')

    function handleOptionChange(e){
        setStatus(e.target.value)
    }
    return(
        <div>
            <Header/>
            <div className="content">
            <Title name="Novo Chamado">
                <FiPlusCircle size={25}/>
            </Title>
                <div className="container">
                    <form className="form-profile">
                        <label>Clientes</label>
                        <select>
                            <option key={1} value={1}>Mercado Teste</option>
                            <option key={2} value={2}>Loja Informática</option>
                        </select>

                        <label>Assunto</label>
                        <select>
                            <option value="Suporte">Suporte</option>
                            <option value="Visita Tecnica">Visita Tecnica</option>
                            <option value="Financeira">Financeiro</option>
                        </select>

                        <label>Status</label>
                        <div className="status">
                            <input
                            type="radio"
                            name="radio"
                            value="Aberto"
                            onChange={handleOptionChange}
                            checked={status === "Aberto"}
                            />
                            <span>Em aberto</span>

                            <input
                            type="radio"
                            name="radio"
                            value="Progresso"
                            onChange={handleOptionChange}
                            checked={status === "Progresso"}

                            />
                            <span>Em Progresso</span>

                            <input
                            type="radio"
                            name="radio"
                            value="Atendido"
                            onChange={handleOptionChange}
                            checked={status === "Atendido"}

                            />
                            <span>Atendido</span>
                    </div>

                    <label>Complemento</label>
                    <textarea
                    type='text'
                    placeholder="Descreva seu problema"
                    value={complemento}
                    onChange={(e)=>setComplemento(e.target.value)}
                    />

                    <button type="submit">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
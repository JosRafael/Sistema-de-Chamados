import { useState } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={Logo} alt="Logo do sistema"/>
        </div>

        <form>
          <h1>Nova conta</h1>
          <input 
            type="text" 
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Acessar</button>
        </form>

        <Link to="/">
            Já possui uma conta?
        </Link>
      </div> 
    </div>
  );
}

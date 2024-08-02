import { useState, useContext } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (nome === '' || email === '' || password === '') {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (password.length < 6) {
      alert("A senha deve conter no mínimo 6 dígitos");
      return;
    }

    await signUp(email, password, nome)
      .then(() => {
        alert("Cadastro realizado com sucesso!");
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert("O email já está em uso. Por favor, use outro email.");
        } else {
          alert("Ocorreu um erro ao tentar criar a conta. Por favor, tente novamente.");
        }
      });
  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={Logo} alt="Logo do sistema" />
        </div>

        <form onSubmit={handleSubmit}>
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
          <button type="submit">
            {loadingAuth ? 'Carregando...' : 'Cadastrar'}
          </button>
        </form>

        <Link to="/">Já possui uma conta?</Link>
      </div>
    </div>
  );
}

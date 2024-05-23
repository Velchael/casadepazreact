import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Helmet } from 'react-helmet-async';
import { UserContext } from '../UserContext';

export default function SeInscrever() {
  const { setUser } = useContext(UserContext);

  const [isSignup, setIsSignup] = useState(false);
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Función para verificar si el usuario existe
  const userExists = async (username, email, password) => {
    try {
      const response = await fetch('https://intelsiteweb.com/appnode/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username, email, password }) // No enviamos la contraseña
      });

      if (response.status === 200) {
        const user = await response.json();
        return !!user; // Regresa true si el usuario existe, false en caso contrario
      } else if (response.status === 404) {
        return false;
      }
    } catch (error) {
      console.error('Error al verificar el usuario:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      if (formData.password !== formData.confirmPassword) {
        setMessage({ type: 'danger', text: 'As senhas não coincidem.' });
        return;
      }

      const exists = await userExists(formData.username, formData.email, formData.password);
      if (exists) {
        setMessage({ type: 'danger', text: 'O usuário já existe. Tente fazer login.' });
        return;
      }
    }

    const url = isSignup 
      ? 'https://intelsiteweb.com/appnode/users'
      : 'https://intelsiteweb.com/appnode/users/login';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: isSignup ? 'Um e-mail chegará em sua conta de correio para concluir seu cadastro, confirme...' : 'Usuário logado com sucesso!' });

        if (!isSignup) {
          setUser({ username: formData.username });
        }
      } else {
        setMessage({ type: 'danger', text: data.message || (isSignup ? 'Erro ao registrar o usuário.' : 'Usuário não existe.') });
      }
    } catch (error) {
      setMessage({ type: 'danger', text: 'Erro na rede. Tente novamente mais tarde.' });
    }
  };

  return (
    <Container className="small-container">
      <Helmet>
        <title>{isSignup ? 'Registro' : 'Login'}</title>
      </Helmet>
      <h1 className="my-3">{isSignup ? 'Registro' : 'Login'}</h1>
      <Form onSubmit={handleSubmit}>
        {message.text && (
          <Alert variant={message.type}>
            {message.text}
          </Alert>
        )}
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Digite seu nome"
            value={formData.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="exemplo@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            required
            placeholder="Digite sua senha"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        {isSignup && (
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirme a Senha</Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="Confirme sua senha"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </Form.Group>
        )}
        <div className="mb-3">
          <Button type="submit">{isSignup ? 'Registrar' : 'Entrar'}</Button>
        </div>
        <div className="mb-3">
          {isSignup ? (
            <span>
              Já tem uma conta?{' '}
              <Link to="#" onClick={() => setIsSignup(false)}>Entrar</Link>
            </span>
          ) : (
            <span>
              Novo usuário?{' '}
              <Link to="#" onClick={() => setIsSignup(true)}>Crie sua conta</Link>
            </span>
          )}
        </div>
      </Form>
    </Container>
  );
}

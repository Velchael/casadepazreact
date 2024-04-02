import React from 'react';
import { BrowserRouter, Route, Routes, NavLink, } from 'react-router-dom';
import logo_large from './logo_large.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Casapaz from './Screens/Casapaz';
import Seinscrever from './Screens/Seinscrever';
import Empregabilidade from './Screens/Empregabilidade';
import Fidelidade from './components/Fidelidade';
import Redecao from './components/Redecao';
import Conquista from './components/Conquista';
import Identidad from './components/Identidad';
import Productividade from './components/Productividade';
import Proposito from './components/Proposito';
import Consagracao from './components/Consagracao';
import SocialMediaButtons from './components/SocialMediaButtons'; 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Helmet } from 'react-helmet-async';
export default function App() {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <Helmet>
          <title>Casa de Paz</title>
        </Helmet>
        <header>
          <Navbar className='menu-header'>
            <Container>
              <LinkContainer to="/" exact>
                <Navbar.Brand>
                  <img src={logo_large} className="App-logo" alt="logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Navbar.Brand>
              </LinkContainer>              
              <div className='menu'>             
                <NavLink to="/Casapaz" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'white' : 'black',
                  marginRight: '13px'
                })}>
                  Casapaz
                </NavLink>
                <NavLink to="/Empregabilidade" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'white' : 'black',
                  marginRight: '13px'
                })}>
                  A.M.O 
                </NavLink>
                <NavLink to="/Seinscrever" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'white' : 'black',
                  marginRight: '13px'
                })}>
                  Registro
                </NavLink>
              </div>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<Casapaz />} />
              <Route path="/Casapaz" element={<Casapaz />} >
                <Route path="Fidelidade" element={<Fidelidade />} />
                <Route path="Redecao" element={<Redecao />} />
                <Route path="Conquista" element={<Conquista />} />
                <Route path="Identidad" element={<Identidad />} />
                <Route path="Productividade" element={<Productividade />} />
                <Route path="Proposito" element={<Proposito />} />
                <Route path="Consagracao" element={<Consagracao />} />
              </Route>
              <Route path="/Empregabilidade" element={<Empregabilidade />} />
              <Route path="/Seinscrever" element={<Seinscrever />} />
            </Routes>
          </Container>
        </main>
        <footer>
            {/* Contenido del footer */}
            <Container className="text-center">
            {/* Agregar los botones de redes sociales */}
            <SocialMediaButtons />
            <p>
              &copy; 2023 Todos os Dereitos Reservados
            </p>
          </Container>
        </footer>
      </div>
    </BrowserRouter >
  );
}

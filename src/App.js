import './App.css';
import DashboardPrincipal from './Pages/dashboardprincipal';
import DashboardGestao from './Pages/dashboardgestao';
import DashboardClientes from './Pages/dashboardclientes';
import DashboardFornecedores from './Pages/dashboardfornecedores';
import DashboardProdutos from './Pages/dashboardprodutos';
import DashboardUtilizadores from './Pages/dashboardutilizadores';
import QuemSomos from './Pages/quemsomos';
import MontraProdutos from './Pages/montraprodutos';
import Contactos from './Pages/contactos';
import Perfil from './Pages/perfil';
import Login from './Pages/login';
import RecuperarPassword from './Pages/recuperarpassword';
import NovaPassword from './Pages/novapassword';
import PasswordAlterada from './Pages/passwordalterada';
import MensagemEnviada from './Pages/mensagemenviada';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App-intro">
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/recuperarpassword" element={<RecuperarPassword/>} />
                <Route path="/mensagemenviada" element={<MensagemEnviada/>} />
                <Route path="/novapassword" element={<NovaPassword/>} />
                <Route path="/passwordalterada" element={<PasswordAlterada/>} />
                <Route path="/dashboardprincipal" element={<DashboardPrincipal/>} />
                <Route path="/quemsomos" element={<QuemSomos/>} />
                <Route path="/montraprodutos" element={<MontraProdutos/>} />
                <Route path="/contactos" element={<Contactos/>} />
                <Route path="/perfil" element={<Perfil/>} />
                <Route path="/dashboardgestao" element={<DashboardGestao/>} />
                <Route path="/dashboardclientes" element={<DashboardClientes/>} />
                <Route path="/dashboardfornecedores" element={<DashboardFornecedores/>} />
                <Route path="/dashboardprodutos" element={<DashboardProdutos/>} />
                <Route path="/gestaoutilizadores" element={<DashboardUtilizadores/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
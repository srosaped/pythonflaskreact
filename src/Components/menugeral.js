import React, {Component} from 'react';

class MenuGeral extends Component{
    render(){
        return(
            <div className="container-fluid bg-dark">
                <div className="container">
                    <nav className="navbar navbar-expand-sm navbar-dark">
                        <a className="navbar-brand" href="/dashboardprincipal">
                            <img src="images/Logo.png" alt="logo" style={{height:'40px'}}></img>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/dashboardprincipal">Início</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/quemsomos">Quem somos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/montraprodutos">Produtos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contactos">Contactos</a>
                                </li>
                            </ul>
                        </div>
                        <form className="form-inline" action="/pesquisa" method="get">
                            <input type="text" className="form-control" style={{height:'40px',width:'70%'}} placeholder="Pesquisar"></input>
                            &nbsp;
                            <button type="submit" className="btn bg-whitenote" style={{width:"40px",height:"40px"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                </svg>
                            </button>
                        </form>
                        <div className="dropdown show">
                            <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                                <img src="images/foto1.png" alt="foto" style={{width:'40px',height:'40px',borderRadius:'5px'}}></img>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="/perfil">Perfil</a>
                                <a className="dropdown-item" href="/dashboardgestao">Gestão</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/sair">Sair</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    };
};

export default MenuGeral;
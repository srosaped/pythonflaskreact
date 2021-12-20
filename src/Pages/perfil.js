import React, {Component} from 'react';
import MenuGeral from '../Components/menugeral';
import Rodape from '../Components/rodape';

class Perfil extends Component{
    render(){
        return(
            <div>
                <MenuGeral />
                <div className="container mt-4 mb-4">
                    <h1 className="display-4">Perfil</h1>
                </div>
                <div className="container my-4">
                    <h6>Dados pessoais</h6>
                    <form>
                        <div className="row">
                            <div className="col-8">
                                
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-dark text-white justify-content-end" style={{width:'121.83px'}}>Utilizador</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Primeiro nome"></input>
                                    <input type="text" className="form-control" placeholder="Último nome"></input>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-dark text-white justify-content-end" style={{width:'121.83px'}}>Morada</span>
                                    </div>
                                    <textarea type="text" className="form-control"></textarea>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-dark text-white justify-content-end" style={{width:'121.83px'}}>C. Postal</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Indique o seu Código Postal"></input>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-dark text-white justify-content-end" style={{width:'121.83px'}}>Telemóvel</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Indique o seu nº de Telemóvel"></input>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-dark text-white justify-content-end" style={{width:'121.83px'}}>e-mail</span>
                                    </div>
                                    <input type="email" className="form-control" placeholder="Indique o seu endeço de e-mail"></input>
                                </div>
                                <h6 className="mt-4">Dados de acesso: <strong>jsantos</strong></h6>
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-dark text-white justify-content-end" style={{width:'121.83px'}}>Palavra-passe</span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Indique a sua palavra-passe"></input>
                                    <input type="password" className="form-control" placeholder="Confirme a sua palavra-passe"></input>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" style={{width:'100%'}}>
                                    <img className="card-img-top" src="images/foto1.png" alt="card image"></img>
                                    <div className="card-body">
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="customFile"></input>
                                            <label className="custom-file-label" htmlFor="customFile">Escolha a fotografia</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <Rodape />
            </div>
        );
    };
};

export default Perfil;
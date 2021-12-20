import React, {Component} from 'react';
import MenuGeral from '../Components/menugeral';
import Rodape from '../Components/rodape';

class Contactos extends Component{
    render(){
        return(
            <div>
                <MenuGeral />
                
                <div className="container mt-4">
                    <h1 className="display-4">Contactos</h1>
                </div>
                <div className="container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.674994822209!2d-9.152249184328866!3d38.72527016467624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933772ddf7079%3A0xbd88fe8d5ed78a8f!2sMarqu%C3%AAs%20de%20Pombal!5e0!3m2!1spt-PT!2spt!4v1637939142887!5m2!1spt-PT!2spt" width="100%" height="450" style={{border:'1px solid #343a40',borderRadius:'5px'}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="container mt-3 mb-4">
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                            <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                        </svg>
                        Rotunda do Marquês de Pombal, nº1, 1000-100 Lisboa</p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                        211 234 567
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                        geral@whitenote.pt
                    </p>
                </div>
                <div className="container mt-4">
                    <h1 className="display-4">Fale connosco</h1>
                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text justify-content-end" style={{width:'164px'}}>Nome</span>
                            </div>
                            <input id="nome" type="text" className="form-control"></input>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text justify-content-end" style={{width:'164px'}}>e-mail</span>
                            </div>
                            <input id="email" type="email" className="form-control"></input>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text justify-content-end" style={{width:'164px'}}>Telefone</span>
                            </div>
                            <input id="telefone" type="text" className="form-control"></input>
                        </div>
                        <div className="input-group mt-3 mb-3">
                            <div className="input-group-prepend">
                                <button type="button" className="btn input-group-text dropdown-toggle" style={{width:'164px'}} data-toggle="dropdown">
                                    Tipo de contacto
                                </button>
                                <div className="dropdown-menu">
                                    <span className="dropdown-item">Pedido de informações</span>
                                    <span className="dropdown-item">Sugestão</span>
                                    <span className="dropdown-item">Reclamação</span>
                                    <span className="dropdown-item">Outro assunto</span>
                                </div>
                            </div>
                            <input type="text" className="form-control" placeholder="Escolha uma opção"></input>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text justify-content-end" style={{width:'164px'}}>Assunto</span>
                            </div>
                            <input id="assunto" type="text" className="form-control"></input>
                        </div>
                        <textarea className="form-control" rows="8"></textarea>
                        <div className="mt-3 mb-3" style={{width:'100%',textAlign:'right'}}>
                            <button type="submit" className="btn btn-success">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                </svg>
                            </button>
                        </div>
                    </form> 
                </div>

                <Rodape />
            </div>
        );
    };
};

export default Contactos;
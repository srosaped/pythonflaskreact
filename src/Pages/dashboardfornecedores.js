import React, {Component} from 'react';
import MenuGestao from '../Components/menugestao';
import Rodape from '../Components/rodape';

class DashboardFornecedores extends Component{
    render(){
        return(
            <div>
                <MenuGestao />
                <div className="container mt-4">
                    <h1 className="display-4">Fornecedores</h1>
                </div>
                <div className="container">
                    <table className="table table-dark table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Nº fornecedor</th>
                                <th>Nome</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div className="container mb-4">
                    <button className="btn bg-whitenote" type="button" onClick="adicionar();" style={{width:'40px',height:'40px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-plus" viewBox="4 2 14 14">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </button>
                </div>
                <div id="formArea" className="mb-4">
                    <div className="container bg-white formulariofornecedores" style={{borderRadius:'5px'}}>
                        <h5 className="display-4 mt-3">Fornecedor</h5>
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text justify-content-end" style={{width:'174px'}}>Nº fornecedor</span>
                                </div>
                                <input id="numerofornecedor" type="text" className="form-control "></input>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text justify-content-end" style={{width:'174px'}}>Nome do fornecedor</span>
                                </div>
                                <input id="nomefornecedor" type="text" className="form-control"></input>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text justify-content-end" style={{width:'174px'}}>NIF</span>
                                </div>
                                <input id="nif" type="text" className="form-control"></input>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text justify-content-end" style={{width:'174px'}}>Morada</span>
                                </div>
                                <input id="morada" type="text" className="form-control"></input>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text justify-content-end" style={{width:'174px'}}>C. Postal</span>
                                </div>
                                <input id="cpostal" type="text" className="form-control"></input>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text justify-content-end" style={{width:'174px'}}>Telefone</span>
                                </div>
                                <input id="telefone" type="text" className="form-control"></input>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text justify-content-end" style={{width:'174px'}}>e-mail</span>
                                </div>
                                <input id="email" type="email" className="form-control"></input>
                            </div>

                            <button type="button" className="btn bg-success text-white mb-3" style={{width:'40px',height:'40px'}} onClick="guardar($('#numerofornecedore').val(),$('#nomefornecedore').val(),$('#nif').val(),$('#morada').val(),$('#cpostal').val(),$('#telefone').val(),$('#email').val());">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                            </button>&nbsp;
                            <button className='btn btn-danger text-white mb-3' style={{width:'40px',height:'40px'}} type='button' onClick="apagar2($('#numerofornecedore').val());" style={{width:'40px',height:'40px'}}>
                                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-trash-fill' viewBox='0 0 16 16'>
                                    <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z'/>
                                </svg>
                            </button>&nbsp;
                            <button type="button" className="btn bg-whitenote text-dark mb-3" style={{width:'40px',height:'40px'}} onClick="voltar();">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
                <Rodape />
            </div>
        );
    };
};

export default DashboardFornecedores;
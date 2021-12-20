import React, {Component} from 'react';
class MensagemEnviada extends Component{
    render(){
        return(
            <div className="container-fluid" style={{ position:'absolute', top:'50%', marginTop:'-178.78px'}}>
                <div className="card mx-auto" style={{ width:'100%', minWidth:'420px', maxWidth:'420px'}}>
                    <div className="card-body pb-3 pt-3">
                        <h1 className="display-4 ml-3 mt-5" style={{ fontSize:'20pt'}}>Enviamos-te uma mensagem de e-mail.<br/>Por favor, consulta a tua caixa de correio.</h1>
                        <div className="mt-5" style={{textAlign:'right'}}>
                            <a className="btn btn-dark text-white" href="dashboardprincipal.html">Voltar</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default MensagemEnviada;
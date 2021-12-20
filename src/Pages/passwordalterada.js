import React, {Component} from 'react';
class PasswordAlterada extends Component{
    render(){
        return(
            <div className="container-fluid" style={{ position:'absolute', top:'50%', marginTop:'-178.78px'}}>
                <div className="card mx-auto" style={{ width:'100%', minWidth:'420px', maxWidth:'420px'}}>
                    <div className="card-body pb-3 pt-3">
                        <h1 className="display-4 ml-3 mt-5" style= {{ fontSize:'20pt' }}>A tua palavra-passe foi alterada</h1>
                        <div className="mt-5" style={{ textAlign:'right'}}>
                            <a className="btn btn-dark text-white" href="dashboardprincipal.html">Voltar</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default PasswordAlterada;
import React, {Component} from 'react';
class NovaPassword extends Component{
    render(){
        return(
            <div className="container-fluid" style={{ position:'absolute', top:'50%', marginTop:'-178.78px'}}>
                <div className="card mx-auto" style={{ width:'100%', minWidth:'420px', maxWidth:'420px'}}>
                    <img className="card-img-top" src="images/Logo.png" alt="card image"></img>
                    <h1 className="display-4 ml-3 mt-3" style={{ fontSize:'20pt'}}>A tua nova palavra-passe</h1>
                    <div className="card-body">
                        <form className="needs-validation" noValidate action="login" method="post">
                            <div className="form-group">
                                <label htmlFor="pwd">Palavra-passe: *</label>
                                <input type="password" className="form-control" placeholder="Indica a tua palavra-passe" id="pwd" required></input>
                                <div className="valid-feedback">Válido</div>
                                <div className="invalid-feedback">Por favor, preenche este campo.</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">Confirma a palavra-passe: *</label>
                                <input type="password" className="form-control" placeholder="Indica novamente a tua palavra-passe" id="pwd" required></input>
                                <div className="valid-feedback">Válido</div>
                                <div className="invalid-feedback">Por favor, preenche este campo.</div>
                            </div>
                            <div style={{textAlign:'right'}}>
                                <button type="button" className="btn btn-dark text-white">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

export default NovaPassword;
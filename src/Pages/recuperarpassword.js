import React, {Component} from 'react';
class RecuperarPassword extends Component{
    render(){
        return(
            <div className="container-fluid" style={{ position:'absolute', top:'50%', marginTop:'-178.78px'}}>
                <div className="card mx-auto" style={{ width:'100%', minWidth:'420px', maxWidth:'420px'}}>
                    <img className="card-img-top" src="images/Logo.png" alt="card image"></img>
                    <h1 className="display-4 ml-3 mt-3" style={{fontSize:'20pt'}}>Recupera a tua palavra-passe</h1>
                    <div className="card-body">
                        <form className="needs-validation" noValidate action="recuperarpassword" method="post">
                            <div className="form-group mb-4">
                                <label htmlFor="username">e-mail: *</label>
                                <input type="email" className="form-control" placeholder="Indica o teu endereço de e-mail" id="username" required></input>
                                <div className="valid-feedback">Válido</div>
                                <div className="invalid-feedback">Por favor, preenche este campo.</div>
                            </div>
                            <div className="mt-4" style={{textAlign:'right'}}>
                                <button type="button" className="btn btn-secondary text-white">Voltar</button>
                                <button type="submit" className="btn btn-dark text-white">Recuperar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

export default RecuperarPassword;
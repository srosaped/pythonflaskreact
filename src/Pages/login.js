import React, {Component} from 'react';
class Login extends Component{
    render(){
        return(
            <div className="container-fluid" style={{position:'absolute',top:'50%',marginTop:'-178.78px'}}>
                <div className="card mx-auto" style={{width:'100%',minWidth:'420px',maxWidth:'420px'}}>
                    <img className="card-img-top" src="images/Logo.png" alt="card image"></img>
                    <div className="card-body">
                        <form className="needs-validation" noValidate action="/login" method="post">
                            <div className="form-group">
                                <label htmlFor="username">Nome de utilizador: *</label>
                                <input type="text" className="form-control" placeholder="Indica o teu nome de utilizador" id="username" name="username" required></input>
                                <div className="valid-feedback">Válido</div>
                                <div className="invalid-feedback">Por favor, preenche este campo.</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">Palavra-passe: *</label>
                                <input type="password" className="form-control" placeholder="Indica a tua palavra-passe" id="password" name="password" required></input>
                                <div className="valid-feedback">Válido</div>
                                <div className="invalid-feedback">Por favor, preenche este campo.</div>
                            </div>
                            <div className="form-group form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" required></input>Lembra-te de mim
                                    <div className="valid-feedback">Válido</div>
                                    <div className="invalid-feedback">Por favor, marca a checkbox para continuar.</div>
                                </label>
                            </div>
                            <div style={{textAlign:'right'}}>
                                <a href="/recuperarpassword" className="text-warning">Esqueceste a palavra-passe?</a>
                                <button type="submit" className="btn btn-dark text-white">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

export default Login;
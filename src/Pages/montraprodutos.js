import React, {Component} from 'react';
import MenuGeral from '../Components/menugeral';
import Rodape from '../Components/rodape';

class MontraProdutos extends Component{
    render(){
        return(
            <div>
                <MenuGeral />
                <div className="container">
                    <h4 className="display-4 my-5">Loja</h4>
                </div>
                <Rodape />
            </div>
        );
    };
};

export default MontraProdutos;
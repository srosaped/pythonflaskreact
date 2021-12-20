import React, {Component} from 'react';
import MenuGestao from '../Components/menugestao';
import Rodape from '../Components/rodape';

class DashboardGestao extends Component{
    render(){
        return(
            <div>
                <MenuGestao />
                <div className="container">
                    <h4 className="display-4 my-5">Gestão</h4>
                </div>
                <Rodape />
            </div>
        );
    };
};

export default DashboardGestao;
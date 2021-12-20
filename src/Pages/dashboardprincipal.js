import React, {Component} from 'react';
import MenuGeral from '../Components/menugeral';
import Rodape from '../Components/rodape';

class DashboardPrincipal extends Component{
    render(){
        return(
            <div>
                <MenuGeral />
                
                <div id="Carousel" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#Carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#Carousel" data-slide-to="1"></li>
                        <li data-target="#Carousel" data-slide-to="2"></li>
                        <li data-target="#Carousel" data-slide-to="3"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/slide1.png" alt="imagem1" style={{width:'100%'}}></img>
                        </div>
                        <div className="carousel-item">
                            <img src="images/slide2.png" alt="imagem2" style={{width:'100%'}}></img>
                        </div>
                        <div className="carousel-item">
                            <img src="images/slide3.png" alt="imagem3" style={{width:'100%'}}></img>
                        </div>
                        <div className="carousel-item">
                            <img src="images/slide4.png" alt="imagem4" style={{width:'100%'}}></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#Carousel" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#Carousel" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-6">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/DzF_UvNlmRU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="col-6">
                            <h1 className="display-4">Novidades</h1>
                            <p style={{textAlign:'justify'}}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis eum qui quaerat est reprehenderit, mollitia dolores voluptatum, sed repellat quo, labore ducimus modi dolorem voluptatem adipisci perferendis dolor odit cupiditate!
                                Sunt cum, distinctio maiores reprehenderit modi sequi iure quasi porro itaque hic, maxime aliquid earum nesciunt aperiam nobis et culpa doloribus natus laboriosam facilis quam, consequatur illo provident. Vero, perspiciatis.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mt-4 mb-4">
                    <div className="row">
                        <div className="col-3">
                            <img src="images/imagem1.jpg" style={{width:'100%'}}></img>
                            <h4 className="display-4" style={{fontSize:'24pt'}}>Qualidade</h4>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam tempore esse aperiam ut praesentium doloribus veniam voluptates saepe eius vero perspiciatis id illum, non numquam fugit tempora quidem quae provident.
                        </div>
                        <div className="col-3">
                            <img src="images/imagem2.jpg" style={{width:'100%'}}></img>
                            <h4 className="display-4" style={{fontSize:'24pt'}}>Excelência</h4>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam tempore esse aperiam ut praesentium doloribus veniam voluptates saepe eius vero perspiciatis id illum, non numquam fugit tempora quidem quae provident.
                        </div>
                        <div className="col-3">
                            <img src="images/imagem3.jpg" style={{width:'100%'}}></img>
                            <h4 className="display-4" style={{fontSize:'24pt'}}>Conhecimento</h4>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam tempore esse aperiam ut praesentium doloribus veniam voluptates saepe eius vero perspiciatis id illum, non numquam fugit tempora quidem quae provident.
                        </div>
                        <div className="col-3">
                            <img src="images/imagem4.jpg" style={{width:'100%'}}></img>
                            <h4 className="display-4" style={{fontSize:'24pt'}}>Rapidez</h4>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam tempore esse aperiam ut praesentium doloribus veniam voluptates saepe eius vero perspiciatis id illum, non numquam fugit tempora quidem quae provident.
                        </div>
                    </div>
                </div>
                <Rodape />
            </div>
        );
    };
};

export default DashboardPrincipal;
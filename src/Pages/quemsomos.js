import React, {Component} from 'react';
import MenuGeral from '../Components/menugeral';
import Rodape from '../Components/rodape';

class QuemSomos extends Component{
    render(){
        return(
            <div>
                <MenuGeral />
                
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-8">
                            <h1 className="display-4">Quem somos</h1>
                            <p style={{textAlign: 'justify'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolor in repellat quia maxime aliquid, adipisci omnis odio praesentium tempore. Unde ipsam, esse ullam sequi porro incidunt voluptatibus quasi maiores.
                                Doloremque, ipsum est ducimus nam inventore sunt maxime quod nostrum? Quod totam fugit obcaecati tenetur temporibus velit repellendus enim, aliquid, veritatis in nam ullam? Distinctio nam nostrum praesentium nesciunt animi.
                                Et possimus iusto, consectetur vero, laboriosam quas debitis inventore dolorum aliquam at ullam deserunt, quae eius aspernatur accusantium corrupti autem maxime cumque laudantium quos harum! Expedita iusto quo voluptas cupiditate.
                                Optio exercitationem rerum amet, reprehenderit itaque voluptate at? Aliquid voluptates libero omnis deserunt commodi est distinctio deleniti nam eos repudiandae minus, molestias, maiores exercitationem ipsum? Sint ea cumque adipisci architecto.
                            </p>
                            <p style={{textAlign: 'justify'}}>
                                Blanditiis ipsum ipsam dolorem iusto esse ullam animi perspiciatis quis harum sint? Suscipit totam tenetur inventore! Saepe, commodi, animi iusto voluptatibus autem repellat nesciunt aspernatur fugiat nisi quo dolore soluta.
                                Temporibus autem reprehenderit deleniti consectetur animi minima ab error voluptatum eveniet, laboriosam vero tenetur odit nobis ea quo. Optio ullam atque fugit itaque dolore aliquid, molestiae enim maxime explicabo nihil!
                                Ea aspernatur quod praesentium iusto atque fugit sed porro non sapiente reprehenderit, pariatur unde quo cum magni odit aperiam numquam rerum ut! Temporibus, beatae harum laborum fugiat aliquid provident debitis?
                                Molestiae eaque sapiente expedita necessitatibus, aliquid iste ullam nisi voluptates ipsum neque! Sequi perspiciatis, aperiam, nam ex quaerat nobis quisquam rem fuga impedit officiis, odio quo amet! Commodi, blanditiis explicabo.
                                Vitae in asperiores rem tempora dolorem? Quod provident a ea illo laboriosam velit dolor quam ullam deserunt dolorem rerum, porro repellendus explicabo esse! Nihil odit deserunt expedita deleniti? Expedita, excepturi.
                            </p>
                            <p style={{textAlign: 'justify'}}>
                                Rerum nostrum beatae quaerat corporis sapiente ea pariatur, voluptatum officiis magni perspiciatis a cupiditate quis vitae vero dolore nobis, explicabo ducimus illum. Laboriosam fuga porro a! Qui blanditiis soluta et.
                                Nesciunt iste debitis cum nihil asperiores reiciendis, unde quae modi accusamus harum sit, quaerat perspiciatis similique aliquam obcaecati consectetur rem voluptatibus! Est, obcaecati! Corporis quis pariatur deserunt doloribus blanditiis illum.
                                Aliquid minima amet vel in facilis ducimus illo natus eveniet recusandae adipisci eaque, aut fugit! Reiciendis recusandae, unde eum atque sit commodi! Fugit libero non cum reiciendis, labore voluptate animi.
                            </p>
                        </div>
                        <div className="col-4">
                            <img src="images/quemsomos.jpg" style={{width:'100%'}}></img>
                        </div>
                    </div>
                </div>

                <Rodape />
            </div>
        );
    };
};

export default QuemSomos;
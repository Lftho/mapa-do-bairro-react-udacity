import React, { Component } from 'react';
import welcomeImg from '../images/welcome-img.jpg';
import '../css/App.css';

export class InfoModal extends Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
          display: 'block'
        }
    }
    closeModal() {
        this.setState({
          display: 'none'
        });
        this.props.resetWarning()
    }
    render() {
        return (
            <div id="myModal" className="modal" style={{ display: this.state.display }}>
              <div className="modal-content">
                <span tabIndex="2" className="close" onClick={ () => this.closeModal() }>&times;</span>
                {(this.props.warningMsg === 'welcomeMsg') ? (
                  <div>
                    <h1 className="welcome-title">
                      Bem vindo ao Meu atual bairro - a Liberdade!
                    </h1>
                    <span className="welcome-desc">
                    Utilizando a API de recomendações do Foursquare, reunimos os 15 melhores lugares para fazer um lanche, 
                    tomar um sorvete, ou comer um sushi de respeito no bairro mais charmoso de São Paulo!
                    Clique sobre os marcadores ou na lista à esquerda para detalhes como nome, 
                    categoria e endereço do lugar.
                    </span>
                  </div>
                ) : (
                  <p>{this.props.warningMsg}</p>
                )}
              </div>
            </div>
        )
    }
}
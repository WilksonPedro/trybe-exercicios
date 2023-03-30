import React, { Component } from 'react';
import './listaDeEscolha.css';

export default class listaDeEscolha extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <select>
            {this.props.itens.map(itens => <option>{itens}</option>)}
        </select>
      </div>
    )
  }
}

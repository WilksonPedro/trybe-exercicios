import React, { Component } from 'react';
import './FormText.css';

export default class FormText extends Component {
  render() {
    return (
      <div className='form-text'>
      <label>{this.props.label}</label> {/* O this. esta referenciando a props label para que ela seja usado no app.js de forma dinamica */}
      <input placeholder={`${this.props.placeholder} ...`}/> {/*Usando interpolação da pra personalizar o placeholder */}
      </div>
    )
  }
}

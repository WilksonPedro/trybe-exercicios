import React, { Component } from 'react'
import './Banner.css'

export default class Banner extends Component { // podemos deixar o export aqui em cima em vez do final da pagina.
  render() {
    return (
        <header className='banner'>
            <img src='./imagens/banner.png' alt='imagem do banner principal' />
        </header>
    )
  }
}

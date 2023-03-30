import React, { Component } from "react";
import FormText from "../CampoText/FormText";
import './formulario.css';
import ListaDeEscolha from "../ListaSuspensa/ListaDeEscolha";
export default class FormsCadastro extends Component {
  render() {

    const classe = [
        'Frente de Batalha',
        'Controlador',
        'Dano',
        'Suporte'
      ]

    return (
      <section className="formulario">
        <form>
            <h2>Venha e vamos criar seu novo personagem como deseja que ele seja:</h2>
          <FormText
            label="Nome"
            placeholder="Diga seu novo nome"
          />
          <FormText label="Classe" placeholder="Diga sua Classe de origem" /> {/* Criado o começo do formulario com os campos */}
          <FormText label="Raça" placeholder="Sua origem Viajante" />
          <FormText
            label="Foto"
            placeholder="Sua imagem agora"
          />
          <ListaDeEscolha itens={classe}/> {/* criando a lista suspensa, colocando os itens da lista logo enci*/}
        </form>
      </section>
    );
  }
}

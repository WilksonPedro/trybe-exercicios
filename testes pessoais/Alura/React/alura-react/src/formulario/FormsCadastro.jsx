import React, { Component } from "react";
import FormText from "../CampoText/FormText";
import './formulario.css';

export default class FormsCadastro extends Component {
  render() {
    return (
      <section className="formulario">
        <form>
            <h2>Venha e vamos criar seu novo personagem como deseja que ele seja:</h2>
          <FormText
            label="Nome"
            placeholder="Diga seu novo nome"
          />
          <FormText label="Classe" placeholder="Diga sua Classe de origem" />
          <FormText label="Raça" placeholder="Sua origem Viajante" />
          <FormText
            label="Foto"
            placeholder="Sua imagem agora"
          />
        </form>
      </section>
    );
  }
}

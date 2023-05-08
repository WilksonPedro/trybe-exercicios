import "./Form.css";
import CampoText from "../CampoTexto/CampoText";

const Formulary = () => {
  return (
    <section>
      <form className="formulario">
        {/* aqui entram as props que iram fazer a aplicação dinâmica economizando código */}
        <CampoText label="Personagem" placeholder="Nome do personagem" />
        <CampoText label="Sexo" placeholder="Sexo do personagem" />
        <CampoText label="Classe" placeholder="Classe do personagem" />
        <CampoText
          label="Imagem do personagem"
          placeholder="Endereço da imagem"
        />
      </form>
    </section>
  );
};

export default Formulary;

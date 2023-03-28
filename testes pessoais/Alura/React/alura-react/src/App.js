import Banner from './component/Banner';
import FormText from './CampoText/FormText';

function App() {
  return (
    <div className="App">
      <Banner />
      <FormText label="Nome"/>
      <FormText label="Posição"/>
      <FormText label="Representação"/>
    </div>
  );
}

export default App;

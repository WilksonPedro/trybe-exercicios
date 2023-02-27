import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {/* Meu Nome */}
        </h1>
        <p>
          {/* Minha descrição */}
        </p>
        <h2>Minhas Habilidades</h2>
        <ul>
          <li>{/* Minha Habilidade 01 */}</li>
          <li>{/* Minha Habilidade 02 */}</li>
          <li>{/* Minha Habilidade 03 */}</li>                    
        </ul>
      </div>
    );
  }
}

export default About;
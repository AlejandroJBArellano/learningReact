import logo from './logo.svg';
import './App.css';
import React from 'react';

const Hola = _ => <h1>Hola Mundo UwU</h1>,
Logo = _ => <img src={logo} alt="Shut the fuck up"/>;

class App extends React.Component {
  render() {
    return (
      <section className="power">
        <p>El mundo se ha convertido en la distopía de Orwell, por lo que todos imprimiremos</p>
        <Hola />
        <p>Y usaremos</p>
        <Logo />
      </section>
    )
  }
}

// function App() {

// }

export default App;

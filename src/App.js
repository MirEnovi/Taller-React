import React, { Component } from 'react';
import './App.css';

import FormTaller from './formTalle/formTaller';
import VistaTalleres from './vistaTalleres/vistaTalleres';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lista: [{
        name:'React',
        description: 'Taller de eli',
        attendes: '5',
      }],
    }
  }

  addLista = (theNew) => {
    // console.log('algo');
    // const theNew = {
    //   name:'otro taller',
    //   description: 'otro taller de react',
    //   attendes: '6,'
    // }
    this.setState({
      lista: [...this.state.lista, theNew]
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Talleres</h1>
        </header>
        <section>
          <FormTaller addLista={this.addLista}/>
        </section>
        <section>
          <VistaTalleres lista= {
            this.state.lista
          }/>
        </section>
      </div>
    );
  }
}

export default App;

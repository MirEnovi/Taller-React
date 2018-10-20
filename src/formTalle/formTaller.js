import React, { Component } from 'react';
import './formTaller.css';

class FormTaller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      description: null,
    }
    this.name = React.createRef();
    this.description = React.createRef();
    this.attendes = React.createRef();
  };



  fn = (e) => {
    e.preventDefault();
    this.props.addLista({
      name: this.name.current.value,
      description: this.description.current.value,
      attendes: this.attendes.current.value
    });

	}

  render() {
    const {name, description, attendes} = this;
    return (
      <form className='form'>
        <input className='form-input' type='text' placeholder='titulo' ref = {name}/>
        <input className='form-input' type='text' placeholder='descripcion' ref = {description}/>
        <input className='form-input' type='number' placeholder='asistentes' ref = {attendes}/>
        <button className='form-submit' onClick={this.fn}> Registrar</button>
      </form>
    );
  }
}

export default FormTaller;

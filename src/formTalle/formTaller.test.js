import React from 'react';
import ReactDOM from 'react-dom';
import FormTaller from './formTaller';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormTaller />, div);
  ReactDOM.unmountComponentAtNode(div);
});

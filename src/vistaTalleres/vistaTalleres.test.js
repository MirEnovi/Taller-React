import React from 'react';
import ReactDOM from 'react-dom';
import VistaTalleres from './VistaTalleres';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VistaTalleres />, div);
  ReactDOM.unmountComponentAtNode(div);
});

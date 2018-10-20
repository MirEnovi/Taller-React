import React from 'react';
import './vistaTalleres.css';

const VistaTalleres = (props) => {

	const list = props.lista;
	const talleres = list.map((taller, index) => {
		return (
		<li className = 'lista-taller' key={`taller-${index}`}>
      <h3> {taller.name} </h3>
			<div>
				<p> {taller.description} </p>
				<span> Asistentes: {taller.attendes} personas</span>
			</div>
		</li>
		)
	});
	return  (<ul className='Lista'>
		{talleres}
	</ul>);
};

export default VistaTalleres;
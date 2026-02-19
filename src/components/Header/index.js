import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { Logo } from '../../images';

export default function Header() {
	return (
		<div className="Header">
			<Link to="/" className="Logo">
				<Logo color={'#000'} />
			</Link>
			<div className="Menu">
			</div>
		</div>
	);
}

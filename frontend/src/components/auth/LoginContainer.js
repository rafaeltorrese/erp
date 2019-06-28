import React, { Component } from 'react';
import Login from './LoginForm';
import Signup from './SignUpForm';
import { login, register } from '../../services/auth';

import { Card } from 'antd';

import { Link } from 'react-router-dom';
import { message } from 'antd';

class LoginContainer extends Component {

	state = {
		data: {}
	};

	handleText = (e) => {
		let { data } = this.state;
		let field = e.target.name;
		data[field] = e.target.value;
		this.setState({ data });

	};


	onRegister = () => {
		let { data } = this.state
		register(data)
			.then(res => {
				message.info('Registro Exitoso Bienvenido');
				localStorage.setItem('TOKEN', res.token)
				localStorage.setItem('USER', JSON.stringify(res.user))
				this.props.history.push('/home')
			})
			.catch(err => {
				console.log("error", err)
				message.info('No se pudo registrar');
			})

		this.setState({ data: {} })

	}

	onLogin = () => {
		let { data } = this.state
		login(data)
			.then(res => {
				console.log("Inicio Sesión Exitoso", res)
				message.info('Bienvenido');
				localStorage.setItem('TOKEN', res.token)
				localStorage.setItem('USER', JSON.stringify(res.user))
				this.props.history.push('/home')
			})
			.catch(err => {
				console.log("error", err)
				message.info('Usuario o contraseña inválida');
			})

		this.setState({ data: {} })
	}

	render() {
		const { pathname } = this.props.location
		let { data } = this.state;

		return (
			<div className="login">
				<Card>

					<div className="header">

						<span className="title">ERPHACK</span>
					</div>
					<div>
						{
							pathname === '/' ?
								<Login data={data} onLogin={this.onLogin} handleText={this.handleText} />
								:
								<Signup handleText={this.handleText} data={data} onRegister={this.onRegister} />
						}

					</div>

				</Card>

			</div>
		)
	}
}

export default LoginContainer;





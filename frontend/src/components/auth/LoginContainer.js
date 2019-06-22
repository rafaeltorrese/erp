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
		//singup(data, this.props.history)
		message.info('Registro Exitoso');
		this.setState({ data: {} })
	}
	onLogin = () => {
		let { data } = this.state
		login(data).then(r => {
			console.log("Que es esto", r)
			message.info('Welcome');
			this.props.history.push('/home')
		}).catch(err => {
			console.log("error", err)
			message.info('Usuario o contraseña inválida');
		})

		this.setState({ data: {} })
		console.log("Here", data)
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
								<Login
									data={data}
									onLogin={this.onLogin}
									handleText={this.handleText}
								/>
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





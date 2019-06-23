import React, { Component } from 'react';
import { Layout, message } from 'antd';

import LeftSide from "./Drawer";
// import Sections from "./Sections";
import Navbar from "../navbar/Navbar";
//import { readActivo } from "../services/Activo"
//import { readCompanys } from '../services/Company'
import { getConstructions } from "../../services/constructions"
import Sections from './Sections';

const { Header, Sider, Content } = Layout;




class MainPage extends Component {

	rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];


	state = {
		collapsed: false,
		user: {},
		constructions: [],
		
	};




	//user Edit

	// componentWillMount() {
	// 	const userToken = (localStorage.getItem('token'));
	// 	const userData = JSON.parse(localStorage.getItem('user'));
	// 	if (!userToken) {
	// 		this.props.history.push('/');
	// 	} else {
	// 		this.setState({ user: userData })
	// 		console.log(userData)
	// 		getConstructions()
	// 			.then(res => {

	// 				this.setState({ constructions: res.data})
	// 				console.log("respuesta", res)
	// 			})
	// 			.catch(err => {
	// 				console.error(err);
	// 			})

	// 	}
	// }


	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};
	logOut = () => {
		localStorage.clear()
		message.info('Hasta luego');
		this.props.history.push('/');
	};

	onOpenChange = (openKeys) => {

		this.setState({ openKeys });

	}

	


	render() {
		let { constructions } = this.state
		return (

			<Layout className={'leftside'}>
				<Sider
					trigger={null}
					collapsible
					collapsed={this.state.collapsed}
				>
					<div className="logo" >{!this.state.collapsed ? 'RANCHOADMIN' : 'ADMIN'}</div>
					<LeftSide  onOpenChange={this.onOpenChange} openKeys={this.state.openKeys} constructions={constructions} />
				</Sider>


				<Layout>
					<Header style={{ background: '#fff', padding: 0 }}>
						<Navbar
							user={this.state.user}
							logOut={this.logOut}
							collapsed={this.state.collapsed}
							toggle={this.toggle} />
					</Header>
					<Content style={{ margin: '1%', padding: '1%', background: '#f0f2f5', minHeight: '90vh' }}>
						<Sections/>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default MainPage;
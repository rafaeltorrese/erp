import React, { Component } from 'react';
import { Layout, message } from 'antd';

import LeftSide from "./Drawer";
import Navbar from "../navbar/Navbar";

import TableComponent from "../common/TableComponent"
import { getConstructions } from "../../services/constructions"
import Sections from './Sections';












const { Header, Sider, Content } = Layout;

class MainPage extends Component {




	state = {
		collapsed: false,
		user: "",
		constructions: []
	};




	//user Edit

	componentWillMount() {
		const userToken = (localStorage.getItem('TOKEN'));
		const userData = JSON.parse(localStorage.getItem('USER'));
		if (!userToken) {
			console.log("There is no token")
			this.props.history.push('/');
		} else {
			this.setState({ user: userData })

			// Call all Constructions
			getConstructions()
				.then(constructions => {

					this.setState({ constructions })

				})
				.catch(err => {
					console.error(err);
				})

		}
	}


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
					collapsed={this.state.collapsed} >
					<div className="logo" >{!this.state.collapsed ? 'RANCHOADMIN' : 'ADMIN'}</div>
					<LeftSide onOpenChange={this.onOpenChange} openKeys={this.state.openKeys} constructions={constructions} />
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

						
						

					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default MainPage;
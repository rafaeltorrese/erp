import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ConstructionContainer from '../constructions/ConstructionContainer';
import ActivitiesContainer from '../activities/ActivitiesContainer';

const Sections = () => {
	return (
		<div className={'admin-sections'}>
			<Switch>
				{/* <Route exact path={'/home/suppliers'} component={} />
				<Route exact path={'/home/activities'} component={Resumen} />
				<Route exact path={'/home/outcomes'} component={ProfileContainer} />
				<Route exact path={'/home/constructions'} component={ConstructionContainer} />
				*/}
				<Route exact path={'/home/constructions'} component={ConstructionContainer} />
				<Route exact path={'/home/activities'} component={ActivitiesContainer} />
			</Switch>
		</div>
	)

};

export default Sections;

//
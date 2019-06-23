import React, { useContext, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Layout from "./Layout/Layout";
import Signup from "./Auth/Signup";

const App = () => {
	return (
		<Fragment>
			{/* <Switch>
				<Route exact path="/" component={Homepage} />
      </Switch> */}

			<a href="/auth/twitter"> aaa</a>
			<a href="/return-json"> aaa</a>
			{/* <Route
				path="/(.+)"
				render={() => (
					<div>
						<Layout>
							<Switch>
								<Route path="/signup" render={() => <Signup />} />
								<Redirect to="/habits" />
							</Switch>
						</Layout>
					</div>
				)}
			/> */}
		</Fragment>
	);
};

export default App;

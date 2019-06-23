import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import { connect } from 'react-redux'
import * as actions from '../actions' 
import Landing from './Landing';
import Dashboard from "./Dashboard";
import SurveyNew from './surveys/SurveyNew';

class App extends Component{

  componentDidMount(){
    this.props.fetchUser()
  }

  render(){
	return (
		<BrowserRouter>
			<div>
				<Header />
        <div className="container">
          <Route path="/" exact component={Landing} />
          <Route path="/surveys" exact component={Dashboard} />
          <Route path="/surveys/new" exact component={SurveyNew} />
        </div>
			</div>
		</BrowserRouter>
  );
  }
};

export default connect(null,actions)(App);

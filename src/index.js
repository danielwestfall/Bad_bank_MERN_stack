import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./home";
import Navigationbar from "./navbar.js";
import Alldata from "./alldata";
import UserContext from "./usercontext";
import Createaccount from "./createaccount";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import Login from "./Login";

function Spa() {
	return (
		<HashRouter>
			<div>
				<Navigationbar />
				<UserContext.Provider
					value={{
						users: [
							{
								name: "daniel",
								email: "admin@ubank.com",
								password: "dfhjk",
								balance: 100,
							},
						],
					}}>
					<Route path='/' exact component={Home} />
					<Route
						path='/createaccount/'
						component={Createaccount}
					/>
					<Route path='/login/' component={Login} />
					<Route path='/deposit/' component={Deposit} />
					<Route path='/withdraw/' component={Withdraw} />
					<Route path='/alldata/' component={Alldata} />
				</UserContext.Provider>
			</div>
		</HashRouter>
	);
}

ReactDOM.render(<Spa />, document.getElementById("root"));

import React from "react";
import LoginForm from "./LoginForm";
import LoginMsg from "./LoginMsg";
import Cards from "./components/card";
const Login = () => {
	const [show, setShow] = React.useState(true);
	const [status, setStatus] = React.useState("");

	return (
		<Cards
			bgcolor='secondary'
			header='Login'
			status={status}
			body={
				show ? (
					<LoginForm setShow={setShow} setStatus={setStatus} />
				) : (
					<LoginMsg setShow={setShow} setStatus={setStatus} />
				)
			}
		/>
	);
};

export default Login;

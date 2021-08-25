import React from "react";

const LoginForm = (props) => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	function handle() {
		fetch(`/account/login/${email}/${password}`)
			.then((response) => response.text())
			.then((text) => {
				try {
					const data = JSON.parse(text);
					props.setStatus("");
					props.setShow(false);
					console.log("JSON:", data);
				} catch (err) {
					props.setStatus(text);
					console.log("err:", text);
				}
			});
	}

	return (
		<>
			Email
			<br />
			<input
				type='input'
				className='form-control'
				placeholder='Enter email'
				value={email}
				onChange={(e) => setEmail(e.currentTarget.value)}
			/>
			<br />
			Password
			<br />
			<input
				type='password'
				className='form-control'
				placeholder='Enter password'
				value={password}
				onChange={(e) => setPassword(e.currentTarget.value)}
			/>
			<br />
			<button type='submit' className='btn btn-light' onClick={handle}>
				Login
			</button>
		</>
	);
};

export default LoginForm;

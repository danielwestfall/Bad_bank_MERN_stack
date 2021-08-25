import React from "react";
import UserContext from "./usercontext";
import Display from "./display";
import Container from "react-bootstrap/Container";
import Text from "./components/text";
import Clickbox from "./components/button";

const Createaccount = () => {
	const [show, setShow] = React.useState(true);
	const [status, setStatus] = React.useState("");
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [disabled, setDisabled] = React.useState(true);

	function clearForm() {
		setName("");
		setEmail("");
		setPassword("");
		setShow(true);
		setDisabled(true);
	}

	function validate(field, label) {
		if (!field) {
			setStatus("Error: missing " + label);
			setTimeout(() => setStatus(""), 3000);
			return false;
		}
		return true;
	}

	function handleCreate() {
		console.log(name, email, password);
		if (!validate(name, "name")) return;
		if (!validate(email, "email")) return;
		if (!validate(password, "password")) return;

		const url = `/account/create/${name}/${email}/${password}`;
		(async () => {
			var res = await fetch(url);
			var data = await res.json();
			console.log(data);
		})();

		setShow(false);
	}

	function handleChange(e) {
		switch (e.target.id) {
			case "name":
				setName(e.currentTarget.value);
				setDisabled(!e.currentTarget.value);
				break;
			case "email":
				setEmail(e.currentTarget.value);
				setDisabled(!e.currentTarget.value);
				break;
			case "password":
				setPassword(e.currentTarget.value);
				setDisabled(!e.currentTarget.value);
				break;
			default:
				console.log(`Error`);
		}
	}

	return (
		<Container fluid>
			<Display
				bgcolor='primary'
				header='Create Account'
				status={status}
				body={
					show ? (
						<>
							Name
							<br />
							<Text
								id='name'
								placeholder='Enter name'
								value={name}
								onChange={handleChange}
							/>
							<br />
							Email address
							<br />
							<Text
								id='email'
								placeholder='Enter email'
								value={email}
								onChange={handleChange}
							/>
							<br />
							Password
							<br />
							<Text
								id='password'
								placeholder='Enter password'
								value={password}
								onChange={handleChange}
							/>
							<br />
							<Clickbox
								color='primary'
								onClick={handleCreate}
								text='Create Account'
								disabled={disabled}
							/>
						</>
					) : (
						<>
							<h5>Success</h5>
							<button
								type='submit'
								className='btn btn-light'
								onClick={clearForm}>
								Add another account
							</button>
						</>
					)
				}
			/>
		</Container>
	);
};

export default Createaccount;

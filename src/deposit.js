import React from "react";
import UserContext from "./usercontext";
import Display from "./display";
import Container from "react-bootstrap/Container";
import Currency from "./components/currency";
import Clickbox from "./components/button";

const Deposit = () => {
	const ctx = React.useContext(UserContext);
	const [show, setShow] = React.useState(true);
	const [status, setStatus] = React.useState("");
	const [deposit, setDeposit] = React.useState("");
	const [disabled, setDisabled] = React.useState(true);

	function clearForm() {
		setDeposit("");
		setDisabled(true);
		setShow(true);
	}

	function validate(field, label) {
		if (!field) {
			setStatus("Error: " + label);
			setTimeout(() => setStatus(""), 3000);
			return false;
		}
		return true;
	}

	function handleCreate() {
		console.log("click");
		if (!validate(deposit, "0")) return;
		if (deposit <= 0) {
			validate(false, "Invalid deposit amount");
			clearForm();
			return;
		}
		if (isNaN(deposit)) {
			validate(false, "Numerical Values Only");
			clearForm();
			return;
		}
		ctx.users[0].balance =
			parseFloat(ctx.users[0].balance) + parseFloat(deposit);
		ctx.users[0].balance =
			Math.round((ctx.users[0].balance + Number.EPSILON) * 100) / 100;
		console.log(ctx.users);
		setShow(false);
	}

	function handleChange(e) {
		setDeposit(e.currentTarget.value);
		setDisabled(!e.currentTarget.value);
	}

	return (
		<Container fluid>
			<Display
				bgcolor='info'
				header='Deposit'
				status={status}
				body={
					show ? (
						<>
							<h3>
								Balance $
								{ctx.users[0].balance.toFixed(2)}
							</h3>
							<br />
							Deposit Amount
							<br />
							<Currency onChange={handleChange} />
							<Clickbox
								variant='primary'
								onClick={handleCreate}
								text='Submit'
								disabled={disabled}
							/>
						</>
					) : (
						<>
							<h3>
								Balance $
								{ctx.users[0].balance.toFixed(2)}
							</h3>
							<br />
							<h5>Success</h5>
							<Clickbox
								color='success'
								onClick={clearForm}
								text='Start Another Transaction'
							/>
						</>
					)
				}
			/>
		</Container>
	);
};

export default Deposit;

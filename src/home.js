import React from "react";
//import UserContext from './usercontext';
import { Bank } from "react-bootstrap-icons";
import Display from "./display";
import Container from "react-bootstrap/Container";

const Home = () => {
	//const ctx = React.useContext(UserContext);

	return (
		<Container fluid>
			<Display
				txtcolor='black'
				header='BadBank Landing Page'
				title='Welcome to the bank'
				text='You can use this bank'
				body={<Bank size={100} />}
			/>
		</Container>
	);
};

export default Home;

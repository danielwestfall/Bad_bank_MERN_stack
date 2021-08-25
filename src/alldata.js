import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const Alldata = () => {
	const [data, setData] = React.useState("");

	React.useEffect(() => {
		//fetch all accounts from API
		fetch("/account/all")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setData(JSON.stringify(data));
			});
	}, []);

	return (
		<Container fluid>
			<Card>
				<Card.Header className='card-header' as='h5'>
					ALL DATA
				</Card.Header>
				<Card.Body className='card-body'>
					<Table striped bordered hover>
						<thead>
							<tr>
								<td>Name</td>
								<td>Email</td>
								<td>Password</td>
								<td>Balance</td>
							</tr>
						</thead>
						<tbody id='allDataTable'>
							{data}
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Alldata;

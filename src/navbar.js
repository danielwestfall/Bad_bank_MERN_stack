import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Bank } from "react-bootstrap-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Navigationbar = () => {
	return (
		<Navbar bg='dark' variant='dark'>
			<Container fluid>
				<Navbar.Brand>
					<Bank color='white' size={30} /> Bad Bank
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse
					id='basic-navbar-nav'
					className='justify-content-end'>
					<span className='text-center mt-4 mb-4'>
						<Nav className='mr-auto'>
							<OverlayTrigger
								placement='bottom'
								overlay={
									<Tooltip id='button-tooltip-2'>
										Home Page
									</Tooltip>
								}>
								<Link
									className='nav-link'
									aria-label='nav-home'
									to='/'>
									Home
								</Link>
							</OverlayTrigger>
							<OverlayTrigger
								placement='bottom'
								overlay={
									<Tooltip id='button-tooltip-2'>
										Create a new account
									</Tooltip>
								}>
								<Link
									className='nav-link'
									aria-label='nav-createaccount'
									to='/createaccount/'>
									Create Account
								</Link>
							</OverlayTrigger>
							<OverlayTrigger
								placement='bottom'
								overlay={
									<Tooltip id='button-tooltip-2'>
										Login to your account
									</Tooltip>
								}>
								<Link
									className='nav-link'
									aria-label='nav-login'
									to='/login/'>
									Login
								</Link>
							</OverlayTrigger>
							<OverlayTrigger
								placement='bottom'
								overlay={
									<Tooltip id='button-tooltip-2'>
										Deposit into your account
									</Tooltip>
								}>
								<Link
									className='nav-link'
									aria-label='nav-deposit'
									to='/deposit/'>
									Deposit
								</Link>
							</OverlayTrigger>
							<OverlayTrigger
								placement='bottom'
								overlay={
									<Tooltip id='button-tooltip-2'>
										Withdraw money
									</Tooltip>
								}>
								<Link
									className='nav-link'
									aria-label='nav-withdraw'
									to='/withdraw/'>
									Withdraw
								</Link>
							</OverlayTrigger>
							<OverlayTrigger
								placement='bottom'
								overlay={
									<Tooltip id='button-tooltip-2'>
										See all account data
									</Tooltip>
								}>
								<Link
									className='nav-link'
									aria-label='nav-alldata'
									to='/alldata/'>
									Account Data
								</Link>
							</OverlayTrigger>
						</Nav>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigationbar;

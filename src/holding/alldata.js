import React from 'react';
import UserContext from './usercontext';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Alldata = () => {

const ctx = React.useContext(UserContext);

    return (
        <Container fluid>
            <Card>
            <Card.Header className="card-header" as="h5">ALL DATA</Card.Header>
            <Card.Body  className="card-body">
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
                        {ctx.users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>${user.balance}</td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Alldata

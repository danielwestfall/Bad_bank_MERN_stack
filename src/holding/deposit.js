import React from 'react';
import UserContext from './usercontext';
import Display from './display';
import Container from 'react-bootstrap/Container';

const Deposit = () => {
    const ctx = React.useContext(UserContext);
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [deposit, setDeposit] = React.useState('');
    const [disabled, setDisabled] = React.useState(true);

    function clearForm(){
        setDeposit('');
        setDisabled(true);
        setShow(true);
    }

    function validate(field, label){
        if (!field){
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function handleCreate(){
        if (!validate(deposit, '0')) return;
        if (deposit <= 0) {
            validate(false, 'Invalid deposit amount');
            clearForm();
            return;
        }
        if (isNaN(deposit)){
            validate(false, 'Numerical Values Only');
            clearForm();
            return;
        }
        ctx.users[0].balance = parseFloat(ctx.users[0].balance) + parseFloat(deposit);
        console.log(ctx.users);
        setShow(false);
    }

    
    return (
        <Container fluid>
        <Display 
            bgcolor="info"
            header="Deposit"
            status={status}
            body={show ? (
                <>
                    <h3>Balance ${ctx.users[0].balance.toFixed(2)}</h3>
                    <br />
                    Deposit Amount<br />
                    <input type="number" min="0.01" step="0.01" className="form-control" id="depositamount"
                    value={deposit} onChange={e => {setDeposit(e.currentTarget.value);
                                                    setDisabled(!e.currentTarget.value)}} />
                    <br />
                    <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={disabled} id="Button" >Deposit</button>
                </>
            ):(
                <>
                    <h3>Balance ${ctx.users[0].balance.toFixed(2)}</h3>
                    <br />
                    <h5>Success</h5>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>Start Another Transaction</button>
                </>

            )}
        />
        </Container>
    )
}

export default Deposit

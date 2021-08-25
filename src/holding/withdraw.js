import React from 'react';
import UserContext from './usercontext';
import Display from './display';
import Container from 'react-bootstrap/Container';


const Withdraw = () => {
    const ctx = React.useContext(UserContext);
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [withdraw, setWithdraw] = React.useState('');
    const [disabled, setDisabled] = React.useState(true);

    function clearForm(){
        setWithdraw('');
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
        if (withdraw > ctx.users[0].balance){
            validate(false, 'Insufficient Funds');
            clearForm();
            return;
        }
        if (isNaN(withdraw)){
            validate(false, 'Numerical Values Only');
            clearForm();
            return;
        }
        if (withdraw <= 0) {
            validate(false, 'Invalid withdraw amount');
            clearForm();
            return;
        }
        if (!validate(withdraw, ' Enter an amount to withdraw')) return;
        ctx.users[0].balance = parseFloat(ctx.users[0].balance) - parseFloat(withdraw);
        console.log(ctx.users);
        setShow(false);
    }

    
    return (
        <Container fluid>
        <Display 
            bgcolor="info"
            header="Withdraw"
            status={status}
            body={show ? (
                <>
                    <h3>Balance ${ctx.users[0].balance.toFixed(2)}</h3>
                    <br />
                    Withdrawal Amount<br />
                    <input type="number" min="0.01" step="0.01" className="form-control" id="withdrawamount"
                     value={withdraw} onChange={e => {setWithdraw(e.currentTarget.value);
                        setDisabled(!e.currentTarget.value)}} />
                    <br />
                    <button type="submit" className="btn btn-light" disabled={disabled} onClick={handleCreate}>Withdraw</button>
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


export default Withdraw




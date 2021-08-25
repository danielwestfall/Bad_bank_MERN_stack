import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const Currency = ({onChange}) => {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <FormControl aria-label="Amount (to the nearest dollar)" onChange={onChange} />
            <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
    )
}

export default Currency

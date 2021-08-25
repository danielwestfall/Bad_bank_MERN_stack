import React from 'react';
import Button from 'react-bootstrap/Button';

const Clickbox = ({text, onClick, variant, disabled}) => {
    return (
        <div>
            <>
            <Button variant={variant} size="lg"  aria-label={text} active onClick={onClick} disabled={disabled}>
                {text}
            </Button>
            </>
        </div>
    )
}

export default Clickbox

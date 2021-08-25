import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const Text = ({ id, placeholder, value, onChange }) => {
	return (
		<div>
			<InputGroup className='mb-3'>
				<FormControl
					aria-label={`Recipient's ${id}`}
					aria-describedby='basic-addon2'
					id={id}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
			</InputGroup>
		</div>
	);
};

export default Text;

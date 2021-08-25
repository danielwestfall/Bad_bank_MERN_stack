import React from "react";

const LoginMsg = (props) => {
	return (
		<>
			<h5>Success</h5>
			<button
				type='submit'
				className='btn btn-light'
				onClick={() => props.setShow(true)}>
				Authenticate again
			</button>
		</>
	);
};

export default LoginMsg;

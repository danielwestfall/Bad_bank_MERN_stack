import React from "react";
import Card from "react-bootstrap/Card";

const Display = (props) => {
	function classes() {
		const bg = props.bgcolor ? "bg-" + props.bgcolor : " ";
		const txt = props.txtcolor ? "text-" + props.txtcolor : " text-white";
		return "card mb-3 " + bg + txt;
	}

	return (
		<Card className={classes()} style={{ maxWidth: "18rem" }}>
			<Card.Header className='card-header' as='h5'>
				{props.header}
			</Card.Header>
			<Card.Body className='card-body'>
				{props.title && (
					<Card.Title className='card-title'>
						{props.title}
					</Card.Title>
				)}
				{props.text && (
					<Card.Text className='card-text'>
						{props.text}
					</Card.Text>
				)}
				{props.body}
				{props.status && (
					<div id='createStatus'>{props.status}</div>
				)}
			</Card.Body>
		</Card>
	);
};

export default Display;

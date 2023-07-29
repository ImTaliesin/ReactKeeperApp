import React from "react";

<Card
	title="tempName"
    todo="tempTodo"
	/>

	
function Card(props) {
	return (
		<div>
			<h2 className="title">{props.name}</h2>
			<p className="todo">{props.todo}</p>
		</div>
	)
}

export default Card;

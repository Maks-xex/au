import React from "react";

import "./formGreeting.scss";

export const FormGreeting = ({ name, status, changeStatus, inputRef }) => (
	<div className='register-form__greeting'>
		<h1>
			<span>Здравствуйте,</span>
			<input
				className='register-form__user-name'
				name='name'
				ref={inputRef}
				type='text'
				value={name}
				disabled={status}
				maxLength='20'
			/>
		</h1>
		<button className='status' type='button' onClick={() => changeStatus()}>
			Сменить статус
		</button>
		<div className='status-tooltip'>
			<p className='status-tooltip__message'>
				{name ? name : "Прежде чем действовать, надо понять"}
			</p>
		</div>
	</div>
);

import React from "react";

import "./agree.scss";

export const Agree = () => (
	<div className='register-form-item__agree item'>
		<label>
			Я согласен
			<div className='checkbox-wrapper'>
				<input type='checkbox' />
				<span></span>
				<p>принимать актуальную информацию на емейл</p>
			</div>
		</label>
	</div>
);

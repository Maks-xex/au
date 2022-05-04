import React from "react";
import "./submitButton.scss";

export const SubmitButton = ({ date, time, children }) => (
	<div className='register-form-submit__wrapper'>
		<button className='register-form__submit' type='submit'>
			{children}
		</button>
		{date && (
			<p className='description'>
				последние изменения {date} в {time}
			</p>
		)}
	</div>
);

import React from "react";

import "./popup.scss";

export const Popup = ({ data }) => (
	<div className='popup-fade'>
		<div className='popup-text__wrapper'>
			<p className='popup__text'>{data}</p>
		</div>
	</div>
);

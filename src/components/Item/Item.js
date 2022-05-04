import React from "react";

import "./item.scss";

const renderOption = (array) =>
	array.map((city, i) => (
		<option value={city.city} key={i}>
			{city.city}
		</option>
	));

const errorClass = (error, className) => {
	if (!error) {
		return "";
	}
	const CLASS = Object.keys(error)
		.map((msg) => (msg === className && error[msg] ? " error" : ""))
		.join("");
	return CLASS;
};

export const Item = ({ className, properties, city, error }) => (
	<>
		<div className={`register-form-item__${className} item`}>
			<label>
				{properties.name}
				{className === "city" ? (
					<select name={className}>{renderOption(city)}</select>
				) : (
					<div className='error-message'>
						<input
							type={className === "email" ? "text" : "password"}
							id={className}
							className={className + `${errorClass(error, className)}`}
							name={className}
						/>
						{error && <p>{error[className]}</p>}
					</div>
				)}
			</label>
			{properties.description && (
				<p className='description'>{properties.description}</p>
			)}
		</div>
		{className !== "email" && className !== "password" && <hr />}
	</>
);

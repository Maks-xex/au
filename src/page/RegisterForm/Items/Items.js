import React from "react";

import { Item } from "../../../components/Item/Item";

const itemValue = {
	city: {
		name: "Ваш город",
	},
	password: {
		name: "Пароль",
		description: "Ваш новый пароль должен содержать не менее 5 символов.",
	},
	repassword: {
		name: "Пароль еще раз",
		description:
			"Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.",
	},
	email: {
		name: "Электронная почта",
		description: "Можно изменить адрес, указанный при регистрации.",
	},
};

const renderFormItems = (city, error) =>
	Object.keys(itemValue).map((element, i) => (
		<Item
			properties={itemValue[element]}
			className={element}
			city={city}
			error={error}
			key={i}
		/>
	));

export const Items = ({ city, error }) => (
	<div className='register-form__items'>{renderFormItems(city, error)}</div>
);

import React, { useEffect, useState, useRef } from "react";

import { SubmitButton } from "../../components/SubmitButton/SubmitButton";

import cities from "../../api/cities.json";

import { Agree } from "./Agree/Agree";
import { FormGreeting } from "./FormGreeting/FormGreeting";
import { Items } from "./Items/Items";

import { sortByAlphabet } from "../../utils/sortByAlphabet";
import { sortByPopulation } from "../../utils/sortByPopulation";
import { getMaxPopulation } from "../../utils/getMaxPopulation";
import { shiftToBegin } from "../../utils/shiftToBegin";
import { validation, errMsgList } from "../../utils/validation";

import { Popup } from "../../components/Popup/Popup";

import "./registerform.scss";

const CITY_POPULATION = 50000;

const maxPopValue = getMaxPopulation(cities);

const firstCity = cities.find(
	(city) => city.population === maxPopValue.toString() && city,
).city;

const initialState = {
	name: "Человек №3596941",
	city: firstCity,
	password: "",
	repassword: "",
	email: "",
};

const sortedArrayFunc = (array, population) => {
	array = sortByAlphabet(array);
	array = sortByPopulation(array, population);
	array = shiftToBegin(array, maxPopValue);
	return array;
};

export const RegisterForm = () => {
	const [userInfo, setUserInfo] = useState(initialState);

	const [errorMsg, setErrorMsg] = useState({});

	const [cityList, setCityList] = useState([]);
	const [data, setData] = useState(null);

	const [time, setTime] = useState(null);
	const [date, setDate] = useState(null);

	const [status, setStatus] = useState(true);
	const inputRef = useRef(null);

	const changeStatus = () => {
		setStatus((prev) => !prev);
	};

	const handleUserInfo = (evt) => {
		const value = evt.target.value;
		const name = evt.target.name;

		if (!name) {
			return;
		}

		const error = validation(name, value);
		setErrorMsg(error);
		setUserInfo((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const time = new Date().toLocaleTimeString();
		const date = new Date().toLocaleDateString("us-US", {
			day: "numeric",
			month: "long",
			year: "numeric",
		});

		if (!userInfo.password || !userInfo.repassword || !userInfo.email) {
			setErrorMsg((prev) => ({
				password:
					prev.password ||
					(!userInfo.password ? errMsgList.emptyPasswordInput : ""),
				repassword:
					prev.repassword ||
					(!userInfo.repassword ? errMsgList.emptyPasswordInput : ""),
				email:
					prev.email || (!userInfo.email ? errMsgList.emptyEmailInput : ""),
			}));
			return;
		}

		const errorValue = [...Object.values(errorMsg)];

		if (errorValue.every((value) => !value)) {
			const json = JSON.stringify(userInfo, null, " ");
			setData(json);
			setTime(time);
			setDate(date);
		}
	};

	useEffect(() => {
		inputRef.current.focus();
	}, [status]);

	useEffect(() => {
		const sortedArray = sortedArrayFunc(cities, CITY_POPULATION);
		setCityList(sortedArray);
	}, []);

	return (
		<>
			<section className='register-form'>
				<form
					className='register-form'
					onChange={(evt) => handleUserInfo(evt)}
					onSubmit={(evt) => handleSubmit(evt)}>
					<FormGreeting
						name={userInfo.name}
						status={status}
						changeStatus={changeStatus}
						inputRef={inputRef}
					/>
					<Items city={cityList} error={errorMsg} />
					<Agree />
					<SubmitButton
						children='Изменить'
						time={time}
						date={date}
						onSubmit={handleSubmit}
					/>
				</form>
			</section>
			{data && <Popup data={data} />}
		</>
	);
};

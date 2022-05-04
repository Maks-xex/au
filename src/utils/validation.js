const errMsgList = {
	password: "Используйте не менее 5 символов",
	repassword: "Пароли не совпадают",
	email: "Неверный E-mail",
	emptyEmailInput: "Укажите E-mail",
	emptyPasswordInput: "Укажите Пароль",
};

const emailExp = new RegExp(
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);
const setEmptyValue = (name) =>
	name === "email" ? errMsgList.emptyEmailInput : errMsgList.emptyPasswordInput;

const check = {
	password: "",
	repassword: "",
};

let errorLog = {};

const validation = (name, value) => {
	if (!value.length) {
		errorLog[name] = setEmptyValue(name);
		return errorLog;
	}
	switch (name) {
		case "email":
			if (!emailExp.test(value)) {
				errorLog[name] = errMsgList[name];
				return errorLog;
			}
			delete errorLog[name];
			break;
		case "password":
			check.password = value;
			if (value.length < 5) {
				errorLog[name] = errMsgList[name];
				return errorLog;
			}
			if (check.password !== check.repassword) {
				delete errorLog[name];
				errorLog.repassword = errMsgList.repassword;
				return errorLog;
			}
			delete errorLog[name];
			break;
		case "repassword":
			check.repassword = value;
			if (check.repassword !== check.password) {
				errorLog[name] = errMsgList[name];
				return errorLog;
			}
			delete errorLog[name];
			break;
		default:
			return;
	}
	return errorLog;
};
export { validation, errMsgList };

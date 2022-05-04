import { Route, Routes } from "react-router-dom";

import { RegisterForm } from "./page/RegisterForm/RegisterForm";

export const App = () => (
	<Routes>
		<Route path='/' element={<RegisterForm />} />
	</Routes>
);

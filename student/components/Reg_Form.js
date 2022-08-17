import { useState } from "react";
const Reg_Form = () => {
	return (
		<form className="form reg-form glass glass-1">
			<h3>Register</h3>
			<div className="crses">
				<Inpts key={0} />
				<Inpts key={1} />
				<Inpts key={2} />
				<Inpts key={3} />
			</div>
		</form>
	);
};
const Inpt = ({ lbl }) => {
	return (
		<div className="form-inpt">
			<label>{lbl}</label>
			<input className="inpt" type="text" />
			<button className="btn btn-1">Register</button>
		</div>
	);
};
const Inpts = () => {
	const [inpts, setInpts] = useState(["Code", "Exam Type", "Group"]);
	return (
		<div className="inpts">
			{inpts.map((i, id) => (
				<Inpt key={id} lbl={i} />
			))}
		</div>
	);
};

export default Reg_Form;

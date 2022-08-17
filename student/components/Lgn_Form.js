const L_Form = () => {
	return (
		<form className="lgn-form glass glass-1">
			<h3>Log in</h3>
			<div className="inpts">
				<div className="form-inpt">
					<label> Registration No </label>
					<input className="inpt" type="text" />
				</div>
				<div className="form-inpt">
					<label>Password</label>
					<input className="inpt" type="password" />
				</div>
			</div>
			<button className="btn btn-1">Log in</button>
		</form>
	);
};

export default L_Form;

const Al_Form = () => {
	return (
		<form className="form Al-form glass glass-1">
			<h3>Get Allocated Reg Number</h3>
			<div className="inpts">
				<div className="form-inpt">
					<label> Application Ref Number</label>
					<input className="inpt" type="text" />
				</div>
			</div>
			<button className="btn btn-1"> Get Reg No</button>
		</form>
	);
};

export default Al_Form;

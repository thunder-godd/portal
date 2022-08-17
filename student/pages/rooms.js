import { useState } from "react";
import Reg_Form from "../components/Reg_Form";
import Crs_Table from "../components/Crs_Table";
const Courses = () => {
	const [show, setShow] = useState(false);
	const handleClick = () => {
		setShow((prev) => !prev);
	};
	return (
		<div className="page courses">
			<main className="main">
				<h3 className="title">Registered Course</h3>
				<div className="content">
					<Crs_Table sem="1.1" />
					{show ? <Reg_Form /> : ""}

					<button
						onClick={(e) => handleClick()}
						className="btn btn-3 glass glass-1">
						+
					</button>
				</div>
			</main>
		</div>
	);
};

export default Courses;

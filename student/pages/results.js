import { useState } from "react";
import Fee_Table from "../components/Fee_Table";

const Fees = () => {
	const [sems, setSems] = useState(["1.1", "1.2"]);
	return (
		<div className="page fees">
			<main className="main">
				<h3 className="title">Fee Statement</h3>
				<div className="grid tbls">
					{sems.map((sem, id) => {
						return <Fee_Table key={id} sem={sem} />;
					})}
				</div>
			</main>
		</div>
	);
};

export default Fees;

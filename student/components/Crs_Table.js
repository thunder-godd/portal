import { useState } from "react";
const Crs_Table = ({ sem }) => {
	const [data, setData] = useState([1, 2, 3, 4, 5]);
	return (
		<div className="tbl-container crs-table glass glass-2">
			<table className="tbl crs-tbl">
				{/* <tr className="t-row h-1">
					<th>Year: 2022</th>
					<th>Sem: {sem}</th>
				</tr> */}
				<tr className="t-row h-2">
					<th>#</th>
					<th>Code</th>
					<th>Title</th>
					<th>Exam Type</th>
					<th>Class/Group</th>
					<th>Status</th>
				</tr>
				{data.map((row, id) => {
					return <T_row key={id} />;
				})}
			</table>
		</div>
	);
};
const T_row = () => {
	return (
		<tr className="t-row h-2">
			<td>00</td>
			<td>101</td>
			<td>ECT</td>
			<td>First Attempt</td>
			<td>1</td>
			<td>|</td>
		</tr>
	);
};

export default Crs_Table;

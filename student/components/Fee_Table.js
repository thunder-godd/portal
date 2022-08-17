import { useState } from "react";
const Fee_Table = ({ sem }) => {
	const [data, setData] = useState([1, 2, 3, 4, 5]);
	return (
		<div className="tbl-container f-table glass glass-2">
			<table className="tbl fe-tbl">
				<tr className="t-row h-1">
					<th>Year: 2022</th>
					<th>Sem: {sem}</th>
					<th>Currency: KSh</th>
				</tr>
				<tr className="t-row h-2">
					<th>#</th>
					<th>Date</th>
					<th>Description</th>
					<th>Debit</th>
					<th>Credit</th>
					<th>Balance</th>
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
		<tr className="t-row ">
			<td>00</td>
			<td>10/12</td>
			<td> 0.00</td>
			<td>180,000</td>
			<td>180,000</td>
			<td>180,000</td>
		</tr>
	);
};

export default Fee_Table;

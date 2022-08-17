import { useState } from "react";
const Rslt_Table = () => {
	const [data, setData] = useState([1, 2, 3, 4, 5]);
	return (
		<div className="tbl-container crs-table">
			<table className="tbl crs-tbl">
				<tr className="t-row h-1">
					<th>Year: 2022</th>
					<th>Sem: 2022</th>
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
					<T_row key={id} />;
				})}
			</table>
		</div>
	);
};
const T_row = () => {
	return (
		<tr className="t-row h-2">
			<td>00</td>
			<td>10/12</td>
			<td> 0.00</td>
			<td>180,000</td>
			<td>180,000</td>
		</tr>
	);
};

export default Rslt_Table;

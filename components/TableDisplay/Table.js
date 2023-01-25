import { TableStyle } from "./Z_Style_Table";
import { ThumbnailStyle } from "../Icons/Z_Style_Icons";
import Delete from "../Icons/Delete";
import Edit from "../Icons/Edit";

const Table = ({ colHeaders, data, type }) => {
	console.log("TABLE component data", data);

	const tableContents = () => {
		return data.map((item, index) => {
			return (
				<tr key={`${index * Math.random() + item}`}>
					<th>{index}</th>
					{Object.entries(item).map(([key, value], index) => {
						let uniqueKey = index * 11 * Math.random() + value;
						if (key === "image") {
							return (
								<th key={uniqueKey}>
									<ThumbnailStyle src={value[0]} alt="" />
								</th>
							);
						} else if (typeof value === "object") {
							return <th key={uniqueKey}>{value?.name || "null"}</th>;
						} else if (key === "id") {
							//console.log("key ,",key)
							return (
								<th key={uniqueKey}>
									<Delete id={value} type={type} />
									<Edit id={value} type={type} />
								</th>
							);
						} else if (key !== "__typename") {
							return <th key={uniqueKey}>{value}</th>;
						}
					})}
				</tr>
			);
		});
	};

	return (
		<TableStyle>
			<caption></caption>
			<thead>
				<tr>
					<th>#</th>
					{colHeaders.map((header, index) => (
						<th key={`${index * Math.random() + ""}`}>{header}</th>
					))}
				</tr>
			</thead>
			<tbody>{tableContents()}</tbody>
			<tfoot>
				{/* <tr>
                    {colHeaders.map((header,index) => (
                        <th key={`${index*Math.random()+""}`}>Foot:{header}</th>
                    ))}
                </tr> */}
			</tfoot>
		</TableStyle>
	);
};
export default Table;

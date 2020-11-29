// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import { cars } from "./practice";

console.log(cars);
let [honda, tesla] = cars;
let {
	coloursByPopularity: [teslaTopColour],
	speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
let {
	coloursByPopularity: [hondaTopColour],
	speedStats: { topSpeed: hondaTopSpeed }
} = honda;

console.log(teslaTopSpeed);

ReactDOM.render(
	<tbody>
		<table>
			<tr>
				<th>Brand</th>
				<th>Top Speed</th>
				<th>Top Colour</th>
			</tr>
			<tr>
				<td>{tesla.model}</td>
				<td>{teslaTopSpeed}</td>
				<td>{teslaTopColour}</td>
			</tr>
			<tr>
				<td>{honda.model}</td>
				<td>{hondaTopSpeed}</td>
				<td>{hondaTopColour}</td>
			</tr>
		</table>
	</tbody>,
	document.getElementById("root")
);

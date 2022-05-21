import { Bar } from "react-chartjs-2";

const Graph = () => {
return (
<>
	<h1>GEEKSFORGEEKS BAR CHART REACTJS</h1>
	<div style={{ maxWidth: "650px" }}>
		<Bar
		data={{
			// Name of the variables on x-axies for each bar
			labels: [],
			datasets: [
			{
				// Label for bars
				label: "total count/value",
				// Data or value of your each variable
				data: [1552, 1319, 613, 1400],
				// Color of each bar
				backgroundColor: ["aqua", "green", "red", "yellow"],
				// Border color of each bar
				borderColor: ["aqua", "green", "red", "yellow"],
				borderWidth: 0.5,
			},
			],
		}}
		
	
		/>
	</div>
 </>
);
}

export default Graph;

// Import useEffect and useState from React for handling side effects and local state
import { useEffect, useState } from 'react';

export default function LotTest() {
	// Declare new state variables for the parking lot details and loading state
	const [lot, setLot] = useState(null);
	const [loading, setLoading] = useState(true);

	// Use an effect hook to fetch the data when the component mounts
	useEffect(() => {
		// Define the async function within the hook
		const fetchData = async () => {
			const response = await fetch(
				'https://data.lacity.org/resource/dik5-hwp6.json'
			);
			const data = await response.json();

			// Find the parking lot with the ID "P4"
			const p4 = data.find((lot) => lot.parkingid === 'P4');
			if (p4) {
				setLot({
					id: p4.parkingid,
					name: p4.parkingname,
					totalSpaces: parseInt(p4.totalparkingspaces),
					freeSpaces: parseInt(p4.freespaces),
					timestamp: new Date(p4.dataexportdatetime),
				});
			}

			// Set loading state to false after data is fetched
			setLoading(false);
		};

		// Call the fetch function
		fetchData();
	}, []); // Empty dependency array means this effect runs once on mount

	// Render the data
	return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : (
				lot && (
					<div>
						<p>
							Parking Lot {lot.name} (ID: {lot.id})
						</p>
						<p>Total Spaces: {lot.totalSpaces}</p>
						<p>Free Spaces: {lot.freeSpaces}</p>
						<p>Data Exported at: {lot.timestamp.toLocaleString()}</p>
					</div>
				)
			)}
		</div>
	);
}

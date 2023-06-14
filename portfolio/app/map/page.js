'use client';

import { useEffect, useState } from "react";

export default function FullMap() {
  const [lots, setLots] = useState([]);

  useEffect(() => {
    // Define the async function within the hook
    const fetchData = async () => {
      const response = await fetch("https://data.lacity.org/resource/dik5-hwp6.json");
      const data = await response.json();
      console.log(data)

      // Map the data to extract total parking spaces for each lot
      const parkingSpaces = data.map(lot => ({
        id: lot.parkingid,
        name: lot.parkingname,
        totalSpaces: parseInt(lot.totalparkingspaces),
      }));

      setLots(parkingSpaces);
    };

    // Call the fetch function
    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  // Render the data
  return (
    <div>
      {lots.map(lot => (
        <p key={lot.id}>Parking Lot {lot.name} has {lot.totalSpaces} total spaces.</p>
      ))}
    </div>
  );
}

import React, { useEffect, useState } from "react";

const CoworkingsPage = () => {
  const [coworkings, setCoworkings] = useState([]);

  const fetchCoworkings = async () => {
    const response = await fetch("http://localhost:3010/api/coworkings");
    const responseJs = await response.json();

    setCoworkings(responseJs.data);
  };

  useEffect(() => {
    fetchCoworkings();
  }, []);

  return (
    <div>
      {coworkings.map((coworking) => (
        <div key={coworking.id}>
          <h2>{coworking.name}</h2>
          <p>
            Adresse :{coworking.address.number} {coworking.address.street} - {coworking.address.postcode}
            {coworking.address.city}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CoworkingsPage;

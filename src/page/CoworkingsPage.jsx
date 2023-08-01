import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderAdmin from "../component/HeaderAdmin";

const CoworkingsPage = () => {
  const [coworkings, setCoworkings] = useState([]);
  const [deleteCoworkingMessage, setDeleteCoworkingMessage] = useState(null);

  const fetchCoworkings = async () => {
    const response = await fetch("http://localhost:3010/api/coworkings", {
      method: "GET",
    });
    const responseJs = await response.json();

    setCoworkings(responseJs.data);
  };

  // useEffect avec la variable deleteCoworkingMessage
  // dans le tableau, permet de dire qu'on executer
  // la fonction fetchCoworkings à chaque fois que
  // la variable deleteCoworkingMessage est modifiée
  useEffect(() => {
    fetchCoworkings();
  }, [deleteCoworkingMessage]);

  const handleDeleteCoworking = async (coworkingId) => {
    const responseDelete = await fetch(`http://localhost:3010/api/coworkings/${coworkingId}`, {
      method: "DELETE",
    });

    const responseDeleteJs = await responseDelete.json();

    setDeleteCoworkingMessage(responseDeleteJs.message);
  };

  return (
    <>
      <HeaderAdmin />
      <div>
        <h1>Liste des coworkings</h1>
        {deleteCoworkingMessage && <p>{deleteCoworkingMessage}</p>}
        {coworkings.map((coworking) => (
          <div key={coworking.id}>
            <h2>{coworking.name}</h2>
            <p>
              Adresse :{coworking.address.number} {coworking.address.street} - {coworking.address.postcode}
              {coworking.address.city}
            </p>
            <Link to={`/admin/coworkings/${coworking.id}/update`}>Mettre à jour le coworking</Link>
            <button onClick={() => handleDeleteCoworking(coworking.id)}>Supprimer le coworking</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default CoworkingsPage;

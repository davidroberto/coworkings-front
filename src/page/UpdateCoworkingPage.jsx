import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateCoworkingPage = () => {
  // récupérer l'id dans l'url

  const { id } = useParams();

  const [coworking, setCoworking] = useState(null);

  // je récupère le coworking lié à cet id sur l'api

  const fetchCoworking = async () => {
    const responseCoworking = await fetch(`http://localhost:3010/api/coworkings/${id}`);
    const responseCoworkingJs = await responseCoworking.json();

    setCoworking(responseCoworkingJs.data);
  };

  useEffect(() => {
    fetchCoworking();
  }, []);

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" defaultValue={coworking && coworking.name} />
      </div>

      <div>
        <label htmlFor="superficy">Superficy</label>
        <input type="number" name="superficy" defaultValue={coworking && coworking.superficy} />
      </div>

      <div>
        <label htmlFor="capacity">Capacity</label>
        <input type="number" name="capacity" defaultValue={coworking && coworking.capacity} />
      </div>

      <div>
        <label htmlFor="price_hour">Price by hour</label>
        <input type="number" name="price_hour" defaultValue={coworking && coworking.price.hour} />
      </div>

      <div>
        <label htmlFor="price_day">Price by day</label>
        <input type="number" name="price_day" defaultValue={coworking && coworking.price.day} />
      </div>

      <div>
        <label htmlFor="price_month">Price by month</label>
        <input type="number" name="price_month" defaultValue={coworking && coworking.price.month} />
      </div>

      <div>
        <label htmlFor="address_number">Address number</label>
        <input type="number" name="address_number" defaultValue={coworking && coworking.address.number} />
      </div>

      <div>
        <label htmlFor="address_street">Address street</label>
        <input type="text" name="address_street" defaultValue={coworking && coworking.address.street} />
      </div>

      <div>
        <label htmlFor="address_postcode">Address zipcode</label>
        <input type="number" name="address_postcode" defaultValue={coworking && coworking.address.postCode} />
      </div>

      <div>
        <label htmlFor="address_city">Address city</label>
        <input type="text" name="address_city" defaultValue={coworking && coworking.address.city} />
      </div>

      <input type="submit" />
    </form>
  );
};

export default UpdateCoworkingPage;

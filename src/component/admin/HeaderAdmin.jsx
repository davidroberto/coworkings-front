import { Link } from "react-router-dom";

const HeaderAdmin = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={"/admin"}>Accueil</Link>
          </li>
          <li>
            <Link to={"/admin/coworkings"}>Liste des coworkings</Link>
          </li>
          <li>
            <Link to={"/admin/coworkings/create"}>Ajouter un coworking</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderAdmin;

import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

const HeaderAdmin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("jwt");

    navigate("/login");
  };

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
          <li>
            <a href="#" onClick={handleLogout}>
              Se déconnecter
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderAdmin;

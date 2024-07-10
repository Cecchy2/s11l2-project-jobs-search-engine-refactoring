import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavoriteCompany } from "../redux/actions";

const FavoritesCompanies = () => {
  const dispatch = useDispatch();
  const favoriteCompanies = useSelector((state) => state.favorite.favoriteCompanies);

  const handleRemoveCompany = (company) => {
    dispatch(removeFavoriteCompany(company));
  };

  return (
    <div>
      <h1>Favorite Companies</h1>
      <ul>
        {favoriteCompanies.map((company, index) => (
          <li key={index}>
            <button onClick={() => handleRemoveCompany(company)} className="me-2 mb-2">
              ❌
            </button>
            <Link to={`/${company}`}>{company}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesCompanies;

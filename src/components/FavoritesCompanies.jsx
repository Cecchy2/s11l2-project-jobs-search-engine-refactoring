import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FavoritesCompanies = () => {
  const favoriteCompanies = useSelector((state) => state.favoriteCompanies);

  return (
    <div>
      <h1>Favorite Companies</h1>
      <ul>
        {favoriteCompanies.map((company, index) => (
          <li key={index}>
            <Link to={`/${company}`}>{company}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesCompanies;

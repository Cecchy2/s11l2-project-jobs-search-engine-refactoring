import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favoriteCompanies = useSelector((state) => state.favoriteCompanies);
  const favorite = favoriteCompanies.includes(data.company_name);

  console.log(data);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={`bi bi-heart-fill me-2 ${favorite ? "red-fill" : ""}`}
          viewBox="0 0 16 16"
          onClick={() =>
            dispatch({
              type: "FAVORITE_COMPANIES",
              payload: data.company_name,
            })
          }
          style={{ cursor: "pointer" }}
        >
          <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
        </svg>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;

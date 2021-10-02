import { useParams } from "react-router-dom";
import FetchData from "./FetchData";
const CardDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = FetchData(
    "http://localhost:8000/productList/" + id
  );
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card" style={{ width: "80rem" }}>
                <a href={data.image}>
                  <img src={data.image} className="card-img-top" alt="" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">{data.description}</h5>
                  <p className="card-text">old price :{data.price}</p>
                  <p className="card-text">
                    new price :$
                    {Math.floor(parseFloat(data.price.substr(1)) / 2)}
                  </p>
                  <p className="card-text">
                    Date: {d.getDate()} {monthNames[d.getMonth()]}
                  </p>
                  <p className="card-text">{data.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;

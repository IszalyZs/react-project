import FetchData from "./FetchData";
import ListCards from "./ListCard";

const Home = () => {
  const { data, isLoading, error } = FetchData("http://localhost:4000/productList");

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {/*data && <ListCards data={data} title="All data from database" />*/}
      {data && (
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <ListCards data={data} />
            </div>
            <div className="col-md-4">
              <ListCards data={data} />
            </div>
            <div className="col-md-4">
              <ListCards data={data} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

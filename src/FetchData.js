import { useState, useEffect } from "react";


const FetchData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
    function getData() {
      setTimeout( ()=>{ fetch(url)
        .then((response) => {
          if (!response.ok)
            throw new Error("Could not fetch the data for that resource!");
          return response.json();
        })
        .then((d) => {
            console.log(d);
            setData(d);
            setIsLoading(false);
           setError(null);
          console.log(data);
        })
        .catch((err) => {
           console.log("Error")
          setError(err.message);
        });
    },2000);}
  }, []);
  return {data,isLoading,error}/*
    <div className="list">
      {data.map((details,index) => (
        <div key={index}>
          <h2>{details.name}</h2>
          <h2>{details.description}</h2>
          <h2>{details.category}</h2>
        </div>
      ))}
    </div>
  */
};

export default FetchData;

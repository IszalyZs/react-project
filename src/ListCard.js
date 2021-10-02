import { useState } from "react";
import {Link} from "react-router-dom";

const ListCards = ({ data, title }) => {
  const [data2, setData2] = useState(data);
  //const array=Array.from(Array(Object.keys(data2).length).keys()); //0-99
  // const suffledArray= array.sort((a,b)=>0.5-Math.random());//random 0-99
  //console.log(suffledArray);

  shuffle(data2);

  function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (sourceArray.length - i));

      var temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
    }
    return sourceArray;
  }
  // shuffledQuestionArray.map((e) => console.log(e));
  //setData2(shuffledQuestionArray);

  const renderCard = (data, index) => {
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
      <div className="card" style={{ width: "18rem" }} key={index}>
        <a href={data.image}><img src={data.image} className="card-img-top" alt="" /></a>
        <div className="card-body">
          <h5 className="card-title">{data.shortDescription.substr(0, 23)}</h5>
          <p className="card-text">old price :{data.price}</p>
          <p className="card-text">
            new price :${Math.floor(parseFloat(data.price.substr(1)) / 2)}
          </p>
          <p className="card-text">Date: {d.getDate()} {monthNames[d.getMonth()]}</p>
          <p className="card-text">{data.category}</p>
          <Link to={`/productList/${data.id}`}>
              <p>Details</p>
          </Link>
        </div>
      </div>
    );
  };
  return <div>{data.map(renderCard)}</div>;
};

export default ListCards;

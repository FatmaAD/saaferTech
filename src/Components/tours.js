import React, { useState, useEffect } from "react";
import TourCard from "./tourCard";
import TourDetails from "./tourDetails";
import "./tours.css";

function TourListing(props) {
  const [showDetails, setShowDetails] = useState(false);
  const [tours, setTours] = useState([
    {
      name: "London",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfXiCYTCc6-LOFXbLsnYg8zQosEASvEv5rBCdyHKyRC7_EsZLE",
      adults: "1",
      children: "2",
      date: "3 feb 2020",
      price: "1000"
    },
    {
      name: "Paris",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkO2h3xuQfySyomtekShF9Gx8vr-t3EN56t6ovDmu0WkYDSBhq",
      adults: "2",
      children: "",
      date: "3 feb 2020",
      price: "2500"
    },
    {
      name: "Egypt",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxcemGlawexxJD6QLA1lVn_s58FLEEElSUbIIFAt8aQKxQak-b",
      adults: "2",
      children: "1",
      date: "3 feb 2020",
      price: "1800"
    },
    {
      name: "Canada",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvAPGCyTpHi18-smQBC1TlQHXd9jEI7rIcwg80tfTK8-MOyG5r",
      adults: "3",
      children: "3",
      date: "3 feb 2020",
      price: "1800"
    },
    {
      name: "Germany",
      image:
        "https://img2.10bestmedia.com/Images/Photos/30373/p-berliner-dom-berlin-germany-attractions-religious-sites-architecture-religious-sites-1529549_54_990x660_201406011104.jpg",
      adults: "1",
      children: "2",
      date: "3 feb 2020",
      price: "2000"
    },
    {
      name: "Dubai",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5k9J5kSXzmcFdwn7kwtUCytXFQeUhg_7McHaHJmMUuWDIu5_r",
      adults: "2",
      children: "",
      date: "3 feb 2020",
      price: "1700"
    }
  ]);
  const [selectedTour, setSelectedTour] = useState("");

  const clickHandler = name => {
    const tour = tours.find(n => n.name === name);
    setShowDetails(true);
    setSelectedTour(tour);
  };
  const ts = tours.map((t, index) => (
    <TourCard
      key={index}
      name={t.name}
      image={t.image}
      date={t.date}
      clicked={() => clickHandler(t.name)}
    />
  ));

  let details;

  if (showDetails) {
    details = (
      <div className="row justify-content-center pop-up">
        <TourDetails
          name={selectedTour.name}
          image={selectedTour.image}
          adults={selectedTour.adults}
          children={selectedTour.children}
          date={selectedTour.date}
          price={selectedTour.price}
          clicked={() => setShowDetails(false)}
        ></TourDetails>
      </div>
    );
  }

  return (
    <div className="cnotainer-fluid">
      <div className="row">{ts}</div>
      {details}
    </div>
  );
}

export default TourListing;

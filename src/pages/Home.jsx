import { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Restaurants from "../components/Restaurants";
import Box from "../components/Box";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredReastaurants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/restaurants")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setRestaurants(response);
        setFilteredReastaurants(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Search restaurants={restaurants} setFilteredReastaurants={setFilteredReastaurants} />
        <Restaurants restaurants={filteredRestaurants} />
      </div>
    </>
  );
}

// export default Home;
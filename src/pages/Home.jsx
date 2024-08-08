import { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Restaurants from "../components/Restaurants";
import RestaurantService from "../services/restaurant.service";
import Swal from "sweetalert2";

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); 
  useEffect(() => {
    const getRestaurant = async ()=>{
      try {
      const response = RestaurantService.getAllRestaurant();
      if(response.status === 200) {
        setRestaurants(response.data);a
        setFilteredRestaurants(response.dta);
      }
    }catch (error){
      Swal.fire({
        titie: "Get All Restaurant",
        text: error?.response?.data?.message || 
        error.message,icon:"error",
      });
    }
    };
    getRestaurant();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Search restaurants={restaurants} setFilteredRestaurants={setFilteredRestaurants} />
        <Restaurants restaurants={filteredRestaurants} />
      </div>
    </>
  );
}
export default Home;

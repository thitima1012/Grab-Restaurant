import api from "./api";
const RESTO_API = import.meta.env.VITE_RESTO_API;

//get all restaurants
const getAllRestaurant = async () => {
  return await api.get(RESTO_API);
};
//get restaurant by Id
const getRestaurantById = async (id) => {
  return await api.get(RESTO_API + `/${id}`); 
}

//update a restaurant data
const editRestaurant = async (id, restaurant) => {
  return await api.post(RESTO_API + `/${id}`,restaurant);
}

const RestaurantService = {
  getAllRestaurant,
  getRestaurantById,
  editRestaurant,
};

export default RestaurantService;
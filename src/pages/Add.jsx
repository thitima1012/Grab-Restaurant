import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RestaurantService from "../services/restaurant.service";
import Swal from "sweetalert2";
import { useAuthContext } from "../context/AuthContext";

export const Add = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  useEffect(() => {
    if (
      !user ||
      (user &&
        !(
          user.roles.includes("ROLES_MODERATOR") ||
          user.roles.includes("ROLES_ADMIN")
        ))
    ) {
      navigate("/");
    }
  }, [user]);

  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({
    name: "",
    type: "",
    imageUrl: "",
  });

  //2. Get restaurant by ID
  useEffect(() => {
    RestaurantService.getRestaurantById(id).then((response)=>{
      if(response.status === 200){
        setRestaurant(response.data);
      }
    })
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handSubmit = async (e) => {
    try {
      const response = await RestaurantService.editRestaurant(id, restaurant);
      if(response.status === 200) {
        Swal.fire({
          title: "Restaurant update",
          text: "response.data.message",
          icon: "success"
        });
        navigate("/")
      }
    } catch (error) {
      Swal.fire({
        title: "Restaurant update",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
    }
  };
//*********************************** */
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-2 text-center">Add Restaurant</h1>
      </div>
      <div className="space-y-2">
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input
            type="text"
            className="grow"
            placeholder="Restaurant Name"
            name="name"
            onChange={handleChange}
            value={restaurant.name}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Type
          <input
            type="text"
            className="grow"
            placeholder="Restaurant Name"
            name="type"
            onChange={handleChange}
            value={restaurant.type}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          imageUrl
          <input
            type="text"
            className="grow"
            placeholder="Restaurant Name"
            name="imageUrl"
            onChange={handleChange}
            value={restaurant.imageUrl}
          />
        </label>
        <button className="btn btn-success" type="submit" onClick={handSubmit}>
          Add Restaurant
        </button>
      </div>
    </div>
  );
};
export default Add
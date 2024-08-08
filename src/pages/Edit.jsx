import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({
    title: "",
    type: "",
    img: "",
  });
  useEffect(() => {
    fetch("http://localhost:5000/restaurants/" + id)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setRestaurant(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };
  const handSubmit = async () => {
    try {
      //TODO
      const response = await fetch("http://localhost:5000/restaurants/" + id, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(restaurant),})
      if (response.ok) {
        //TODO
        window.alert("success")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-2 text-center">Add Restaurant</h1>
      </div>
      <div className="space-y-2">
        <label className="input input-bordered flex items-center gap-2">
          Title
          <input
            type="text"
            className="grow"
            placeholder="Restaurant Name"
            name="title"
            onChange={handleChange}
            value={restaurant.title}
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
          img
          <input
            type="text"
            className="grow"
            placeholder="Restaurant Name"
            name="img"
            onChange={handleChange}
            value={restaurant.img}
          />
        </label>
        <button className="btn btn-success" onClick={handSubmit}>
          Add Restaurant
        </button>
      </div>
    </div>
  );
};

export default Edit;
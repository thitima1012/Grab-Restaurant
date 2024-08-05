import React from "react";
import Card from "./Card";

const Restaurants = ({ restaurants }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {restaurants &&
        restaurants.map((restaurant) => {
          return (
            <Card
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.title}
              img={restaurant.img}
              type={restaurant.type}
            />
          );
        })}
    </div>
  );
};

export default Restaurants;
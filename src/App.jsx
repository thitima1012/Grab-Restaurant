import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Categories from "./components/Category";
import Menu from "./components/Menu";
import data from "./data";

function App() {
  const [menuItem, setMenuItems] = useState(data);
  const allCategories = [
    "All",
    ...new Set(
      data.map((item) => {
        return item.category;
      })
    ),
  ];
  //console.log(allCategories);
  const filterItem = (category) => {
    if (category === "All") {
      setMenuItems(data);
    } else {
      const newItem = data.filter((item) => item.category === category);
      setMenuItems(newItem);
    }
  };

  return (
    <div>
      <h2>Grab Restaurant</h2>
      <main>
        <section className="menu section">
          <div class="search-container">
            <input type="text" id="searchInput" class="search-input" placeholder="Enter search"/>
            <button id="searchButton" class="search-button">Search</button>
          </div>
          <div className="title">
            
            <Menu items={menuItem} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

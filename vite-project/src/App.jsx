import "./App.css";
import Search from "./components/Search";
import Restaurant from "./components/Restaurant";
import Header from "./components/Header";

function App() {
  

  return (
    <>
      <div className="container flex flex-col items-center mx-auto">
      <Header/>
      <Search/>
      <Restaurant/>
      </div>
    </>
  );
}

export default App;

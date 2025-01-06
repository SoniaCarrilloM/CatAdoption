import Cards from "./components/Cards/Cards";
import Pets from "./components/Pets/Pets";
import catsData from "./mocks/cats.json";

function App() {
  return (
    <div>
      <Pets />
      <Cards />
      <catsData catsData={catsData} />
      
    </div>
  );
}

export default App;

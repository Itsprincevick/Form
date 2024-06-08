import "../src/index.css";
import Paginate from "./components/paginate.jsx";
import RoutesTransition from "./components/RoutesTransition.jsx";

const App = () => {
  return (
    <div className="h-auto flex gap-5 justify-center p-4">
      <Paginate/>
      <RoutesTransition/>
    </div>
  );
};

export default App;

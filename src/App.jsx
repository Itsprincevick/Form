import "../src/index.css";
import Paginate from "./components/paginate.jsx";
import RoutesTransition from "./components/RoutesTransition.jsx";

const App = () => {
  return (
    <div className="h-screen flex justify-center p-2">
      <Paginate/>
      <RoutesTransition/>
    </div>
  );
};

export default App;

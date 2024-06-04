import "../src/index.css";
import Paginate from "./components/paginate.jsx";
import RoutesTransition from "./components/RoutesTransition.jsx";

const App = () => {
  return (
    <div className=" flex justify-center p-2 pb-5">
      <Paginate />
      <RoutesTransition/>
    </div>
  );
};

export default App;

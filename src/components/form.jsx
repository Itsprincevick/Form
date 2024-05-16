import Paginate from "../components/paginate.jsx";
import ResetLinkPage from "./ResetLinkPage.jsx";



function Form() {
    return (
        <div className=" flex justify-center items-center ">
          <Paginate />
        <div className="h-screen w-1/2">
           <ResetLinkPage /> 
        </div>
        </div>
      );
} 

export default Form;

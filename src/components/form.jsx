import Paginate from "../components/paginate.jsx";
import ResetLinkPage from "../components/ResetLinkPage.jsx";

function Form() {
    return (
        <div className=" flex justify-center items-center ">
          <Paginate />

          <div className="h-screen w-1/2">
          <ResetLinkPage /> 
            
          </div>
      );
} 

export default Form;

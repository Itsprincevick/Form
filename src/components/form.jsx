import Paginate from "../components/paginate.jsx";
import SignIn from "../components/SignIn.jsx";

function Form() {
    return (
        <div className=" flex justify-center items-center p-1 ">
          <Paginate />
          <SignIn/>
        </div>
      );
} 

export default Form;

import Paginate from "./paginate.jsx";
import SignUp from "./SignUp.jsx"

function Form() {
    return (
        <div className=" flex justify-center items-center p-1 ">
          <Paginate />
          <div className="h-screen w-1/2">
            <SignUp/>
          </div>
        </div>
      );
} 

export default Form;

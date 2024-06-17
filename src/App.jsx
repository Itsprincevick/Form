// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../src/index.css";
import Paginate from "./components/paginate.jsx";
import RoutesTransition from "./components/RoutesTransition.jsx";

/**
 * App component that renders the main application layout.
 */
const App = () => {
  /**
   * State variable to track whether the error page should be displayed.
   */
  const [isErrorPage, setIsErrorPage] = useState(false);

  /**
   * Returns a div element with a flex layout and padding.
   * Conditionally renders the Paginate component based on the 'isErrorPage' state.
   * Always renders the RoutesTransition component.
   */
  return (
    <div className="h-auto flex gap-5 justify-center p-4">
      {!isErrorPage && (
        /**
         * Renders the Paginate component when 'isErrorPage' is false.
         */
        <Paginate />
      )}
      {/**
       * Renders the RoutesTransition component with the 'setIsErrorPage' function as a prop.
       */}
      <RoutesTransition setIsErrorPage={setIsErrorPage} />
    </div>
  );
};

export default App;



import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ErrorBoundary component that catches and handles JavaScript errors in its child component tree.
 */
class ErrorBoundary extends React.Component {
  /**
   * Initializes the component's state with a 'hasError' flag set to false.
   */
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  /**
   * Catches any JavaScript errors in the child component tree and updates the 'hasError' state flag.
   * Logs the error and error information to the console.
   */
  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  /**
   * Renders the component based on the 'hasError' state flag.
   * If an error has occurred, renders an error message and a link to go back home.
   * Otherwise, renders the child components.
   */
  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong. Please try again later.</h1>
          {/**
           * Renders a Link component to go back home.
           */}
          <Link to="/">Go Back Home</Link>
        </>
      );
    }
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
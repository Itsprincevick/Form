import Card from "../components/card.jsx"; // Importing the Card component from card.jsx file
import Bulb from "../assets/bg-img1.png"; // Importing the Bulb image from assets folder
import Books from "../assets/bg-img2.png"; // Importing the Books image from assets folder
import Workspace from "../assets/bg-img3.png"; // Importing the Workspace image from assets folder
import Foundeet from "../assets/Logo.svg"; // Importing the Foundeet logo from assets folder
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react"; // Importing React and its hooks (useState, useEffect)
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid"; // Importing ChevronRightIcon and ChevronLeftIcon from @heroicons/react/20/solid
const Paginate = () => {
  // Defining the Paginate component
  const cards = [
    // Define an array of cards
    {
      key: 1, 
      image: Bulb, // Image for the first card
      logo: Foundeet, // Logo for the first card
      title: "Device flows stroke frame library flows ellipse", // Title for the first card
      // Description for the first card
      description:
        "Hand link underline pen font reesizing style. Image align align figma effect italic main main image. Text bullet duplicate inspect select opacity comment frame italic content. Ellipse bold follower figjam slice scale style slice selection.",
      name: "Maryam Khadija Yusuf", // Name for the first card
    },
    {
      key: 2,
      image: Books, // Image for the second card
      logo: Foundeet, // Logo for the second card
      title: "Select draft fill main effect share asset effect.", // Title for the second card
      // Description for the second card
      description:
        "Polygon auto stroke device strikethrough effect slice. Boolean subtract vertical main reesizing. Component stroke draft blur distribute selection pixel flatten rotate. Duplicate object layout team plugin component background select mask arrow.",
      name: "Rashida Maimuna Dauda", // Name for the second card
    },
    {
      key: 3,
      image: Workspace, // Image for the third card
      logo: Foundeet, // Logo for the third card
      title: "List line create figjam slice frame draft vertical fill object.", // Title for the third card
      // Description for the third card
      description:
        "Share clip duplicate link align connection effect italic opacity arrow. Boolean text thumbnail frame style. Scale polygon move editor text rectangle opacity variant italic. Export hand align background background ellipse fill.",
      name: "Adedayo Oladapo Balogun", // Name for the third card
    },
  ];

  const [currentPage, setCurrentPage] = useState(1); // State hooks to manage the current page
  const [totalPages, setTotalPages] = useState(Math.ceil(cards.length / 1)); // State hooks to manage the total number of pages
  const onPageChange = (page) => {
    setCurrentPage(page);
  }; // It updates the current page state to the new page number.
  useEffect(() => {
    // Effects hook to update the total pages when the cards array changes
    setTotalPages(Math.ceil(cards.length / 1));
  }, [cards.length, setTotalPages]);

  const handlePrevClick = () => {
    // Function to handle the previous button click
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Decrement the current page if it's greater than 1
    }
  };

  const handleNextClick = () => {
    // Function to handle the next button click
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1); // Increment the current page if it's less than the total pages
    }
  };

  const startIndex = (currentPage - 1) * 1; // Calculate the start index for the current page
  const endIndex = startIndex + 1; // Calculate the end index for the current page
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    // Return the JSX for the Paginate component
    <div className="flex flex-col items-center h-screen">
      <div className="flex justify-center items-center relative mt-3">
        {cards.slice(startIndex, endIndex).map(
          (
            card // Slice the cards array based on the current page and map over it
          ) => (
            <Card key={card.key} {...card} /> // Render the Card component for each card
          )
        )}
     
      <div className="leading-10 text-slate-3 gap-2 flex absolute left-10 bottom-8">
        {pages.map((page) => (
          <label key={page}>
            <input
              className="border-white"
              type="radio"
              name="page"
              value={page}
              checked={currentPage === page}
              onChange={() => onPageChange(page)}
            />
            <span className="sr-only">{page}</span>
          </label>
        ))}
      </div>
      <div
        className="flex justify-center items-center gap-2 absolute top-[668px] left-[334px]"
        style={{ width: "205px", height: "41px" }}
      >
        <button
          className="rounded-3xl py-3 px-2 bg-grey-8 cursor-pointer hover:bg-blue-10"
          style={{
            width: "118px",
            height: "51px",
            transition: "background-color 0.5s",
          }}
          onClick={handlePrevClick}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon
            className="text-white mx-auto "
            style={{ width: "20px", height: "20px" }}
          />
        </button>

        <button
          className="rounded-3xl py-3 px-2 bg-grey-8 cursor-pointer hover:bg-blue-10"
          style={{
            width: "118px",
            height: "51px",
            transition: "background-color 0.5s",
          }}
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
        >
          <ChevronRightIcon
            className="text-white mx-auto "
            style={{ width: "20px", height: "20px" }}
          />
        </button>
      </div>
      </div>
    </div>
  );
};

export default Paginate; // Export the Paginate component as the default export

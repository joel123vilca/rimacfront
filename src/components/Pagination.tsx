import React, { useState } from "react";
import homeIcon from "../assets/images/IcHomeLight.png";

const Pagination = () => {
  const itemsPerPage = 3;
  const totalItems = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, totalItems / itemsPerPage)
    );
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const cards = Array.from({ length: endIndex - startIndex }, (_, index) => (
    <div
      key={startIndex + index}
      className="w-full rounded-lg overflow-hidden shadow-custom"
    >
      <div className="px-8 py-4">
        <div className="flex justify-between">
          <div className="text-[24px] font-bold">Plan en Casa </div>
          <div>
            <img src={homeIcon} alt="home icon" />
          </div>
        </div>
        <div className="text-[#7981B2] text-[12px]">Costo del plan</div>
        <div className="text-[20px] font-bold">$99 al mes</div>
        <hr className="mt-4"></hr>
        <div className="mt-6">
          <ul className="list-disc space-y-6">
            <li>
              <h2 className="text-xl font-bold">Médico general a domicilio </h2>
              <p className="text-gray-600">
                por S/20 y medicinas cubiertas al 100%.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-bold">Título 2</h2>
              <p className="text-gray-600">
                Videoconsulta y orientación telefónica al 100% en medicina
                general + pediatría.
              </p>
            </li>
            <li>
              <h2 className="text-xl font-bold">Título 3</h2>
              <p className="text-gray-600">
                Indemnización de S/300 en caso de hospitalización por más de un
                día.
              </p>
            </li>
          </ul>
        </div>
        <button className="bg-[#FF1C44] text-white text-center rounded-3xl w-full py-[14px] text-[18px] font-bold mt-10">
          Seleccionar Plan
        </button>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex flex-col md:flex-row gap-4 justify-center w-full px-4 md:px-40">
        {cards}
      </div>
      <div className="mt-4 flex md:hidden">
        <button
          className={`${
            currentPage === 1
              ? "border border-[#A9AFD9] cursor-not-allowed"
              : "border border-[#432EFF] "
          } text-[#432EFF] font-bold rounded-full h-8 w-8 mr-2 flex justify-center items-center`}
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M9.29496 13.2049L4.08496 7.99992L9.29496 2.79492L10.705 4.20492L6.91496 7.99992L10.705 11.7949L9.29496 13.2049Z"
              fill="#7981B2"
            />
          </svg>
        </button>
        <span className="px-4 mt-1">1 / 3</span>
        <button
          className={`${
            currentPage === totalItems / itemsPerPage
              ? "border border-[#A9AFD9] cursor-not-allowed"
              : "border border-[#432EFF]"
          } text-[#432EFF] font-bold h-8 w-8 rounded-full flex justify-center items-center`}
          onClick={handleNext}
          disabled={currentPage === totalItems / itemsPerPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6.70493 13.2049L5.29492 11.7949L9.08492 7.99992L5.29492 4.20492L6.70493 2.79492L11.9149 7.99992L6.70493 13.2049Z"
              fill="#432EFF"
            />
          </svg>
        </button>
      </div>
      <br></br>
    </div>
  );
};

export default Pagination;

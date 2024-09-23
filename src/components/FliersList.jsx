import { useState } from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { data } from "../utils/dummy";
import flier1 from "../assets/fliers/flier1.jpg";
import flier2 from "../assets/fliers/flier2.jpg";
import flier3 from "../assets/fliers/flier3.jpg";
import flier4 from "../assets/fliers/flier4.jpg";
import flier5 from "../assets/fliers/flier5.jpg";
import flier6 from "../assets/fliers/flier6.jpg";
import flier7 from "../assets/fliers/flier7.jpg";
import flier8 from "../assets/fliers/flier8.jpg";

const flierImages = [
  flier1,
  flier2,
  flier3,
  flier4,
  flier5,
  flier6,
  flier7,
  flier8,
];

const FliersList = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    document.getElementById("my_modal_3").showModal();
  };

  return (
    <div className="flex">
      {/* Sidebar */}

      {/* Content area */}
      <div className="relative flex flex-col flex-1">
        {/*  Site header */}

        <main>
          <div className="px-2 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <section className="overflow-hidden">
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                      ✕
                    </button>
                  </form>
                  {selectedImage && (
                    <img
                      className="w-full h-full"
                      src={selectedImage}
                      alt="Selected Image"
                    />
                  )}
                </div>
              </dialog>
              <div className="">
                <div className="container px-4 mx-auto">
                  <div className="flex flex-wrap pb-32 -mx4">
                    {flierImages.map((image, index) => (
                      <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div
                          onClick={() => handleImageClick(image)}
                          className="border-blue-800"
                        >
                          <div className="border-gray-600 border-2 rounded-2xl h-full">
                            <div
                              className="relative"
                              style={{ height: "300px" }}
                            >
                              <img
                                className="w-full h-full rounded-2xl"
                                src={image}
                                alt={`Flier ${index + 1}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Cards */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FliersList;

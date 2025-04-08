import { useState } from "react";
import ProjectList from "./ProjectList";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("fliers");
  return (
    <div>
      {/* <div className="p-4 rounded-md mb-6  flex justify-center">
        <div className="flex justify-center bg-gray-800 rounded-md mb-4 py_font">
          <button
            onClick={() => setActiveTab("fliers")}
            className={`rounded-md px-4 py-2 text-xs font-bold ${
              activeTab === "fliers" ? "bg-gray-700" : ""
            }`}
          >
            Flier's
          </button>
          <button
            onClick={() => setActiveTab("logos")}
            className={`rounded-md px-2 py-2 text-xs font-bold ${
              activeTab === "logos" ? "bg-gray-700" : ""
            }`}
          >
            Logo's
          </button>
          <button
            onClick={() => setActiveTab("cards")}
            className={`rounded-md px-2 py-2 text-xs font-bold ${
              activeTab === "cards" ? "bg-gray-700" : ""
            }`}
          >
            Card's
          </button>
          <button
            onClick={() => setActiveTab("menus")}
            className={`rounded-md px-2 py-2 text-xs font-bold ${
              activeTab === "menus" ? "bg-gray-700" : ""
            }`}
          >
            Menu's
          </button>
        </div>
      </div> */}
      {/* {activeTab == "fliers" && <FliersList />}
      {activeTab == "logos" && <LogosList />}
      {activeTab == "menus" && <MenusList />}
      {activeTab == "cards" && <CardsList />} */}
      <ProjectList />
    </div>
  );
};

export default Projects;

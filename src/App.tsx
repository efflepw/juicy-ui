import { useState } from "react";
import "./App.css";
import Navbar from "./components.preview/Navbar";
import { Particles } from "./components/Background";
import { Ambient } from "./components/Image";

type Section = {
  id: string;
  name: string;
  component: React.ReactElement;
};

const SECTION_COMPONENTS: Section[] = [
  {
    id: "ambient",
    name: "Ambient",
    component: <Ambient />,
  },
  {
    id: "yellow-block",
    name: "Yellow",
    component: (
      <div
        style={{ backgroundColor: "rgba(224, 172, 67, 0.819)" }}
        className="test-block"
      ></div>
    ),
  },
  {
    id: "blue-block",
    name: "Blue",
    component: (
      <div
        style={{ backgroundColor: "rgba(43, 97, 233, 0.819)" }}
        className="test-block"
      ></div>
    ),
  },
  {
    id: "green-block",
    name: "Green",
    component: (
      <div
        style={{ backgroundColor: "rgba(53, 225, 37, 0.819)" }}
        className="test-block"
      ></div>
    ),
  },
  {
    id: "pink-block",
    name: "Pink",
    component: (
      <div
        style={{ backgroundColor: "rgba(239, 98, 247, 0.819)" }}
        className="test-block"
      ></div>
    ),
  },
];

const App = () => {
  const [selectedSection, setSelectedSection] = useState<Section>(
    SECTION_COMPONENTS[0]
  );

  const onSelectSection = (sectionId: string) => {
    const newSection = SECTION_COMPONENTS.find(({ id }) => id == sectionId);

    if (newSection) {
      setSelectedSection(newSection);
    }
  };

  return (
    <>
      <Particles />
      <div className="h-screen flex flex-col p-2 gap-2">
        <header className="h-24 bg-lightdark rounded-3xl"></header>
        <main
          className="grid flex-grow gap-1"
          style={{ gridTemplateColumns: "1fr 5fr" }}
        >
          <Navbar
            activeId={selectedSection.id}
            sections={SECTION_COMPONENTS}
            setSelectedSection={onSelectSection}
          />
          <div className="flex items-center justify-center rounded-3xl bg-lightdark">
            {selectedSection.component}
          </div>
        </main>
      </div>
    </>
  );
};

export default App;

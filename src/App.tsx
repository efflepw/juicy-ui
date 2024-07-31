import { useState } from "react";
import "./App.css";
import Navbar from "./components.preview/Navbar";
import LikeButtons from "./components.preview/LikeButtons";
import { Ambient } from "./components/Image";
import { MonoParticles } from "./components/Destroy";
import { RainbowBorder } from "./components/Border";
import { Particles } from "./components/Background";

type Section = {
  id: string;
  name: string;
  component: React.ReactElement;
};

const SECTION_COMPONENTS: Section[] = [
  {
    id: "mono-particles",
    name: "Mono Particles",
    component: <MonoParticles />,
  },
  {
    id: "rainbow-border",
    name: "Rainbow border",
    component: (
      <RainbowBorder>
        <div
          style={{ backgroundColor: "#000000" }}
          className="test-block"
        ></div>
      </RainbowBorder>
    ),
  },
  {
    id: "ambient",
    name: "Ambient",
    component: <Ambient />,
  },
  {
    id: "like-button",
    name: "Like button",
    component: <LikeButtons />,
  },
  {
    id: "particles-background",
    name: "Particles background",
    component: <Particles />,
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
      <div className="h-screen flex flex-col p-2 gap-2">
        <header className="h-24 bg-secondary rounded-3xl"></header>
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

import { useState } from "react";
import "./App.css";

import Navbar from "./components.preview/Navbar";
import ButtonsPreview from "./components.preview/ButtonsPreview";
import { Ambient } from "./components/Image";
import { MonoParticles } from "./components/Destroy";
import { Particles } from "./components/Background";
import AuroraBg from "./components.preview/AuroraBg";
import Header from "./components.preview/Header";
import Skeleton from "./components.preview/Skeleton";
import ImageHover from "./components.preview/ImageHover";
import RainbowBorderPreview from "./components.preview/RainbowBorder";
import { RainbowBorderV0 } from "./components/Border";

type Section = {
  id: string;
  name: string;
  component: React.ReactElement;
};

const SECTION_COMPONENTS: Section[] = [
  {
    id: "rainbow-border",
    name: "Rainbow border",
    component: <RainbowBorderPreview />,
  },
  {
    id: "particles-bg",
    name: "Particles",
    component: (
      <div className="w-[100%]">
        <RainbowBorderV0>
          <Particles />
        </RainbowBorderV0>
      </div>
    ),
  },
  {
    id: "image-hover",
    name: "Image hover",
    component: <ImageHover />,
  },
  {
    id: "buttons",
    name: "Buttons",
    component: <ButtonsPreview />,
  },
  {
    id: "rainbow-skeleton",
    name: "Rainbow skeleton",
    component: (
      <div>
        <div className="flex gap-5 bg-white rounded px-4 py-10">
          <Skeleton />
          <Skeleton />
        </div>
        <div className="flex gap-5 mb-6 bg-gray-700 rounded px-4 py-10 mt-10">
          <Skeleton />
          <Skeleton />
        </div>
        <div className="flex gap-5 mb-6 bg-black rounded px-4 py-10 mt-10">
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    ),
  },
  {
    id: "aurora-bg",
    name: "Aurora",
    component: <AuroraBg />,
  },
  {
    id: "mono-particles",
    name: "Mono Particles",
    component: <MonoParticles />,
  },
  {
    id: "ambient",
    name: "Ambient",
    component: <Ambient />,
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
    <div className="w-[80%] m-[auto]">
      <Header />
      <div className="flex flex-col py-2 gap-2">
        <main
          className="grid flex-grow gap-2 pt-16"
          style={{ gridTemplateColumns: "1fr 5fr" }}
        >
          <Navbar
            activeId={selectedSection.id}
            sections={SECTION_COMPONENTS}
            setSelectedSection={onSelectSection}
          />
          <div className="flex items-center justify-center py-10 px-4">
            {selectedSection.component}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;

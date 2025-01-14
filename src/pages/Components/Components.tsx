import { useState } from "react";

import ButtonsPreview from "../../components.preview/ButtonsPreview";
import { Ambient } from "../../components/Image";
import { MonoParticles } from "../../components/Destroy";
import { Particles } from "../../components/Background";
import AuroraBg from "../../components.preview/AuroraBg";
import Skeleton from "../../components.preview/Skeleton";
import ImageHover from "../../components.preview/ImageHover";
import RainbowBorderPreview from "../../components.preview/RainbowBorder";
import Navbar from "../../components.preview/Navbar";
import { AuraPreview } from "../../components.preview/Aura";
import { TrailPreview } from "../../components.preview/Trail";

type Section = {
  id: string;
  name: string;
  component: React.ReactElement;
};

const SECTION_COMPONENTS: Section[] = [
  {
    id: "trail",
    name: "Trail (cn)",
    component: <TrailPreview />,
  },
  {
    id: "aura",
    name: "Aura (cn)",
    component: <AuraPreview />,
  },
  {
    id: "particles-bg",
    name: "Particles (cn)",
    component: (
      <div className="w-[100%]">
        <Particles />
      </div>
    ),
  },
  {
    id: "image-hover",
    name: "Image hover (3c)",
    component: <ImageHover />,
  },
  {
    id: "rainbow-border",
    name: "Rainbow border (cl)",
    component: <RainbowBorderPreview />,
  },
  {
    id: "buttons",
    name: "Buttons (cm)",
    component: <ButtonsPreview />,
  },
  {
    id: "rainbow-skeleton",
    name: "Rainbow skeleton (cl)",
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
    id: "ambient",
    name: "Ambient (cn)",
    component: <Ambient imageSrc="dino.svg" showOnHover />,
  },
  {
    id: "aurora-bg",
    name: "Aurora (cl)",
    component: <AuroraBg />,
  },
  {
    id: "mono-particles",
    name: "Mono Particles (cn + cm)",
    component: <MonoParticles />,
  },
];

const Components = () => {
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
    <div className="grid grid-cols-[1fr_4fr] flex-grow gap-2">
      <Navbar
        activeId={selectedSection.id}
        sections={SECTION_COMPONENTS}
        setSelectedSection={onSelectSection}
      />
      <div className="flex items-center justify-center py-10 px-4">
        {selectedSection.component}
      </div>
    </div>
  );
};

export default Components;

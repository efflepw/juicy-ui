import { useState } from "react";

import ButtonsPreview from "../../components.preview/ButtonsPreview";
import { Ambient } from "../../components/Image";
import { MonoParticles } from "../../components/Destroy";
import { Particles } from "../../components/Background";
import AuroraBg from "../../components.preview/AuroraBg";
import Skeleton from "../../components.preview/Skeleton";
import ImageHover from "../../components.preview/ImageHover";
import RainbowBorderPreview from "../../components.preview/RainbowBorder";
import TextPreview from "../../components.preview/TextPreview";
import Navbar from "../../components.preview/Navbar";
import { AuraPreview } from "../../components.preview/Aura";
import { CursorTrail } from "../../components/Cursor";

type Section = {
  id: string;
  name: string;
  component: React.ReactElement;
};

const SECTION_COMPONENTS: Section[] = [
  {
    id: "trail",
    name: "Trail",
    component: <CursorTrail />,
  },
  {
    id: "aura",
    name: "Aura",
    component: <AuraPreview />,
  },
  {
    id: "text",
    name: "Text gradient",
    component: (
      <div className="flex flex-col gap-6">
        <TextPreview gradient="RAINBOW" />
        <TextPreview gradient="BLUE-PINK" />
        <TextPreview gradient="CACTUS" />
        <TextPreview gradient="BLACK-PINK" />
        <TextPreview gradient="50-SHADES" />
        <TextPreview gradient="PEACH" />
        <TextPreview gradient="DEEP-SEA-TEAL" />
      </div>
    ),
  },
  {
    id: "particles-bg",
    name: "Particles",
    component: (
      <div className="w-[100%]">
        <Particles />
      </div>
    ),
  },
  {
    id: "image-hover",
    name: "Image hover",
    component: <ImageHover />,
  },
  {
    id: "rainbow-border",
    name: "Rainbow border",
    component: <RainbowBorderPreview />,
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
    id: "ambient",
    name: "Ambient",
    component: <Ambient imageSrc="dino.svg" showOnHover />,
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
    <div
      className="grid flex-grow gap-2"
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
    </div>
  );
};

export default Components;

import { useState } from "react";

import Navbar from "../../components.preview/Navbar";
import * as PreviewComponents from "../../components.preview";

type Section = {
  id: string;
  name: string;
  component: React.ReactElement;
};

const SECTION_COMPONENTS: Section[] = [
  {
    id: "ambient",
    name: "Ambient",
    component: <PreviewComponents.AmbientPreview />,
  },
  {
    id: "alert",
    name: "Alert",
    component: <PreviewComponents.AlertPreview />,
  },
  {
    id: "aura",
    name: "Aura",
    component: <PreviewComponents.AuraPreview />,
  },
  {
    id: "border",
    name: "Border",
    component: <PreviewComponents.BorderPreview />,
  },
  {
    id: "buttons",
    name: "Buttons",
    component: <PreviewComponents.ButtonsPreview />,
  },
  {
    id: "gradient-skeleton",
    name: "Gradient skeleton",
    component: <PreviewComponents.GradientSkeletonPreview />,
  },
  {
    id: "image-hover",
    name: "Image hover",
    component: <PreviewComponents.ImageHoverPreview />,
  },
  // {
  //   id: "particles-bg",
  //   name: "Particles",
  //   component: <PreviewComponents.ParticlesPreview />,
  // },
  {
    id: "signal-line",
    name: "Signal line",
    component: <PreviewComponents.SignalLinePreview />,
  },
  {
    id: "tooltip",
    name: "Tooltip",
    component: <PreviewComponents.TooltipPreview />,
  },
  {
    id: "trail",
    name: "Pointer trail",
    component: <PreviewComponents.TrailPreview />,
  },
  {
    id: "validation",
    name: "Validation",
    component: <PreviewComponents.ValidationPreview />,
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
    <div className="flex flex-row gap-8">
      <Navbar
        activeId={selectedSection.id}
        sections={SECTION_COMPONENTS}
        setSelectedSection={onSelectSection}
      />
      <div className="w-full flex items-center justify-center">
        {selectedSection.component}
      </div>
    </div>
  );
};

export default Components;

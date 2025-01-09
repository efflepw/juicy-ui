import TextGradient from "../../components/Text/TextGradient";
import { BASE_PALETTES } from "../../const/palette";

const Classes = () => {
  const gradient = BASE_PALETTES.TAILWIND.getLinearGradient();

  return (
    <div className="flex justify-center items-center min-h-[600px] text-3xl">
      <div>
        <p>
          This section is designed to preview{" "}
          <TextGradient text="Tailwind" gradient={gradient} />
          -style animation classes that can be imported simply by typing their
          name.
        </p>
        {/* <p>
          This approach enables the quick addition of animations and
          encapsulates repetitive functionality efficiently.
        </p> */}
      </div>
    </div>
  );
};

export default Classes;

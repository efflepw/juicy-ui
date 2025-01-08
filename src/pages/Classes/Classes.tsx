import GradientText from "../../components/Text/GradientText";
import { BASE_GRADIENTS } from "../../const/gradients";

const Classes = () => {
  return (
    <div className="flex justify-center items-center min-h-[600px] text-3xl">
      <div>
        <p>
          This section is designed to preview{" "}
          <GradientText text="Tailwind" gradient={BASE_GRADIENTS["TAILWIND"]} />
          -style animation classes that can be imported simply by typing their
          name.
        </p>
        <p>
          This approach enables the quick addition of animations and
          encapsulates repetitive functionality efficiently.
        </p>
      </div>
    </div>
  );
};

export default Classes;

import { BASE_GRADIENTS } from "../../const/gradients";
import { toTitleCase } from "../../utils/format";

const Gradients = () => {
  return (
    <div className="">
      <div>
        {/* <h2 className="text-3xl pt-10 pb-4">Build your gradient</h2> */}
        {/* <h2 className="text-3xl pt-10 pb-4">Saved gradients</h2> */}
        <h2 className="text-3xl pt-10 pb-4">Base gradients</h2>
        <div className="pl-10">
          {Object.entries(BASE_GRADIENTS).map(([name, gradient]) => (
            <div key={gradient} className="pb-6">
              <p className="text-2xl py-4 font-medium">{toTitleCase(name)}</p>
              <div
                className="w-full h-48 rounded-lg"
                style={{
                  backgroundImage: `${gradient}`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gradients;

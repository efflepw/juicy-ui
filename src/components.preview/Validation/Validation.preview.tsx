import { useState } from "react";
import { ValidatedInput } from "../../components/Validation";

const Validation = () => {
  const [inputV, setInputV] = useState("");

  const [error, setError] = useState("");

  const onValidate = () => {
    setError(`${inputV} ${Date.now()}`);
  };

  const onUpdateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setInputV(e.currentTarget.value);
  };

  return (
    <div className="w-full h-full px-8">
      <div className="h-40">
        <ValidatedInput
          value={inputV}
          onChange={onUpdateValue}
          className="p-2 bg-transparent border-2 border-white rounded outline-none"
          validationError={error}
        />
      </div>
      <div className="text-right">
        <button
          className="border-white rounded-lg border-2 px-6 py-2"
          onClick={onValidate}
        >
          Validate
        </button>
      </div>
    </div>
  );
};

export default Validation;

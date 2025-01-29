import { DEFAULT_WARNING_COLOR } from "../../../const/colors";
import "./ValidatedInput.css";

import { useEffect, useState } from "react";

type ReactHTMLInput = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface CSSVars extends React.CSSProperties {
  "--WARNING-COLOR": string;
}

export interface ValidatedInput extends ReactHTMLInput {
  inputClassName?: string;
  warningColor?: string;
  validationError?: string;
}

const ValidatedInput = ({
  className = "",
  warningColor = DEFAULT_WARNING_COLOR,
  validationError,
  ...rest
}: ValidatedInput) => {
  const [errorClassName, setErrorClassName] = useState("");

  const cssVars: CSSVars = { "--WARNING-COLOR": warningColor };

  useEffect(() => {
    if (validationError) {
      setErrorClassName("input-validation-error");
    } else {
      setErrorClassName("");
    }
  }, [validationError]);

  return (
    <input
      {...rest}
      className={`${className} ${errorClassName}`}
      style={cssVars}
    />
  );
};

export default ValidatedInput;

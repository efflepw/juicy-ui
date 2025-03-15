import { useRef } from "react";
import SignalLine from "../../components/SignalLine";

const SignalLinePreview = () => {
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full h-full p-4">
      <h2 className="text-2xl font-bold mb-8">Signal line</h2>
      <div className="h-full w-full flex flex-col justify-between relative">
        <div className="flex justify-center">
          <div ref={fromRef}>element #1</div>
        </div>
        <SignalLine fromRef={fromRef} toRef={toRef} />
        <div className="flex justify-end">
          <div ref={toRef}>element #2</div>
        </div>
      </div>
    </div>
  );
};

export default SignalLinePreview;

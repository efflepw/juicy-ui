import { useState } from "react";
import Alert from "../../components/Notifications/Alert";
import { ALERT_USAGE_DOC } from "../../const/docs";
import ComponentDoc from "../ComponentDoc";
import { RainbowBorder } from "../../components/Border";

const AlertPreview = () => {
  const [alerted, setAlerted] = useState(false);

  return (
    <div className="w-full h-full p-4">
      <h2 className="text-2xl font-bold mb-8">Alert</h2>
      <div className="flex flex-col items-center my-16">
        <RainbowBorder>
          <button onClick={() => setAlerted(true)} className="px-6 py-3">
            Show Alert
          </button>
        </RainbowBorder>
      </div>
      <ComponentDoc docs={ALERT_USAGE_DOC} />
      {alerted && (
        <Alert
          message="Whats cooking good looking"
          duration={5000}
          onClose={() => setAlerted(false)}
        />
      )}
    </div>
  );
};

export default AlertPreview;

import { useState } from "react";
import Alert from "../../components/Notifications/Alert";
import { ALERT_USAGE_DOC } from "../../const/docs";
import ComponentDoc from "../ComponentDoc";
import { RainbowBorder, ShadowBorder } from "../../components/Border";
import { BASE_PALETTES } from "../../const/palette";

const AlertPreview = () => {
  const [shadowAlert, setShadowAlert] = useState(false);
  const [rainbowAlert, setRainbowAlert] = useState(false);

  return (
    <div className="w-full h-full p-4">
      <h2 className="text-2xl font-bold mb-8">Alert</h2>
      <div className="flex justify-around items-center my-16">
        <ShadowBorder palette={BASE_PALETTES[7]}>
          <button onClick={() => setShadowAlert(true)} className="px-6 py-3">
            Show Alert
          </button>
        </ShadowBorder>
        <RainbowBorder>
          <button onClick={() => setRainbowAlert(true)} className="px-6 py-3">
            Show Alert
          </button>
        </RainbowBorder>
      </div>
      <ComponentDoc docs={ALERT_USAGE_DOC} />
      {shadowAlert && (
        <Alert
          border="shadow"
          message="Whats cooking good looking"
          duration={5000}
          onClose={() => setShadowAlert(false)}
        />
      )}
      {rainbowAlert && (
        <Alert
          border="rainbow"
          message="Whats cooking good looking"
          duration={5000}
          onClose={() => setRainbowAlert(false)}
        />
      )}
    </div>
  );
};

export default AlertPreview;

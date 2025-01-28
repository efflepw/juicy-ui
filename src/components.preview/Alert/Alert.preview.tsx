import { useState } from "react";
import Alert from "../../components/Notifications/Alert";

const AlertPreview = () => {
  const [alerted, setAlerted] = useState(false);

  return (
    <div>
      <button onClick={() => setAlerted(true)} className="">
        Show Alert
      </button>
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

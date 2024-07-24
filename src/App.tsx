import "./App.css";
import { RainbowOnMove } from "./components/Background";
import { RainbowBorder } from "./components/Border";

const App = () => {
  return (
    <main>
      {/* components list */}
      {/* components */}
      <div className="centered-div">
        {/* <RainbowBorder><></></RainbowBorder> */}
        {/* <LikeButton /> */}
        <RainbowBorder>
          <RainbowOnMove />
        </RainbowBorder>
      </div>
    </main>
  );
};

export default App;

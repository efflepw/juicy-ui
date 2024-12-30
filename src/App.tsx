import "./App.css";

import { Routes, Route } from "react-router";

import Header from "./components.preview/Header";
import { Classes, Components, Contribute, Gradients, Overview } from "./pages";
const App = () => {
  return (
    <div className="w-[80%] m-[auto]">
      <div className="relative">
        <Header />
      </div>
      <div className="flex flex-col py-4 gap-2 pt-16">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/components" element={<Components />} />
          <Route path="/gradients" element={<Gradients />} />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

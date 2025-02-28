import "./App.css";

import { Routes, Route } from "react-router";

import Header from "./components.preview/Header";
import { Classes, Components, Contribute, Palettes } from "./pages";

const App = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="flex flex-col gap-2 py-6 h-full max-w-[1400px] mx-auto">
        <Routes>
          <Route path="/" element={<Components />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/components" element={<Components />} />
          <Route path="/palettes" element={<Palettes />} />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SingUP from "./Registration";
import SingIn from "./SingIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<SingUP />} />
          <Route path="/singin" element={<SingIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Cat from "./Cat";
import Dog from "./Dog";

function App() {
  return (
    <div className="App">
      <Link to='/cat'>子应用2-小猫</Link>
      <br />
      <Link to='/dog'>子应用2-小狗</Link>

      <Routes>
        <Route path='cat' element={<Cat />} />
        <Route path='dog' element={<Dog />} />
      </Routes>
    </div>
  );
}

export default App;

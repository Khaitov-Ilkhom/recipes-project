import { Route, Routes } from "react-router-dom";
import Home from "./home/Home"; 

const RouteController = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RouteController;

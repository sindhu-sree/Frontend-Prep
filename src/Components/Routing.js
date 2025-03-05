import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Main from "./Main";
import Forms from "./Forms/Forms";
import Dashboard from "./Dashboard/Dashboard";
import Theme from "./Theme/Theme";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route index path="Dashboard" element={<Dashboard />}  />
          <Route path="Forms" element={<Forms/>} />
          <Route path="theme" element={ <Theme/> }  />
          <Route path="*" element={<NotFound />} /> {/* 404 Page */}
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;

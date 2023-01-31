import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import All from './Components/others/All';
import Latest from './Components/others/Latest';
import Collections from './Components/others/Collections';
import Service from './Pages/Services';
import Home from './Pages/Home';
import LeftContainer from './Components/DashboardItems/LeftContainer';
import ListOne from './Components/others/ListOne';
import ListTwo from './Components/others/ListTwo';

function App() {
  return (
    <div className="App">
    <div className="dashboard">
      <BrowserRouter>
        <LeftContainer />
        <Routes>
         
          <Route path="service" element={<Service />}>
            <Route index element={<All/>} />
            <Route path="latest" element={<Latest />} />
            <Route path="list1" element={<ListOne />} />
            <Route path="list2" element={<ListTwo/>} />
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  </div>
  );
}

export default App;

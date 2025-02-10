import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardList from '../pages/CardList';
import CardDetail from '../pages/CardDetail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/poketmon_dictionary" element={<CardList />}>
          <Route path="poketmon/:poketmonId" element={<CardDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router
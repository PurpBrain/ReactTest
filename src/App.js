import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import Pagination from './pages/Pagination';

const MainRoutes = () => {

  return (
    <MainLayout>
      <Routes>
        <Route path="/" index exact element={<Home />}/>
        <Route path="/pagination" exact element={<Pagination/>}/>
      </Routes>
    </MainLayout>
  )
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/*' exact element={<MainRoutes/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;

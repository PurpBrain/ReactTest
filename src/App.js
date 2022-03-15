import { HaashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';

const MainRoutes = () = {
  return (
    <MainLayout>
      <Routes>
        <Route path="Home" exact element={<Home/>}/>
      </Routes>
    </MainLayout>
  )
}

function App() {
  return (
    <HaashRouter>
      <Routes>
        <Route path='/' index exact element={<MainRoutes/>} />
      </Routes>
    </HaashRouter>
  );
}

export default App;

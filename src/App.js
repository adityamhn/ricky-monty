import './App.scss';
import Home from './pages/Home.jsx'
import CharacterDetails from './pages/CharacterDetails';
import { useRoutes } from 'react-router';


function App() {

  const routes = [
    { path: '/', element: <Home /> },
    { path: '/:id', element: <CharacterDetails /> },
  ]
  const homeRouting = useRoutes(routes);
  return (
    <>
      {homeRouting}
    </>
  );
}

export default App;

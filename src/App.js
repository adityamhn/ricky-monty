import './App.scss';
import Home from './pages/Home.jsx'
import CharacterDetails from './pages/CharacterDetails';
import { useRoutes } from 'react-router';
import ScrollToTop from './components/ScrollRestoration';


function App() {

  const routes = [
    { path: '/', element: <Home /> },
    { path: '/:id', element: <CharacterDetails /> },
  ]
  const homeRouting = useRoutes(routes);
  return (
    <>
      <ScrollToTop />
      <>
        {homeRouting}
      </>
    </>
  );
}

export default App;

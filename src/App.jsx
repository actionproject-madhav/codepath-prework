import { useRoutes, Link } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <ShowCreators />
    },
    {
      path: "/creator/:id",
      element: <ViewCreator />
    },
    {
      path: "/edit/:id", 
      element: <EditCreator />
    },
    {
      path: "/new",
      element: <AddCreator />
    }
  ]);

  return (
    <div className="App">
      <header style={{ padding: '20px', background: '#f0f0f0', marginBottom: '20px' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1> Creatorverse</h1>
        </Link>
        <Link to="/new">
          <button style={{ marginLeft: '20px', padding: '10px 20px' }}>
            Add Creator
          </button>
        </Link>
      </header>
      {element}
    </div>
  );
}

export default App;
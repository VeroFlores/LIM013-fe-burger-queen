import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/home.css';

const Home = () => {
  const history = useHistory();
  return (
    <div className="bg-home">
      <div className="home-view">
        <h1>¿Quién eres?</h1>
        <div className="routes">
          <button type="button" onClick={() => history.push('/waiter')}>
            Mesero
          </button>
          <button type="button" onClick={() => history.push('/kitchen')}>
            Cocinero
          </button>
          {/* <Link to="/waiter">Mesero</Link>
          <Link to="/kitchen">Cocinero</Link> */}
        </div>
      </div>
    </div>
  );
};
export default Home;

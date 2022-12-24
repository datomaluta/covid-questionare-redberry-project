import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { StartingPage, IdentificationPage } from './pages';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<StartingPage />} />
        <Route path='/identification' element={<IdentificationPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;

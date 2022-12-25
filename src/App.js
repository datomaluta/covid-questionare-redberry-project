import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { StartingPage, IdentificationPage, CovidQuestions } from './pages';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<StartingPage />} />
        <Route path='/identification' element={<IdentificationPage />} />
        <Route path='/covid-questions' element={<CovidQuestions />} />
      </Routes>
    </Fragment>
  );
}

export default App;

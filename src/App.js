import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  StartingPage,
  IdentificationPage,
  CovidQuestions,
  Vaccination,
  TipsPage,
  ThanksPage,
} from 'pages';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<StartingPage />} />
        <Route path='/identification' element={<IdentificationPage />} />
        <Route path='/covid-questions' element={<CovidQuestions />} />
        <Route path='/vaccination' element={<Vaccination />} />
        <Route path='/tips' element={<TipsPage />} />
        <Route path='/thanks' element={<ThanksPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;

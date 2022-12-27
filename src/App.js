import { Route, Routes } from 'react-router-dom';
import {
  StartingPage,
  IdentificationPage,
  CovidQuestions,
  Vaccination,
  TipsPage,
  ThanksPage,
} from 'pages';
import { FormDataProvider } from 'context/form-data';

function App() {
  // const formCtx = useContext(FormContext);
  // console.log(formCtx);
  return (
    <FormDataProvider>
      <Routes>
        <Route path='/' element={<StartingPage />} />
        <Route path='/identification' element={<IdentificationPage />} />
        <Route path='/covid-questions' element={<CovidQuestions />} />
        <Route path='/vaccination' element={<Vaccination />} />
        <Route path='/tips' element={<TipsPage />} />
        <Route path='/thanks' element={<ThanksPage />} />
      </Routes>
    </FormDataProvider>
  );
}

export default App;

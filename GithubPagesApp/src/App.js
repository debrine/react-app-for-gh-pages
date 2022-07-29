import { Router } from './Routes/Router';

export const App = () => {
  return (
    <>
      <p>this should always get rendered above the variable text</p>
      <Router />
    </>
  );
};

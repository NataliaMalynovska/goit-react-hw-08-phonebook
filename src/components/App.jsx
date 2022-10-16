// import Section from './Section/Section';
// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Filter from './Filter';
// import { GlobalStyle } from './GlobalStyle';
// import { Box } from '../common/Box';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { GlobalStyle } from 'components/GlobalStyle';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const PhonebookPage = lazy(() => import('../pages/Phonebook'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/phonebook"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/phonebook"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/phonebook"
            element={
              <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;

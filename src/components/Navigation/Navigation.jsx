// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import {Link} from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link  to="/" end>
        Home
      </Link>
      {isLoggedIn && (
        <Link  to="/phonebook">
          Phonebook
        </Link>
      )}
    </nav>
  );
};

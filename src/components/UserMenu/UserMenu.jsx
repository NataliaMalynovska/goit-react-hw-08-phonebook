import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { WrapperMenu, TitleMenu } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <WrapperMenu>
      <TitleMenu>Welcome, {user.name}</TitleMenu>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </WrapperMenu>
  );
};

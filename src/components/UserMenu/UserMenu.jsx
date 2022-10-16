import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { WrapperMenu, TitleMenu, ButtonExit } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <WrapperMenu>
      <TitleMenu>Welcome, </TitleMenu>
      <p>
        {user.name} - {user.email}
      </p>
      <ButtonExit type="button" onClick={() => dispatch(logOut())}>
        Exit
      </ButtonExit>
    </WrapperMenu>
  );
};

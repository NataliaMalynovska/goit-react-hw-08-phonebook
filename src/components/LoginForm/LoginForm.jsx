import { Box } from 'common/Box';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LogForm, LogLabel, LogInput, LogButton } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      as="main"
      backgroundColor="#c3c8db"
      mt="36px"
      p="16px"
      width="560px"
      height="560px"
      mr="auto"
      ml="auto"
    >
      <LogForm onSubmit={handleSubmit} autoComplete="off">
        <LogLabel>
          Email
          <LogInput type="email" name="email" />
        </LogLabel>
        <LogLabel>
          Password
          <LogInput type="password" name="password" />
        </LogLabel>
        <LogButton type="submit">Log In</LogButton>
      </LogForm>
    </Box>
  );
};

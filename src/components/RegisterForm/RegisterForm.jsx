import { Box } from 'common/Box';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { RegForm, RegInput, RegLabel, RegButton } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
      <RegForm onSubmit={handleSubmit} autoComplete="off">
        <RegLabel>
          Username
          <RegInput type="text" name="name" />
        </RegLabel>
        <RegLabel>
          Email
          <RegInput type="email" name="email" />
        </RegLabel>
        <RegLabel>
          Password
          <RegInput type="password" name="password" />
        </RegLabel>
        <RegButton type="submit">Register</RegButton>
      </RegForm>
    </Box>
  );
};

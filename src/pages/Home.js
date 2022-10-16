// import { Link } from 'react-router-dom';
import { Box } from 'common/Box';
import { HomeText, HomeLink } from './pages.styled';

export default function Home() {
  return (
    <Box
      as="main"
      backgroundColor="#c3c8db"
      mt="106px"
      p="16px"
      width="560px"
      height="560px"
      mr="auto"
      ml="auto"
    >
      <HomeText>
        Phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>{' '}
        <HomeLink to="/login">Sign Up</HomeLink>
      </HomeText>
      <HomeText>
        New to Phonebook?
        <HomeLink to="/register"> Create an account.</HomeLink>
      </HomeText>
    </Box>
  );
}

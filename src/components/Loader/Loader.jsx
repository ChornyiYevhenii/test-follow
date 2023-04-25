import { ThreeDots } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <ThreeDots
        height="150"
        width="150"
        radius="9"
        color="#a95cd3"
        ariaLabel="loading"
        visible={true}
      />
    </Container>
  );
};

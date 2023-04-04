import styled from '@emotion/styled';

import Shortener from './Shortener';
import UrlList from './UrlList';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Shortener />
      <UrlList />
    </StyledApp>
  );
}

export default App;

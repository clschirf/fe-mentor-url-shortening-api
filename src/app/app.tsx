import styled from '@emotion/styled';
import { injectGlobal } from '@emotion/css';

import Shortener from './Shortener';
import { background } from './palette';

injectGlobal`
    * {
        box-sizing: border-box;
        font-family: "Poppins";
    }

    html,
    body {
        width: 100%;
        height: 100%;
        min-height: 100%;
        padding: 0;
        margin: 0;
        font-size: 18px;
    }
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: align-start;
  padding: 3em 7em;
  background: ${background};

  & > div {
    padding: 2em;
  }
`;

export function App() {
  return (
    <StyledApp>
      <Shortener />
    </StyledApp>
  );
}

export default App;

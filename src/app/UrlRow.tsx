import styled from '@emotion/styled';

import ProcessedUrlType from './types/ProcessedUrl';
import { primary, primaryContrast, primaryHover, snow } from './palette';

type UrlRowProps = {
  url: ProcessedUrlType;
};

const UrlContainer = styled.div`
  width: 100%;
  background: ${snow};
  font-size: 0.7em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5em;
`;

const CopyButton = styled.button`
  background: ${primary};
  color: ${snow};
  border: none;
  padding: 0.5em 1em;
  border-radius: 0.4em;

  &:hover {
    background: ${primaryHover}
  }

  &:active {
    background: ${primaryContrast};
  }
`;

const UrlRow = (props: UrlRowProps) => {
  return (
    <UrlContainer>
      <div>{props.url.originalUrl}</div>
      <div>{props.url.shortUrl}</div>
      <CopyButton>Copy</CopyButton>
    </UrlContainer>
  );
};

UrlRow.displayName = 'UrlRow';
export default UrlRow;

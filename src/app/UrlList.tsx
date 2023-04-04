import styled from '@emotion/styled';

import UrlRow from './UrlRow';
import ProcessedUrlType from './types/ProcessedUrl';
import { snow } from './palette';

type UrlListProps = {
  urls: ProcessedUrlType[];
};

const UrlListContainer = styled.div`
  margin-top: 1.5em;
  width: 100%;
  background: ${snow};
  font-size: 0.7em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const UrlList = (props: UrlListProps) => {
  const generateRows = () => {
    return props.urls.reverse().map((u) => (
      <UrlRow
        key={u.id}
        url={u}
      />
    ));
  };
  return <UrlListContainer>{generateRows()}</UrlListContainer>;
};

UrlList.displayName = 'UrlList';
export default UrlList;

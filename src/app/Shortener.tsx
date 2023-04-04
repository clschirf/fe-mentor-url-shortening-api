import { useState } from 'react';
import styled from '@emotion/styled';

import UrlList from './UrlList';
import { shortenUrl, ShortenResultType } from './api/shorten';
import ProcessedUrlType from './types/ProcessedUrl';
import { primary, primaryContrast, primaryHover, snow } from './palette';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-around;
  background: ${primaryContrast};
  padding: 4em 6em;
  color: ${snow};
  width: 100%;

  & > *:not(:last-child) {
    margin-right: 1em;
  }
`;

const ShortenButton = styled.button`
  border-radius: 0.5em;
  background: ${primary};
  border: none;
  padding: 1em;
  color: inherit;
  cursor: pointer;

  &:hover {
    background: ${primaryHover};
  }
`;



const Shortener = () => {
  const [inputUrl, setInputUrl] = useState('');
  const [urls, setUrls] = useState<ProcessedUrlType[]>([]);

  const shortenLink = async () => {
    const result: ShortenResultType = await shortenUrl(inputUrl);
    setUrls([
      ...urls,
      { id: result.code, originalUrl: inputUrl, shortUrl: result.short_link3 },
    ]);
  };

  return (
    <>
      <Container>
        <input
          type='text'
          id='url'
          required
          minLength={4}
          maxLength={500}
          size={70}
          placeholder='Enter any URL to shorten it'
          value={inputUrl}
          onInput={(e) => setInputUrl((e.target as HTMLInputElement).value)}
        />
        <ShortenButton onClick={shortenLink}>Shorten it!</ShortenButton>
      </Container>
      {urls.length > 0 && <UrlList urls={urls} />}
    </>
  );
};

Shortener.displayName = 'Shortener';
export default Shortener;

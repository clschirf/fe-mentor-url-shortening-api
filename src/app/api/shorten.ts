// https://shrtco.de/docs

// The number of request is limited to 1 requests per second, per IP address.

const API_BASE = 'https://api.shrtco.de/v2/';
const SHORTEN_API = 'shorten'; // GET or POST

export type ShortenResultType = {
    code: string;
    short_link: string;
    full_short_link: string;
    short_link2: string;
    full_short_link2: string;
    short_link3: string;
    full_short_link3: string;
    share_link: string;
    full_share_link: string;
    original_link: string;
};

export const shortenUrl = async (url: string) => {
  // https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html
  const apiUrl = `${API_BASE}${SHORTEN_API}?url=${url}`;
  
  const response = await fetch(apiUrl);
  const result = await response.text();
  const resultJson = JSON.parse(result).result;
  
  return resultJson as ShortenResultType;
};

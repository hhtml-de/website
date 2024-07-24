import { parseHTML } from 'linkedom';

// not really a decrapify but rather
// removes all embedded content from a document so it can be safely put inside the RSS feed.
export default (content) => {
  const { document } = parseHTML(`<html><body>${content}</body></html>`);
  const tags = document.querySelectorAll('*');
  for (const tag of tags) {
    for (const attrib of tag.attributes) {
      if (attrib.name.startsWith('data-')) {
        tag.removeAttribute(attrib.name);
      }
    }
  }
  const craps = document.querySelectorAll('iframe, object, audio, video');
  for (const crap of craps) {
    crap.remove();
  }
  return document.body.innerHTML;
}
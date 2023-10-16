const vanillaH = require('vanillah');
const htm = require('htm');

module.exports = function ({document}) {
  
  const h = vanillaH(document);
  const html = htm.bind(h);

  const links = document.querySelectorAll('a[data-osm-embed-src]');
  for (const link of links) {
    const embedLink = link.getAttribute('data-osm-embed-src');
    const iframe = html`
      <iframe width="100%" height="350" src="${embedLink}" style="border: 1px solid black"></iframe>
    `;
    const paragraph = link.parentNode;
    
    paragraph.insertBefore(iframe, link);
  }
};
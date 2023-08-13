const vanillaH = require('vanillah');
const htm = require('htm');
const slugify = text => text.trim().toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s/g, '-');

function getHeadingId(heading) {
  const text = heading.textContent.trim();
  return slugify(text).toLowerCase();
}

// Code for adding id's to headlines is by Vadim Makeev github.com/pepelsbey/pepelsbey.dev
// heading wrapper idea is from https://11ty.rocks by Stephanie Eckles.
module.exports = function ({document}) {

  const h = vanillaH(document);
  const html = htm.bind(h);

  const article = document.querySelector('.post');

  if (! article) {
    return;
  }

  const headings = article.querySelectorAll('h2, h3, h4, h5, h6');

  const wrapHeading = (heading) => {
    const id = heading.getAttribute('id');
    const tag = heading.nodeName.toLowerCase();
    const classes = heading.getAttribute('class');

    const headingWrapper = html`
      <div class="heading-wrapper ${tag} ${classes}">
        <a href="#${id}">
          <span id="${id}--icon" aria-hidden="true">#</span>
          <span id="${id}--accessible-name" class="visually-hidden">anchor</span>
        </a>
      </div>
    `;

    heading.parentNode.insertBefore(headingWrapper, heading);
    headingWrapper.insertBefore(heading, headingWrapper.firstChild);
  };

  for (const heading of headings) {
    heading.setAttribute('id', getHeadingId(heading));
    wrapHeading(heading);
  }

  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    const h1 = document.querySelector('h1');
    if (! h1) {
      skipLink.remove();
      return;
    }
    h1.setAttribute('id', getHeadingId(h1));
    skipLink.setAttribute('href', `#${h1.getAttribute('id')}`);

  }
}

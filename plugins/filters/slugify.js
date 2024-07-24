import slugify from 'slugify';

/** Converts string to a slug form. */
export default (str) => {
  return slugify(str, {
    replacement: '-',
    remove: /[#,&,+()$~%.'":*?<>{}]/g,
    lower: true,
  });
};

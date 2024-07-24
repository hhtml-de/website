/** Returns all entries from the given array that match the specified key:value pair. */
export default (arrayOfObjects, keyPath, value) =>
  arrayOfObjects.filter((object) => lodash.get(object, keyPath) === value);

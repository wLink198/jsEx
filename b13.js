function bouncer(arr) {
  var result = arr.filter(remove);
  return result;

  function remove(value) {
    return Boolean(value);
  }
}
bouncer([7, "ate", "", false, 9]);
(function () {
  const ftOptions = {
    speed: 200,
    borderColor: 'black',
    activeColor: 'white',
    color: 'black',
    fontSize: '1em',
    direction: 'both'
  };

  $(document).ready(function () {
    $('.first-name').funnyText({
      ...ftOptions
    });
    $('.last-name').funnyText({
      ...ftOptions
    });
  });
})();

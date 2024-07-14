const scriptsToInclude = [
  './js/tokenjwt.js'
];

scriptsToInclude.forEach(script => {
  const scriptElement = document.createElement('script');
  scriptElement.src = script;
  document.head.appendChild(scriptElement);
});


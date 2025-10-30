(async function () {
  const html = await fetch('https://velezdavid.github.io/script-bot/widget.html').then(r => r.text());
  const div = document.createElement('div');
  div.innerHTML = html;
  document.body.appendChild(div);
})();

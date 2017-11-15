/*
<div id="root"><div class="App"><header class="row"><span href="#" class="logo col-md-2 hidden-sm">mini.css</span><a class="button col-sm-2" href="https://github.com/Chalarangelo/mini.css">Github</a><label for="doc-drawer-checkbox" class="button drawer-toggle col-sm-2"></label></header><div class="row" id="doc-wrapper"><input id="doc-drawer-checkbox" class="drawer" value="on" type="checkbox"><nav><div><input style="width: 100%; margin: 0px;" placeholder="Search..." type="search"></div></nav><main class="col-sm-12 col-md-8 col-lg-9" id="doc-content"><button>Home</button><a href="#" class="button">News</a></main></div></div></div>
*/
var fs = require('fs');

var docFragments = require('./doc-fragments/docFragments'); // Gets all document fragments as a list.
var outputPath = './docs/v3/docs.html';                     // This path is relative to package.json.

var documentStart = `<!DOCTYPE html><html lang="en"><head>
<!-- TODO: Add missing favicon and page_thumb images when about to release -->
<!-- TODO: Update meta information when about to release -->
<link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Poppins:400,400i,500,700,700i&amp;subset=latin-ext" rel="stylesheet">
<link rel="stylesheet" href="./style.min.css">
<title>mini.css - Minimal, responsive, style-agnostic CSS framework</title>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="mini.css - Minimal, responsive, style-agnostic CSS framework">
<meta name="keywords" content="mini, mini.css, CSS, framework, minimal, responsive, style-agnostic, front-end, frontend, Sass, toolkit">
<meta name="author" content="Angelos Chalaris (chalarangelo)">
<meta property="og:title" content="mini.css - Minimal, responsive, style-agnostic CSS framework">
<meta property="og:description" content="mini.css is a tiny CSS framework designed to build quick, modern and responsive websites."/>
<meta property="og:type" content="website"/><meta property="og:image" content="page_thumb.png">
<meta property="og:url" content="https://chalarangelo.github.io/mini.css/"><link rel="icon" type="image/png" href="favicon.png">
</head><body>`;
var documentEnd = `</body></html>`;

var appShellStart = `<div id="root"><header>
  <span href="#" class="logo">mini.css</span>
  <a class="button" href="https://github.com/Chalarangelo/mini.css">Github</a>
  <label for="doc-drawer-checkbox" class="button drawer-toggle"></label>
</header>
<div class="row" id="doc-wrapper">`;
var appShellEnd = `</div></div>`;

var appSidebarStart = `<input id="doc-drawer-checkbox" class="drawer" value="on" type="checkbox">
<nav class="col-md-4 col-lg-3"><div><input style="width: 100%; margin: 0px;" placeholder="Search..." type="search"></div>`;
var appSidebarEnd = `</nav>`;

var mainStart = `<main class="col-sm-12 col-md-8 col-lg-9" id="doc-content">`;
var mainEnd = `</main>`;

var documentationFragments = docFragments.map(f => buildFragment(f)).join('<br/>');

fs.writeFile(outputPath,
  `${documentStart}${appShellStart}
    ${appSidebarStart}${appSidebarEnd}
    ${mainStart}${documentationFragments}${mainEnd}
  ${appShellEnd}${documentEnd}`,
  function(err) { if(err) return console.log(err);  console.log("The file was saved!"); }
);

function buildFragment(fragment){
  var fragmentHtml = `<div id="${fragment.id}" class="card fluid">
  <h2 class="section double-padded">${fragment.title}</h2>
  <div class="section">${fragment.description}</div>
  ${fragment.example?`<div class="section"><h3>Example</h3>${fragment.example}</div>`:''}
  ${fragment.samples.length?`<div class="section double-padded"><h3>Sample code</h3>${fragment.samples.join('')}</div>`:''}
  ${fragment.dos.length||fragment.donts.length?
    `<div class="section double-padded"><h3>Best practices</h3>${[fragment.dos.map(d => `<div class="row dodos"><div class="col-sm-12 col-md-6">${d.sample}</div><div class="col-sm-12 col-md-6"><p><mark class="do">Do:</mark>&nbsp;${d.description}</p></div></div>`).join('<br/>'),fragment.donts.map(d => `<div class="row dodos"><div class="col-sm-12 col-md-6">${d.sample}</div><div class="col-sm-12 col-md-6"><p><mark class="dont">Don't:</mark>&nbsp;${d.description}</p></div></div>`).join('<br/>')].join('')}</div>`
  :''}
  ${fragment.notes.length?`<div class="section double-padded"><h3>Notes</h3><ul>${fragment.notes.map(n => `<li>${n}</li>`).join('')}</ul></div>`:''}
  ${fragment.customization.length?`<div class="section double-padded"><h3>Customization</h3><ul>${fragment.customization.map(s => `<li>${s}</li>`).join('')}</ul></div>`:''}
</div>`;
  return fragmentHtml;
}

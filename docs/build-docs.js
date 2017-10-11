var fs = require('fs');
var version = require('./vinf');                            // Gets version info.
var frameworkUrl = `"https://cdnjs.cloudflare.com/ajax/libs/mini.css/${version.version.slice(1)}/mini-default.css"`;
// INDEX

var indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
  <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Poppins:400,400i,500,700,700i&amp;subset=latin-ext" rel="stylesheet">
  <link rel="stylesheet" href="./style.min.css">
  <title>mini.css - Minimal, responsive, style-agnostic CSS framework</title>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="mini.css is a tiny CSS framework designed to build quick, modern and responsive websites.">
  <meta name="keywords" content="mini, mini.css, CSS, framework, minimal, responsive, style-agnostic, front-end, frontend, Sass, toolkit">
  <meta name="author" content="Angelos Chalaris (chalarangelo)">
  <meta property="og:title" content="mini.css - Minimal, responsive, style-agnostic CSS framework">
  <meta property="og:description" content="mini.css is a tiny CSS framework designed to build quick, modern and responsive websites."/>
  <meta property="og:type" content="website"/><meta property="og:image" content="page_thumb.png">
  <meta property="og:url" content="https://chalarangelo.github.io/mini.css/"><link rel="icon" type="image/png" href="favicon.png">
  </head>
  <body>
  <div class="index-splash">
    <div class="index-splash-image no-filter"></div>
    <div class="index-splash-image"></div>
    <h1 class="splash">mini<small>.css</small></h1>
    <p class="splash">minimal, responsive, style-agnostic <br>CSS framework</p>
    <p id="version-info">${version.version}</p>
    <a class="button splash" href="docs">Get started</a>
  </div>
  <header class="row sticky">
    <span class="col-md-1 col-lg-2"></span>
    <span class="logo col-sm-3 col-md">mini.css</span>
    <a class="button col-sm col-md" href="docs">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="height: 20px; vertical-align: text-top;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    <span>&nbsp;Docs</span></a>
    <a class="button col-sm col-md" href="https://github.com/Chalarangelo/mini.css" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="height: 20px; vertical-align: text-top;"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    <span>&nbsp;Github</span></a>
    <a class="button col-sm col-md" href="flavors">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="height: 20px; vertical-align: text-top;"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
    <span>&nbsp;Flavors</span></a>
    <span class="col-md-1 col-lg-2"></span>
  </header>
  <div class="row padded">
    <div class="col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
      <img src="./responsive.svg" class="feature-image">
      <h2 class="feature-header">Fast and Responsive</h2><br>
      <p>Want to build websites that look beautiful on any and all devices, but also load fast on mobile connections? Then <strong>mini.css</strong> is the right tool for you! Its tiny size (under 10KB gzipped), along with its <strong>responsive grid</strong> and modern components ensures that all your users are satisfied and can access your website anytime, anywhere. Bridging the gap between fully-featured frameworks (e.g. Bootstrap and Semantic UI) and micro frameworks (e.g. Milligram and Pure.CSS), <strong>mini.css</strong> packs a lot of features in a small package, while it relies solely on CSS, meaning you do not have to worry about any conflicts with other Javascript libraries you might be using.</p>
    </div>
  </div>
  <div class="row padded alt-back">
    <div class="col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
      <img src="./tailored.svg" class="feature-image">
      <h2 class="feature-header">Tailored to Your Needs</h2><br>
      <p>Creating a CSS framework that caters to everyone's needs is no easy task, but <strong>mini.css</strong> manages to rise to the occasion by providing extensive and coherent documentation in combination with templates, examples and semantic HTML5 markup. Modern UX patterns and accessibility guidelines are well-documented and can be used out of the box, using one of the unique <strong>flavors</strong> that the framework provides. If you still want more, you can create your own custom flavor or tweak an existing one just by opening its CSS file and changing a few custom properties. It's that simple! </p>
    </div>
  </div>
  <div class="row padded primary-section">
    <div class="col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
      <h2 class="feature-header">Get started now!</h2><br>
      <p>Head over to the <a href="docs">documentation</a> to learn how to get started using <strong>mini.css</strong>, as well as what flavors and components are availble and how to use them to create the website or web app you've always wanted. If you like the framework and want to support it, remember to to star it on Github. It means a lot to us and it only takes a couple of seconds!</p>
      <p style="text-align:center;"><a href="docs" class="button">Get started</a></p>
      <a href="https://github.com/Chalarangelo/mini.css" target="_blank" class="centered">mini.css on Github</a>
    </div>
  </div>
  <footer class="row"><div class="col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2"><p style="text-align: justify;"><strong>mini.css</strong> was designed and built by <a href="https://github.com/Chalarangelo" target="_blank">@Chalarangelo</a>. Source code licensed under the <a href="https://github.com/Chalarangelo/mini.css/blob/master/LICENSE">MIT License</a>.</p><p>Icons provided by <a href="https://feathericons.com/" target="_blank">Feather</a>. Photo by <a href="https://unsplash.com/photos/vjMgqUkS8q8" target="_blank">Christopher Gower</a> on <a href="https://unsplash.com" target="_blank">Unsplash</a>.</p></div></footer>
  </body>
</html>`;

var indexOutputPath = './docs/index.html';               // This path is relative to package.json.

fs.writeFile(indexOutputPath,
  `${indexHtml}`,
  function(err) { if(err) return console.log(err);  console.log("Index file generated!"); }
);

// DOCUMENTATION
var docFragments = require('./doc-fragments/docFragments'); // Gets all document fragments as a list.
var docOutputPath = './docs/docs.html';                  // This path is relative to package.json.

const FEATHER_BANNER = `<a href="https://feathericons.com/" class="section double-padded" id="feather-banner" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f8f8f8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17" y1="15" x2="9" y2="15"></line></svg>&nbsp;Powered by Feather</a>`;

var documentStart = `<!DOCTYPE html><html lang="en"><head>
<link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Poppins:400,400i,500,700,700i&amp;subset=latin-ext" rel="stylesheet">
<link rel="stylesheet" href="./style.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/fuse.js/3.0.4/fuse.min.js"></script>
<title>mini.css - Docs</title>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="mini.css is a tiny CSS framework designed to build quick, modern and responsive websites.">
<meta name="keywords" content="mini, mini.css, CSS, framework, minimal, responsive, style-agnostic, front-end, frontend, Sass, toolkit">
<meta name="author" content="Angelos Chalaris (chalarangelo)">
<meta property="og:title" content="mini.css - Minimal, responsive, style-agnostic CSS framework">
<meta property="og:description" content="mini.css is a tiny CSS framework designed to build quick, modern and responsive websites."/>
<meta property="og:type" content="website"/><meta property="og:image" content="page_thumb.png">
<meta property="og:url" content="https://chalarangelo.github.io/mini.css/"><link rel="icon" type="image/png" href="favicon.png">
</head><body>`;
var documentEnd = `</body></html>`;

var appShellStart = `<div id="root"><header class="row">
  <span class="logo col-sm-3 col-md">mini.css</span>
  <a class="button col-sm col-md" href="https://github.com/Chalarangelo/mini.css" target="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="height: 20px; vertical-align: text-top;"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  <span>&nbsp;Github</span></a>
  <a class="button col-sm col-md" href="flavors">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="height: 20px; vertical-align: text-top;"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
  <span>&nbsp;Flavors</span></a>
  <label for="doc-drawer-checkbox" class="button drawer-toggle col-sm"></label>
</header>
<div class="row" id="doc-wrapper">`;
var appShellEnd = `</div></div>`;

var appSidebarStart = `<input id="doc-drawer-checkbox" class="drawer" value="on" type="checkbox">
<nav class="col-md-4 col-lg-3" id="nav-drawer"><h3>Menu</h3><label for="doc-drawer-checkbox" class="button drawer-close"></label><div><input style="width: 100%; margin: 0px;" placeholder="Search..." type="search" id="search-bar" oninput="search()"></div>`;
var appSidebarEnd = `<span id="no-results">No results found</span></nav>`;

var mainStart = `<main class="col-sm-12 col-md-8 col-lg-9" id="doc-content">`;
var mainEnd = `<footer><p><strong>mini.css</strong> was designed and built by <a href="https://github.com/Chalarangelo" target="_blank">@Chalarangelo</a>. Source code licensed under the <a href="https://github.com/Chalarangelo/mini.css/blob/master/LICENSE">MIT License</a>.</p><p>Icons provided by <a href="https://feathericons.com/" target="_blank">Feather</a>. Search powered by <a href="http://fusejs.io/" target="_blank">Fuse.js</a>.</p></footer></main>`;

var documentationFragments = docFragments.map(f => buildFragment(f)).join('<br/>');
var documentationLinks = docFragments.map(f => buildLink(f)).join('');
var documentationSearch = `<script>
  // Search script
  var docs= [${docFragments.map(f => stripData(f))}];
  var options = {threshold:0.4, keys:["keys"]};
  var fuse = new Fuse(docs,options);
  function search(){
    var query = document.getElementById('search-bar').value;
    if(query.length){
      var result = fuse.search(query);
      if(result.length){
        var resIds = result.map(function(item){
          return ':not(#link-to-'+item.id+')';
        }).join('');
        document.getElementById('search-style').innerHTML = '#no-results{display:none;}#nav-drawer a'+resIds+'{display:none;}';
      }
      else {
        document.getElementById('search-style').innerHTML = '#nav-drawer a{display:none;}#no-results{display:block;}';
      }
    }
    else{
      document.getElementById('search-style').innerHTML = '#no-results{display:none;}';
    }
  }
  // Codepen prefill script
  var el = document.querySelectorAll('.prefiller-example > pre');
  el.forEach(e => e.innerHTML = '<form action="https://codepen.io/pen/define" method="POST" target="_blank" class="codepen-form">' +
    '<input type="hidden" name="data" value=\\\'' + JSON.stringify({
      html               : e.innerText,
      css_external       : ${frameworkUrl}
    }).replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;") + '\\\'>' +
    '<input type="image" class="codepen-link" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23424242%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolygon%20points%3D%2212%202%2022%208.5%2022%2015.5%2012%2022%202%2015.5%202%208.5%2012%202%22%3E%3C%2Fpolygon%3E%3Cline%20x1%3D%2212%22%20y1%3D%2222%22%20x2%3D%2212%22%20y2%3D%2215.5%22%3E%3C%2Fline%3E%3Cpolyline%20points%3D%2222%208.5%2012%2015.5%202%208.5%22%3E%3C%2Fpolyline%3E%3Cpolyline%20points%3D%222%2015.5%2012%208.5%2022%2015.5%22%3E%3C%2Fpolyline%3E%3Cline%20x1%3D%2212%22%20y1%3D%222%22%20x2%3D%2212%22%20y2%3D%228.5%22%3E%3C%2Fline%3E%3C%2Fsvg%3E" width="40" height="40" value="Open in Codepen">' +
  '</form>' + e.innerHTML);
</script>
<style id="search-style">#no-results{display:none;}</style>`;

function buildFragment(fragment){
  var fragmentHtml = `<div id="${fragment.id}" class="card fluid">
  <h2 class="section double-padded">${fragment.title}</h2>
  ${fragment.id === 'icons'?FEATHER_BANNER:''}
  <div class="section">${fragment.description}</div>
  ${fragment.example?`<div class="section"><h3>Example</h3>${fragment.example}</div>`:''}
  ${fragment.samples.length?`<div class="section double-padded prefiller-example"><h3>Sample code</h3>${fragment.samples.join('')}</div>`:''}
  ${fragment.modifiers.length?
    `<div class="section double-padded prefiller-example"><h3>Modifiers</h3>
    ${fragment.modifiers.map(m => `<h4>${m.title}</h4>${m.description}${m.example?`<h5>Example</h5>${m.example}`:''}${m.samples.length?`<h5>Sample code</h5>${m.samples.join('')}`:''}`).join('<br/>')}</div>`:''}
  ${fragment.dos.length||fragment.donts.length?
    `<div class="section double-padded"><h3>Best practices</h3>${[fragment.dos.map(d => `<div class="row dodos"><div class="col-sm-12 col-md-6">${d.sample}</div><div class="col-sm-12 col-md-6"><p><mark class="do">Do:</mark>&nbsp;${d.description}</p></div></div>`).join('<br/>'),fragment.donts.map(d => `<div class="row dodos"><div class="col-sm-12 col-md-6">${d.sample}</div><div class="col-sm-12 col-md-6"><p><mark class="dont">Don't:</mark>&nbsp;${d.description}</p></div></div>`).join('<br/>')].join('')}</div>`
  :''}
  ${fragment.notes.length?`<div class="section double-padded"><h3>Notes</h3><ul>${fragment.notes.map(n => `<li>${n}</li>`).join('')}</ul></div>`:''}
  ${fragment.customization.length?`<div class="section double-padded"><h3>Customization</h3><ul>${fragment.customization.map(s => `<li>${s}</li>`).join('')}</ul></div>`:''}
</div>`;
  return fragmentHtml;
}

function buildLink(fragment){
  return `<a href="#${fragment.id}" id="link-to-${fragment.id}">${fragment.title}</a>`;
}

function stripData(fragment){
  return `{id: "${fragment.id}", keys: [${fragment.keywords.map(k=>`"${k}"`)}]  }`;
}

fs.writeFile(docOutputPath,
  `${documentStart}${appShellStart}
    ${appSidebarStart}${documentationLinks}${appSidebarEnd}
    ${mainStart}${documentationFragments}${mainEnd}
  ${appShellEnd}
  ${documentationSearch}
  ${documentEnd}`,
  function(err) { if(err) return console.log(err);  console.log("Documentation file generated!"); }
);

// CUSTOMIZATION
var custFragments = require('./doc-fragments/customizationFragments'); // Gets all customization fragments as a list.
var custOutputPath = './docs/flavors.html';                  // This path is relative to package.json.

var customizationStart = `<!DOCTYPE html><html lang="en"><head>
<link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Poppins:400,400i,500,700,700i&amp;subset=latin-ext" rel="stylesheet">
<link rel="stylesheet" href="./style.min.css">
<title>mini.css - Flavors</title>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="mini.css is a tiny CSS framework designed to build quick, modern and responsive websites.">
<meta name="keywords" content="mini, mini.css, CSS, framework, minimal, responsive, style-agnostic, front-end, frontend, Sass, toolkit">
<meta name="author" content="Angelos Chalaris (chalarangelo)">
<meta property="og:title" content="mini.css - Minimal, responsive, style-agnostic CSS framework">
<meta property="og:description" content="mini.css is a tiny CSS framework designed to build quick, modern and responsive websites."/>
<meta property="og:type" content="website"/><meta property="og:image" content="page_thumb.png">
<meta property="og:url" content="https://chalarangelo.github.io/mini.css/"><link rel="icon" type="image/png" href="favicon.png">
<script src="./jszip.min.js"></script>
<script src="./FileSaver.min.js"></script>
<script src="./sass.js"></script>
</head><body>`;
var customizationEnd = `</body></html>`;

var customizationAppShellStart = `<div id="root"><header class="row">
  <span class="logo col-sm-3 col-md">mini.css</span>
  <a class="button col-sm col-md" href="https://github.com/Chalarangelo/mini.css" target="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="height: 20px; vertical-align: text-top;"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  <span>&nbsp;Github</span></a>
  <a class="button col-sm col-md" href="docs">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="height: 20px; vertical-align: text-top;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
  <span>&nbsp;Docs</span></a>
  <label for="doc-drawer-checkbox" class="button drawer-toggle col-sm"></label>
</header>
<div class="row" id="doc-wrapper">`;
var customizationAppShellEnd = `</div></div>`;

var customizationAppSidebarStart = `<input id="doc-drawer-checkbox" class="drawer" value="on" type="checkbox">
<nav class="col-md-4 col-lg-3" id="nav-drawer"><h3>Menu</h3><label for="doc-drawer-checkbox" class="button drawer-close"></label>`;
var customizationAppSidebarEnd = `</nav>`;

var customizationMainStart = `<main class="col-sm-12 col-md-8 col-lg-9" id="doc-content">`;
var customizationMainEnd = `<footer><p><strong>mini.css</strong> was designed and built by <a href="https://github.com/Chalarangelo" target="_blank">@Chalarangelo</a>. Source code licensed under the <a href="https://github.com/Chalarangelo/mini.css/blob/master/LICENSE">MIT License</a>.</p><p>Icons provided by <a href="https://feathericons.com/" target="_blank">Feather</a>. Flavor generation powered by <a href="http://sass.js.org/" target="_blank">Sass.js</a> and <a href="https://stuk.github.io/jszip/" target="_blank">JSZip</a>.</p></footer></main>`;

var customizationFragments = custFragments.map(f => buildCustomizationFragment(f)).join('<br/>');
var customizationLinks = [buildLink(custFragments[0]), buildLink(custFragments[1]), '<hr style="padding:0;"/>', ...custFragments[2].sections.map(f => buildLink(f))].join('');

function buildCustomizationFragment(fragment){
  var fragmentHtml = `<div id="${fragment.id}" class="card fluid">
  <h2 class="section double-padded">${fragment.title}</h2>${fragment.content}
</div>`;
  return fragmentHtml;
}

fs.writeFile(custOutputPath,
  `${customizationStart}${customizationAppShellStart}
    ${customizationAppSidebarStart}${customizationLinks}${customizationAppSidebarEnd}
    ${customizationMainStart}${customizationFragments}${customizationMainEnd}
  ${customizationAppShellEnd}
  ${customizationEnd}`,
  function(err) { if(err) return console.log(err);  console.log("Flavors file generated!"); }
);

var miniSassFiles = ['_contextual_mixins', '_contextual', '_core', '_icon', '_input_control_mixins', '_input_control', '_layout_mixins', '_layout', '_navigation', '_progress_mixins', '_progress', '_table', '_utility'];

miniSassFiles.forEach(f => fs.createReadStream(`./src/mini/${f}.scss`).pipe(fs.createWriteStream(`./docs/mini/${f}.scss`)));

var flavorFiles = ['mini-default', 'mini-dark', 'mini-nord'];

flavorFiles.forEach(f => {
  fs.createReadStream(`./src/flavors/${f}.scss`).pipe(fs.createWriteStream(`./docs/flavorFiles/${f}.scss`));
  fs.createReadStream(`./dist/${f}.css`).pipe(fs.createWriteStream(`./docs/flavorFiles/${f}.css`));
  fs.createReadStream(`./dist/${f}.min.css`).pipe(fs.createWriteStream(`./docs/flavorFiles/${f}.min.css`));
});

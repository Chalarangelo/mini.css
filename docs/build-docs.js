var fs = require('fs');

var docFragments = require('./doc-fragments/docFragments'); // Gets all document fragments as a list.
var outputPath = './docs/v3/docs.html';                     // This path is relative to package.json.

var documentStart = `<!DOCTYPE html><html lang="en"><head>
<!-- TODO: Add missing favicon and page_thumb images when about to release -->
<!-- TODO: Update meta information when about to release -->
<link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Poppins:400,400i,500,700,700i&amp;subset=latin-ext" rel="stylesheet">
<link rel="stylesheet" href="./style.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/fuse.js/3.0.4/fuse.min.js"></script>
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

var appShellStart = `<div id="root"><header class="row">
  <span href="#" class="logo col-sm-3 col-md">mini.css</span>
  <a class="button col-sm col-md" href="https://github.com/Chalarangelo/mini.css" target="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github" style="height: 20px; vertical-align: text-top;"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  <span>&nbsp;Github</span></a>
  <a class="button col-sm col-md" href="#">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit" style="height: 20px; vertical-align: text-top;"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
  <span>&nbsp;Flavors</span></a>
  <a class="button col-sm col-md" href="#" target="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book" style="height: 20px; vertical-align: text-top;"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
  <span>&nbsp;Blog</span></a>
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
</script>
<style id="search-style">#no-results{display:none;}</style>`;

fs.writeFile(outputPath,
  `${documentStart}${appShellStart}
    ${appSidebarStart}${documentationLinks}${appSidebarEnd}
    ${mainStart}${documentationFragments}${mainEnd}
  ${appShellEnd}
  ${documentationSearch}
  ${documentEnd}`,
  function(err) { if(err) return console.log(err);  console.log("The file was saved!"); }
);

function buildFragment(fragment){
  var fragmentHtml = `<div id="${fragment.id}" class="card fluid">
  <h2 class="section double-padded">${fragment.title}</h2>
  <div class="section">${fragment.description}</div>
  ${fragment.example?`<div class="section"><h3>Example</h3>${fragment.example}</div>`:''}
  ${fragment.samples.length?`<div class="section double-padded"><h3>Sample code</h3>${fragment.samples.join('')}</div>`:''}
  ${fragment.modifiers.length?
    `<div class="section double-padded"><h3>Modifiers</h3>
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

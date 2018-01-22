var version = require('../vinf').version;
module.exports = {
  id: 'getting-started',
  title: 'Getting started',
  keywords: ['html', 'viewport', 'head', 'meta', 'getting started', 'introduction', 'browser support', 'installation', 'usage', 'setup', 'cdn', 'npm', 'yarn'],
  description: `<p>You can get started using <strong>mini.css</strong> in one of many ways. It is published on <strong>npm</strong> and <strong>yarn</strong>, so you can easily download it, using your preferred package manager:</p>
  <div class="row"><div class="col-sm-12 col-md"><pre>npm install mini.css</pre></div><div class="col-sm-12 col-md"><pre>yarn add mini.css</pre></div></div>
  <br/><p>Alternatively, you can use either <strong>rawgit</strong> or <strong>cdnjs</strong> to import <strong>mini.css</strong> into your HTML page's <code>&lt;head&gt;</code> tag:</p>
  <pre>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.rawgit.com/Chalarangelo/mini.css/${version}/dist/mini-default.min.css&quot;&gt;</pre>
  <pre>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdnjs.cloudflare.com/ajax/libs/mini.css/${version}/mini-default.min.css&quot;&gt;</pre>
  <br/><p>After adding <strong>mini.css</strong> to your project, remember to also add the following line inside your HTML page's <code>&lt;head&gt;</code> tag to utilize the viewport meta tag:</p>
  <pre>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;</pre>
  <br/><p><strong>mini.css</strong> is crafted with long-term support in mind, so expect it to be compatible with all modern browsers, as well as their future versions. However, most legacy and proxy browsers, such as Internet Explorer, Opera Mini, IE Mobile and UC Browser are not officially supported, meaning certain features may not be displayed properly or behave exactly as expected.</p><br/>
  <figure class="container"><div class="row">
  <div class="col-sm" style="text-align:center; background: #35BCE6; padding: 1rem;"><img src="browser-logos/edge_128x128.png" alt="edge"><br/><h3><small>&nbsp;&nbsp;Edge<sup style="-0.675em"><i class="fa fa-lg fa-exclamation" aria-hidden="true" style="font-size: 80%;"></i></sup></small>15</h3></div>
  <div class="col-sm" style="text-align:center; background: #FF742E; padding: 1rem;"><img src="browser-logos/firefox_128x128.png" alt="firefox"><br/><h3><small>&nbsp;Firefox</small>35</h3></div>
  <div class="col-sm" style="text-align:center; background: #FFE270; padding: 1rem;"><img src="browser-logos/chrome_128x128.png" alt="chrome"><br/><h3><small>&nbsp;Chrome</small>49</h3></div>
  <div class="col-sm" style="text-align:center; background: #00D0FF; padding: 1rem;"><img src="browser-logos/safari_128x128.png" alt="safari"><br/><h3><small>&nbsp;Safari</small>9.1</h3></div>
  <div class="col-sm" style="text-align:center; background: #FF6E6E; padding: 1rem;"><img src="browser-logos/opera_128x128.png" alt="opera"><br/><h3><small>&nbsp;Opera</small>36</h3></div>
  <div class="col-sm" style="text-align:center; background: #0F98E0; padding: 1rem;"><img src="browser-logos/android_128x128.png" alt="android"><br/><h3><small>&nbsp;Android</small>56</h3></div>
</div><figcaption>Browser versions officially supported</figcaption></figure><br/>`,
  example: '',
  samples: [],
  notes: [],
  customization: [],
  modifiers: [],
  dos: [],
  donts: []
}

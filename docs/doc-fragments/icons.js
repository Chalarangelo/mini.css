module.exports = {
  id: 'icons',
  title: 'Icons',
  keywords: [`icon`, `svg`, `feather`, `icons`],
  description: `<p><strong>mini.css</strong> comes with a set of 20 commonly-used icons (courtesy of <a href="https://feathericons.com/" target="_blank" rel="noopener">Feather</a>) that you can use anywhere in your web apps, utilizing the appropriate class for each icon.</p>`,
  example: `<div class="row icon-row">
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-alert"></span>&nbsp;.icon-alert</p></div>
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-bookmark"></span>&nbsp;.icon-bookmark</p></div>
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-calendar"></span>&nbsp;.icon-calendar</p></div>
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-cart"></span>&nbsp;.icon-cart</p></div>
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-credit"></span>&nbsp;.icon-credit</p></div>
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-edit"></span>&nbsp;.icon-edit</p></div>
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-help"></span>&nbsp;.icon-help</p></div>
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-home"></span>&nbsp;.icon-home</p></div>
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-info"></span>&nbsp;.icon-info</p></div>
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-link"></span>&nbsp;.icon-link</p></div>
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-location"></span>&nbsp;.icon-location</p></div>
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-lock"></span>&nbsp;.icon-lock</p></div>
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-mail"></span>&nbsp;.icon-mail</p></div>
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-phone"></span>&nbsp;.icon-phone</p></div>
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-rss"></span>&nbsp;.icon-rss</p></div>
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-search"></span>&nbsp;.icon-search</p></div>
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-settings"></span>&nbsp;.icon-settings</p></div>
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-share"></span>&nbsp;.icon-share</p></div>
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-upload"></span>&nbsp;.icon-upload</p></div>
  <div class="col-sm-12 col-md-6 col-lg-3"><p class="doc bordered rounded"><span class="icon-user"></span>&nbsp;.icon-user</p></div>
  </div>`,
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-alert&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-bookmark&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-calendar&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-cart&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-credit&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-edit&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-help&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-home&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-info&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-link&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-location&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-lock&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-mail&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-phone&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-rss&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-search&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-settings&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-share&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-upload&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-user&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span></pre>`],
  notes: [`You can only use a <code>&lt;span&gt;</code> element to create an icon.`,
  `You can inline icons inside a paragraph or pretty much any other textual content. Icons scale relative to their parent element.`],
  customization: [
    `Universal margin for elements can be changed globally by changing the value of the <code>--universal-margin</code> variable. As a rule of thumb, consider the universal margin to be the distance you want your paragraphs to have from the sides of the screen.`
  ],
  modifiers: [
    {
      title : 'Color variants',
      description: `<p>You can create secondary or inverse (<code>.secondary</code>, <code>.inverse</code>) icons, simply by adding the appropriate color modifier.</p>`,
      example: `<p style="padding: 0.5rem;" class="doc">This is a <span class="icon-home secondary"></span> secondary icon, which has a lighter color.</p><p style="background: #111; color: #f8f8f8; padding: 0.5rem;" class="doc">This is an <span class="icon-home inverse"></span> inverse icon.</p>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-alert secondary&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-alert inverse&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span></pre>`]
    }
  ],
  dos: [],
  donts: [
    {
      description: `Avoid inserting text inside icon elements.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-alert&quot;</span><span class="highlight-a">&gt;</span>Don't place text here.<span class="highlight-a">&lt;/span&gt;</span></span></pre>`
    },
    {
      description: `Avoid applying two color modifiers on the same icon.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;icon-alert inverse secondary&quot;</span><span class="highlight-a">&gt;&lt;/span&gt;</span></span></pre>`
    }
  ]
}

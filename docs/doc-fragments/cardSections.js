module.exports = {
  id: 'card-sections',
  title: 'Card sections',
  keywords: [`card`, `row`, `section`, `container`, `col`, `column`, `media`, `double-padded`, `dark`],
  description: '<p>Card content is usually organized in smaller sections (<code>.section</code>) to be more easily digestible. A card section can be any valid HTML5 element with the appropriate class applied to it.</p>',
  example: `<div class="container" style="padding: 0.25rem"><div class="row"><div class="col-sm-12">
      <div class="card fluid" style="margin: 0.5rem 0.25rem"><h3 class="doc section">Title section</h3><p class="doc section">This is a section with some textual content.</p></div>
    </div></div></div>`,
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;section&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;section&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`],
  notes: [
    `While not mandatory, it is highly suggested that you wrap all of your cards' contents in one or more sections.`,
    `Remember that a section can be any valid HTML5 element, so you can apply them to headings, paragraphs, input elements etc.`,
    `Media sections have a default height of <code>200px</code>.`,
    `Due to the media sections using <a href="http://caniuse.com/#feat=object-fit" target="_blank"><code>object-fit</code></a>, you might want to use a polyfill for better browser support (recommended: <a href="https://github.com/bfred-it/object-fit-images" target="_blank">image polyfill</a>, <a href="https://github.com/jonathantneal/fitie" target="_blank">video polyfill</a>).`,
    `Depending on the source website, some embedded videos might not display properly as media sections.`
  ],
  customization: [
    `Text color for cards and card sections can be changed by changing the value of the <code>--card-fore-color</code> variable.`,
    `Background color for cards and card sections can be changed by changing the value of the <code>--card-back-color</code> variable.`,
    `Border color for cards and card sections can be changed by changing the value of the <code>--card-border-color</code> variable.`,
    `You can customize the colors of different color variants by changing the values of the related variables in their respective definitions.`,
    `Universal padding for elements can be changed globally by changing the value of the <code>--universal-padding</code> variable.`
  ],
  modifiers: [
    {
      title : 'Media sections',
      description: '<p>You can create sections for media (<code>.media</code>), such as images or videos (using an <code>&lt;img&gt;</code> or a <code>&lt;iframe&gt;</code> element respectively). These sections are styled appropriately for presentation of media content, meaning that the content will scale appropriately to fill up the available space.</p>',
      example: `<div class="container" style="padding: 0.25rem;"><div class="row">
            <div class="card"><div class="section"><h3 class="doc">Card with image</h3></div><img class="section media" src="https://placehold.it/800x600" alt="placeholder"></div>
            <div class="card"><div class="section"><h3 class="doc">Card with video</h3></div><iframe class="section media" width="1280" height="720" src="https://www.youtube.com/embed/ScMzIvxBSi4"></iframe></div>
          </div></div>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;img</span> <span class="highlight-b">src</span>=<span class="highlight-c">&quot;image.png&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;section media&quot;</span><span class="highlight-a">/&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`]
    },
    {
      title : 'Color variants',
      description: '<p>You can create sections with a darker (<code>.dark</code>) background, by applying the appropriate modifier.</p>',
      example: `<div class="container" style="padding: 0.25rem;"><div class="row">
            <div class="card"><div class="section"><h3 class="doc">Normal section</h3></div><div class="section dark"><h3 class="doc">Dark section</h3></div></div>
          </div></div>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;section dark&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`]
    },
    {
      title : 'Additional spacing',
      description: '<p>You can create sections with additional spacing (<code>.double-padded</code>), by applying the appropriate modifier.</p>',
      example: `<div class="container" style="padding: 0.25rem;"><div class="row">
            <div class="card"><div class="section"><h3 class="doc">Normal spacing</h3></div><div class="section double-padded"><h3 class="doc">Additional spacing</h3></div></div>
          </div></div>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;section double-padded&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`]
    }
  ],
  dos: [],
  donts: [
    {
      description: `Avoid mixing regular content with content in sections. Instead, wrap all of your card's contents in sections.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;section&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;p&gt;</span>This should have been a section!<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`
    }
  ]
}

/*
  Modifiers:
  {
    title : '',
    description: '',
    example: '',
    samples: []
  }
  Dos/Donts:
  {
    description: '',
    sample: ''
  }
*/

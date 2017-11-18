module.exports = {
  id: 'cards',
  title: 'Cards',
  keywords: [`card`, `row`, `section`, `container`, `col`, `column`, `small`, `large`, `fluid`, `warning`, `error`],
  description: `<p><strong>mini.css</strong> provides you with cards (<code>.card</code>), general-purpose containers that help you organize the content of your web apps. Cards should be used in combination with the <a href="#grid">grid system</a>, meaning that they need to be placed inside a grid's rows to work properly. Layouts created with cards are responsive, realigning according to the available size on the screen.</p>`,
  example: `<div class="container" style="padding: 0.25rem"><div class="row">
      <div class="card"><div class="section"><h3 class="doc">Card 1</h3><p class="doc">This is a basic card with some sample content.</p></div></div>
      <div class="card"><div class="section"><h3 class="doc">Card 2</h3><p class="doc">This is another card with some sample content.</p></div></div>
      <div class="card"><div class="section"><h3 class="doc">Card 3</h3><p class="doc">This is one more card with some sample content.</p></div></div>
    </div></div>`,
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`],
  notes: [`Due to the fact that fluid cards stretch to fill their parent container, they might not fully respect their margins sometimes, although this should not cause any noticable problems in your web apps' layouts.`],
  customization: [
    `Text color for cards can be changed by changing the value of the <code>--card-fore-color</code> variable.`,
    `Background color for cards can be changed by changing the value of the <code>--card-back-color</code> variable.`,
    `Border color for cards can be changed by changing the value of the <code>--card-border-color</code> variable.`,
    `You can customize the colors of different color variants by changing the values of the related variables in their respective definitions.`,
    `Universal margin for elements can be changed globally by changing the value of the <code>--universal-margin</code> variable. As a rule of thumb, consider the universal margin to be the distance you want your paragraphs to have from the sides of the screen.`,
    `Universal border radius for elements can be changed globally by changing the value of the <code>--universal-border-radius</code> variable.`
  ],
  modifiers: [
    {
      title : 'Alternative sizes',
      description: `<p>You can create small (<code>.small</code>, <code>240px</code> wide) or large (<code>.large</code>, <code>480px</code> wide) cards by applying the appropriate modifiers to a card. Apart from that, you can also create fluid (<code>.fluid</code>) cards, that take up as much space as is available, however you will have to place these cards inside a grid layout's columns, effectively adding one extra step for them to display properly.</p>`,
      example: `<div class="container" style="padding: 0.25rem"><div class="row">
            <div class="card small"><div class="section"><h3 class="doc">Small Card</h3><p class="doc">Small cards are <code>240px</code> wide.</p></div></div>
            <div class="card large"><div class="section"><h3 class="doc">Large Card</h3><p class="doc">Large cards are <code>480px</code> wide.</p></div></div>
            <div class="col-sm-12 col-md-10 col-lg-8">
              <div class="card fluid" style="margin: 0.5rem 0.25rem;"><div class="section"><h3 class="doc">Fluid Card</h3><p class="doc">Fluid cards scale their width based on the column that contains them.</p></div></div>
            </div></div></div>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card small&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card large&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-12&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card fluid&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`]
    },
    {
      title : 'Color variants',
      description: `<p>You can display warning (<code>.warning</code>) or error (<code>.error</code>) messages using cards, simply by adding the appropriate color modifiers to a card.</p>`,
      example: `<div class="container" style="padding: 0.25rem"><div class="row">
        <div class="card warning"><div class="section"><h3 class="doc">Warning Card</h3><p class="doc">Warning cards are used to display important information to users.</p></div></div>
        <div class="card error"><div class="section"><h3 class="doc">Error Card</h3><p class="doc">Error cards are used to display error messages to users.</p></div></div>
      </div></div>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card warning&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card error&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`]
    }
  ],
  dos: [
    {
      description: `You can create rows inside a card, which can in turn contain other cards.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`
    }
  ],
  donts: [
    {
      description: `An element cannot be a card and a row or column at the same time.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card row&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card col-sm&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span></pre>`
    },
    {
      description: `Never forget to wrap your cards inside a row and your fluid cards inside a row and a column.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`
    },
    {
      description: `Try not to combine fixed-width and fluid cards. Instead, combine fixed-width cards with columns and place fluid cards inside them.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card fluid&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`
    },
    {
      description: `Avoid applying two color modifiers on the same card.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card warning error&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span></pre>`
    }
  ]
}

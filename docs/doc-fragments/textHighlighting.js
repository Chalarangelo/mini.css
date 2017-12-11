module.exports = {
  id: 'text-highlighting',
  title: 'Text highlighting',
  keywords: [`mark`, `highlight`, `text highlighting`, `tag`, `primary`, `secondary`, `tertiary`, `inline-block`],
  description: `<p>The native HTML5 mark element has been minimally styled to allow for easy text highlighting.</p>`,
  example: `<p class="doc">This is a paragraph with some <mark class="doc">highlighted text</mark>.</p>`,
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;p&gt;</span>This is some <span class="highlight-a">&lt;mark&gt;</span>highlighted text<span class="highlight-a">&lt;/mark&gt;</span>.<span class="highlight-a">&lt;/p&gt;</span></span></pre>`],
  notes: [
    `Highlighted text scales according to its parent element, so it can be used inside any kind of element (headings, forms, paragraphs etc.).`
  ],
  customization: [
    `Text color for highlighted text can be changed by changing the value of the <code>--mark-fore-color</code> variable.`,
    `Background color for highlighted text can be changed by changing the value of the <code>--mark-back-color</code> variable.`,
    `Universal padding for elements can be changed globally by changing the value of the <code>--universal-padding</code> variable.`,
    `Universal border radius for elements can be changed globally by changing the value of the <code>--universal-border-radius</code> variable.`
  ],
  modifiers: [
    {
      title : 'Color variants',
      description: '<p>You can change the color of highlighted text, based on context by applying the appropriate class (secondary - <code>.secondary</code> or tertiary - <code>.tertiary</code>).</p>',
      example: `<p class="doc">This is a <mark class="doc secondary">secondary highlight</mark> and this is a <mark class="doc tertiary">tertiary highlight</mark>.</p>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;p&gt;</span>This is a <span class="highlight-a">&lt;mark</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;secondary&quot;</span><span class="highlight-a">&gt;</span>secondary highlight<span class="highlight-a">&lt;/mark&gt;</span> and this is a <span class="highlight-a">&lt;mark</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;tertiary&quot;</span><span class="highlight-a">&gt;</span>tertiary highlight<span class="highlight-a">&lt;/mark&gt;</span>.<span class="highlight-a">&lt;/p&gt;</span></span></pre>`]
    },
    {
      title : 'Style variants',
      description: `<p>You can make highlights look like tags (<code>.tag</code>) or display as inline blocks (<code>.inline-block</code>), by applying the appropriate class.</p>`,
      example: `<p class="doc">This is a highlight styled as a <mark class="doc tag">tag</mark>.</p><p><mark class="doc inline-block">This is some highlighted text that is displayed as an inline block.</mark></p>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;p&gt;</span>This is a highlight styled as a <span class="highlight-a">&lt;mark</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;tag&quot;</span><span class="highlight-a">&gt;</span>tag<span class="highlight-a">&lt;/mark&gt;</span>.<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;p&gt;</span><span class="highlight-a">&lt;mark</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;inline-block&quot;</span><span class="highlight-a">&gt;</span>This is some highlighted text that is displayed as an inline block.<span class="highlight-a">&lt;/mark&gt;</span><span class="highlight-a">&lt;/p&gt;</span></span></pre>`]
    }
  ],
  dos: [{
    description: `You can nest a highlight inside another one, if the outer one is displayed as an inline-block.`,
    sample: `<pre><span class="code-line"><span class="highlight-a">&lt;mark</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;inline-block&quot;</span><span class="highlight-a">&gt;</span><span class="highlight-a">&lt;mark</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;secondary&quot;</span><span class="highlight-a">&gt;</span>Secondary highlight<span class="highlight-a">&lt;/mark&gt;</span> inside a inline block.<span class="highlight-a">&lt;/mark&gt;</span></span></pre>`
  }],
  donts: [
    {
      description: `Avoid applying multiple color modifiers on the same highlight.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;mark</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;primary inverse&quot;</span><span class="highlight-a">&gt;</span>Highlight<span class="highlight-a">&lt;/mark&gt;</span></span>
</pre>`
    }
  ]
}

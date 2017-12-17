module.exports = {
  id: 'tooltips',
  title: 'Tooltips',
  keywords: [`tooltip`, `aria-label`, `contextual`, `bottom`, `span`],
  description: `<p>You can utilize the <code>aria-label</code> property to create accessible tooltips (<code>.tooltip</code>), allowing you to display explanatory text for different elements.</p>`,
  example: `<p class="tooltip" aria-label="This is a tooltip">Hover over this text to see a tooltip!</p>`,
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;tooltip&quot;</span> <span class="highlight-b">aria-label</span>=<span class="highlight-c">&quot;Tooltip text&quot;</span><span class="highlight-a">&gt;</span>Hover over text to see tooltip<span class="highlight-a">&lt;/span&gt;</span></span></pre>`],
  notes: [
    `Tooltips depend on the <code>aria-label</code> property, so they are fully accessible on screen readers.`
  ],
  customization: [
    `Text color for tooltips can be changed by changing the value of the <code>--tooltip-fore-color</code> variable.`,
    `Background color for tooltips can be changed by changing the value of the <code>--tooltip-back-color</code> variable.`,
    `Universal margin for elements can be changed globally by changing the value of the <code>--universal-margin</code> variable. As a rule of thumb, consider the universal margin to be the distance you want your paragraphs to have from the sides of the screen.`,
    `Universal padding for elements can be changed globally by changing the value of the <code>--universal-padding</code> variable.`,
    `Universal border radius for elements can be changed globally by changing the value of the <code>--universal-border-radius</code> variable.`
  ],
  modifiers: [
    {
      title : 'Position variant',
      description: '<p>You can make tooltips display below the related text, by adding the appropriate class (<code>.bottom</code>).</p>',
      example: `<p class="tooltip bottom" aria-label="This is a bottom tooltip">Hover over this text to see a tooltip!</p>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;tooltip bottom&quot;</span> <span class="highlight-b">aria-label</span>=<span class="highlight-c">&quot;Tooltip text&quot;</span><span class="highlight-a">&gt;</span>Hover over text to see tooltip<span class="highlight-a">&lt;/span&gt;</span></span></pre>`]
    }
  ],
  dos: [],
  donts: []
}

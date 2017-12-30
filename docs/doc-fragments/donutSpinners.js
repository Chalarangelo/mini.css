module.exports = {
  id: 'donut-spinners',
  title: 'Donut spinners',
  keywords: [`spinner`, `donut`, `loading`, `progress`, `primary`, `secondary`, `tertiary`, `inline`, `animation`, `animated`],
  description: `<p><strong>mini.css</strong> provides you with animated loading indicators (<code>.spinner</code>), which you can use to indicate that some content is loading.</p>`,
  example: `<div class="spinner"></div>`,
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;spinner&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span></pre>`],
  notes: [`You can use either a <code>&lt;div&gt;</code> or a <code>&lt;span&gt;</code> element to create a donut spinner.`,
  `You can add the <code>role="progressbar"</code> attribute to spinner donut elements to increase accessibility.`,
  `You can inline donut spinners inside a paragraph or some other textual content.`],
  customization: [
    `Foreground color for donut spinners can be changed by changing the value of the <code>--spinner-fore-color</code> variable.`,
    `Background color for donut spinners can be changed by changing the value of the <code>--spinner-back-color</code> variable.`,
    `You can customize the colors of different color variants by changing the values of the related variables in their respective definitions.`,
    `Universal margin for elements can be changed globally by changing the value of the <code>--universal-margin</code> variable. As a rule of thumb, consider the universal margin to be the distance you want your paragraphs to have from the sides of the screen.`
  ],
  modifiers: [
    {
      title : 'Color variants',
      description: `<p>You can create primary, secondary or tertiary (<code>.primary</code>, <code>.secondary</code>, <code>.tertiary</code>) donut spinners, simply by adding the appropriate color modifier.</p>`,
      example: `<span class="spinner primary"></span><span class="spinner secondary"></span><span class="spinner tertiary"></span>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;spinner primary&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;spinner secondary&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;spinner tertiary&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span></pre>`]
    }
  ],
  dos: [],
  donts: [
    {
      description: `Avoid inserting text inside donut spinners.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;spinner&quot;</span><span class="highlight-a">&gt;</span>Don't place text here.<span class="highlight-a">&lt;/div&gt;</span></span></pre>`
    },
    {
      description: `Avoid applying two color modifiers on the same donut spinner.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;spinner primary secondary&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span></pre>`
    }
  ]
}

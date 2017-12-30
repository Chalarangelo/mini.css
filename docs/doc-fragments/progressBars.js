module.exports = {
  id: 'progress-bars',
  title: 'Progress bars',
  keywords: [`progress`, `bar`, `primary`, `secondary`, `tertiary`, `inline`],
  description: `<p>Progress bars are minimally styled to match with the rest of the framework's aesthetics and be consistent across all modern browsers.</p>`,
  example: `<progress value="450" max="1000"></progress>`,
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;progress</span> <span class="highlight-b">value</span>=<span class="highlight-c">&quot;450&quot;</span> <span class="highlight-b">max</span>=<span class="highlight-c">&quot;1000&quot;</span><span class="highlight-a">&gt;&lt;/progress&gt;</span></span></pre>`],
  notes: [`Progress bars are designed to work with a <code>max="1000"</code> attribute, as this covers the most common use-cases.`],
  customization: [
    `Foreground color for progress bars can be changed by changing the value of the <code>--progress-fore-color</code> variable.`,
    `Background color for progress bars can be changed by changing the value of the <code>--progress-back-color</code> variable.`,
    `You can customize the colors of different color variants by changing the values of the related variables in their respective definitions.`,
    `Universal margin for elements can be changed globally by changing the value of the <code>--universal-margin</code> variable. As a rule of thumb, consider the universal margin to be the distance you want your paragraphs to have from the sides of the screen.`,
    `Universal border radius for elements can be changed globally by changing the value of the <code>--universal-border-radius</code> variable.`
  ],
  modifiers: [
    {
      title : 'Inline progress bars',
      description: `<p>You can create inline progress bars (<code>.inline</code>), by applying the appropriate modifier.</p>`,
      example: `<p class="doc"><progress value="450" max="1000" class="inline"></progress> 45% completed...</p>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;progress</span> <span class="highlight-b">value</span>=<span class="highlight-c">&quot;450&quot;</span> <span class="highlight-b">max</span>=<span class="highlight-c">&quot;1000&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;inline&quot;</span><span class="highlight-a">&gt;&lt;/progress&gt;</span></span></pre>`]
    },
    {
      title : 'Color variants',
      description: `<p>You can create primary, secondary or tertiary (<code>.primary</code>, <code>.secondary</code>, <code>.tertiary</code>) progress bars, simply by adding the appropriate color modifier.</p>`,
      example: `<progress value="450" max="1000" class="primary"></progress><progress value="450" max="1000" class="secondary"></progress><progress value="450" max="1000" class="tertiary"></progress>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;progress</span> <span class="highlight-b">value</span>=<span class="highlight-c">&quot;450&quot;</span> <span class="highlight-b">max</span>=<span class="highlight-c">&quot;1000&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;primary&quot;</span><span class="highlight-a">&gt;&lt;/progress&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;progress</span> <span class="highlight-b">value</span>=<span class="highlight-c">&quot;450&quot;</span> <span class="highlight-b">max</span>=<span class="highlight-c">&quot;1000&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;secondary&quot;</span><span class="highlight-a">&gt;&lt;/progress&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;progress</span> <span class="highlight-b">value</span>=<span class="highlight-c">&quot;450&quot;</span> <span class="highlight-b">max</span>=<span class="highlight-c">&quot;1000&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;tertiary&quot;</span><span class="highlight-a">&gt;&lt;/progress&gt;</span></span></pre>`]
    }
  ],
  dos: [],
  donts: [
    {
      description: `Avoid using different values than <code>1000</code> for progress bars' <code>max</code> attribute, as well as floating point values for either <code>max</code> or <code>value</code>.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;progress</span> <span class="highlight-b">value</span>=<span class="highlight-c">&quot;45&quot;</span> <span class="highlight-b">max</span>=<span class="highlight-c">&quot;100&quot;</span><span class="highlight-a">&gt;&lt;/progress&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;progress</span> <span class="highlight-b">value</span>=<span class="highlight-c">&quot;450.0&quot;</span> <span class="highlight-b">max</span>=<span class="highlight-c">&quot;1000.0&quot;</span><span class="highlight-a">&gt;&lt;/progress&gt;</span></span></pre>`
    },
    {
      description: `Avoid applying two color modifiers on the same progress bar.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;progress</span> <span class="highlight-b">value</span>=<span class="highlight-c">&quot;450&quot;</span> <span class="highlight-b">max</span>=<span class="highlight-c">&quot;1000&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;primary secondary&quot;</span><span class="highlight-a">&gt;&lt;/progress&gt;</span></span></pre>`
    }
  ]
}

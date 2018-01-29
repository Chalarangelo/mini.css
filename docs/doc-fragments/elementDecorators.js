module.exports = {
  id: 'element-decorators',
  title: 'Element decorators',
  keywords: ['border','border-radius', 'bordered', 'rounded', 'circular', 'shadowed', 'utility'],
  description: '<p>You can apply generic borders, shadows or border radiuses to any element, by using the appropriate class (<code>.bordered</code>, <code>.shadowed</code>, <code>.rounded</code> or <code>.circular</code>).</p>',
  example: '<button class="bordered doc">Bordered button</button><button class="primary bordered doc">Bordered button</button><button class="shadowed doc">Shadowed button</button><br/><p><img src="https://placehold.it/200x200?text=rounded" alt="placeholder" class="rounded">&nbsp;&nbsp;<img src="https://placehold.it/200x200?text=circular" alt="placeholder" class="circular"></p>',
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;bordered&quot;</span><span class="highlight-a">&gt;</span>Bordered element.<span class="highlight-a">&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;shadowed&quot;</span><span class="highlight-a">&gt;</span>Shadowed element.<span class="highlight-a">&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;rounded&quot;</span><span class="highlight-a">&gt;</span>Rounded element.<span class="highlight-a">&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;circular&quot;</span><span class="highlight-a">&gt;</span>Circular element.<span class="highlight-a">&lt;/span&gt;</span></span></pre>`],
  notes: [
    'Element decorators use <code>!important</code> declarations to override any other styles, so exercise caution when using them.',
    'Element decorators can be used with pretty much every element or component that is available.'
  ],
  customization: [
    `Boder color for the generic border decorator can be changed by changing the value of the <code>--generic-border-color</code> variable.`,
    `Box shadow style for the generic shadow can be changed by changing the value of the <code>--generic-box-shadow</code> variable.`
  ],
  modifiers: [],
  dos: [],
  donts: [
    {
      description: `Avoid applying the <code>.rounded</code> and <code>.circular</code> decorators on the same element.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;rounded circular&quot;</span><span class="highlight-a">&gt;</span>Do not do this.<span class="highlight-a">&lt;/span&gt;</span></span></pre>`
    }
  ]
}

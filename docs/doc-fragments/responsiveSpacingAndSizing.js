module.exports = {
  id: 'responsive-spacing-sizing',
  title: 'Responsive spacing &amp; sizing',
  keywords: ['responsiveness', 'margin', 'padding', 'responsive-margin', 'responsive-margin'],
  description: '<p>You can make elements\' spacing or sizing responsive by applying the appropriate class (<code>.responsive-margin</code> or <code>.responsive-padding</code>).</p>',
  example: '',
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;responsive-margin&quot;</span><span class="highlight-a">&gt;</span>Responsive margin.<span class="highlight-a">&lt;/span&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;responsive-padding&quot;</span><span class="highlight-a">&gt;</span>Responsive padding.<span class="highlight-a">&lt;/span&gt;</span></span></pre>`],
  notes: [
    'Responsive spacing and sizing modifiers use <code>!important</code> declarations to override any other styles, so exercise caution when using them.',
    'Responsive spacing and sizing modifiers are independent, meaning that hiding or visually hiding an element in one screen size will not affect its visibility in any other screen size.'
  ],
  customization: [
  `Universal margin for elements can be changed globally by changing the value of the <code>--universal-margin</code> variable, affecting the responsive spacing modifier. As a rule of thumb, consider the universal margin to be the distance you want your paragraphs to have from the sides of the screen.`,
  `Universal padding for elements can be changed globally by changing the value of the <code>--universal-padding</code> variable, affecting the responsive sizing modifier.`
],
  modifiers: [],
  dos: [],
  donts: []
}

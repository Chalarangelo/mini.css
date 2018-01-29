module.exports = {
  id: 'visibility-helpers',
  title: 'Visibility helpers',
  keywords: ['hidden', 'visibility', 'visually-hidden', 'accessibility', 'utility'],
  description: '<p>You can use visibility helper classes to hide elements for all users (<code>.hidden</code>) or for users not on screen readers (<code>.visually-hidden</code>). There are also responsive visibility helpers provided, for hiding or visually hiding content only for specific screen sizes (<code>.hidden-sm</code>, <code>.hidden-md</code>, <code>.hidden-lg</code> and <code>.visually-hidden-sm</code>, <code>.visually-hidden-md</code> and <code>.visually-hidden-lg</code> respectively).</p>',
  example: '',
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;p</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;hidden&quot;</span><span class="highlight-a">&gt;</span>Not visible for any users.<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;p</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;visually-hidden&quot;</span><span class="highlight-a">&gt;</span>Visible only for screen readers.<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;p</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;hidden-sm&quot;</span><span class="highlight-a">&gt;</span>Not visible for users on screens under 768px wide.<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;p</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;hidden-md&quot;</span><span class="highlight-a">&gt;</span>Not visible for users on screens 768px-1280px wide.<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;p</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;hidden-lg&quot;</span><span class="highlight-a">&gt;</span>Not visible for users on screens wider than 1280px.<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;p</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;visually-hidden-sm&quot;</span><span class="highlight-a">&gt;</span>Visible only for screen readers under 768px wide.<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;p</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;visually-hidden-md&quot;</span><span class="highlight-a">&gt;</span>Visible only for screen readers 768px-1280px wide.<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;p</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;visually-hidden-lg&quot;</span><span class="highlight-a">&gt;</span>Visible only for screen readers wider than 1280px.<span class="highlight-a">&lt;/p&gt;</span></span></pre>`],
  notes: [
    'Visibility helpers use <code>!important</code> declarations to override any other styles, so exercise caution when using them.',
    'The specific breakpoints for small, medium and large screen sizes are as follows:<ul><li>small: less than <code>768px</code> wide</li><li>medium: more than or equal to <code>768px</code> wide and less than <code>1280px</code> wide</li><li>large: <code>1280px</code> wide or more</li></ul>',
    'Responsive visibility helper classes are independent, meaning that hiding or visually hiding an element in one screen size will not affect its visibility in any other screen size.'
  ],
  customization: [],
  modifiers: [],
  dos: [
    {
      description: `You can apply multiple responsive visibility helpers on the same element.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;p</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;hidden-sm hidden-md&quot;</span><span class="highlight-a">&gt;</span>Not visible for users on screens under 1280px wide.<span class="highlight-a">&lt;/p&gt;</span></span></pre>`
    }
  ],
  donts: [
    {
      description: `Avoid combining <code>.hidden</code> and <code>.visually-hidden</code> or responsive helpers for the same screen size.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;p</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;hidden visually-hidden&quot;</span><span class="highlight-a">&gt;</span>Do not do this.<span class="highlight-a">&lt;/p&gt;</span></span></pre>`
    }
  ]
}

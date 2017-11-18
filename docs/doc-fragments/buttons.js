module.exports = {
  id: 'buttons',
  title: 'Buttons',
  keywords: [`button`, `input`, `reset`, `submit`, `link`, `a`, `label`, `primary`, `secondary`, `tertiary`, `aria`, `small`, `large`, `inverse`],
  description: `<p>Buttons and button-like input elements have been styled by default to be consistent across browsers. You can also style other elements, such as links or form labels, to look like buttons, using the appropriate class (<code>.button</code>) or the <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role" target="_blank">button</a> role.</p>`,
  example: `<button class="doc">Button</button><a href="#" class="button doc">Link</a><label class="button doc">Label</label><button disabled class="doc">Disabled</button>`,
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;button&gt;</span>Button<span class="highlight-a">&lt;/button&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;button&quot;</span> <span class="highlight-b">value</span>=<span class="highlight-c">&quot;Button&quot;</span><span class="highlight-a"> /&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;reset&quot;</span> <span class="highlight-b">value</span>=<span class="highlight-c">&quot;Button&quot;</span><span class="highlight-a"> /&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;submit&quot;</span> <span class="highlight-b">value</span>=<span class="highlight-c">&quot;Button&quot;</span><span class="highlight-a"> /&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;a</span> <span class="highlight-b">href</span>=<span class="highlight-c">&quot;#&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;button&quot;</span><span class="highlight-a">&gt;</span>Link<span class="highlight-a">&lt;/a&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;a</span> <span class="highlight-b">href</span>=<span class="highlight-c">&quot;#&quot;</span> <span class="highlight-b">role</span>=<span class="highlight-c">&quot;button&quot;</span><span class="highlight-a">&gt;</span>Link<span class="highlight-a">&lt;/a&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;label</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;button&quot;</span><span class="highlight-a">&gt;</span>Label<span class="highlight-a">&lt;/label&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;label</span> <span class="highlight-b">role</span>=<span class="highlight-c">&quot;button&quot;</span><span class="highlight-a">&gt;</span>Label<span class="highlight-a">&lt;/label&gt;</span></span></pre>`],
  notes: [
    `It is recommended to use the button role instead of the provided class, if you want your custom buttons to be fully accessible.`
  ],
  customization: [
    `Text color for buttons can be changed by changing the value of the <code>--button-fore-color</code> variable.`,
    `Background color for buttons can be changed by changing the value of the <code>--button-back-color</code> variable.`,
    `Border color for buttons can be changed by changing the value of the <code>--button-border-color</code> variable.`,
    `Background and border color for focused buttons can be changed by changing the values of the <code>--button-hover-back-color</code> and <code>--button-hover-border-color</code> variables respectively.`,
    `You can customize the colors of different color variants by changing the values of the related variables in their respective definitions.`,
    `Universal margin for elements can be changed globally by changing the value of the <code>--universal-margin</code> variable. As a rule of thumb, consider the universal margin to be the distance you want your paragraphs to have from the sides of the screen.`,
    `Universal padding for elements can be changed globally by changing the value of the <code>--universal-padding</code> variable.`,
    `Universal border radius for elements can be changed globally by changing the value of the <code>--universal-border-radius</code> variable.`
  ],
  modifiers: [
    {
      title : 'Color variants',
      description: '<p>To make your buttons stand out, you can give them a primary (<code>.primary</code>), secondary (<code>.secondary</code>), tertiary (<code>.tertiary</code>) or inversed (<code>.inverse</code>) color palette.</p>',
      example: `<button class="primary doc">Primary</button><button class="secondary doc">Secondary</button><button class="tertiary doc">Tertiary</button><button class="inverse doc">Inverse</button>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;button</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;primary&quot;</span><span class="highlight-a">&gt;</span>Primary<span class="highlight-a">&lt;/button&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;button</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;secondary&quot;</span><span class="highlight-a">&gt;</span>Secondary<span class="highlight-a">&lt;/button&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;button</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;tertiary&quot;</span><span class="highlight-a">&gt;</span>Tertiary<span class="highlight-a">&lt;/button&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;button</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;inverse&quot;</span><span class="highlight-a">&gt;</span>Inverse<span class="highlight-a">&lt;/button&gt;</span></span></pre>`]
    },
    {
      title : 'Size variants',
      description: `<p>You can make buttons smaller (<code>.small</code>) or larger (<code>.large</code>), by applying the appropriate modifier.</p>`,
      example: `<button class="small doc">Small</button><button class="large doc">Large</button>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;button</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;small&quot;</span><span class="highlight-a">&gt;</span>Small<span class="highlight-a">&lt;/button&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;button</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;large&quot;</span><span class="highlight-a">&gt;</span>Large<span class="highlight-a">&lt;/button&gt;</span></span></pre>`]
    }
  ],
  dos: [{
    description: `File upload inputs are not styled by default, due to inconsistencies in how browsers handle them. If you want them to look like other buttons, you can hide them and use a linked label.`,
    sample: `<pre><span class="code-line"><span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;file&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;file-input&quot;</span> <span class="highlight-b">style</span>=<span class="highlight-c">&quot;display:none&quot;</span><span class="highlight-a"> /&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;file-input&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;button&quot;</span><span class="highlight-a">&gt;</span>Upload file<span class="highlight-a">&lt;/label&gt;</span></span></pre>`
  }],
  donts: [
    {
      description: `Avoid applying multiple modifiers of the same type on the same button.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;button</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;primary inverse&quot;</span><span class="highlight-a">&gt;</span>Button<span class="highlight-a">&lt;/button&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;button</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;small large&quot;</span><span class="highlight-a">&gt;</span>Button<span class="highlight-a">&lt;/button&gt;</span></span></pre>`
    }
  ]
}

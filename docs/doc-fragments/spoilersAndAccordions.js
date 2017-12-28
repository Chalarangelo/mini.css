module.exports = {
  id: 'spoilers-and-accordions',
  title: 'Spoilers &amp; accordions',
  keywords: [`spoiler`, `collapse`, `accordion`, `contextual`, `vertical tabs`],
  description: `<p><strong>mini.css</strong> provides you with accessible spoilers and accordions. They are composed of two components - the wrapper, the toggle button and the content container:</p>
  <ul><li>To create a collapsible spoiler, simply create a <code>&lt;div&gt;</code>, applying the appropriate class to it (<code>.collapse</code>). This serves as the wrapper for the collapsible spoiler.</li>
  <li>Inside the wrapper, create a checkbox or radio input, immediately followed by a <code>&lt;label&gt;</code> for the checkbox. The former serves as your collapsible spoiler's control, while the latter is the toggle button for your collapsible spoiler.</li>
  <li>Create a <code>&lt;div&gt;</code> right after the <code>&lt;label&gt;</code>. This will serve as the container for the collapsible content.</li>
  </ul>
  <p>If you want to create an accordion, simply repeat the last two steps above for each section of the accordion. In order to make collapsible spoilers and accordions fully accessible, it is highly recommended to add the <code>aria-hidden=&quot;true&quot;</code> attribute to all labels and inputs that control the behavior of these components.</p>`,
  example: `<div class="collapse"><input type="checkbox" id="collapse-example1" checked aria-hidden="true"><label for="collapse-example1" aria-hidden="true">Collapse section 1</label><div><p>This is the first section of the collapse</p></div><input type="checkbox" id="collapse-example2" aria-hidden="true"><label for="collapse-example2" aria-hidden="true">Collapse section 2</label><div><p>This is the second section of the collapse</p></div></div><br/>
  <div class="collapse"><input type="radio" name="accordion" id="accordion-example1" checked aria-hidden="true"><label for="accordion-example1" aria-hidden="true">Accordion section 1</label><div><p>This is the first section of the accordion</p></div><input type="radio" name="accordion" id="accordion-example2" aria-hidden="true"><label for="accordion-example2" aria-hidden="true">Accordion section 2</label><div><p>This is the second section of the accordion</p></div></div>`,
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;collapse&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;checkbox&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;collapse-section1&quot;</span> <span class="highlight-b">checked</span> <span class="highlight-b">aria-hidden</span>=<span class="highlight-c">&quot;true&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;collapse-section1&quot;</span> <span class="highlight-b">aria-hidden</span>=<span class="highlight-c">&quot;true&quot;</span><span class="highlight-a">&gt;</span>Collapse section 1<span class="highlight-a">&lt;/label&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;p&gt;</span>This is the first section of the collapse<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;checkbox&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;collapse-section2&quot;</span> <span class="highlight-b">aria-hidden</span>=<span class="highlight-c">&quot;true&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;collapse-section2&quot;</span> <span class="highlight-b">aria-hidden</span>=<span class="highlight-c">&quot;true&quot;</span><span class="highlight-a">&gt;</span>Collapse section 2<span class="highlight-a">&lt;/label&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;p&gt;</span>This is the second section of the collapse<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`,
  `<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;collapse&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;radio&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;accordion-section1&quot;</span> <span class="highlight-b">checked</span> <span class="highlight-b">aria-hidden</span>=<span class="highlight-c">&quot;true&quot;</span> <span class="highlight-b">name</span>=<span class="highlight-c">&quot;accordion&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;accordion-section1&quot;</span> <span class="highlight-b">aria-hidden</span>=<span class="highlight-c">&quot;true&quot;</span><span class="highlight-a">&gt;</span>Accordion section 1<span class="highlight-a">&lt;/label&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;p&gt;</span>This is the first section of the accordion<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;radio&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;accordion-section2&quot;</span> <span class="highlight-b">aria-hidden</span>=<span class="highlight-c">&quot;true&quot;</span> <span class="highlight-b">name</span>=<span class="highlight-c">&quot;accordion&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;accordion-section2&quot;</span> <span class="highlight-b">aria-hidden</span>=<span class="highlight-c">&quot;true&quot;</span><span class="highlight-a">&gt;</span>Accordion section 2<span class="highlight-a">&lt;/label&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;p&gt;</span>This is the second section of the accordion<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`],
  notes: [
    `Make sure all the radio buttons in the same accordion have the same <code>name</code>.`,
    `If you want a collapsible spoiler or an accordion section to be expanded by default, you can add the <code>checked</code> attribute to the respective collapsible spooiler's or section's control.`,
    `The <code>max-height</code> of the content container is <code>400px</code>.`,
    `Using the <code>aria-hidden=&quot;true&quot;</code> attribute is highly recommended, as screen readers will ignore the controls of the collapsible spoiler or accordion and read all the contained content normally.`
  ],
  customization: [
    `Background color, text color and background color on hover for the collapsible spoiler's labels can be changed by changing the values of <code>--collapse-label-back-color</code>, <code>--collapse-label-fore-color</code> and <code>--collapse-label-hover-back-color</code> respectively.`,
    `Border color for the collapsible spoiler can be changed by changing the value of the <code>--collapse-border-color</code>.`,
    `Background color for the collapsible spoiler's content can be changed by changing the value of the <code>--collapse-content-back-color</code>.`,
    `Background color and border for the spoiler's content selected labels can be changed by changing the values of the <code>--collapse-selected-label-back-color</code> and <code>--collapse-selected-label-border-color</code> respectively.`,
    `Universal margin for elements can be changed globally by changing the value of the <code>--universal-margin</code> variable. As a rule of thumb, consider the universal margin to be the distance you want your paragraphs to have from the sides of the screen.`,
    `Universal padding for elements can be changed globally by changing the value of the <code>--universal-padding</code> variable.`,
    `Universal border radius for elements can be changed globally by changing the value of the <code>--universal-border-radius</code> variable.`
  ],
  modifiers: [],
  dos: [],
  donts: [
    {
      description: `You should not place anything between the checkbox controlling the collapsible spoiler and its label or between the label and the content container.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;collapse&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;checkbox&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;collapse-section1&quot;</span> <span class="highlight-b">checked</span> <span class="highlight-b">aria-hidden</span>=<span class="highlight-c">&quot;true&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-c">&lt;!-- Do not place other stuff between these --&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;collapse-section1&quot;</span> <span class="highlight-b">aria-hidden</span>=<span class="highlight-c">&quot;true&quot;</span><span class="highlight-a">&gt;</span>Collapse section 1<span class="highlight-a">&lt;/label&gt;</span></span>
<span class="code-line">  <span class="highlight-c">&lt;!-- Do not place other stuff between these --&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;p&gt;</span>This is the first section of the collapse<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`
    }
  ]
}

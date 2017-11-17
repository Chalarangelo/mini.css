module.exports = {
  id: 'code-and-quotations',
  title: 'Code &amp; quotations',
  keywords: [`code`, `pre`, `kbd`, `blockquote`, `quotation`],
  description: '<p>Code blocks and quotation elements are styled using custom rules that help make them stand out from the rest of the text, while inline code and keyboard input tags are minimally styled, aiming not to break the flow of regular text.</p>',
  example: `<p class="doc">This is some text with some inline <code class="doc">source code</code> and some keyboard <kbd class="doc">input</kbd>.</p>
  <pre class="doc">function sum(num1, num2){
  return num1 + num2;
}</pre>
<blockquote cite="www.quotation.source" class="doc">This is some text quoted from elsewhere.</blockquote>`,
  samples: [
`<pre><span class="code-line"><span class="highlight-a">&lt;p&gt;</span>This is some text with some inline <span class="highlight-a">&lt;code&gt;</span>source code<span class="highlight-a">&lt;/code&gt;</span> and some keyboard <span class="highlight-a">&lt;kbd&gt;</span>input<span class="highlight-a">&lt;/kbd&gt;</span>.<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;pre&gt;</span>function sum(num1, num2){</span>
<span class="code-line">  return num1 + num2;</span>
<span class="code-line">}<span class="highlight-a">&lt;/pre&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;blockquote</span> <span class="highlight-b">cite</span>=<span class="highlight-c">&quot;www.quotation.source&quot;</span><span class="highlight-a">&gt;</span>This is some text quoted from elsewhere.<span class="highlight-a">&lt;/blockquote&gt;</span></span></pre>`
  ],
  notes: [
`The <code>cite</code> attribute of <code>&lt;blockquote&gt;</code> elements is not mandatory and can be omitted. The element's sizing will be automatically adjusted according to the presence of the <code>cite</code> attribute.`
  ],
  customization: [
    `Text color can be changed globally by changing the value of the <code>--fore-color</code> variable. This will affect the text color of <code>&lt;code&gt</code> and <code>&lt;pre&gt</code> elements and background color of <code>&lt;kbd&gt;</code> elements.`,
    `Background color can be changed globally by changing the value of the <code>--back-color</code> variable. This will affect the background color of <code>&lt;blockquote&gt</code> elements and text color of <code>&lt;kbd&gt</code>.`,
    `You can change the background color of <code>&lt;code&gt</code> and <code>&lt;pre&gt</code> elements by changing the value of the <code>--secondary-back-color</code> variable.`,
    `You can change the text color of <code>&lt;blockquote&gt;</code> elements by changing the value of the <code>--secondary-fore-color</code> variable.`,
    `You can change the border color of <code>&lt;pre&gt;</code> and <code>&lt;blockquote&gt;</code> elements by changing the value of the <code>--secondary-border-color</code> variable.`,
    `You can change the border color of the left border of <code>&lt;pre&gt;</code> elements by changing the value of the <code>--pre-color</code> variable.`,
    `You can change the border color of the left border of <code>&lt;blockquote&gt;</code> elements by changing the value of the <code>--blockquote-color</code> variable.`,
    `Universal margin for elements can be changed globally by changing the value of the <code>--universal-margin</code> variable. As a rule of thumb, consider the universal margin to be the distance you want your paragraphs to have from the sides of the screen.`,
    `Universal padding for elements can be changed globally by changing the value of the <code>--universal-padding</code> variable.`,
    `Universal border radius for elements can be changed globally by changing the value of the <code>--universal-border-radius</code> variable.`
  ],
  modifiers: [],
  dos: [],
  donts: []
}

/*
  Modifiers:
  {
    title : '',
    description: '',
    example: '',
    samples: []
  }
  Dos/Donts:
  {
    description: '',
    sample: ''
  }
*/

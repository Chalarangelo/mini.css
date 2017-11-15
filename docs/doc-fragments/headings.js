module.exports = {
  id: 'heading',
  title: 'Headings',
  keywords: [`heading`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `small`, `title`, `subtitle`, `subheading`],
  description: `<p>All of the HTML5 heading elements are styled, using a customizable ratio and simple rules, providing a clean base for your web app's titles. Apart from the headings themselves, customized rules are provided for displaying subheadings or explanatory text below your web app's headings.</p>`,
  example: `<div class="row"><div class="col-sm-12 col-md-6 col-md-first"><h1 class="doc">Heading 1<small class="doc">Subheading</small></h1></div>
  <div class="col-sm-12 col-md-6"><h2 class="doc">Heading 2<small class="doc">Subheading</small></h2></div>
  <div class="col-sm-12 col-md-6 col-md-last"><h3 class="doc">Heading 3<small class="doc">Subheading</small></h3></div>
  <div class="col-sm-12 col-md-6 col-md-first"><h4 class="doc">Heading 4<small class="doc">Subheading</small></h4></div>
  <div class="col-sm-12 col-md-6"><h5 class="doc">Heading 5<small class="doc">Subheading</small></h5></div>
  <div class="col-sm-12 col-md-6 col-md-last"><h6 class="doc">Heading 6<small class="doc">Subheading</small></h6></div></div>`,
  samples: [
`<pre><span class="code-line"><span class="highlight-a">&lt;h1&gt;</span>Heading 1 <span class="highlight-a">&lt;small&gt;</span>Subheading<span class="highlight-a">&lt;/small&gt;&lt;/h1&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;h2&gt;</span>Heading 2 <span class="highlight-a">&lt;small&gt;</span>Subheading<span class="highlight-a">&lt;/small&gt;&lt;/h2&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;h3&gt;</span>Heading 3 <span class="highlight-a">&lt;small&gt;</span>Subheading<span class="highlight-a">&lt;/small&gt;&lt;/h3&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;h4&gt;</span>Heading 4 <span class="highlight-a">&lt;small&gt;</span>Subheading<span class="highlight-a">&lt;/small&gt;&lt;/h4&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;h5&gt;</span>Heading 5 <span class="highlight-a">&lt;small&gt;</span>Subheading<span class="highlight-a">&lt;/small&gt;&lt;/h5&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;h6&gt;</span>Heading 6 <span class="highlight-a">&lt;small&gt;</span>Subheading<span class="highlight-a">&lt;/small&gt;&lt;/h6&gt;</span></span></pre>
`
  ],
  notes: [],
  customization: [
    `Text color can be changed globally by changing the value of the <code>--fore-color</code> variable. This will affect the color of the headings' main text.`,
    `Secondary text color can be changed globally by changing the value of the <code>--secondary-fore-color</code> variable. This will affect the color of subheadings.`,
    `Universal margin for elements can be changed globally by changing the value of the <code>--universal-margin</code> variable. As a rule of thumb, consider the universal margin to be the distance you want your paragraphs to have from the sides of the screen.`,
    `You can change the ratio of headings' size by chaning the value of the <code>--heading-ratio</code> variable. Bear in mind that the value of this variable must be unitless to work properly.`
  ],
  modifiers: [],
  dos: [],
  donts: []
}

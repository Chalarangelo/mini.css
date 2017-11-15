module.exports = {
  id: 'lists',
  title: 'Lists',
  keywords: [`list`, `ul`, `ol`, `li`],
  description: `<p>List elements, both unordered and ordered, are minimally styled to match with the rest of the framework's aesthetics. Their margins and padding are reset to properly align with the rest of the common HTML5 elements, providing a stable foundation for all of your web app's lists.</p>`,
  example: `<ul class="doc"><li class="doc">Apple</li><li class="doc">Orange</li><li class="doc">Strawberry</li></ul><br/>
  <ol class="doc"><li class="doc">Wake up</li><li class="doc">Eat breakfast</li><li class="doc">Go to work</li></ol>`,
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;ul&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;li&gt;</span>Apple<span class="highlight-a">&lt;/li&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;li&gt;</span>Orange<span class="highlight-a">&lt;/li&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;li&gt;</span>Strawberry<span class="highlight-a">&lt;/li&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/ul&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;ol&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;li&gt;</span>Wake up<span class="highlight-a">&lt;/li&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;li&gt;</span>Eat breakfast<span class="highlight-a">&lt;/li&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;li&gt;</span>Go to work<span class="highlight-a">&lt;/li&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/ol&gt;</span></span></pre>`],
  notes: [],
  customization: [
    `Text color can be changed globally by changing the value of the <code>--fore-color</code> variable.`,
    `Background color can be changed globally by changing the value of the <code>--back-color</code> variable.`,
    `Universal margin for elements can be changed globally by changing the value of the <code>--universal-margin</code> variable. As a rule of thumb, consider the universal margin to be the distance you want your paragraphs to have from the sides of the screen.`,
    `Universal padding for elements can be changed globally by changing the value of the <code>--universal-padding</code> variable.`
  ],
  modifiers: [],
  dos: [],
  donts: []
}

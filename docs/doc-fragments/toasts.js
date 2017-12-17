module.exports = {
  id: 'toasts',
  title: 'Toasts',
  keywords: [`span`, `toast`, `mobile`, `contextual`, `message`],
  description: `<p><strong>mini.css</strong> provides you with toast messages (<code>.toast</code>), allowing you to display native-looking notifications on mobile devices.</p>`,
  example: `<div class="container" style="height: 8rem; position: relative;"><span class="toast doc" style="position: absolute;">This is a toast message!</span></div>`,
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;toast&quot;</span><span class="highlight-a">&gt;</span>This is a toast message!<span class="highlight-a">&lt;/span&gt;</span></span></pre>`],
  notes: [
    `Toast elements do not have any pre-defined behavior, but you can use Javascript to add functionality to them.`
  ],
  customization: [
    `Text color for toast messages can be changed by changing the value of the <code>--toast-fore-color</code> variable.`,
    `Background color for toast messages can be changed by changing the value of the <code>--toast-back-color</code> variable.`,
    `Universal margin for elements can be changed globally by changing the value of the <code>--universal-margin</code> variable. As a rule of thumb, consider the universal margin to be the distance you want your paragraphs to have from the sides of the screen.`,
    `Universal padding for elements can be changed globally by changing the value of the <code>--universal-padding</code> variable.`,
    `Universal border radius for elements can be changed globally by changing the value of the <code>--universal-border-radius</code> variable.`
  ],
  modifiers: [],
  dos: [],
  donts: []
}

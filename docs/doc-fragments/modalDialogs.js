module.exports = {
  id: 'modal-dialogs',
  title: 'Modal dialogs',
  keywords: [`modal`, `dialog`, `contextual`, `alert`, `notification`],
  description: `<p><strong>mini.css</strong> provides you with a modal dialog component to display messages to users. It is composed of three components - the modal dialog, the toggle button and the close button:</p>
  <ul><li>To create a modal dialog, simply create a checkbox input, applying the appropriate class to it (<code>.modal</code>), immediately followed by a <code>&lt;div&gt;</code> container. The former serves as your modal dialog's control, while the latter is the actual modal dialog container.</li>
  <li>Create a label anywhere outside your modal dialog's container for the checkbox controlling your modal dialog. This will serve as the toggle button for your modal dialog.</li>
  <li>Finally, inside your modal dialog's container, add another label for the checkbox controlling your modal dialog, applying the appropriate class (.modal-close). This will serve as the close button for your modal dialog.</li>
  </ul>`,
  example: `<input type="checkbox" class="modal" id="modal-example"><div class="modal doc"><div class="card doc"><label for="modal-example" class="modal-close doc"></label><h3 class="section double-padded doc">Modal</h3><p class="section double-padded doc">This is a modal dialog!</p></div></div><label for="modal-example" class="button doc">Show modal dialog</label>`,
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;modal-control&quot;</span><span class="highlight-a">&gt;</span>Show modal<span class="highlight-a">&lt;/label&gt;</span></span>
<span class="code-line"></span>
<span class="code-line"><span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;checkbox&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;modal-control&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;modal&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;modal-control&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;modal-close&quot;</span> <span class="highlight-a">&gt;</span><span class="highlight-a">&lt;/label&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;h3</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;section&quot;</span><span class="highlight-a">&gt;</span>Modal<span class="highlight-a">&lt;/h3&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;p</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;section&quot;</span><span class="highlight-a">&gt;</span>This is a modal dialog!<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`],
  notes: [
    `Modal dialogs should be used in combination with the <a href="#card">card</a> component for best results.`,
    `Remember to apply the appropriate classes to any and all elements, as indicated in the examples. Failing to do so will result in the modal dialog not rendering or behaving properly.`,
    `You can omit the toggle for the modal dialog and use Javascript to show/hide it, instead. You can also use any correctly linked label inside the modal dialog to change its state.`
  ],
  customization: [
    `Background color for the modal dialog overlay can be changed by changing the value of <code>--modal-overlay-color</code>.`,
    `Text color for the modal dialog close button can be changed by changing the value of the <code>--modal-close-color</code>.`,
    `Background color for the modal dialog close button when focused or hovered over can be changed by changing the value of the <code>--modal-close-hover-color</code>.`,
    `Universal margin for elements can be changed globally by changing the value of the <code>--universal-margin</code> variable. As a rule of thumb, consider the universal margin to be the distance you want your paragraphs to have from the sides of the screen.`,
    `Universal padding for elements can be changed globally by changing the value of the <code>--universal-padding</code> variable.`,
    `Universal border radius for elements can be changed globally by changing the value of the <code>--universal-border-radius</code> variable.`
  ],
  modifiers: [],
  dos: [
    {
      description: `You can use the <code>role=&quot;dialog&quot;</code> to add accessibility to your modal dialogs. Remember to properly label it and manage keyboard focus, as required.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;checkbox&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;modal-control&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;modal&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">role</span>=<span class="highlight-c">&quot;dialog&quot;</span> <span class="highlight-b">aria-labelledby</span>=<span class="highlight-c">&quot;dialog-title&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;modal-control&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;modal-close&quot;</span> <span class="highlight-a">&gt;</span><span class="highlight-a">&lt;/label&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;h3</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;section&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;dialog-title&quot;</span><span class="highlight-a">&gt;</span>Modal<span class="highlight-a">&lt;/h3&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;p</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;section&quot;</span><span class="highlight-a">&gt;</span>This is a modal dialog!<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`
    }
  ],
  donts: [
    {
      description: `You should not place anything between the checkbox controlling the modal dialog and the container.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;checkbox&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;modal-control&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;modal&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line"><span class="highlight-c">&lt;!-- Do not place other stuff between these --&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;card&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;modal-control&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;modal-close&quot;</span> <span class="highlight-a">&gt;</span><span class="highlight-a">&lt;/label&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;h3</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;section&quot;</span><span class="highlight-a">&gt;</span>Modal<span class="highlight-a">&lt;/h3&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;p</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;section&quot;</span><span class="highlight-a">&gt;</span>This is a modal dialog!<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`
    }
  ]
}

module.exports = {
  id: 'drawer',
  title: 'Menu drawer',
  keywords: [`drawer`, `checkbox`, `toggle`, `close`, `drawer-toggle`, `drawer-close`, `menu`, `navigation`, `hamburger`],
  description: `<p>The drawer component of <strong>mini.css</strong> is used to create responsive navigation menus for your web apps. It is composed of three components - the drawer, the toggle button and the close button:</p>
  <ul><li>To create a drawer, simply create a checkbox input, applying the appropriate class to it (<code>.drawer</code>), immediately followed by a container of your liking (e.g. a <code>&lt;div&gt;</code> or <code>&lt;nav&gt;</code>). The former serves as your drawer's control, while the latter is the actual drawer container.</li>
  <li>Create a label anywhere outside your drawer's container for the checkbox controlling your drawer, applying the appropriate class (<code>.drawer-toggle</code>). This will serve as the toggle button for your drawer menu.</li>
  <li>Finally, inside your drawer's container, add another label for the checkbox controlling your drawer, applying the appropriate class (<code>.drawer-close</code>). This will serve as the close button for your drawer menu.</li>
  </ul>`,
  example: `<div style="height: 8rem; position: relative; text-align: center;"><br>
    <style>.drawer + .demo { position: absolute; height: 8rem; z-index: 0; top: 0; right: calc(0rem - 320px - 0.5rem); padding: 0.5rem; text-align: left;} [type="checkbox"]:checked.drawer + .demo { z-index: 1001; margin-right: 0.5rem;}</style>
    <label for="demo-toggle" class="button drawer-toggle persistent doc"></label>
    <input type="checkbox" id="demo-toggle" class="drawer persistent"> <div class="demo doc">
    <label for="demo-toggle" class="drawer-close doc"></label><a href="#" class="doc">Home</a><br/> <a href="#" class="doc">News</a><br/>
    <a href="#" class="doc">About</a><br/> <a href="#" class="doc">Contact</a><br/></div>
</div>`,
  samples: [
    `<pre><span class="code-line"><span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;drawer-control&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;drawer-toggle&quot;</span><span class="highlight-a">&gt;&lt;/label&gt;</span></span>
<span class="code-line"></span>
<span class="code-line"><span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;checkbox&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;drawer-control&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;drawer&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;drawer-control&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;drawer-close&quot;</span><span class="highlight-a">&gt;&lt;/label&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;a</span> <span class="highlight-b">href</span>=<span class="highlight-c">&quot;#&quot;</span><span class="highlight-a">&gt;</span>Home<span class="highlight-a">&lt;/a&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`
  ],
  notes: [
    `Drawer menus are responsive by default and will expand into normal containers on screens larger or equal to <code>768px</code> wide.`,
    `It is highly recommended to place your drawer's toggle button inside your web app's header element.`,
    `You can combine the navigation bar element with the drawer menu for better results.`,
    `Remember to apply the appropriate classes to any and all elements, as indicated in the examples. Failing to do so will result in the drawer menu not rendering or behaving properly.`
  ],
  customization: [
    `Text color can be changed globally by changing the value of the <code>--fore-color</code> variable. This will affect the text color of the toggle button and items inside the drawer container.`,
    `Background color for the drawer container can be changed by changing the value of the <code>--drawer-back-color</code> variable.`,
    `Border color for the drawer container can be changed by changing the value of the <code>--drawer-border-color</code> variable.`,
    `Text color for the drawer close button can be changed by changing the values of the <code>--drawer-close-color</code>.`,
    `Background color for the drawer close button when focused or hovered over can be changed by changing the values of the <code>--drawer-hover-back-color</code>.`,
    `Universal margin for elements can be changed globally by changing the value of the <code>--universal-margin</code> variable. As a rule of thumb, consider the universal margin to be the distance you want your paragraphs to have from the sides of the screen.`,
    `Universal padding for elements can be changed globally by changing the value of the <code>--universal-padding</code> variable.`,
    `Universal border radius for elements can be changed globally by changing the value of the <code>--universal-border-radius</code> variable.`
  ],
  modifiers: [
    {
      title : `Persistent drawer`,
      description: `<p>If you want your drawer menus to not expand into normal containers on larger screens, simply add the appropriate modifier (<code>.persistent</code>) on the checkbox controlling the drawer and its toggle button.</p>`,
      example: ``,
      samples: [
        `<pre><span class="code-line"><span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;drawer-control&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;drawer-toggle persistent&quot;</span><span class="highlight-a">&gt;&lt;/label&gt;</span></span>
<span class="code-line"></span>
<span class="code-line"><span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;checkbox&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;drawer-control&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;drawer persistent&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;drawer-control&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;drawer-close&quot;</span><span class="highlight-a">&gt;&lt;/label&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;a</span> <span class="highlight-b">href</span>=<span class="highlight-c">&quot;#&quot;</span><span class="highlight-a">&gt;</span>Home<span class="highlight-a">&lt;/a&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`
      ]
    }
  ],
  dos: [
    {
      description: `You can combine the drawer menu with the <a href="#grid">grid system</a> to create responsive menus that are part of the layout of your web app.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;checkbox&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;drawer-control&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;drawer&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-md-4&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;drawer-control&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;drawer-close&quot;</span><span class="highlight-a">&gt;&lt;/label&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;a</span> <span class="highlight-b">href</span>=<span class="highlight-c">&quot;#&quot;</span><span class="highlight-a">&gt;</span>Home<span class="highlight-a">&lt;/a&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-12 col-md-8&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;p&gt;</span>Page content<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`
    }
  ],
  donts: [
    {
      description: `You should not place anything between the checkbox controlling the drawer and the container.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;checkbox&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;drawer-control&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;drawer&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line"><span class="highlight-c">&lt;!-- Do not place other stuff between these --&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;drawer-control&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;drawer-close&quot;</span><span class="highlight-a">&gt;&lt;/label&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;a</span> <span class="highlight-b">href</span>=<span class="highlight-c">&quot;#&quot;</span><span class="highlight-a">&gt;</span>Home<span class="highlight-a">&lt;/a&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`
    }
  ]
}

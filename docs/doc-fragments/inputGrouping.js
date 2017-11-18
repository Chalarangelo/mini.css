module.exports = {
  id: 'input-grouping',
  title: 'Input grouping',
  keywords: [`input group`, `input-group`, `vertical`, `fluid`, `input`, `button`, `button group`, `button-group`],
  description: `<p>You can ensure that input elements and labels display together on the same line, by grouping them together (<code>.input-group</code>). You can also group buttons together, using a different grouping class (<code>.button-group</code>).</p>`,
  example: `<form>
  <fieldset>
    <legend class="doc">Grouped inputs</legend>
    <div class="input-group"><label for="gi1-un" class="doc">Username</label> <input type="email" value="" id="gi1-un" placeholder="Username" class="doc"></div><br/>
    <div class="input-group"><label for="gi1-pwd" class="doc">Password</label> <input type="password" value="" id="gi1-pwd" placeholder="Password" class="doc"></div>
  </fieldset>
  </form>
  <div class="button-group"><button class="doc">Buttons</button><button class="doc">can be</button><button class="doc">grouped</button></div>`,
  samples: [
`<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;input-group&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;username&quot;</span><span class="highlight-a">&gt;</span>Username<span class="highlight-a">&lt;/label&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;text&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;Username&quot;</span> <span class="highlight-b">placeholder</span>=<span class="highlight-c">&quot;Username&quot;</span><span class="highlight-a">/&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`,
`<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;button-group&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;button&gt;</span>Button<span class="highlight-a">&lt;/button&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;button&gt;</span>Button<span class="highlight-a">&lt;/button&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;button&gt;</span>Button<span class="highlight-a">&lt;/button&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`
  ],
  notes: [`It is highly recommended that you do not place checkboxes or radio buttons inside fluid or vertical input groups.`,
    `Button groups will display horizontally on medium and large screens, but collapse into a vertical view on small screens.`],
  customization: [],
  modifiers: [
    {
      title : `Fluid &amp; vertical grouping`,
      description: `<p>You can make your input groups fluid (<code>.fluid</code>) or vertical (<code>.vertical</code>), by applying the appropriate modifiers.</p>`,
      example: `<form>
      <fieldset>
        <legend class="doc">Fluid input groups</legend>
        <div class="input-group fluid"><label for="gi2-un" class="doc">Username</label> <input type="email" value="" id="gi2-un" placeholder="Username" class="doc"></div>
        <div class="input-group fluid"><label for="gi2-pwd" class="doc">Password</label> <input type="password" value="" id="gi2-pwd" placeholder="Password" class="doc"></div>
      </fieldset>
      </form>
      <form>
      <fieldset>
        <legend class="doc">Vertical input groups</legend>
        <div class="input-group vertical"><label for="gi3-un" class="doc">Username</label> <input type="email" value="" id="gi3-un" placeholder="Username" class="doc"></div>
        <div class="input-group vertical"><label for="gi3-pwd" class="doc">Password</label> <input type="password" value="" id="gi3-pwd" placeholder="Password" class="doc"></div>
      </fieldset>
      </form>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;input-group fluid&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;username&quot;</span><span class="highlight-a">&gt;</span>Username<span class="highlight-a">&lt;/label&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;text&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;Username&quot;</span> <span class="highlight-b">placeholder</span>=<span class="highlight-c">&quot;Username&quot;</span><span class="highlight-a">/&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;input-group vertical&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;username&quot;</span><span class="highlight-a">&gt;</span>Username<span class="highlight-a">&lt;/label&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;text&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;Username&quot;</span> <span class="highlight-b">placeholder</span>=<span class="highlight-c">&quot;Username&quot;</span><span class="highlight-a">/&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`]
    }
  ],
  dos: [],
  donts: [
    {
      description: `Avoid combining input groups with the <a href="#grid">grid system</a>, as there might be overlapping styles.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;input-group row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;username&quot;</span><span class="highlight-a">&gt;</span>Username<span class="highlight-a">&lt;/label&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;text&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;Username&quot;</span> <span class="highlight-b">placeholder</span>=<span class="highlight-c">&quot;Username&quot;</span><span class="highlight-a">/&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`
    }
  ]
}

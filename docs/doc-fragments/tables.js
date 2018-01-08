module.exports = {
  id: 'tables',
  title: 'Tables',
  keywords: [`table`, `caption`, `thead`, `tbody`, `tr`, `th`, `td`, `horizontal`, `striped`, `hoverable`],
  description: `<p>Tables are styled in a minimal, modern and responsive manner, allowing users on all devices to easily browse tabular data, taking advantage of the <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">Flexbox layout</a>'s capabilities. To make tabular data properly display on mobile devices, remember to specify a <code>data-label</code> attribute for each <code>&lt;&gt;</code> element (usually same as the heading of the column).</p>`,
  example: `<h6 style="text-align:center">Desktop view</h6>
  <table class="doc"><caption  class="doc">People</caption>
<thead class="doc"><tr class="doc"><th class="doc">Name</th><th class="doc">Surname</th><th class="doc">Alias</th></tr></thead>
<tbody class="doc">
<tr class="doc"><td data-label="Name" class="doc">Chad</td><td data-label="Surname" class="doc">Wilberts</td><td data-label="Alias" class="doc">MrOne</td></tr>
<tr class="doc"><td data-label="Name" class="doc">Adam</td><td data-label="Surname" class="doc">Smith</td><td data-label="Alias" class="doc">TheSmith</td></tr>
<tr class="doc"><td data-label="Name" class="doc">Sophia</td><td data-label="Surname" class="doc">Canderson</td><td data-label="Alias" class="doc">Candee</td></tr>
<tr class="doc"><td data-label="Name" class="doc">Nick</td><td data-label="Surname" class="doc">Thomson</td><td data-label="Alias" class="doc">NickThom</td></tr>
<tr class="doc"><td data-label="Name" class="doc">Mark</td><td data-label="Surname" class="doc">Gerkis</td><td data-label="Alias" class="doc">Markie</td></tr>
<tr class="doc"><td data-label="Name" class="doc">John</td><td data-label="Surname" class="doc">Fergusson</td><td data-label="Alias" class="doc">Fergujohn</td></tr>
<tr class="doc"><td data-label="Name" class="doc">Sylvia</td><td data-label="Surname" class="doc">Pouleau</td><td data-label="Alias" class="doc">Sylver</td></tr>
<tr class="doc"><td data-label="Name" class="doc">Norman</td><td data-label="Surname" class="doc">Jones</td><td data-label="Alias" class="doc">NormalJones</td></tr>
<tr class="doc"><td data-label="Name" class="doc">Trevor</td><td data-label="Surname" class="doc">Heidel</td><td data-label="Alias" class="doc">Heidi</td></tr>
</tbody>
</table><br/><h6 style="text-align:center">Mobile view</h6>
<table class="doc cardized"><caption  class="doc">People</caption>
<thead class="doc"><tr class="doc"><th class="doc">Name</th><th class="doc">Surname</th><th class="doc">Alias</th></tr></thead>
<tbody class="doc">
<tr class="doc"><td data-label="Name" class="doc">Chad</td><td data-label="Surname" class="doc">Wilberts</td><td data-label="Alias" class="doc">MrOne</td></tr>
<tr class="doc"><td data-label="Name" class="doc">Adam</td><td data-label="Surname" class="doc">Smith</td><td data-label="Alias" class="doc">TheSmith</td></tr>
<tr class="doc"><td data-label="Name" class="doc">Sophia</td><td data-label="Surname" class="doc">Canderson</td><td data-label="Alias" class="doc">Candee</td></tr>
</tbody>
</table>`,
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;table&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;caption&gt;</span>People<span class="highlight-a">&lt;/caption&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;thead&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;tr&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;th&gt;</span>Name<span class="highlight-a">&lt;/th&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;th&gt;</span>Surname<span class="highlight-a">&lt;/th&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;th&gt;</span>Alias<span class="highlight-a">&lt;/th&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;/tr&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;/thead&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;tbody&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;tr&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Name&quot;</span><span class="highlight-a">&gt;</span>Chad<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Surname&quot;</span><span class="highlight-a">&gt;</span>Wilberts<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Alias&quot;</span><span class="highlight-a">&gt;</span>MrOne<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;/tr&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;tr&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Name&quot;</span><span class="highlight-a">&gt;</span>Adam<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Surname&quot;</span><span class="highlight-a">&gt;</span>Smith<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Alias&quot;</span><span class="highlight-a">&gt;</span>TheSmith<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;/tr&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;tr&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Name&quot;</span><span class="highlight-a">&gt;</span>Sophia<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Surname&quot;</span><span class="highlight-a">&gt;</span>Canderson<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Alias&quot;</span><span class="highlight-a">&gt;</span>Candee<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;/tr&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;/tbody&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/table&gt;</span></span></pre>`],
  notes: [`Remember to always specify a <code>data-label</code> attribute for all of your <code>&lt;td&gt;</code> elements, otherwise they will not display properly on mobile.`,
  `Due to the way tables are displayed, the <code>&lt;tfoot&gt;</code> element is not supported.`,
  `Tables are vertically scrollable by default, with a <code>max-height</code> property of <code>400px</code>.`],
  customization: [
    `Text color for <code>&lt;th&gt;</code> and <code>&lt;td&gt;</code> elements can be changed by changing the values of the <code>--table-head-fore-color</code> and <code>--table-body-fore-color</code> variables respectively.`,
    `Background color for <code>&lt;th&gt;</code> and <code>&lt;td&gt;</code> elements can be changed by changing the values of the <code>--table-head-back-color</code> and <code>--table-body-back-color</code> variables respectively.`,
    `Border color for tables can be changed by changing the value of the <code>--table-border-color</code> variable.`,
    `Border color for the separator between a table's heading and a table's body can be changed by changing the value of the <code>--table-border-separator-color</code> variable.`,
    `Alternative background color for <code>&lt;td&gt;</code> elements in striped tables can be changed by changing the value of the <code>--table-body-alt-back-color</code> variable.`,
    `Hover background color for <code>&lt;tr&gt;</code> elements in hoverable tables can be changed by changing the value of the <code>--table-body-hover-back-color</code> variable.`,
    `Universal margin for elements can be changed globally by changing the value of the <code>--universal-margin</code> variable. As a rule of thumb, consider the universal margin to be the distance you want your paragraphs to have from the sides of the screen.`,
    `Universal padding for elements can be changed globally by changing the value of the <code>--universal-padding</code> variable.`,
    `Universal border radius for elements can be changed globally by changing the value of the <code>--universal-border-radius</code> variable.`
  ],
  modifiers: [
    {
      title : 'Horizontal tables',
      description: `<p>You can create horizontal tables (<code>.horizontal</code>), by applying the appropriate class.</p>`,
      example: `<table class="doc horizontal"><caption  class="doc">People</caption>
      <thead class="doc"><tr class="doc"><th class="doc">Name</th><th class="doc">Surname</th><th class="doc">Alias</th></tr></thead>
      <tbody class="doc">
      <tr class="doc"><td data-label="Name" class="doc">Chad</td><td data-label="Surname" class="doc">Wilberts</td><td data-label="Alias" class="doc">MrOne</td></tr>
      <tr class="doc"><td data-label="Name" class="doc">Adam</td><td data-label="Surname" class="doc">Smith</td><td data-label="Alias" class="doc">TheSmith</td></tr>
      <tr class="doc"><td data-label="Name" class="doc">Sophia</td><td data-label="Surname" class="doc">Canderson</td><td data-label="Alias" class="doc">Candee</td></tr>
      </tbody>
      </table>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;table</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;horizontal&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;caption&gt;</span>People<span class="highlight-a">&lt;/caption&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;thead&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;tr&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;th&gt;</span>Name<span class="highlight-a">&lt;/th&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;th&gt;</span>Surname<span class="highlight-a">&lt;/th&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;th&gt;</span>Alias<span class="highlight-a">&lt;/th&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;/tr&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;/thead&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;tbody&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;tr&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Name&quot;</span><span class="highlight-a">&gt;</span>Chad<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Surname&quot;</span><span class="highlight-a">&gt;</span>Wilberts<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Alias&quot;</span><span class="highlight-a">&gt;</span>MrOne<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;/tr&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;tr&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Name&quot;</span><span class="highlight-a">&gt;</span>Adam<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Surname&quot;</span><span class="highlight-a">&gt;</span>Smith<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Alias&quot;</span><span class="highlight-a">&gt;</span>TheSmith<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;/tr&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;tr&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Name&quot;</span><span class="highlight-a">&gt;</span>Sophia<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Surname&quot;</span><span class="highlight-a">&gt;</span>Canderson<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Alias&quot;</span><span class="highlight-a">&gt;</span>Candee<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;/tr&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;/tbody&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/table&gt;</span></span></pre>`]
    },
    {
      title : 'Striped tables',
      description: `<p>You can create striped tables (<code>.striped</code>), by applying the appropriate class.</p>`,
      example: `<table class="doc striped"><caption  class="doc">People</caption>
      <thead class="doc"><tr class="doc"><th class="doc">Name</th><th class="doc">Surname</th><th class="doc">Alias</th></tr></thead>
      <tbody class="doc">
      <tr class="doc"><td data-label="Name" class="doc">Chad</td><td data-label="Surname" class="doc">Wilberts</td><td data-label="Alias" class="doc">MrOne</td></tr>
      <tr class="doc"><td data-label="Name" class="doc">Adam</td><td data-label="Surname" class="doc">Smith</td><td data-label="Alias" class="doc">TheSmith</td></tr>
      <tr class="doc"><td data-label="Name" class="doc">Sophia</td><td data-label="Surname" class="doc">Canderson</td><td data-label="Alias" class="doc">Candee</td></tr>
      </tbody>
      </table>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;table</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;striped&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;caption&gt;</span>People<span class="highlight-a">&lt;/caption&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;thead&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;tr&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;th&gt;</span>Name<span class="highlight-a">&lt;/th&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;th&gt;</span>Surname<span class="highlight-a">&lt;/th&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;th&gt;</span>Alias<span class="highlight-a">&lt;/th&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;/tr&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;/thead&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;tbody&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;tr&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Name&quot;</span><span class="highlight-a">&gt;</span>Chad<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Surname&quot;</span><span class="highlight-a">&gt;</span>Wilberts<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Alias&quot;</span><span class="highlight-a">&gt;</span>MrOne<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;/tr&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;tr&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Name&quot;</span><span class="highlight-a">&gt;</span>Adam<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Surname&quot;</span><span class="highlight-a">&gt;</span>Smith<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Alias&quot;</span><span class="highlight-a">&gt;</span>TheSmith<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;/tr&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;tr&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Name&quot;</span><span class="highlight-a">&gt;</span>Sophia<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Surname&quot;</span><span class="highlight-a">&gt;</span>Canderson<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Alias&quot;</span><span class="highlight-a">&gt;</span>Candee<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;/tr&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;/tbody&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/table&gt;</span></span></pre>`]
  },
{
  title : 'Hoverable tables',
  description: `<p>You can create hoverable tables (<code>.hoverable</code>), by applying the appropriate class.</p>`,
  example: `<table class="doc hoverable"><caption  class="doc">People</caption>
  <thead class="doc"><tr class="doc"><th class="doc">Name</th><th class="doc">Surname</th><th class="doc">Alias</th></tr></thead>
  <tbody class="doc">
  <tr class="doc"><td data-label="Name" class="doc">Chad</td><td data-label="Surname" class="doc">Wilberts</td><td data-label="Alias" class="doc">MrOne</td></tr>
  <tr class="doc"><td data-label="Name" class="doc">Adam</td><td data-label="Surname" class="doc">Smith</td><td data-label="Alias" class="doc">TheSmith</td></tr>
  <tr class="doc"><td data-label="Name" class="doc">Sophia</td><td data-label="Surname" class="doc">Canderson</td><td data-label="Alias" class="doc">Candee</td></tr>
  </tbody>
  </table>`,
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;table</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;hoverable&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;caption&gt;</span>People<span class="highlight-a">&lt;/caption&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;thead&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;tr&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;th&gt;</span>Name<span class="highlight-a">&lt;/th&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;th&gt;</span>Surname<span class="highlight-a">&lt;/th&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;th&gt;</span>Alias<span class="highlight-a">&lt;/th&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;/tr&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;/thead&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;tbody&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;tr&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Name&quot;</span><span class="highlight-a">&gt;</span>Chad<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Surname&quot;</span><span class="highlight-a">&gt;</span>Wilberts<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Alias&quot;</span><span class="highlight-a">&gt;</span>MrOne<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;/tr&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;tr&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Name&quot;</span><span class="highlight-a">&gt;</span>Adam<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Surname&quot;</span><span class="highlight-a">&gt;</span>Smith<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Alias&quot;</span><span class="highlight-a">&gt;</span>TheSmith<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;/tr&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;tr&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Name&quot;</span><span class="highlight-a">&gt;</span>Sophia<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Surname&quot;</span><span class="highlight-a">&gt;</span>Canderson<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Alias&quot;</span><span class="highlight-a">&gt;</span>Candee<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;/tr&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;/tbody&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/table&gt;</span></span></pre>`]
  }
  ],
  dos: [],
  donts: [
    {
      description: `Avoid placing <code>&lt;td&gt;</code> elements in the <code>&lt;thead&gt;</code> of your tables, as well as placing <code>&lt;th&gt;</code> elements in the <code>&lt;tbody&gt;</code>.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;table&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;caption&gt;</span>People<span class="highlight-a">&lt;/caption&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;thead&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;tr&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;td&gt;</span>Bad idea<span class="highlight-a">&lt;/td&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;/tr&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;/thead&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;tbody&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;tr&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;th</span> <span class="highlight-b">data-label</span>=<span class="highlight-c">&quot;Bad&quot;</span><span class="highlight-a">&gt;</span>Also bad idea<span class="highlight-a">&lt;/th&gt;</span></span>
<span class="code-line"><span class="highlight-a">    &lt;/tr&gt;</span></span>
<span class="code-line"><span class="highlight-a">  &lt;/tbody&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/table&gt;</span></span></pre>`
    }
  ]
}

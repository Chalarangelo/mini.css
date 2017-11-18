module.exports = {
  id: 'header',
  title: 'Header',
  keywords: [`navigation`, `header`, `sticky`, `button`, `logo`, `link`],
  description: `<p>The header element has been minimally styled, allowing you to create modern headers for your web apps. A header can include a logo element (<code>.logo</code>), as well as buttons, links and labels, styled as buttons (<code>.button</code>).</p>`,
  example: `<header>
    <a href="#" class="logo" class="doc">Logo</a> <button  class="doc">Home</button>
    <a href="#" class="button doc">News</a>
    <button  class="doc">About</button> <button  class="doc">Contact</button>
  </header>`,
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;header&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;a</span> <span class="highlight-b">href</span>=<span class="highlight-c">&quot;#&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;logo&quot;</span><span class="highlight-a">&gt;</span>Logo<span class="highlight-a">&lt;/a&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;a</span> <span class="highlight-b">href</span>=<span class="highlight-c">&quot;#&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;button&quot;</span><span class="highlight-a">&gt;</span>Home<span class="highlight-a">&lt;/a&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;button&gt;</span>Download<span class="highlight-a">&lt;/button&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/header&gt;</span></span></pre>`],
  notes: [`The header element is partially responsive on smaller screens, displaying a scrollbar indicating that there is more content off-screen.`,
  `The header element can be a row in a <a href="grid">grid system</a>, allowing you to create responsive headers.`],
  customization: [
    `Text color for the header can be changed by changing the value of the <code>--header-fore-color</code> variable.`,
    `Background color for the header can be changed by changing the value of the <code>--header-back-color</code> variable.`,
    `Border color for the header can be changed by changing the value of the <code>--header-border-color</code> variable.`,
    `Background color for focused buttons inside the header can be changed by changing the value of the <code>--header-hover-back-color</code> variable.`
  ],
  modifiers: [
    {
      title : 'Sticky header',
      description: `<p>You can make your web app's header sticky (<code>.sticky</code>), by applying the appropriate modifier.</p>`,
      example: '',
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;header</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;sticky&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;a</span> <span class="highlight-b">href</span>=<span class="highlight-c">&quot;#&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;logo&quot;</span><span class="highlight-a">&gt;</span>Logo<span class="highlight-a">&lt;/a&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;a</span> <span class="highlight-b">href</span>=<span class="highlight-c">&quot;#&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;button&quot;</span><span class="highlight-a">&gt;</span>Home<span class="highlight-a">&lt;/a&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;button&gt;</span>Download<span class="highlight-a">&lt;/button&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/header&gt;</span></span></pre>`]
    }
  ],
  dos: [],
  donts: [
    {
      description: `You should not apply a <code>.button</code> class to the logo of your header, but you must make sure that all other elements inside the header are styled as buttons.`,
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;header&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;a</span> <span class="highlight-b">href</span>=<span class="highlight-c">&quot;#&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;button logo&quot;</span><span class="highlight-a">&gt;</span>Logo<span class="highlight-a">&lt;/a&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;a</span> <span class="highlight-b">href</span>=<span class="highlight-c">&quot;#&quot;</span><span class="highlight-a">&gt;</span>Home<span class="highlight-a">&lt;/a&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/header&gt;</span></span></pre>`
    }
  ]
}

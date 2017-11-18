module.exports = {
  id: 'footer',
  title: 'Footer',
  keywords: [`navigation`, `footer`, `sticky`, `link`],
  description: `<p>The footer element has been minimally styled, aiming to provide you with a clean base to create your web apps' footers.</p>`,
  example: `<footer> <p class="doc">&copy; 2016-2017 Web Corporation | <a href="#"  class="doc">About</a> | <a href="#"  class="doc">Terms of use</a></p> </footer>`,
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;footer&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;p&gt;</span>Footer text<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/footer&gt;</span></span></pre>`],
  notes: [],
  customization: [
    `Text color for the footer can be changed by changing the value of the <code>--footer-fore-color</code> variable.`,
    `Background color for the footer can be changed by changing the value of the <code>--footer-back-color</code> variable.`,
    `Border color for the footer can be changed by changing the value of the <code>--footer-border-color</code> variable.`,
    `Text color for links inside the footer can be changed by changing the value of the <code>--footer-link-color</code> variable.`,
    `Universal padding for elements can be changed globally by changing the value of the <code>--universal-padding</code> variable.`
  ],
  modifiers: [
    {
      title : 'Sticky footer',
      description: `<p>You can make your web app's footer sticky (<code>.sticky</code>), by applying the appropriate modifier.</p>`,
      example: '',
samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;footer</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;sticky&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;p&gt;</span>Footer text<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/footer&gt;</span></span></pre>`]
    }
  ],
  dos: [],
  donts: []
}

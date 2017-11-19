module.exports = {
  id: 'navigation-bar',
  title: 'Navigation bar',
  keywords: [`navigation`, `bar`, `nav`, `link`],
  description: `<p>The navigation bar element has been minimally styled, allowing you to create simple vertical navigation menus for your web apps. Apart from styling from links, custom classes (<code>.sublink-1</code> and <code>.sublink-2</code>) are provided for creating navigation trees.</p>`,
  example: `<nav>
    <a href="#" class="doc">Home</a> <span  class="doc">News</span>
    <a href="#" class="sublink-1 doc">New Courses</a> <a href="#" class="sublink-1 doc">Certifications</a>
    <span class="sublink-1 doc">Events</span> <a href="#" class="sublink-2 doc">Course Showcase - 12th, Dec</a>
    <a href="#" class="sublink-2 doc">Staff AMA - 16th, Dec</a> <a href="#" class="sublink-1 doc">Policy Update</a>
    <a href="#"  class="doc">About</a> <a href="#"  class="doc">Contact</a>
  </nav>`,
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;nav&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;a</span> <span class="highlight-b">href</span>=<span class="highlight-c">&quot;#&quot;</span><span class="highlight-a">&gt;</span>Category 1<span class="highlight-a">&lt;/a&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;span&gt;</span>Category 2<span class="highlight-a">&lt;/span&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;a</span> <span class="highlight-b">href</span>=<span class="highlight-c">&quot;#&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;sublink-1&quot;</span><span class="highlight-a">&gt;</span>Item 2.1<span class="highlight-a">&lt;/a&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;span</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;sublink-1&quot;</span><span class="highlight-a">&gt;</span>Category 2.2<span class="highlight-a">&lt;/span&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;a</span> <span class="highlight-b">href</span>=<span class="highlight-c">&quot;#&quot;</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;sublink-2&quot;</span><span class="highlight-a">&gt;</span>Item 2.2.1<span class="highlight-a">&lt;/a&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/nav&gt;</span></span></pre>`],
  notes: [`It is recommended that you combine the navigation bar element with the <a href="#grid">grid system</a> to create responsive navigation menus for your web apps.`],
  customization: [
    `Text color for navigation bars can be changed by changing the value of the <code>--nav-fore-color</code> variable.`,
    `Background color for navigation bars can be changed by changing the value of the <code>--nav-back-color</code> variable.`,
    `Border color for navigation bars can be changed by changing the value of the <code>--nav-border-color</code> variable.`,
    `Background color for focused buttons inside navigation bars can be changed by changing the value of the <code>--nav-hover-back-color</code> variable.`,
    `Text color for links inside navigation bars can be changed by changing the value of the <code>--nav-link-color</code> variable.`,
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

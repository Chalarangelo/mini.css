module.exports = {
  id: 'grid',
  title: 'Grid system',
  keywords: [`grid`, `grid system`, `col`, `column`, `layout`, `row`, `container`, `small`, `medium`, `large`, `sm`, `md`, `lg`, `cols`, `predefined`, `offset`, `order`, `reorder`, `first`, `last`, `normal`],
  description: `<p>The grid system of <strong>mini.css</strong> utilizes the <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" targe="_blank">Flexbox layout</a> to provide you with a simple, modern, responsive layout system for your web apps. Like most modern CSS frameworks' grid systems, it is composed of three main components - containers, rows and columns:</p>
  <ul><li>The container (<code>.container</code>) is the outermost layer of the grid system and serves as a fluid wrapper, which can be used as the basis for your layout.</li>
  <li>Inside the container, you can add one or more rows (<code>.row</code>), which will in turn house the columns.</li>
  <li>Columns (<code>col-*-*</code>) are placed inside rows and they can be customized to display differently on different screen sizes, make use of fluid layouts, use offsets or change ordering.</li></ul>`,
  example: `<div class="container" style="padding: 0.25rem">
    <div class="row"><div class="col-sm-1"><div class="box-colored">1</div></div><div class="col-sm-11"><div class="box-colored">11</div></div></div>
    <div class="row"><div class="col-sm-2"><div class="box-colored">2</div></div><div class="col-sm-10"><div class="box-colored">10</div></div></div>
    <div class="row"><div class="col-sm-3"><div class="box-colored">3</div></div><div class="col-sm-9"><div class="box-colored">9</div></div></div>
    <div class="row"><div class="col-sm-4"><div class="box-colored">4</div></div><div class="col-sm-8"><div class="box-colored">8</div></div></div>
    <div class="row"><div class="col-sm-5"><div class="box-colored">5</div></div><div class="col-sm-7"><div class="box-colored">7</div></div></div>
    <div class="row"><div class="col-sm-6"><div class="box-colored">6</div></div><div class="col-sm-6"><div class="box-colored">6</div></div></div>
    <div class="row"><div class="col-sm-12"><div class="box-colored">12</div></div></div>
    <div class="row"><div class="col-sm"><div class="box-colored">fluid</div></div><div class="col-sm"><div class="box-colored">fluid</div></div></div>
  </div>`,
  samples: [`
<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;container&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-1&quot;</span><span class="highlight-a">&gt;</span><span class="highlight-a">&lt;/div&gt;</span>  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-11&quot;</span><span class="highlight-a">&gt;</span><span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-2&quot;</span><span class="highlight-a">&gt;</span><span class="highlight-a">&lt;/div&gt;</span>  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-10&quot;</span><span class="highlight-a">&gt;</span><span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-3&quot;</span><span class="highlight-a">&gt;</span><span class="highlight-a">&lt;/div&gt;</span>  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-9&quot;</span><span class="highlight-a">&gt;</span><span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-4&quot;</span><span class="highlight-a">&gt;</span><span class="highlight-a">&lt;/div&gt;</span>  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-8&quot;</span><span class="highlight-a">&gt;</span><span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-5&quot;</span><span class="highlight-a">&gt;</span><span class="highlight-a">&lt;/div&gt;</span>  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-7&quot;</span><span class="highlight-a">&gt;</span><span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-6&quot;</span><span class="highlight-a">&gt;</span><span class="highlight-a">&lt;/div&gt;</span>  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-6&quot;</span><span class="highlight-a">&gt;</span><span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-12&quot;</span><span class="highlight-a">&gt;</span><span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm&quot;</span><span class="highlight-a">&gt;</span><span class="highlight-a">&lt;/div&gt;</span>  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm&quot;</span><span class="highlight-a">&gt;</span><span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>
  `],
  notes: [
    `<strong>mini.css</strong> uses a mobile-first approach in its grid system, so you do not have to rewrite the same layout for all three screen sizes. Leaving a column's size, offset or order unspecified for a screen size will use the style applied for the previous largest screen size recursively. This also applies to predefined layouts.`,
    `The specific breakpoints for small, medium and large screen sizes are as follows:
      <ul>
        <li>small: less than <code>768px</code> wide</li>
        <li>medium: more than or equal to <code>768px</code> wide and less than <code>1280px</code> wide</li>
        <li>large: <code>1280px</code> wide or more</li>
      </ul>`,
      `You can use fluid columns to create columns whose wide is not a multiple of 1/12th of the screen's width (e.g. if you have 7 fluid columns in a row, each one of them will be 1/7th of the screen's width).`,
      `Predefined layouts can be combined with most of the features of the grid system, such as offsets and reordering, however they do not combine very well with regular columns.`,
      `You should only apply offset and reordering modifiers to the columns that you need and for the screen sizes that are necessary. Remember to also specify a column width or use a predefined layout before applying these modifiers.`
  ],
  customization: [
  `Universal padding for elements can be changed globally by changing the value of the <code>--universal-padding</code> variable. This only affects the padding of the container.`
],
  modifiers: [
    {
      title: `Screen sizes and width`,
      description: `<p>Each column class is defined by specifying a screen size (small - <code>sm</code>, medium - <code>md</code> or large - <code>lg</code>) and a column width (a value between <code>1</code> and <code>12</code> or you can omit it for a fluid column), separated by dashes (e.g. <code>.col-sm-6</code> for a 6-wide column on a small screen). Using these you can apply different layouts for different screen sizes, by altering the width of columns, using multiple classes. Note that column widths are applied recursively, meaning that if you do not specify a width for a specific screen size the column will use the width applied for the previous largest screen size.</p>`,
      example: `<div class="container" style="padding: 0.25rem">
      <div class="row">
      <div class="col-sm-12 col-md">
      <div class="row"><div class="col-sm"><h6 style="text-align:center">Small screen layout</h6></div></div>
      <div class="row"><div class="col-sm"><div class="box-colored">sm-12</div></div></div>
      <div class="row"><div class="col-sm-12"><div class="box-colored" style="height: 3.75rem">sm-12 md-8</div></div><div class="col-sm-12"><div class="box-colored" style="height: 2rem">sm-12 md-4</div></div></div>
      <div class="row"><div class="col-sm"><div class="box-colored">sm-12</div></div></div>
      </div>
      <div class="col-sm-12 col-md">
      <div class="row"><div class="col-sm"><h6 style="text-align:center">Medium/Large screen layout</h6></div></div>
      <div class="row"><div class="col-sm"><div class="box-colored">sm-12</div></div></div>
      <div class="row"><div class="col-sm-8"><div class="box-colored" style="height: 8rem">sm-12 md-8</div></div><div class="col-sm-4"><div class="box-colored" style="height: 8rem">sm-12 md-4</div></div></div>
      <div class="row"><div class="col-sm"><div class="box-colored">sm-12</div></div></div>
      </div>
      </div>
      </div>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;container&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-12 col-md-3 col-lg-2&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-12 col-md-5 col-lg-7&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-12 col-md-4 col-lg-3&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span>&gt;</span>
<span class="code-line">    <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm col-lg-10&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-4 col-md&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`]
    },
    {
      title: `Predefined layouts`,
      description: `<p>Rows can be modified to apply predefined layouts to the columns inside them, effectively reducing the amount of work required for simple layouts. To create a predefined layout, you can add a class to a row (<code>.cols-*-*</code>), specifying a screen size and width for the columns inside it (or omitting the width for fluid columns), similarly to the way columns are defined (e.g. <code>.row.cols-sm-6</code> will cause all elements inside the row to be 6-wide on a small screen). Columns inside a predefined layout do not require any further classes to display and, much like normal column layouts, their widths are applied recursively.</p>`,
      example: '',
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row cols-sm-6&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;p&gt;</span>This paragraph is inside a 6-wide column.<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;p&gt;</span>This paragraph is inside a 6-wide column.<span class="highlight-a">&lt;/p&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`]
    },
    {
      title: `Column offsets`,
      description: `<p>Columns can be moved to the right, by applying offset classes (<code>.col-*-offset-*</code>), defining a screen size and an offset (a value between <code>0</code> and <code>11</code>, e.g. <code>.col-sm-offset-3</code> will move a column 25% to the right on a small screen). Like all other column modifiers, offsets are applied recursively.</p>`,
      example: `<div class="container" style="padding: 0.25rem">
        <div class="row"><div class="col-sm col-sm-offset-11"><div class="box-colored">11</div></div></div>
        <div class="row"><div class="col-sm col-sm-offset-10"><div class="box-colored">10</div></div></div>
        <div class="row"><div class="col-sm col-sm-offset-9"><div class="box-colored">9</div></div></div>
        <div class="row"><div class="col-sm col-sm-offset-8"><div class="box-colored">8</div></div></div>
        <div class="row"><div class="col-sm col-sm-offset-7"><div class="box-colored">7</div></div></div>
        <div class="row"><div class="col-sm col-sm-offset-6"><div class="box-colored">6</div></div></div>
        <div class="row"><div class="col-sm col-sm-offset-5"><div class="box-colored">5</div></div></div>
        <div class="row"><div class="col-sm col-sm-offset-4"><div class="box-colored">4</div></div></div>
        <div class="row"><div class="col-sm col-sm-offset-3"><div class="box-colored">3</div></div></div>
        <div class="row"><div class="col-sm col-sm-offset-2"><div class="box-colored">2</div></div></div>
        <div class="row"><div class="col-sm col-sm-offset-1"><div class="box-colored">1</div></div></div>
        <div class="row"><div class="col-sm col-sm-offset-0"><div class="box-colored">0</div></div></div>
      </div>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-8 col-sm-offset-2 col-md-offset-1 col-lg-offset-0&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm col-sm-offset-3 col-md-offset-4 col-lg-offset-0&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-4 col-md-offset-5&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`]
    },
    {
      title: `Column reordering`,
      description: `<p>Columns can be reordered on different screen sizes, by applying a reordering class (<code>.col-*-*</code>), defining a screen size and the order (first, normal or last, e.g. <code>.col-sm-last</code> will move a column to the end of its row on a small screen). Like all other column modifiers, reordering is applied recursively.</p>`,
      example: `<div class="container" style="padding: 0.25rem">
      <div class="row">
      <div class="col-sm-12 col-md">
      <div class="row"><div class="col-sm"><h6 style="text-align:center">Small screen layout</h6></div></div>
      <div class="row"><div class="col-sm-4"><div class="box-colored">md-last</div></div><div class="col-sm-4"><div class="box-colored">&nbsp;</div></div><div class="col-sm-4"><div class="box-colored">md-first</div></div></div>
      </div>
      <div class="col-sm-12 col-md">
      <div class="row"><div class="col-sm"><h6 style="text-align:center">Medium/Large screen layout</h6></div></div>
      <div class="row"><div class="col-sm-4"><div class="box-colored">md-first</div></div><div class="col-sm-4"><div class="box-colored">&nbsp;</div></div><div class="col-sm-4"><div class="box-colored">md-last</div></div></div>
      </div>
      </div>
      </div>`,
      samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm col-md-last col-lg-normal&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm col-sm-first col-md-last&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm col-md-first col-lg-normal&quot;</span><span class="highlight-a">&gt;&lt;/div&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/div&gt;</span></span></pre>`]
    }
  ],
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

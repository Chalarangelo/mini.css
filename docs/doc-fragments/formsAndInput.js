module.exports = {
  id: 'forms-and-input',
  title: 'Forms &amp; input',
  keywords: [`form`, `fieldset`, `legend`, `input`, `type`, `text`, `checkbox`, `radio`, `email`, `password`, `tel`, `input-group`, `input group`, `row`, `col`, `column`, `vertical`, `fluid`, `file`, `upload`, `select`, `textarea`, `option`, `label`],
  description: `<p>Forms, labels and common HTML5 input elements have been styled using clean, modern rules, improving the accessibility and usability of your web apps' forms.</p>`,
  example: `<form><fieldset><legend class="doc">Sample form</legend>
  <div class="row responsive-label"><div class="col-sm-12 col-md-3"><label for="sf1-text" class="doc">Text</label></div>
  <div class="col-sm-12 col-md"><input type="text" placeholder="Text" id="sf1-text" style="width:85%;" class="doc"></div></div>
  <div class="row responsive-label"><div class="col-sm-12 col-md-3"><label for="sf1-pwd" class="doc">Password</label></div>
  <div class="col-sm-12 col-md"><input type="password" placeholder="Password" id="sf1-pwd" style="width:85%;" class="doc"></div></div>
  <div class="row responsive-label"><div class="col-sm-12 col-md-3"><label for="sf1-num" class="doc">Number</label></div>
  <div class="col-sm-12 col-md"><input type="number" value="42" id="sf1-num" style="width:85%;" class="doc"></div></div>
  <div class="row responsive-label"><div class="col-sm-12 col-md-3"><label for="sf1-select" class="doc">Select</label></div>
  <div class="col-sm-12 col-md"><select id="sf1-select" style="width:85%;" class="doc"><option class="doc">Apples</option><option class="doc">Oranges</option></select></div></div>
  <div class="row responsive-label"><div class="col-sm-12 col-md-3"><label for="sf1-check" class="doc">Checkbox</label></div>
  <div class="col-sm-12 col-md"><input type="checkbox" autocomplete="off" id="sf1-check" class="doc"></div></div>
  <div class="row responsive-label"><div class="col-sm-12 col-md-3"><label for="sf1-radio" class="doc">Radio</label></div>
  <div class="col-sm-12 col-md"><input type="radio" autocomplete="off" id="sf1-radio" class="doc"></div></div>
  <div class="row responsive-label"><div class="col-sm-12 col-md-3"><label for="sf1-textarea" class="doc">Textarea</label></div>
  <div class="col-sm-12 col-md"><textarea class="doc" style="width:85%;" placeholder="Textarea"></textarea></div></div>
  <div class="row responsive-label"><div class="col-sm-12 col-md-3"><label for="sf1-invalid" class="doc">Invalid</label></div>
  <div class="col-sm-12 col-md"><input value="Invalid" id="sf1-invalid" style="width:85%;" class="doc"></div>
  <script>document.getElementById("sf1-invalid").setCustomValidity("This field is invalid");</script></div>
  <div class="row responsive-label"><div class="col-sm-12 col-md-3"><label for="sf1-disabled" class="doc">Disabled</label></div>
  <div class="col-sm-12 col-md"><input disabled value="Disabled" id="sf1-disabled" style="width:85%;" class="doc"></div></div>
  <div class="row responsive-label"><div class="col-sm-12 col-md-3"><label for="sf1-readonly" class="doc">Readonly</label></div>
  <div class="col-sm-12 col-md"><input readonly value="Readonly" id="sf1-readonly" style="width:85%;" class="doc"></div></div>
  </fieldset></form>`,
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;form&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;fieldset&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;legend&gt;</span>Simple form<span class="highlight-a">&lt;/legend&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;username&quot;</span><span class="highlight-a">&gt;</span>Username<span class="highlight-a">&lt;/label&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;text&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;Username&quot;</span> <span class="highlight-b">placeholder</span>=<span class="highlight-c">&quot;Username&quot;</span><span class="highlight-a">/&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;password&quot;</span><span class="highlight-a">&gt;</span>Password<span class="highlight-a">&lt;/label&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;password&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;password&quot;</span> <span class="highlight-b">placeholder</span>=<span class="highlight-c">&quot;Password&quot;</span><span class="highlight-a">/&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/fieldset&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/form&gt;</span></span></pre>`],
  notes: [
    `Using the <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> elements is highly recommended, as it improves semantic markup and accessibility.`,
    `Some input elements, such as date &amp; time, color and range types, are not supported and, as a result, do not have a default style defined for them. You can define said styles manually if you need to use them in your web app.`
  ],
  customization: [
    `Text color for forms and legend elements can be changed by changing the value of the <code>--form-fore-color</code> variable.`,
    `Background color for forms can be changed by changing the value of the <code>--form-back-color</code> variable.`,
    `Border color for forms and fieldset elements can be changed by changing the value of the <code>--form-border-color</code> variable.`,
    `Text color for input elements can be changed by changing the value of the <code>--input-fore-color</code> variable.`,
    `Background color for input elements can be changed by changing the value of the <code>--input-back-color</code> variable.`,
    `Border color for input elements can be changed by changing the value of the <code>--input-border-color</code> variable.`,
    `Border color for focused and invalid input elements can be changed by changing the value of the <code>--input-focus-color</code> and <code>--input-invalid-color</code> variables respectively.`,
    `Universal margin for elements can be changed globally by changing the value of the <code>--universal-margin</code> variable. As a rule of thumb, consider the universal margin to be the distance you want your paragraphs to have from the sides of the screen.`,
    `Universal padding for elements can be changed globally by changing the value of the <code>--universal-padding</code> variable.`,
    `Universal border radius for elements can be changed globally by changing the value of the <code>--universal-border-radius</code> variable.`
  ],
  modifiers: [],
  dos: [
    {
      description: 'Form inputs are inline by default, however you can combine forms with the <a href="#grid">grid system</a> to create aligned forms.',
      sample: `<pre><span class="code-line"><span class="highlight-a">&lt;form&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;fieldset&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;legend&gt;</span>Simple form<span class="highlight-a">&lt;/legend&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;row&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-12 col-md-6&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">        <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;username&quot;</span><span class="highlight-a">&gt;</span>Username<span class="highlight-a">&lt;/label&gt;</span></span>
<span class="code-line">        <span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;text&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;Username&quot;</span> <span class="highlight-b">placeholder</span>=<span class="highlight-c">&quot;Username&quot;</span><span class="highlight-a">/&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;div</span> <span class="highlight-b">class</span>=<span class="highlight-c">&quot;col-sm-12 col-md-6&quot;</span><span class="highlight-a">&gt;</span></span>
<span class="code-line">        <span class="highlight-a">&lt;label</span> <span class="highlight-b">for</span>=<span class="highlight-c">&quot;password&quot;</span><span class="highlight-a">&gt;</span>Password<span class="highlight-a">&lt;/label&gt;</span></span>
<span class="code-line">        <span class="highlight-a">&lt;input</span> <span class="highlight-b">type</span>=<span class="highlight-c">&quot;password&quot;</span> <span class="highlight-b">id</span>=<span class="highlight-c">&quot;password&quot;</span> <span class="highlight-b">placeholder</span>=<span class="highlight-c">&quot;Password&quot;</span><span class="highlight-a">/&gt;</span></span>
<span class="code-line">      <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">    <span class="highlight-a">&lt;/div&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;/fieldset&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/form&gt;</span></span></pre>`
    }
  ],
  donts: []
}

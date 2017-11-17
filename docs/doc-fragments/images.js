module.exports = {
  id: 'images-captions',
  title: 'Images &amp; captions',
  keywords: [`img`, `image`, `responsive`, `responsiveness`, `caption`, `figure`, `figcaption`],
  description: `<p>Image elements are responsive by default, automatically scaling down as necessary to display properly on smaller devices. Images retain their original aspect ratio and they will never scale above their original size.</p>
  <p>If you want to add captions to images, you can use HTML5 figure elements, along with their related captions.</p>`,
  example: '<figure><img src="https://placehold.it/800x600" alt="placeholder"><figcaption class="doc">Image caption</figcaption></figure>',
  samples: [`<pre><span class="code-line"><span class="highlight-a">&lt;img</span> <span class="highlight-b">src</span>=<span class="highlight-c">&quot;image.png&quot;</span> <span class="highlight-b">alt</span>=<span class="highlight-c">&quot;Image description&quot;</span><span class="highlight-a">/&gt;</span></span></pre>`,
`<pre><span class="code-line"><span class="highlight-a">&lt;figure&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;img</span> <span class="highlight-b">src</span>=<span class="highlight-c">&quot;image.png&quot;</span> <span class="highlight-b">alt</span>=<span class="highlight-c">&quot;Image description&quot;</span><span class="highlight-a">/&gt;</span></span>
<span class="code-line">  <span class="highlight-a">&lt;figcaption&gt;</span>Image caption<span class="highlight-a">&lt;/figcaption&gt;</span></span>
<span class="code-line"><span class="highlight-a">&lt;/figure&gt;</span></span></pre>`],
  notes: [`While not mandatory, it is considered a good practice to always add a <code>alt</code> attribute to image elements on your web apps.`],
  customization: [
    `You can change the text color of <code>&lt;figcaption&gt;</code> elements by changing the value of the <code>--secondary-fore-color</code> variable.`,
    `Universal margin for elements can be changed globally by changing the value of the <code>--universal-margin</code> variable. As a rule of thumb, consider the universal margin to be the distance you want your paragraphs to have from the sides of the screen.`
  ],
  modifiers: [],
  dos: [],
  donts: []
}

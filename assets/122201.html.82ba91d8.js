import{_ as n,o as s,c as a,a as p}from"./app.ab6a619e.js";const t={},o=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4F20\u53C2</span>
<span class="token keyword">var</span> row <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/index&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">row</span><span class="token operator">:</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u63A5\u6536\u53C2\u6570</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token function">decodeURIComponent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>row<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),e=[o];function c(l,u){return s(),a("div",null,e)}var r=n(t,[["render",c],["__file","122201.html.vue"]]);export{r as default};

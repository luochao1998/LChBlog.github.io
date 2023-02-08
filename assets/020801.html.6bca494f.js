import{_ as t,r as e,o as p,c as o,b as n,d as c,e as s,a as i}from"./app.733be93f.js";const l={},u=n("p",null,"vue3\u79FB\u9664\u4E86 $on\uFF0C$off \u548C $once \u7B49\u5B9E\u4F8B\u65B9\u6CD5\uFF0Cvue3\u4E2D\u4F7F\u7528EventBus\u521B\u5EFA\u5168\u5C40\u4E8B\u4EF6\u4FA6\u542C\u5668\u7684\u65B9\u6CD5\u5DF2\u7ECF\u5931\u6548\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5B98\u65B9\u63A8\u8350\u7684\u5E93\u66FF\u4EE3",-1),r={id:"_1-\u5B89\u88C5\u8FD9\u4E2A\u5E93mitt",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#_1-\u5B89\u88C5\u8FD9\u4E2A\u5E93mitt","aria-hidden":"true"},"#",-1),d=s(" 1.\u5B89\u88C5\u8FD9\u4E2A\u5E93"),v={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fdevelopit%2Fmitt",target:"_blank",rel:"noopener noreferrer"},m=s("mitt"),b=i(`<p>$ npm install --save mitt</p><h3 id="_2-mian-js\u6302\u8F7D\u5168\u5C40" tabindex="-1"><a class="header-anchor" href="#_2-mian-js\u6302\u8F7D\u5168\u5C40" aria-hidden="true">#</a> 2.mian.js\u6302\u8F7D\u5168\u5C40</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">import</span> mitt <span class="token keyword">from</span> <span class="token string">&#39;mitt&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> emitter <span class="token operator">=</span> <span class="token function">mitt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$emitter <span class="token operator">=</span> emitter<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u9700\u8981\u89E6\u53D1\u4E8B\u4EF6\u7684\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u9700\u8981\u89E6\u53D1\u4E8B\u4EF6\u7684\u7EC4\u4EF6" aria-hidden="true">#</a> 3.\u9700\u8981\u89E6\u53D1\u4E8B\u4EF6\u7684\u7EC4\u4EF6</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9700\u8981\u89E6\u53D1\u4E8B\u4EF6\u7684\u7EC4\u4EF6</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span> <span class="token comment">//\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> proxy <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        proxy<span class="token punctuation">.</span>$emitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wocao&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u89E6\u53D1\u4E8B\u4EF6\u7684\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u89E6\u53D1\u4E8B\u4EF6\u7684\u7EC4\u4EF6" aria-hidden="true">#</a> 4.\u89E6\u53D1\u4E8B\u4EF6\u7684\u7EC4\u4EF6</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> proxy <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">function</span> <span class="token function">clickFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            proxy<span class="token punctuation">.</span>$emitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> clickFn <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function h(_,f){const a=e("ExternalLinkIcon");return p(),o("div",null,[u,n("h3",r,[k,d,n("a",v,[m,c(a)])]),b])}var y=t(l,[["render",h],["__file","020801.html.vue"]]);export{y as default};

# mintp.js

A minimalist template engine.

## Example Usage

```html
<script id="t1" type="text/html">
<{{ tag }}>{{ content }}</{{ tag }}>
</script>

<script id="t2" type="text/html">
<{{ tag }}>
  {{ mintp('#t1', {tag: 'p', content: tag}) }}
</{{ tag }}>
</script>

<script id="t3" type="text/html">
<{{ tag }}>
  {{ t2.map(mintp.bind(null, '#t2')).join('') }}
</{{ tag }}>
</script>
```

```javascript
document.body.innerHTML = mintp('#t3', {
  tag: 'button',
  t2: [{tag: 'h1'}, {tag: 'h2'}]
});
```

### Result

```html
<button>
  <h1>
    <p>h1</p>
  </h1>
  <h2>
    <p>h2</p>
  </h2>
</button>
```

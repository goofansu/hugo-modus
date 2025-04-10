---
title: "Transform ox-hugo anchors to links"
author: ["Yejun Su"]
date: 2025-02-04T00:44:00+08:00
tags: ["emacs", "hugo"]
draft: false
---

This blog is built with Hugo, and the content is exported from Org files to Hugo-compatible Markdown via [ox-hugo](https://ox-hugo.scripter.co/). Each heading is followed by an anchor after the export:

```markdown
## Heading {#heading}
### Another heading {#another-heading}
```

To make the anchors clickable, Kaushal Modi (the author of ox-hugo) recommends replacing anchors with links ([source](https://discourse.gohugo.io/t/adding-anchor-next-to-headers/1726/9?u=goofansu)), the steps are as follows:

First, create a partial `layouts/partials/headline-hash.html`:

```html
{{ . | replaceRE `(<h[2-9] id="([^"]+)".+)(</h[2-9]+>)` `${1}&nbsp;<a class="headline-hash opacity-0" href="#${2}">#</a> ${3}` | safeHTML }}
```

Next, apply the partial to `.Content`:

```html
{{ partial "headline-hash.html" .Content }}
```

The result will look like this:

```html
<h2 id="heading">Heading&nbsp;<a class="headline-hash" href="#heading">#</a> </h2>
<h3 id="another-heading">Another heading&nbsp;<a class="headline-hash" href="#another-heading">#</a> </h3>
```

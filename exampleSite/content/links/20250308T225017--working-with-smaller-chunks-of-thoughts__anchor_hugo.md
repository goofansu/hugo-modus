---
title: "Working with smaller chunks of thoughts"
author: ["Yejun Su"]
date: 2025-03-08T22:50:00+08:00
tags: ["anchor", "hugo"]
draft: false
---

[Working with smaller chunks of thoughts; adding anchors to paragraphs in Org Mode HTML export](https://sachachua.com/blog/2025/02/adding-an-anchor-to-a-paragraph-in-org-mode-html-export/)

> If the section has a heading, then it's easy to make that linkable with a custom name. I can use `org-set-property` to set the `CUSTOM_ID` property to the anchor name.
>
> If the part that I want to link to is not a heading, I can add an ID by using the `#+ATTR_HTML: :id` ... directive.
>
> Text fragments are even more powerful, because I can link to a specific part of a paragraph. I can link to one segment with something like `#::text=text+to+highlight`. I can specify multiple text fragments to highlight by using `#::text=first+text+to+highlight&text=second+text`, and the browser will automatically scroll to the first highlighted section. I can specify a longer section by using `text=textStart,textEnd`.
>
> -- Sacha Chua

Sacha Chua explains how to add links to different levels of granularity:

1.  Heading
2.  Paragraph
3.  Text fragments

I'm using `ox-hugo`, and it's easy to add links for headings, see [Transform ox-hugo anchors to links]({{< relref "20250204T004450--transform-ox-hugo-anchors-to-links__emacs_hugo.org" >}}). Using `#+ATTR_HTML: :id` to link paragraphs and [text fragments](https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Fragment/Text_fragments) to link specific text are really powerful, but I haven't found an easy way to integrate this into my workflow, as it involves manually coding the links.

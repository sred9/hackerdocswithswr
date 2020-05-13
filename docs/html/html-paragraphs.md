---
title: "HTML Paragraphs"
path: "/html-paragraphs"
id: "html-paragraphs"
description: "The &lt;abbr&gt; tag defines an abbreviated form of a longer word or phrase."
---

## Creating Paragraphs

Paragraph element is used to publish text on the web pages.

Paragraphs are defined with the `<p>` tag. Paragraph tag is a very basic and typically the first tag you will need to publish your text on the web pages. Here's an example:

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

> Note: Browsers built-in style sheets automatically create some space above and below the content of a paragraph (called margin), but you can override it using CSS.


## Closing a Paragraph Element

In HTML 4 and earlier versions, it was enough to initiate a new paragraph using the opening tag. Most browsers will display HTML correctly even if you forget the end tag. For example:

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

The HTML code in the example above will work in most of the web browsers, but don't rely on it. Forgetting the end tag can produce unexpected results or errors.

> Note: For the purposes of forwards-compatibility and good coding practice, it's advisable to use both the opening and closing tags for the paragraphs.

## Creating Line Breaks

The `<br>` tag is used to insert a line break on the web page.

Since the `<br>` is an empty element, so there is no need of corresponding `</br>` tag.

```html
<p>This is a paragraph <br> with line break.</p>
<p>This is <br>another paragraph <br> with line breaks.</p>
```

> Note: Don't use the empty paragraph i.e. `<p></p>` to add extra space in your web pages. The browser may ignore the empty paragraphs since it is logical tag. Use the CSS margin property instead to adjust the space around the elements.

## Creating Horizontal Rules

You can use the `<hr>` tag to create horizontal rules or lines to visually separate content sections on a web page. Like `<br>`, the `<hr>` tag is also an empty element. Here's an example:

```html
<p>This is a paragraph.</p>
<hr>
<p>This is another paragraph.</p>
```

## Managing White Spaces

Normally the browser will display the multiple spaces created inside the HTML code by pressing the space-bar key or tab key on the keyboard as a single space. Multiple line breaks created inside the HTML code through pressing the enter key is also displayed as a single space.

The following paragraphs will be displayed in a single line without any extra space:

```html
<p>This paragraph contains  multiple   spaces    in the source code.</p>
<p>
    This paragraph
    contains multiple tabs and line breaks
    in the source code.
</p>
```

Insert `&nbsp;` for creating extra consecutive spaces, while insert `<br>` tag for creating line breaks on your web pages, as demonstrated in the following example:

```html
<p>This paragraph has multiple&nbsp;&nbsp;&nbsp;spaces.</p>
<p>This paragraph has multiple<br><br>line<br><br><br>breaks.</p>
```

## Defining Preformatted Text

Sometimes, using `&nbsp;`, `<br>`, etc. for managing spaces isn't very convenient. Alternatively, you can use the `<pre>` tag to display spaces, tabs, line breaks, etc. exactly as written in the HTML file. It is very helpful in presenting text where spaces and line breaks are important like poem or code.

The following example will display the text in the browser as it is in the source code:

```html
<pre>
    Twinkle, twinkle, little star, 
    How I wonder what you are! 
    Up above the world so high, 
    Like a diamond in the sky.
</pre>
```

>Tip: Text within the `<pre>` element is typically rendered by the browsers in a monospace or fixed-width font, such as Courier, but you can override this using the CSS font property.
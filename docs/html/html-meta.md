---
title: "HTML Meta"
path: "/html-meta"
id: "html-meta"
description: "The &lt;abbr&gt; tag defines an abbreviated form of a longer word or phrase."
---

## Defining Metadata

The `<meta>` tags are typically used to provide structured metadata such as a document's *keywords*, *description*, *author name*, *character encoding*, and other metadata. Any number of meta tags can be placed inside the [head section](https://www.tutorialrepublic.com/html-tutorial/html-head.php) of an HTML or XHTML document.

Metadata will not be displayed on the web page, but will be machine parsable, and can be used by the browsers, search engines like Google or other web services.

The following section describes the use of meta tags for various purposes.

## Declaring Character Encoding in HTML

Meta tag typically used to declare character encoding inside HTML document.

#### Example

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=html&file=meta-character-encoding "Try this code using online Editor")

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Declaring Character Encoding</title> 
        <meta charset="utf-8">
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
    </html>

To set the character encoding inside a CSS document, the [`@charset`](https://www.tutorialrepublic.com/css-reference/css-charset-rule.php) at-rule is used.

**Note:** [UTF-8](https://en.wikipedia.org/wiki/UTF-8) is a very versatile and recommended character encoding to choose. However, if this is not specified, then the default encoding of the platform is used.

* * *

## Defining the Author of a Document

You can also use the meta tag to clearly define who is the author or creator of the web page.

The author can be an individual, the company as a whole or a third party.

#### Example

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=html&file=meta-author-name "Try this code using online Editor")

    <head>
        <title>Defining Document's Author</title>
        <meta name="author" content="Alexander Howick">
    </head>

**Note:** The `name` attribute of the meta tag defines the name of a piece of document-level metadata, while the `content` attribute gives the corresponding value. The `content` attribute value may contain text and entities, but it may not contain HTML tags.

* * *

## Keywords and Description for Search Engines

Some search engines use metadata especially keywords and descriptions to index web pages; however this may not necessarily be true. Keywords giving extra weight to a document's keywords and description provide a short synopsis of the page. Here's an example:

#### Example

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=html&file=meta-keywords-and-description "Try this code using online Editor")

    <head>
        <title>Defining Keywords and Description</title>  
        <meta name="keywords" content="HTML, CSS, javaScript">
        <meta name="description" content="Easy to understand tutorials and references on HTML, CSS, javaScript and more..."> 
    </head>

**Tip:** Search engines will often use the meta description of a page to create short synopsis for the page when it appear in search results. See the [guidelines for meta description](https://www.tutorialrepublic.com/faq/what-is-the-maximum-length-of-title-and-meta-description-tag.php).

* * *

## Configuring the Viewport for Mobile Devices

You can use the viewport meta tag to display the web pages correctly on mobile devices.

Without a viewport meta tag, mobile browsers render the web pages at typical desktop screen widths, and then scale it down to fit the mobile screen. As a result, it requires pinch-and-zoom to view the web page properly in mobile devices, which is very inconvenient.

The following demonstration shows two web pages — one *with viewport meta tag* and other *without viewport meta tag* set. Open these links on mobile devices to see how it works.

**![Web Page with Viewport Meta Tag](https://www.tutorialrepublic.com/lib/images/with-viewport-meta-tag.png)With Viewport Meta Tag**

**![Web Page without Viewport Meta Tag](https://www.tutorialrepublic.com/lib/images/without-viewport-meta-tag.png)Without Viewport Meta Tag**

The viewport meta tag allows you to set the best viewport size and scaling limits for viewing the web pages on mobile devices. A typical viewport meta tag definition will look as follows:

#### Example

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=html&file=meta-viewport-tag "Try this code using online Editor")

    <head>
        <title>Configuring the Viewport</title> 
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

The `width=device-width` key-value pair inside the `content` attribute sets the width of the viewport to same as the screen width of the device, whereas the `initial-scale=1` sets the initial scale or zoom level to 100% when the page is first loaded by the browser.

**Tip:** Always use the `<meta>` viewport tag in your web pages. It will make your website user-friendly and more accessible on mobile devices like cell phones and tablets.
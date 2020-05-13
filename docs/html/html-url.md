---
title: "HTML URL"
path: "/html-url"
id: "html-url"
description: "The &lt;abbr&gt; tag defines an abbreviated form of a longer word or phrase."
---

## What is URL?

URL stands for **U**niform **R**esource **L**ocator is the global address of documents and other resources on the World Wide Web. Its main purpose is to identify the location of a document and other resources available on the internet, and specify the mechanism for accessing it through a web browser.

For instance, if you look at the address bar of your browser you will see:

https://www.tutorialrepublic.com/html-tutorial/html-url.php

— This is the URL of the web page you are viewing right now.

* * *

## The URL Syntax

The general syntax of URLs is the following:

scheme://host:port/path?query-string#fragment-id

A URL has a linear structure and normally consists of some of the following:

-   **Scheme name** — The scheme identifies the protocol to be used to access the resource on the Internet. The scheme names followed by the three characters `://` (a colon and two slashes). The most commonly used protocols are `http://`, `https://`, `ftp://`, and `mailto://`.
-   **Host name** — The host name identifies the host where resource is located. A hostname is a domain name assigned to a host computer. This is usually a combination of the host's local name with its parent domain's name. For example, `www.tutorialrepublic.com` consists of host's machine name `www` and the domain name `tutorialrepublic.com`.
-   **Port Number** — Servers often deliver more than one type of service, so you must also tell the server what service is being requested. These requests are made by port number. Well-known port numbers for a service are normally omitted from the URL. For example, web service HTTP runs by default over port 80, HTTPS runs by default over port 443.
-   **Path** — The path identifies the specific resource within the host that the user wants to access. For example, `/html/html-url.php`, `/news/technology/`, etc.
-   **Query String** — The query string contains data to be passed to server-side scripts, running on the web server. For example, parameters for a search. The query string preceded by a question mark (`?`), is usually a string of name and value pairs separated by ampersand (`&`), for example, `?first_name=John&last_name=Corner`, `q=mobile+phone`, and so on.
-   **Fragment identifier** — The fragment identifier, if present, specifies a location within the page. Browser may scroll to display that part of the page. The fragment identifier introduced by a hash character (`#`) is the optional last part of a URL for a document.

**Note:** Scheme and host components of a URL are not case-sensitive, but path and query string are case-sensitive. Usually the whole URL is specified in lower case.
# mermaid-it

This package will help you integrate mermaid into the [**markdown-it**]() parser so your lovely diagrams can sit inside markdown files. This package uses Rollup to build both ES and CJS modules and states mermaid as a _peer dependency_ so that you can upgrade to the latest versions without needing an update here.

> This wrapper/connector uses Typescript so if you do too, you can just plugin and use (not that this provides a lot of typing but some containers will complain on the import and make you do time wasting tasks)

## Installation

```
npm install @inocan/mermaid-it
```

## Usage

```js
import markdownIt from "markdown-it";
import Mermaid from "@inocan/mermaid-it";
const mdi = markdownIt();
mdi.use(Mermaid);
mdi.render(`~~~mermaid
  graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]
~~~`);
```

The word `mermaid` after the fence code block opening indicates that the
rest of the fenced block should be passed to mermaid for processing.
This example used the `~~~` fence marker since the multi-line string
in javascript is the same character,
but either `~~~` or ` ``` ` works.


### Customize mermaid

```js
import MarkdownIt from 'markdown-it';
import MarkdownItKatex from '@liradb2000/markdown-it-mermaid';

var md = MarkdownIt({
        html: false,
        linkify: true,
        typographer: true,
        breaks: true,
        xhtmlOut: false,
    });

md.use(MarkdownItMermaid,{
  startOnLoad: false,
  securityLevel: true,
  theme: "default",
  flowchart:{
    htmlLabels: false,
    useMaxWidth: true,
  }
  ...or any options
})
```

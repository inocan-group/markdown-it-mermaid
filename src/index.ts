import Mermaid from "mermaid";
import type { PluginWithOptions } from "markdown-it";
import { v3 as hash } from "murmurhash";

const htmlEntities = (str: string) =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const MermaidChart = (code: string) => {
  try {
    var domId = "render" + hash(code, 42).toString();
    console.log("hash", { domId, code });

    Mermaid.mermaidAPI.render(domId, code, (sc) => {
      console.log("mermaid has returned");

      code = sc;
    });
    return `<div class="mermaid">${code}</div>`;
  } catch (err) {
    return `<pre>[Mermaid]: ${htmlEntities(err.name)}: ${htmlEntities(
      err.message
    )}</pre>`;
  }
};

const MermaidPlugIn: PluginWithOptions = (md, opts) => {
  Mermaid.initialize(Object.assign(MermaidPlugIn, opts));

  if (!md.renderer.rules.fence) {
    throw new Error(
      "Default markdown renderer was not found while trying to use mermaid-it!"
    );
  }

  const defaultRenderer = md.renderer.rules.fence.bind(md.renderer.rules);

  md.renderer.rules.fence = (tokens, idx, opts, env, self) => {
    const token = tokens[idx];
    const code = token.content.trim();
    if (token.info.startsWith("mermaid")) {
      return MermaidChart(code);
    }
    return defaultRenderer(tokens, idx, opts, env, self);
  };
};

export default MermaidPlugIn;

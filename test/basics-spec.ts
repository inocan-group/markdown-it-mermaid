var Mdi = require("markdown-it");
import mermaid from "../src";

function getMd(withMermaid: boolean = true) {
  const mdi = new Mdi();
  if (withMermaid) {
    mdi.use(mermaid);
  }
  return mdi;
}

describe("mermaid plugin basics => ", () => {
  it("MDI is behaving normally with basic markdown content", () => {
    const mdi = getMd(false);
    expect(mdi.render("# Hello world").trim()).toBe("<h1>Hello world</h1>");
  });

  it("MDI is behaving normally with basic markdown content (and Mermaid plugin added)", () => {
    const mdi = getMd();
    expect(mdi.render("# Hello world").trim()).toBe("<h1>Hello world</h1>");
  });
});

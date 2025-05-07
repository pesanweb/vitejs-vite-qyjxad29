import { html, fixture, expect } from '@open-wc/testing';
import "../hax-wisuda.js";

describe("HaxWisuda test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <hax-wisuda
        title="title"
      ></hax-wisuda>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});

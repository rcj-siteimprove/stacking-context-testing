import { Node, Query } from "@siteimprove/alfa-dom";

import { getElementsInRenderingOrder } from "@siteimprove/alfa-rules/dist/common/dom/get-elements-in-rendering-order.js";

import { Native as DomNative } from "@siteimprove/alfa-dom/dist/native.js";
import { Native as DeviceNative } from "@siteimprove/alfa-device/dist/native.js";

const device = DeviceNative.fromWindow(window);
const doc = await DomNative.fromNode(window.document);

const testContainer = Query.getElementIdMap(Node.from(doc))
  .get("test-container")
  .getUnsafe(
    'Could not find test container: no element with `id="test-container"` exists.',
  );

const { value: expected } = testContainer
  .attribute("data-expected")
  .getUnsafe("The test container needs to have a `data-expected` attribute.");

const actual = getElementsInRenderingOrder(testContainer, device)
  .map((element) => element.id)
  .collect((id) => id)
  .toArray()
  .join();

document.getElementById("test-container").dataset.actual = actual; // If we want to be able to inspect the outcome from a browser automation tool at some point.

console.assert(
  actual === expected,
  `The elements were not returned in the expected order.`,
);
console.log({ actual, expected });

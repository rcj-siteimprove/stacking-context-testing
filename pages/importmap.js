const importMap = {
  imports: {
    "@siteimprove/alfa-act":
      "../node_modules/@siteimprove/alfa-act/dist/index.js",
    "@siteimprove/alfa-affine":
      "../node_modules/@siteimprove/alfa-affine/dist/index.js",
    "@siteimprove/alfa-applicative":
      "../node_modules/@siteimprove/alfa-applicative/dist/index.js",
    "@siteimprove/alfa-aria":
      "../node_modules/@siteimprove/alfa-aria/dist/index.js",
    "@siteimprove/alfa-array":
      "../node_modules/@siteimprove/alfa-array/dist/index.js",
    "@siteimprove/alfa-bits":
      "../node_modules/@siteimprove/alfa-bits/dist/index.js",
    "@siteimprove/alfa-branched":
      "../node_modules/@siteimprove/alfa-branched/dist/index.js",
    "@siteimprove/alfa-cache":
      "../node_modules/@siteimprove/alfa-cache/dist/index.js",
    "@siteimprove/alfa-callback":
      "../node_modules/@siteimprove/alfa-callback/dist/index.js",
    "@siteimprove/alfa-cascade":
      "../node_modules/@siteimprove/alfa-cascade/dist/index.js",
    "@siteimprove/alfa-clone":
      "../node_modules/@siteimprove/alfa-clone/dist/index.js",
    "@siteimprove/alfa-collection":
      "../node_modules/@siteimprove/alfa-collection/dist/index.js",
    "@siteimprove/alfa-comparable":
      "../node_modules/@siteimprove/alfa-comparable/dist/index.js",
    "@siteimprove/alfa-compatibility":
      "../node_modules/@siteimprove/alfa-compatibility/dist/index.js",
    "@siteimprove/alfa-continuation":
      "../node_modules/@siteimprove/alfa-continuation/dist/index.js",
    "@siteimprove/alfa-css":
      "../node_modules/@siteimprove/alfa-css/dist/index.js",
    "@siteimprove/alfa-css-feature":
      "../node_modules/@siteimprove/alfa-css-feature/dist/index.js",
    "@siteimprove/alfa-device":
      "../node_modules/@siteimprove/alfa-device/dist/index.js",
    "@siteimprove/alfa-dom":
      "../node_modules/@siteimprove/alfa-dom/dist/index.js",
    "@siteimprove/alfa-earl":
      "../node_modules/@siteimprove/alfa-earl/dist/index.js",
    "@siteimprove/alfa-either":
      "../node_modules/@siteimprove/alfa-either/dist/index.js",
    "@siteimprove/alfa-emitter":
      "../node_modules/@siteimprove/alfa-emitter/dist/index.js",
    "@siteimprove/alfa-encoding":
      "../node_modules/@siteimprove/alfa-encoding/dist/index.js",
    "@siteimprove/alfa-equatable":
      "../node_modules/@siteimprove/alfa-equatable/dist/index.js",
    "@siteimprove/alfa-flags":
      "../node_modules/@siteimprove/alfa-flags/dist/index.js",
    "@siteimprove/alfa-fnv":
      "../node_modules/@siteimprove/alfa-fnv/dist/index.js",
    "@siteimprove/alfa-foldable":
      "../node_modules/@siteimprove/alfa-foldable/dist/index.js",
    "@siteimprove/alfa-functor":
      "../node_modules/@siteimprove/alfa-functor/dist/index.js",
    "@siteimprove/alfa-future":
      "../node_modules/@siteimprove/alfa-future/dist/index.js",
    "@siteimprove/alfa-generator":
      "../node_modules/@siteimprove/alfa-generator/dist/index.js",
    "@siteimprove/alfa-graph":
      "../node_modules/@siteimprove/alfa-graph/dist/index.js",
    "@siteimprove/alfa-hash":
      "../node_modules/@siteimprove/alfa-hash/dist/index.js",
    "@siteimprove/alfa-http":
      "../node_modules/@siteimprove/alfa-http/dist/index.js",
    "@siteimprove/alfa-iana":
      "../node_modules/@siteimprove/alfa-iana/dist/index.js",
    "@siteimprove/alfa-iterable":
      "../node_modules/@siteimprove/alfa-iterable/dist/index.js",
    "@siteimprove/alfa-json":
      "../node_modules/@siteimprove/alfa-json/dist/index.js",
    "@siteimprove/alfa-json-ld":
      "../node_modules/@siteimprove/alfa-json-ld/dist/index.js",
    "@siteimprove/alfa-lazy":
      "../node_modules/@siteimprove/alfa-lazy/dist/index.js",
    "@siteimprove/alfa-list":
      "../node_modules/@siteimprove/alfa-list/dist/index.js",
    "@siteimprove/alfa-map":
      "../node_modules/@siteimprove/alfa-map/dist/index.js",
    "@siteimprove/alfa-mapper":
      "../node_modules/@siteimprove/alfa-mapper/dist/index.js",
    "@siteimprove/alfa-math":
      "../node_modules/@siteimprove/alfa-math/dist/index.js",
    "@siteimprove/alfa-monad":
      "../node_modules/@siteimprove/alfa-monad/dist/index.js",
    "@siteimprove/alfa-network":
      "../node_modules/@siteimprove/alfa-network/dist/index.js",
    "@siteimprove/alfa-option":
      "../node_modules/@siteimprove/alfa-option/dist/index.js",
    "@siteimprove/alfa-parser":
      "../node_modules/@siteimprove/alfa-parser/dist/index.js",
    "@siteimprove/alfa-performance":
      "../node_modules/@siteimprove/alfa-performance/dist/index.js",
    "@siteimprove/alfa-predicate":
      "../node_modules/@siteimprove/alfa-predicate/dist/index.js",
    "@siteimprove/alfa-promise":
      "../node_modules/@siteimprove/alfa-promise/dist/index.js",
    "@siteimprove/alfa-record":
      "../node_modules/@siteimprove/alfa-record/dist/index.js",
    "@siteimprove/alfa-rectangle":
      "../node_modules/@siteimprove/alfa-rectangle/dist/index.js",
    "@siteimprove/alfa-reducer":
      "../node_modules/@siteimprove/alfa-reducer/dist/index.js",
    "@siteimprove/alfa-refinement":
      "../node_modules/@siteimprove/alfa-refinement/dist/index.js",
    "@siteimprove/alfa-result":
      "../node_modules/@siteimprove/alfa-result/dist/index.js",
    "@siteimprove/alfa-rules":
      "../node_modules/@siteimprove/alfa-rules/dist/index.js",
    "@siteimprove/alfa-sarif":
      "../node_modules/@siteimprove/alfa-sarif/dist/index.js",
    "@siteimprove/alfa-selective":
      "../node_modules/@siteimprove/alfa-selective/dist/index.js",
    "@siteimprove/alfa-selector":
      "../node_modules/@siteimprove/alfa-selector/dist/index.js",
    "@siteimprove/alfa-sequence":
      "../node_modules/@siteimprove/alfa-sequence/dist/index.js",
    "@siteimprove/alfa-set":
      "../node_modules/@siteimprove/alfa-set/dist/index.js",
    "@siteimprove/alfa-slice":
      "../node_modules/@siteimprove/alfa-slice/dist/index.js",
    "@siteimprove/alfa-string":
      "../node_modules/@siteimprove/alfa-string/dist/index.js",
    "@siteimprove/alfa-style":
      "../node_modules/@siteimprove/alfa-style/dist/index.js",
    "@siteimprove/alfa-table":
      "../node_modules/@siteimprove/alfa-table/dist/index.js",
    "@siteimprove/alfa-test":
      "../node_modules/@siteimprove/alfa-test/dist/index.js",
    "@siteimprove/alfa-test-deprecated":
      "../node_modules/@siteimprove/alfa-test-deprecated/dist/index.js",
    "@siteimprove/alfa-thenable":
      "../node_modules/@siteimprove/alfa-thenable/dist/index.js",
    "@siteimprove/alfa-thunk":
      "../node_modules/@siteimprove/alfa-thunk/dist/index.js",
    "@siteimprove/alfa-time":
      "../node_modules/@siteimprove/alfa-time/dist/index.js",
    "@siteimprove/alfa-toolchain":
      "../node_modules/@siteimprove/alfa-toolchain/dist/index.js",
    "@siteimprove/alfa-trampoline":
      "../node_modules/@siteimprove/alfa-trampoline/dist/index.js",
    "@siteimprove/alfa-tree":
      "../node_modules/@siteimprove/alfa-tree/dist/index.js",
    "@siteimprove/alfa-trilean":
      "../node_modules/@siteimprove/alfa-trilean/dist/index.js",
    "@siteimprove/alfa-tuple":
      "../node_modules/@siteimprove/alfa-tuple/dist/index.js",
    "@siteimprove/alfa-url":
      "../node_modules/@siteimprove/alfa-url/dist/index.js",
    "@siteimprove/alfa-wcag":
      "../node_modules/@siteimprove/alfa-wcag/dist/index.js",
    "@siteimprove/alfa-web":
      "../node_modules/@siteimprove/alfa-web/dist/index.js",
    "@siteimprove/alfa-xpath":
      "../node_modules/@siteimprove/alfa-xpath/dist/index.js",

    "@siteimprove/": "../node_modules/@siteimprove/",
  },
};

const im = document.createElement("script");
im.type = "importmap";
im.textContent = JSON.stringify(importMap);
document.currentScript.after(im);
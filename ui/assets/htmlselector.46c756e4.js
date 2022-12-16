import { s as serviceProxy, _ as __vitePreload } from "./service.511decc4.js";
(async () => {
  console.log("htmlselector init");
  await serviceProxy.init();
  console.log("htmlselector service init");
  const App = (await __vitePreload(() => import("./AppHTMLSelector.c7020a4e.js"), true ? ["assets/AppHTMLSelector.c7020a4e.js","assets/AppHTMLSelector.bb0ed3cc.css","assets/common.d479999e.css","assets/sieve.d6bf62de.js","assets/sieve.aa0e85c0.css","assets/service.511decc4.js","assets/escape-key.178aa387.js"] : void 0)).default;
  new App({
    target: document.body
  });
})();

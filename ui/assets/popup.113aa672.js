import { s as serviceProxy, _ as __vitePreload } from "./service.511decc4.js";
import "./sentry.a22109a5.js";
(async () => {
  await serviceProxy.init();
  const App = (await __vitePreload(() => import("./AppPopup.6623a5c9.js"), true ? ["assets/AppPopup.6623a5c9.js","assets/AppPopup.b64b63cb.css","assets/common.d479999e.css","assets/sieve.d6bf62de.js","assets/sieve.aa0e85c0.css","assets/service.511decc4.js","assets/Selector.665da9ec.js","assets/Selector.63176ecc.css"] : void 0)).default;
  const app = new App({
    target: document.body
  });
  window.App = app;
})();

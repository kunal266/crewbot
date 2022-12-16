import { s as serviceProxy, _ as __vitePreload } from "./service.511decc4.js";
/* empty css                 */import "./sentry.a22109a5.js";
var jquery_atwho = "";
(async () => {
  await serviceProxy.init();
  const CookieStore = (await __vitePreload(() => import("./store-cookie.cf48c6ed.js"), true ? [] : void 0)).default;
  const Store = serviceProxy.store.SimpleStore;
  const App = (await __vitePreload(() => import("./AppExt.a94c7ae9.js"), true ? ["assets/AppExt.a94c7ae9.js","assets/AppExt.ceb216f5.css","assets/sieve.d6bf62de.js","assets/sieve.aa0e85c0.css","assets/service.511decc4.js","assets/Selector.665da9ec.js","assets/Selector.63176ecc.css","assets/escape-key.178aa387.js"] : void 0)).default;
  const cookieStore = new CookieStore();
  const store = new Store("ui:store");
  await store.__init__();
  let storeValues = cookieStore.getAll();
  storeValues.forEach((item) => {
    store.set(item.key, item.value);
    cookieStore.del(item.key);
  });
  const app = new App({
    target: document.body
  });
  app.store = store;
  window.App = app;
})();

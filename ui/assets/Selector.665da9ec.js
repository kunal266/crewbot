import { s as serviceProxy, w as withWindow } from "./service.511decc4.js";
import { n as noop, ae as subscribe, a0 as run_all, s as safe_not_equal, ad as is_function, a1 as tick, a as SvelteComponent, i as init, H as empty, g as insert, I as group_outros, E as transition_out, J as check_outros, D as transition_in, j as detach, a3 as createEventDispatcher, a5 as afterUpdate, a4 as onDestroy, G as bubble, x as create_component, y as mount_component, as as get_spread_update, at as get_spread_object, F as destroy_component, an as assign, ac as base, A as Api, V as View$1, Q as Editor, b as space, k as getContext, m as component_subscribe, e as element, t as text, c as attr, u as urls, h as append, l as listen$1, v as set_data, r as destroy_each } from "./sieve.d6bf62de.js";
const subscriber_queue = [];
function readable(value, start2) {
  return {
    subscribe: writable(value, start2).subscribe
  };
}
function writable(value, start2 = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start2(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop;
      }
    };
    const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
      values[i] = value;
      pending &= ~(1 << i);
      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    inited = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
    };
  });
}
function parse(str, loose) {
  if (str instanceof RegExp)
    return { keys: false, pattern: str };
  var c, o, tmp, ext, keys = [], pattern = "", arr = str.split("/");
  arr[0] || arr.shift();
  while (tmp = arr.shift()) {
    c = tmp[0];
    if (c === "*") {
      keys.push("wild");
      pattern += "/(.*)";
    } else if (c === ":") {
      o = tmp.indexOf("?", 1);
      ext = tmp.indexOf(".", 1);
      keys.push(tmp.substring(1, !!~o ? o : !!~ext ? ext : tmp.length));
      pattern += !!~o && !~ext ? "(?:/([^/]+?))?" : "/([^/]+?)";
      if (!!~ext)
        pattern += (!!~o ? "?" : "") + "\\" + tmp.substring(ext);
    } else {
      pattern += "/" + tmp;
    }
  }
  return {
    keys,
    pattern: new RegExp("^" + pattern + (loose ? "(?=$|/)" : "/?$"), "i")
  };
}
function create_else_block$1(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [ctx[2]];
  var switch_value = ctx[0];
  function switch_props(ctx2) {
    let switch_instance_props = {};
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props());
    switch_instance.$on("routeEvent", ctx[7]);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = dirty & 4 ? get_spread_update(switch_instance_spread_levels, [get_spread_object(ctx2[2])]) : {};
      if (switch_value !== (switch_value = ctx2[0])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          switch_instance.$on("routeEvent", ctx2[7]);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block$1(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [{ params: ctx[1] }, ctx[2]];
  var switch_value = ctx[0];
  function switch_props(ctx2) {
    let switch_instance_props = {};
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props());
    switch_instance.$on("routeEvent", ctx[6]);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = dirty & 6 ? get_spread_update(switch_instance_spread_levels, [
        dirty & 2 && { params: ctx2[1] },
        dirty & 4 && get_spread_object(ctx2[2])
      ]) : {};
      if (switch_value !== (switch_value = ctx2[0])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          switch_instance.$on("routeEvent", ctx2[6]);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$1, create_else_block$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[1])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function getLocation() {
  const hashPosition = window.location.href.indexOf("#/");
  let location2 = hashPosition > -1 ? window.location.href.substr(hashPosition + 1) : "/";
  const qsPosition = location2.indexOf("?");
  let querystring2 = "";
  if (qsPosition > -1) {
    querystring2 = location2.substr(qsPosition + 1);
    location2 = location2.substr(0, qsPosition);
  }
  return { location: location2, querystring: querystring2 };
}
const loc = readable(null, function start(set) {
  set(getLocation());
  const update = () => {
    set(getLocation());
  };
  window.addEventListener("hashchange", update, false);
  return function stop() {
    window.removeEventListener("hashchange", update, false);
  };
});
const location = derived(loc, ($loc) => $loc.location);
const querystring = derived(loc, ($loc) => $loc.querystring);
const params = writable(void 0);
async function push(location2) {
  if (!location2 || location2.length < 1 || location2.charAt(0) != "/" && location2.indexOf("#/") !== 0) {
    throw Error("Invalid parameter location");
  }
  await tick();
  history.replaceState({
    ...history.state,
    __svelte_spa_router_scrollX: window.scrollX,
    __svelte_spa_router_scrollY: window.scrollY
  }, void 0, void 0);
  window.location.hash = (location2.charAt(0) == "#" ? "" : "#") + location2;
}
async function replace(location2) {
  if (!location2 || location2.length < 1 || location2.charAt(0) != "/" && location2.indexOf("#/") !== 0) {
    throw Error("Invalid parameter location");
  }
  await tick();
  const dest = (location2.charAt(0) == "#" ? "" : "#") + location2;
  try {
    const newState = { ...history.state };
    delete newState["__svelte_spa_router_scrollX"];
    delete newState["__svelte_spa_router_scrollY"];
    window.history.replaceState(newState, void 0, dest);
  } catch (e) {
    console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.");
  }
  window.dispatchEvent(new Event("hashchange"));
}
function instance$2($$self, $$props, $$invalidate) {
  let { routes = {} } = $$props;
  let { prefix = "" } = $$props;
  let { restoreScrollState = false } = $$props;
  class RouteItem {
    constructor(path, component2) {
      if (!component2 || typeof component2 != "function" && (typeof component2 != "object" || component2._sveltesparouter !== true)) {
        throw Error("Invalid component object");
      }
      if (!path || typeof path == "string" && (path.length < 1 || path.charAt(0) != "/" && path.charAt(0) != "*") || typeof path == "object" && !(path instanceof RegExp)) {
        throw Error('Invalid value for "path" argument - strings must start with / or *');
      }
      const { pattern, keys } = parse(path);
      this.path = path;
      if (typeof component2 == "object" && component2._sveltesparouter === true) {
        this.component = component2.component;
        this.conditions = component2.conditions || [];
        this.userData = component2.userData;
        this.props = component2.props || {};
      } else {
        this.component = () => Promise.resolve(component2);
        this.conditions = [];
        this.props = {};
      }
      this._pattern = pattern;
      this._keys = keys;
    }
    match(path) {
      if (prefix) {
        if (typeof prefix == "string") {
          if (path.startsWith(prefix)) {
            path = path.substr(prefix.length) || "/";
          } else {
            return null;
          }
        } else if (prefix instanceof RegExp) {
          const match = path.match(prefix);
          if (match && match[0]) {
            path = path.substr(match[0].length) || "/";
          } else {
            return null;
          }
        }
      }
      const matches = this._pattern.exec(path);
      if (matches === null) {
        return null;
      }
      if (this._keys === false) {
        return matches;
      }
      const out = {};
      let i = 0;
      while (i < this._keys.length) {
        try {
          out[this._keys[i]] = decodeURIComponent(matches[i + 1] || "") || null;
        } catch (e) {
          out[this._keys[i]] = null;
        }
        i++;
      }
      return out;
    }
    async checkConditions(detail) {
      for (let i = 0; i < this.conditions.length; i++) {
        if (!await this.conditions[i](detail)) {
          return false;
        }
      }
      return true;
    }
  }
  const routesList = [];
  if (routes instanceof Map) {
    routes.forEach((route, path) => {
      routesList.push(new RouteItem(path, route));
    });
  } else {
    Object.keys(routes).forEach((path) => {
      routesList.push(new RouteItem(path, routes[path]));
    });
  }
  let component = null;
  let componentParams = null;
  let props = {};
  const dispatch = createEventDispatcher();
  async function dispatchNextTick(name, detail) {
    await tick();
    dispatch(name, detail);
  }
  let previousScrollState = null;
  let popStateChanged = null;
  if (restoreScrollState) {
    popStateChanged = (event) => {
      if (event.state && event.state.__svelte_spa_router_scrollY) {
        previousScrollState = event.state;
      } else {
        previousScrollState = null;
      }
    };
    window.addEventListener("popstate", popStateChanged);
    afterUpdate(() => {
      if (previousScrollState) {
        window.scrollTo(previousScrollState.__svelte_spa_router_scrollX, previousScrollState.__svelte_spa_router_scrollY);
      } else {
        window.scrollTo(0, 0);
      }
    });
  }
  let lastLoc = null;
  let componentObj = null;
  const unsubscribeLoc = loc.subscribe(async (newLoc) => {
    lastLoc = newLoc;
    let i = 0;
    while (i < routesList.length) {
      const match = routesList[i].match(newLoc.location);
      if (!match) {
        i++;
        continue;
      }
      const detail = {
        route: routesList[i].path,
        location: newLoc.location,
        querystring: newLoc.querystring,
        userData: routesList[i].userData,
        params: match && typeof match == "object" && Object.keys(match).length ? match : null
      };
      if (!await routesList[i].checkConditions(detail)) {
        $$invalidate(0, component = null);
        componentObj = null;
        dispatchNextTick("conditionsFailed", detail);
        return;
      }
      dispatchNextTick("routeLoading", Object.assign({}, detail));
      const obj = routesList[i].component;
      if (componentObj != obj) {
        if (obj.loading) {
          $$invalidate(0, component = obj.loading);
          componentObj = obj;
          $$invalidate(1, componentParams = obj.loadingParams);
          $$invalidate(2, props = {});
          dispatchNextTick("routeLoaded", Object.assign({}, detail, {
            component,
            name: component.name,
            params: componentParams
          }));
        } else {
          $$invalidate(0, component = null);
          componentObj = null;
        }
        const loaded = await obj();
        if (newLoc != lastLoc) {
          return;
        }
        $$invalidate(0, component = loaded && loaded.default || loaded);
        componentObj = obj;
      }
      if (match && typeof match == "object" && Object.keys(match).length) {
        $$invalidate(1, componentParams = match);
      } else {
        $$invalidate(1, componentParams = null);
      }
      $$invalidate(2, props = routesList[i].props);
      dispatchNextTick("routeLoaded", Object.assign({}, detail, {
        component,
        name: component.name,
        params: componentParams
      })).then(() => {
        params.set(componentParams);
      });
      return;
    }
    $$invalidate(0, component = null);
    componentObj = null;
    params.set(void 0);
  });
  onDestroy(() => {
    unsubscribeLoc();
    popStateChanged && window.removeEventListener("popstate", popStateChanged);
  });
  function routeEvent_handler(event) {
    bubble.call(this, $$self, event);
  }
  function routeEvent_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("routes" in $$props2)
      $$invalidate(3, routes = $$props2.routes);
    if ("prefix" in $$props2)
      $$invalidate(4, prefix = $$props2.prefix);
    if ("restoreScrollState" in $$props2)
      $$invalidate(5, restoreScrollState = $$props2.restoreScrollState);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 32) {
      history.scrollRestoration = restoreScrollState ? "manual" : "auto";
    }
  };
  return [
    component,
    componentParams,
    props,
    routes,
    prefix,
    restoreScrollState,
    routeEvent_handler,
    routeEvent_handler_1
  ];
}
class Router extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$1, safe_not_equal, {
      routes: 3,
      prefix: 4,
      restoreScrollState: 5
    });
  }
}
var icomoon = "";
var tailwind = "";
var app = "";
const { CFG: { URL, SENTRY } } = serviceProxy;
window.LOCALE = "en-US";
window.SENTRY = SENTRY;
window.URL_ROOT = URL.APP;
window.URL_UTILS = URL.UTILITIES;
window.URL_WEBSITE = URL.WEBSITE;
const userStates = serviceProxy.state;
const _$3 = window._;
if (!_$3) {
  throw new Error("ADD _");
}
const Backbone$2 = window.Backbone;
if (!Backbone$2) {
  throw new Error("ADD Backbone");
}
const instance$1 = _$3.extend({}, Backbone$2);
function listen(topic, listener) {
  function delayedExecutor() {
    const args = _$3.toArray(arguments);
    setTimeout(function() {
      listener.apply(this, args);
    }, 50);
  }
  withWindow(() => serviceProxy.gEvents.on(topic, delayedExecutor));
}
function propagateEvent(name) {
  listen(name, function(arg1, arg2) {
    instance$1.trigger(name, arg1, arg2);
  });
}
listen("service:active", onServiceActivation);
listen("change:pref:service.user_id", onChangeUser);
listen("store:clients:create", entityOpListener("clients", "I"));
listen("store:clients:update", entityOpListener("clients", "U"));
listen("store:sieve_data:create", entityOpListener("sieve_data", "I"));
listen("store:sieves:create", entityOpListener("sieves", "I"));
listen("store:sieves:update", entityOpListener("sieves", "U"));
listen("worker:sieve:state", onWorkerSieveState);
listen("store:tags:create", entityOpListener("tags", "I"));
listen("store:tags:update", entityOpListener("tags", "U"));
listen("store:tags:destroy", entityOpListener("tags", "U"));
listen("store:users:update", entityOpListener("users", "U"));
listen("store:macros:create", entityOpListener("macros", "I"));
listen("store:macros:update", entityOpListener("macros", "U"));
listen("store:macros:destroy", entityOpListener("macros", "U"));
setTimeout(() => userStates.trigger("change"), 500);
withWindow(() => userStates.on("change", () => instance$1.trigger("user_states", userStates.attributes)));
propagateEvent("change:error");
propagateEvent("change:unread");
function onServiceActivation(active) {
  instance$1.trigger("service:state", active);
}
function onChangeUser() {
  window.location.reload();
}
function entityOpListener(name, op) {
  return function(doc) {
    setTimeout(function() {
      const event = {
        name,
        id: doc.id,
        op,
        ts_mod: doc.ts_mod
      };
      instance$1.trigger(name, event);
      instance$1.trigger(name + ":" + doc.id, event);
    }, 100);
  };
}
function onWorkerSieveState(doc) {
  const event = {
    rel: "sieves",
    id: doc.id,
    ts_mod: Date.now(),
    doc
  };
  instance$1.trigger("sieves:run_state", event);
  instance$1.trigger("sieves:run_state:" + doc.id, event);
}
const User = base.Model.extend({});
const Self = User.extend({
  url: "/users/self/init",
  defaults() {
    return {
      constraint: { interval: 5 },
      prefs: {},
      features: {}
    };
  },
  isLoggedIn() {
    return !!this.attributes.id;
  },
  isEnterprise() {
    return !!this.attributes.account_id;
  },
  isFlexi() {
    return this.attributes.constraint.flexi;
  }
});
const Label = base.Model.extend({});
const Labels = base.Collection.extend({
  model: Label,
  url: "/tags",
  findByName: function(name) {
    return this.find(function(m) {
      return m.get("name") === name;
    });
  },
  getOrCreateLabels: async function(names) {
    if (_.isString(names)) {
      names = names.split(",").map((n) => n.trim());
    }
    const labels = App.labels.filter((l) => names.includes(l.get("name"))).map((l) => l.toJSON());
    const allNames = App.labels.pluck("name");
    const newNames = _.difference(names, allNames);
    for (let i = 0; i < newNames.length; i += 1) {
      const name = newNames[i];
      const tag = await Api.api("/tags", "POST", { name });
      labels.push(tag);
    }
    return labels;
  },
  async fetch(options = {
    data: {
      "state": 0,
      "_opt": {
        order: ["name"],
        limit: 1e3
      }
    }
  }) {
    Labels.__super__.fetch.call(this, options);
  }
});
var ModelLabel = {
  Label,
  Labels
};
async function checkSieveConstraint(count = 0) {
  const defaults = { isOverLimit: false, isFlexi: false };
  const auth = serviceProxy.auth;
  if (auth && !await auth.isLoggedIn()) {
    if (await auth.isLegacy()) {
      return defaults;
    } else {
      const limit = 25;
      const { total_count } = await serviceProxy.store.SieveStore.find({ "state.in": [40, 45] }, { only: ["id"], limit: 1 });
      return { ...defaults, limit, count: total_count, isOverLimit: total_count + count > limit };
    }
  }
  const res = await Api.api("/users/sieve-count");
  return {
    ...res,
    isOverLimit: res.isFlexi ? false : res.count + count > res.limit
  };
}
const domo = window.domo;
if (!domo) {
  throw new Error("ADD domo");
}
const _$2 = window._;
if (!_$2) {
  throw new Error("ADD _");
}
const $$1 = window.jQuery;
if (!$$1) {
  throw new Error("ADD jQuery");
}
const Backbone$1 = window.Backbone;
if (!Backbone$1) {
  throw new Error("ADD Backbone");
}
const PreRenderedForm = View$1.Form.extend({
  name: "PreRenderedForm",
  fields: [],
  postInit: function() {
    this.model || (this.model = new Backbone$1.Model());
    this.initEditors();
  },
  getFieldEl: function(field) {
    const selectorValue = field.name.replace("[", "\\[").replace("]", "\\]");
    return this.$el.find("[name=" + selectorValue + "]");
  },
  initEditors: function() {
    this.editors = _$2.map(this.fields, function(field) {
      const editor = Editor.create(field.type, {
        param: field,
        parent: this,
        model: this.model,
        el: this.getFieldEl(field).parent()[0]
      }).acquire();
      return editor;
    }, this);
  },
  validateFields: function() {
    const errors = _$2.filter(this.editors, function(editor) {
      return !editor.isValid();
    }, this);
    return errors;
  }
});
var View = {
  PreRenderedForm
};
const $ = window.jQuery;
if (!$) {
  throw new Error("ADD jQuery");
}
const _$1 = window._;
if (!_$1) {
  throw new Error("ADD _");
}
const SearchForm = View.PreRenderedForm.extend({
  name: "SearchForm",
  events: {
    "input input": "event_input"
  },
  fields: [{ name: "q", type: "text" }],
  event_input: function() {
    this.search();
  },
  postInit: function() {
    const self = this;
    const tags = ["is:\n on,off,read,unread", "has:\nerror", "label:\ncustom labels", "in:\ndeleted items"];
    const is = ["on", "off", "read", "unread"];
    const isList = _$1.map(is, (value, i) => {
      return { "id": i, "name": value };
    });
    const tagList = _$1.map(tags, (value, i) => {
      return { "id": i, "name": value };
    });
    $(this.el.q).atwho({
      at: "has:",
      data: ["error"]
    }).atwho({
      at: "in:",
      data: ["trash"]
    }).atwho({
      at: "is:",
      callbacks: {
        filter: (query, data, searchKey) => {
          let _results;
          let i;
          let item;
          let len;
          _results = [];
          for (i = 0, len = data.length; i < len; i++) {
            item = data[i];
            if (item[searchKey].toLowerCase().indexOf(query.toLowerCase()) == 0 || query === "") {
              _results.push(item);
            }
          }
          return _results;
        }
      },
      data: isList
    }).atwho({
      at: "label:",
      limit: 10,
      callbacks: {
        matcher: (flag, subtext, should_startWithSpace, acceptSpaceBar) => {
          let _a;
          let _y;
          let match;
          let regexp;
          let space2;
          flag = flag.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
          if (should_startWithSpace) {
            flag = "(?:^|\\s)" + flag;
          }
          _a = decodeURI("%C3%80");
          _y = decodeURI("%C3%BF");
          space2 = acceptSpaceBar ? " " : "";
          regexp = new RegExp(flag + "([A-Za-z" + _a + "-" + _y + "0-9_" + space2 + `"'.+-]*)$|` + flag + "([^\\x00-\\xff]*)$", "gi");
          match = regexp.exec(subtext);
          if (match) {
            return match[2] || match[1];
          } else {
            return null;
          }
        },
        filter: (query, data, searchKey) => {
          let _results;
          let i;
          let item;
          let len;
          _results = [];
          const labelList = self.options.labels.map((value, i2) => {
            const labelName = value.get("name").replace(/"/g, escape('"'));
            return { "id": i2, "name": labelName.indexOf(" ") >= 0 ? '"' + labelName + '"' : labelName };
          });
          for (i = 0, len = labelList.length; i < len; i++) {
            item = labelList[i];
            const val = item[searchKey].toLowerCase();
            const trimmedVal = val.replace('"', "").replace("'", "");
            if (trimmedVal.indexOf(query.toLowerCase()) == 0 || val.indexOf(query.toLowerCase()) == 0 || query === "") {
              _results.push(item);
            }
          }
          return _results;
        }
      },
      data: []
    }).atwho({
      at: "",
      startWithSpace: true,
      callbacks: {
        filter: (query, data, searchKey) => {
          let _results;
          let i;
          let item;
          let len;
          _results = [];
          for (i = 0, len = data.length; i < len; i++) {
            item = data[i];
            if (new String(item[searchKey]).toLowerCase().indexOf(query.toLowerCase()) == 0 || query === "") {
              _results.push(item);
            }
          }
          return _results;
        },
        tplEval: (tpl, obj) => {
          return "<li data-name='" + _$1.escape(obj.name.split("\n")[0]) + "'>" + _$1.escape(obj.name.split("\n")[0]) + "      <span style='color:grey;'>" + _$1.escape(obj.name.split("\n")[1]) + "</span></li>";
        },
        beforeInsert: (value, $li) => {
          return $li.data("name");
        }
      },
      data: tagList,
      suffix: ""
    }).on("inserted.atwho", (e1, $li, e2) => {
      const op = $li.data("name");
      if (!op || op[op.length - 1] !== ":") {
        self.search();
      }
      $(this).atwho("run");
    });
    this.model || (this.model = new Backbone.Model());
    SearchForm.__super__.postInit.apply(this, arguments);
  },
  search: _$1.debounce(function() {
    const query = this.el.q.value.trim();
    if (query) {
      push(`/w/${this.routeParams.team}/list/search/?q=${encodeURIComponent(query)}`);
    } else {
      push(`/w/${this.routeParams.team}/list/all/`);
    }
  }, 600),
  setRouteParams(params2) {
    this.routeParams = params2;
  },
  submit: function() {
    this.search();
    return false;
  }
});
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}
function create_else_block_1(ctx) {
  let a;
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      a = element("a");
      t = text("Sign In");
      attr(a, "href", urls.login);
      attr(a, "class", "p-4 f3 xnav-a");
    },
    m(target, anchor) {
      insert(target, a, anchor);
      append(a, t);
      if (!mounted) {
        dispose = listen$1(a, "click", function() {
          if (is_function(ctx[1]))
            ctx[1].apply(this, arguments);
        });
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    d(detaching) {
      if (detaching)
        detach(a);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_2(ctx) {
  let a;
  let t_value = ctx[4].name + "";
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      a = element("a");
      t = text(t_value);
      attr(a, "href", urls.app + "#/settings/profile/");
      attr(a, "class", "xnav-a");
    },
    m(target, anchor) {
      insert(target, a, anchor);
      append(a, t);
      if (!mounted) {
        dispose = listen$1(a, "click", function() {
          if (is_function(ctx[1]))
            ctx[1].apply(this, arguments);
        });
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 16 && t_value !== (t_value = ctx[4].name + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(a);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block(ctx) {
  let div;
  let a0;
  let t0;
  let t1;
  let b;
  let t2;
  let ul;
  let li0;
  let t4;
  let li1;
  let a1;
  let t5_value = ctx[4].name + "";
  let t5;
  let t6;
  let t7;
  let t8;
  let li2;
  let t9;
  let li3;
  let a2;
  let t10;
  let ul_class_value;
  let mounted;
  let dispose;
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[5])
      return create_if_block_1;
    return create_else_block;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block = current_block_type(ctx);
  let each_value = ctx[3];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      a0 = element("a");
      if_block.c();
      t0 = space();
      t1 = text(ctx[6]);
      b = element("b");
      t2 = space();
      ul = element("ul");
      li0 = element("li");
      li0.textContent = "Watchlists";
      t4 = space();
      li1 = element("li");
      a1 = element("a");
      t5 = text(t5_value);
      t6 = text(" (personal)");
      t7 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t8 = space();
      li2 = element("li");
      t9 = space();
      li3 = element("li");
      a2 = element("a");
      t10 = text("Manage Teams");
      attr(b, "class", "caret");
      attr(a0, "href", "#");
      attr(a0, "data-toggle", "dropdown");
      attr(a0, "class", "dropdown-toggle xnav-a");
      attr(li0, "class", "dropdown-header");
      attr(a1, "href", "#/w/0/list/all/");
      attr(li2, "class", "divider");
      attr(a2, "href", urls.groups);
      attr(a2, "data-id", "no-group");
      attr(ul, "class", ul_class_value = "dropdown-menu dropdown-menu-" + ctx[0]);
      attr(div, "class", "dropdown flex items-stretch");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, a0);
      if_block.m(a0, null);
      append(a0, t0);
      append(a0, t1);
      append(a0, b);
      append(div, t2);
      append(div, ul);
      append(ul, li0);
      append(ul, t4);
      append(ul, li1);
      append(li1, a1);
      append(a1, t5);
      append(a1, t6);
      append(ul, t7);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
      append(ul, t8);
      append(ul, li2);
      append(ul, t9);
      append(ul, li3);
      append(li3, a2);
      append(a2, t10);
      if (!mounted) {
        dispose = [
          listen$1(a1, "click", ctx[9]),
          listen$1(a2, "click", function() {
            if (is_function(ctx[1]))
              ctx[1].apply(this, arguments);
          })
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (current_block_type !== (current_block_type = select_block_type_1(ctx))) {
        if_block.d(1);
        if_block = current_block_type(ctx);
        if (if_block) {
          if_block.c();
          if_block.m(a0, t0);
        }
      }
      if (dirty & 64)
        set_data(t1, ctx[6]);
      if (dirty & 16 && t5_value !== (t5_value = ctx[4].name + ""))
        set_data(t5, t5_value);
      if (dirty & 12) {
        each_value = ctx[3];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, t8);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & 1 && ul_class_value !== (ul_class_value = "dropdown-menu dropdown-menu-" + ctx[0])) {
        attr(ul, "class", ul_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if_block.d();
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_else_block(ctx) {
  let i;
  return {
    c() {
      i = element("i");
      attr(i, "class", "fa fa-user");
    },
    m(target, anchor) {
      insert(target, i, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(i);
    }
  };
}
function create_if_block_1(ctx) {
  let i;
  return {
    c() {
      i = element("i");
      attr(i, "class", "fa fa-users");
    },
    m(target, anchor) {
      insert(target, i, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(i);
    }
  };
}
function create_each_block(ctx) {
  let li;
  let a;
  let t_value = ctx[5].name + "";
  let t;
  let a_href_value;
  let mounted;
  let dispose;
  function click_handler_1(...args) {
    return ctx[10](ctx[5], ...args);
  }
  return {
    c() {
      li = element("li");
      a = element("a");
      t = text(t_value);
      attr(a, "href", a_href_value = "#/w/" + ctx[5].id + "/list/all/");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, a);
      append(a, t);
      if (!mounted) {
        dispose = listen$1(a, "click", click_handler_1);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 8 && t_value !== (t_value = ctx[5].name + ""))
        set_data(t, t_value);
      if (dirty & 8 && a_href_value !== (a_href_value = "#/w/" + ctx[5].id + "/list/all/")) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(li);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment(ctx) {
  let title_value;
  let t;
  let if_block_anchor;
  document.title = title_value = "Watchlist " + (ctx[6] ? `- ${ctx[6]}` : "") + " - Distill Web Monitor";
  function select_block_type(ctx2, dirty) {
    if (ctx2[4].account)
      return create_if_block;
    if (ctx2[4].id)
      return create_if_block_2;
    return create_else_block_1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      t = space();
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      insert(target, t, anchor);
      if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & 64 && title_value !== (title_value = "Watchlist " + (ctx2[6] ? `- ${ctx2[6]}` : "") + " - Distill Web Monitor")) {
        document.title = title_value;
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $user;
  let { team } = $$props;
  let { menuAlign = "left" } = $$props;
  let { openURL = () => {
  } } = $$props;
  let { showWatchlist = () => {
  } } = $$props;
  let user = getContext("user");
  component_subscribe($$self, user, (value) => $$invalidate(4, $user = value));
  getContext("clients");
  let group;
  let groups = [];
  let name = "";
  const click_handler = (e) => showWatchlist();
  const click_handler_1 = (group2, e) => showWatchlist(group2.id);
  $$self.$$set = ($$props2) => {
    if ("team" in $$props2)
      $$invalidate(8, team = $$props2.team);
    if ("menuAlign" in $$props2)
      $$invalidate(0, menuAlign = $$props2.menuAlign);
    if ("openURL" in $$props2)
      $$invalidate(1, openURL = $$props2.openURL);
    if ("showWatchlist" in $$props2)
      $$invalidate(2, showWatchlist = $$props2.showWatchlist);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 312) {
      {
        $$invalidate(3, groups = $user.groups || []);
        $$invalidate(5, group = groups.find((g) => g.id == team));
        $$invalidate(6, name = group ? group.name : $user.name);
      }
    }
  };
  return [
    menuAlign,
    openURL,
    showWatchlist,
    groups,
    $user,
    group,
    name,
    user,
    team,
    click_handler,
    click_handler_1
  ];
}
class Selector extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      team: 8,
      menuAlign: 0,
      openURL: 1,
      showWatchlist: 2
    });
  }
}
export { ModelLabel as M, Router as R, SearchForm as S, push as a, Selector as b, checkSieveConstraint as c, derived as d, Self as e, instance$1 as i, location as l, params as p, querystring as q, replace as r, writable as w };

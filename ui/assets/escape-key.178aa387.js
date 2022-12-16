import { a as SvelteComponent, i as init, s as safe_not_equal, e as element, g as insert, n as noop, j as detach, a3 as createEventDispatcher, o as onMount, q as binding_callbacks, w as create_slot, c as attr, $ as toggle_class, h as append, l as listen, p as prevent_default, z as update_slot_base, B as get_all_dirty_from_scope, C as get_slot_changes, D as transition_in, E as transition_out, G as bubble } from "./sieve.d6bf62de.js";
function create_fragment$1(ctx) {
  let div;
  return {
    c() {
      div = element("div");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      ctx[2](div);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[2](null);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { el } = $$props;
  let wrapper;
  let dispatch = createEventDispatcher();
  onMount(() => {
    wrapper.appendChild(el);
    return () => dispatch("destroy");
  });
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      wrapper = $$value;
      $$invalidate(0, wrapper), $$invalidate(1, el);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("el" in $$props2)
      $$invalidate(1, el = $$props2.el);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 3) {
      {
        if (wrapper) {
          $$invalidate(0, wrapper.innerHTML = "", wrapper);
          wrapper.appendChild(el);
        }
      }
    }
  };
  return [wrapper, el, div_binding];
}
class ElWrap extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { el: 1 });
  }
}
function create_fragment(ctx) {
  let li;
  let a;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[2].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[1], null);
  return {
    c() {
      li = element("li");
      a = element("a");
      if (default_slot)
        default_slot.c();
      attr(a, "href", "#");
      toggle_class(li, "active", ctx[0]);
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, a);
      if (default_slot) {
        default_slot.m(a, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(a, "click", prevent_default(ctx[3]));
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[1], !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(default_slot_template, ctx2[1], dirty, null), null);
        }
      }
      if (dirty & 1) {
        toggle_class(li, "active", ctx2[0]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { selected } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("selected" in $$props2)
      $$invalidate(0, selected = $$props2.selected);
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [selected, $$scope, slots, click_handler];
}
class MenuItem extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { selected: 0 });
  }
}
function clickOutside(node) {
  const handleClick = (event) => {
    if (!node.contains(event.target)) {
      node.dispatchEvent(new CustomEvent("outclick"));
    }
  };
  document.addEventListener("click", handleClick, true);
  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    }
  };
}
function keypressEscape(node) {
  const handleKey = (event) => {
    if (event.key == "Escape") {
      node.dispatchEvent(new CustomEvent("escape"));
    }
  };
  document.body.addEventListener("keydown", handleKey, true);
  return {
    destroy() {
      document.body.removeEventListener("keydown", handleKey, true);
    }
  };
}
export { ElWrap as E, MenuItem as M, clickOutside as c, keypressEscape as k };

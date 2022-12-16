import { a as SvelteComponent, i as init, s as safe_not_equal, e as element, t as text, c as attr, g as insert, h as append, v as set_data, n as noop, j as detach, x as create_component, y as mount_component, D as transition_in, E as transition_out, F as destroy_component, b as space, f as set_style, ae as subscribe, w as create_slot, an as assign, ar as set_attributes, $ as toggle_class, l as listen, p as prevent_default, a2 as action_destroyer, z as update_slot_base, B as get_all_dirty_from_scope, C as get_slot_changes, as as get_spread_update, I as group_outros, J as check_outros, r as destroy_each, a0 as run_all, am as compute_rest_props, a3 as createEventDispatcher, ao as exclude_internal_props, at as get_spread_object, G as bubble, q as binding_callbacks, ac as base, o as onMount, V as View, R as Model, T, Q as Editor, H as empty, K as C, aD as loadLang } from "./sieve.d6bf62de.js";
/* empty css                 */import { s as serviceProxy } from "./service.511decc4.js";
import { M as MenuItem, c as clickOutside, k as keypressEscape, E as ElWrap } from "./escape-key.178aa387.js";
var selector = "";
class Tailwind extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, null, safe_not_equal, {});
  }
}
function create_fragment$7(ctx) {
  let li;
  let t;
  return {
    c() {
      li = element("li");
      t = text(ctx[0]);
      attr(li, "class", "dropdown-header ttu");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, t);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1)
        set_data(t, ctx2[0]);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  let { name } = $$props;
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name = $$props2.name);
  };
  return [name];
}
class MenuHeaderItem extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, { name: 0 });
  }
}
function create_default_slot$1(ctx) {
  let div1;
  let span;
  let input;
  let input_checked_value;
  let t0;
  let div0;
  let t1_value = ctx[2].name + "";
  let t1;
  return {
    c() {
      div1 = element("div");
      span = element("span");
      input = element("input");
      t0 = space();
      div0 = element("div");
      t1 = text(t1_value);
      attr(input, "type", "checkbox");
      set_style(input, "vertical-align", "top");
      set_style(input, "margin", "0 4px");
      input.checked = input_checked_value = ctx[2].selected ? "checked" : "";
      attr(span, "class", "pa1 pb0");
      attr(div0, "class", "ml1");
      attr(div1, "class", "flex");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, span);
      append(span, input);
      append(div1, t0);
      append(div1, div0);
      append(div0, t1);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && input_checked_value !== (input_checked_value = ctx2[2].selected ? "checked" : "")) {
        input.checked = input_checked_value;
      }
      if (dirty & 4 && t1_value !== (t1_value = ctx2[2].name + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(div1);
    }
  };
}
function create_fragment$6(ctx) {
  let menuitem;
  let current;
  menuitem = new MenuItem({
    props: {
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  menuitem.$on("click", ctx[3]);
  return {
    c() {
      create_component(menuitem.$$.fragment);
    },
    m(target, anchor) {
      mount_component(menuitem, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const menuitem_changes = {};
      if (dirty & 20) {
        menuitem_changes.$$scope = { dirty, ctx: ctx2 };
      }
      menuitem.$set(menuitem_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(menuitem.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(menuitem.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(menuitem, detaching);
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  let $item, $$unsubscribe_item = noop, $$subscribe_item = () => ($$unsubscribe_item(), $$unsubscribe_item = subscribe(item, ($$value) => $$invalidate(2, $item = $$value)), item);
  $$self.$$.on_destroy.push(() => $$unsubscribe_item());
  let { item } = $$props;
  $$subscribe_item();
  let { onSelect } = $$props;
  const click_handler = (e) => onSelect($item.id);
  $$self.$$set = ($$props2) => {
    if ("item" in $$props2)
      $$subscribe_item($$invalidate(0, item = $$props2.item));
    if ("onSelect" in $$props2)
      $$invalidate(1, onSelect = $$props2.onSelect);
  };
  return [item, onSelect, $item, click_handler];
}
class CheckableMenuItem extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { item: 0, onSelect: 1 });
  }
}
const get_bottom_slot_changes$1 = (dirty) => ({});
const get_bottom_slot_context$1 = (ctx) => ({});
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[17] = list[i];
  child_ctx[19] = i;
  return child_ctx;
}
const get_top_slot_changes = (dirty) => ({});
const get_top_slot_context = (ctx) => ({});
const get_label_slot_changes$1 = (dirty) => ({});
const get_label_slot_context$1 = (ctx) => ({});
const get_icon_slot_changes$1 = (dirty) => ({});
const get_icon_slot_context$1 = (ctx) => ({});
function create_if_block_1(ctx) {
  let menuitem;
  let current;
  menuitem = new MenuItem({
    props: {
      selected: false,
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  menuitem.$on("click", ctx[12]);
  return {
    c() {
      create_component(menuitem.$$.fragment);
    },
    m(target, anchor) {
      mount_component(menuitem, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const menuitem_changes = {};
      if (dirty & 8192) {
        menuitem_changes.$$scope = { dirty, ctx: ctx2 };
      }
      menuitem.$set(menuitem_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(menuitem.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(menuitem.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(menuitem, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let t;
  return {
    c() {
      t = text("None (Default)");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block$2(ctx) {
  let menuheaderitem;
  let current;
  menuheaderitem = new MenuHeaderItem({
    props: {
      name: ctx[3](ctx[17])
    }
  });
  return {
    c() {
      create_component(menuheaderitem.$$.fragment);
    },
    m(target, anchor) {
      mount_component(menuheaderitem, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const menuheaderitem_changes = {};
      if (dirty & 9)
        menuheaderitem_changes.name = ctx2[3](ctx2[17]);
      menuheaderitem.$set(menuheaderitem_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(menuheaderitem.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(menuheaderitem.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(menuheaderitem, detaching);
    }
  };
}
function create_each_block(ctx) {
  let show_if = ctx[9](ctx[17], ctx[19]);
  let t;
  let checkablemenuitem;
  let current;
  let if_block = show_if && create_if_block$2(ctx);
  checkablemenuitem = new CheckableMenuItem({
    props: {
      onSelect: ctx[8],
      item: ctx[17]
    }
  });
  return {
    c() {
      if (if_block)
        if_block.c();
      t = space();
      create_component(checkablemenuitem.$$.fragment);
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, t, anchor);
      mount_component(checkablemenuitem, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 1)
        show_if = ctx2[9](ctx2[17], ctx2[19]);
      if (show_if) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(t.parentNode, t);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      const checkablemenuitem_changes = {};
      if (dirty & 1)
        checkablemenuitem_changes.item = ctx2[17];
      checkablemenuitem.$set(checkablemenuitem_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(checkablemenuitem.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(checkablemenuitem.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t);
      destroy_component(checkablemenuitem, detaching);
    }
  };
}
function create_fragment$5(ctx) {
  let div;
  let a;
  let t0;
  let t1;
  let span;
  let a_href_value;
  let a_class_value;
  let t2;
  let ul;
  let t3;
  let t4;
  let t5;
  let ul_class_value;
  let current;
  let mounted;
  let dispose;
  const icon_slot_template = ctx[11].icon;
  const icon_slot = create_slot(icon_slot_template, ctx, ctx[13], get_icon_slot_context$1);
  const label_slot_template = ctx[11].label;
  const label_slot = create_slot(label_slot_template, ctx, ctx[13], get_label_slot_context$1);
  let a_levels = [
    { href: a_href_value = "#" },
    {
      class: a_class_value = "btn btn-default btn-sm items-center " + ctx[4]
    },
    ctx[10],
    {
      style: "width: min-content; display: flex"
    }
  ];
  let a_data = {};
  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }
  const top_slot_template = ctx[11].top;
  const top_slot = create_slot(top_slot_template, ctx, ctx[13], get_top_slot_context);
  let if_block = ctx[1] && create_if_block_1(ctx);
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  const bottom_slot_template = ctx[11].bottom;
  const bottom_slot = create_slot(bottom_slot_template, ctx, ctx[13], get_bottom_slot_context$1);
  return {
    c() {
      div = element("div");
      a = element("a");
      if (icon_slot)
        icon_slot.c();
      t0 = space();
      if (label_slot)
        label_slot.c();
      t1 = space();
      span = element("span");
      t2 = space();
      ul = element("ul");
      if (top_slot)
        top_slot.c();
      t3 = space();
      if (if_block)
        if_block.c();
      t4 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t5 = space();
      if (bottom_slot)
        bottom_slot.c();
      attr(span, "class", "caret");
      set_attributes(a, a_data);
      attr(ul, "class", ul_class_value = "dropdown-menu w-70 " + ctx[2]);
      attr(div, "class", "dropdown");
      toggle_class(div, "open", ctx[5]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, a);
      if (icon_slot) {
        icon_slot.m(a, null);
      }
      append(a, t0);
      if (label_slot) {
        label_slot.m(a, null);
      }
      append(a, t1);
      append(a, span);
      append(div, t2);
      append(div, ul);
      if (top_slot) {
        top_slot.m(ul, null);
      }
      append(ul, t3);
      if (if_block)
        if_block.m(ul, null);
      append(ul, t4);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
      append(ul, t5);
      if (bottom_slot) {
        bottom_slot.m(ul, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(a, "click", prevent_default(ctx[6])),
          action_destroyer(clickOutside.call(null, div)),
          action_destroyer(keypressEscape.call(null, div)),
          listen(div, "outclick", ctx[7]),
          listen(div, "escape", ctx[7])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (icon_slot) {
        if (icon_slot.p && (!current || dirty & 8192)) {
          update_slot_base(icon_slot, icon_slot_template, ctx2, ctx2[13], !current ? get_all_dirty_from_scope(ctx2[13]) : get_slot_changes(icon_slot_template, ctx2[13], dirty, get_icon_slot_changes$1), get_icon_slot_context$1);
        }
      }
      if (label_slot) {
        if (label_slot.p && (!current || dirty & 8192)) {
          update_slot_base(label_slot, label_slot_template, ctx2, ctx2[13], !current ? get_all_dirty_from_scope(ctx2[13]) : get_slot_changes(label_slot_template, ctx2[13], dirty, get_label_slot_changes$1), get_label_slot_context$1);
        }
      }
      set_attributes(a, a_data = get_spread_update(a_levels, [
        { href: a_href_value },
        (!current || dirty & 16 && a_class_value !== (a_class_value = "btn btn-default btn-sm items-center " + ctx2[4])) && { class: a_class_value },
        dirty & 1024 && ctx2[10],
        {
          style: "width: min-content; display: flex"
        }
      ]));
      if (top_slot) {
        if (top_slot.p && (!current || dirty & 8192)) {
          update_slot_base(top_slot, top_slot_template, ctx2, ctx2[13], !current ? get_all_dirty_from_scope(ctx2[13]) : get_slot_changes(top_slot_template, ctx2[13], dirty, get_top_slot_changes), get_top_slot_context);
        }
      }
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(ul, t4);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (dirty & 777) {
        each_value = ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(ul, t5);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if (bottom_slot) {
        if (bottom_slot.p && (!current || dirty & 8192)) {
          update_slot_base(bottom_slot, bottom_slot_template, ctx2, ctx2[13], !current ? get_all_dirty_from_scope(ctx2[13]) : get_slot_changes(bottom_slot_template, ctx2[13], dirty, get_bottom_slot_changes$1), get_bottom_slot_context$1);
        }
      }
      if (!current || dirty & 4 && ul_class_value !== (ul_class_value = "dropdown-menu w-70 " + ctx2[2])) {
        attr(ul, "class", ul_class_value);
      }
      if (dirty & 32) {
        toggle_class(div, "open", ctx2[5]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon_slot, local);
      transition_in(label_slot, local);
      transition_in(top_slot, local);
      transition_in(if_block);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(bottom_slot, local);
      current = true;
    },
    o(local) {
      transition_out(icon_slot, local);
      transition_out(label_slot, local);
      transition_out(top_slot, local);
      transition_out(if_block);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(bottom_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (icon_slot)
        icon_slot.d(detaching);
      if (label_slot)
        label_slot.d(detaching);
      if (top_slot)
        top_slot.d(detaching);
      if (if_block)
        if_block.d();
      destroy_each(each_blocks, detaching);
      if (bottom_slot)
        bottom_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  const omit_props_names = ["items", "allowNull", "dropDownClass", "getSectionName", "class"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { items } = $$props;
  let { allowNull = true } = $$props;
  let { dropDownClass = "" } = $$props;
  let { getSectionName: getSectionName2 = () => {
    return null;
  } } = $$props;
  let { class: clazz = "" } = $$props;
  let dispatch = createEventDispatcher();
  let open = false;
  let lastSectionName;
  function onClick() {
    $$invalidate(5, open = !open);
    dispatch(open ? "open" : "close");
  }
  function close() {
    $$invalidate(5, open = false);
    dispatch("close");
  }
  function onSelect(_id) {
    dispatch("select", _id);
    close();
  }
  function shouldCreateSectionHeader(item, i) {
    if (i === 0) {
      lastSectionName = void 0;
    }
    const currentSectionName = getSectionName2(item);
    if (!currentSectionName) {
      return false;
    }
    if (lastSectionName === currentSectionName) {
      return false;
    } else {
      lastSectionName = currentSectionName;
      return true;
    }
  }
  const click_handler = (e) => onSelect(null);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("items" in $$new_props)
      $$invalidate(0, items = $$new_props.items);
    if ("allowNull" in $$new_props)
      $$invalidate(1, allowNull = $$new_props.allowNull);
    if ("dropDownClass" in $$new_props)
      $$invalidate(2, dropDownClass = $$new_props.dropDownClass);
    if ("getSectionName" in $$new_props)
      $$invalidate(3, getSectionName2 = $$new_props.getSectionName);
    if ("class" in $$new_props)
      $$invalidate(4, clazz = $$new_props.class);
    if ("$$scope" in $$new_props)
      $$invalidate(13, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      lastSectionName = void 0;
    }
  };
  return [
    items,
    allowNull,
    dropDownClass,
    getSectionName2,
    clazz,
    open,
    onClick,
    close,
    onSelect,
    shouldCreateSectionHeader,
    $$restProps,
    slots,
    click_handler,
    $$scope
  ];
}
class MultiSelectMenu extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {
      items: 0,
      allowNull: 1,
      dropDownClass: 2,
      getSectionName: 3,
      class: 4
    });
  }
}
const get_icon_slot_changes = (dirty) => ({});
const get_icon_slot_context = (ctx) => ({});
const get_label_slot_changes = (dirty) => ({});
const get_label_slot_context = (ctx) => ({});
const get_bottom_slot_changes = (dirty) => ({});
const get_bottom_slot_context = (ctx) => ({});
function create_icon_slot(ctx) {
  let current;
  const icon_slot_template = ctx[6].icon;
  const icon_slot = create_slot(icon_slot_template, ctx, ctx[11], get_icon_slot_context);
  return {
    c() {
      if (icon_slot)
        icon_slot.c();
    },
    m(target, anchor) {
      if (icon_slot) {
        icon_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (icon_slot) {
        if (icon_slot.p && (!current || dirty & 2048)) {
          update_slot_base(icon_slot, icon_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(icon_slot_template, ctx2[11], dirty, get_icon_slot_changes), get_icon_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon_slot, local);
      current = true;
    },
    o(local) {
      transition_out(icon_slot, local);
      current = false;
    },
    d(detaching) {
      if (icon_slot)
        icon_slot.d(detaching);
    }
  };
}
function create_label_slot$1(ctx) {
  let current;
  const label_slot_template = ctx[6].label;
  const label_slot = create_slot(label_slot_template, ctx, ctx[11], get_label_slot_context);
  return {
    c() {
      if (label_slot)
        label_slot.c();
    },
    m(target, anchor) {
      if (label_slot) {
        label_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (label_slot) {
        if (label_slot.p && (!current || dirty & 2048)) {
          update_slot_base(label_slot, label_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(label_slot_template, ctx2[11], dirty, get_label_slot_changes), get_label_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(label_slot, local);
      current = true;
    },
    o(local) {
      transition_out(label_slot, local);
      current = false;
    },
    d(detaching) {
      if (label_slot)
        label_slot.d(detaching);
    }
  };
}
function create_top_slot(ctx) {
  let li;
  let div;
  let input_1;
  let mounted;
  let dispose;
  return {
    c() {
      li = element("li");
      div = element("div");
      input_1 = element("input");
      attr(input_1, "type", "text");
      attr(input_1, "class", "mx-4 flex-grow w-100");
      attr(input_1, "placeholder", ctx[0]);
      attr(div, "class", "flex");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, div);
      append(div, input_1);
      ctx[8](input_1);
      if (!mounted) {
        dispose = [
          listen(input_1, "input", ctx[9]),
          listen(div, "click", prevent_default(ctx[7]))
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        attr(input_1, "placeholder", ctx2[0]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(li);
      ctx[8](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_bottom_slot$1(ctx) {
  let current;
  const bottom_slot_template = ctx[6].bottom;
  const bottom_slot = create_slot(bottom_slot_template, ctx, ctx[11], get_bottom_slot_context);
  return {
    c() {
      if (bottom_slot)
        bottom_slot.c();
    },
    m(target, anchor) {
      if (bottom_slot) {
        bottom_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (bottom_slot) {
        if (bottom_slot.p && (!current || dirty & 2048)) {
          update_slot_base(bottom_slot, bottom_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(bottom_slot_template, ctx2[11], dirty, get_bottom_slot_changes), get_bottom_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(bottom_slot, local);
      current = true;
    },
    o(local) {
      transition_out(bottom_slot, local);
      current = false;
    },
    d(detaching) {
      if (bottom_slot)
        bottom_slot.d(detaching);
    }
  };
}
function create_fragment$4(ctx) {
  let multiselectmenu;
  let current;
  const multiselectmenu_spread_levels = [{ items: ctx[1] }, ctx[5]];
  let multiselectmenu_props = {
    $$slots: {
      bottom: [create_bottom_slot$1],
      top: [create_top_slot],
      label: [create_label_slot$1],
      icon: [create_icon_slot]
    },
    $$scope: { ctx }
  };
  for (let i = 0; i < multiselectmenu_spread_levels.length; i += 1) {
    multiselectmenu_props = assign(multiselectmenu_props, multiselectmenu_spread_levels[i]);
  }
  multiselectmenu = new MultiSelectMenu({ props: multiselectmenu_props });
  multiselectmenu.$on("open", ctx[4]);
  multiselectmenu.$on("select", ctx[10]);
  return {
    c() {
      create_component(multiselectmenu.$$.fragment);
    },
    m(target, anchor) {
      mount_component(multiselectmenu, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const multiselectmenu_changes = dirty & 34 ? get_spread_update(multiselectmenu_spread_levels, [
        dirty & 2 && { items: ctx2[1] },
        dirty & 32 && get_spread_object(ctx2[5])
      ]) : {};
      if (dirty & 2053) {
        multiselectmenu_changes.$$scope = { dirty, ctx: ctx2 };
      }
      multiselectmenu.$set(multiselectmenu_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(multiselectmenu.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(multiselectmenu.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(multiselectmenu, detaching);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  const omit_props_names = ["placeHolder", "items"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { placeHolder = "Search" } = $$props;
  let { items } = $$props;
  let input;
  const dispatch = createEventDispatcher();
  function focus() {
    setTimeout(() => input.focus(), 100);
  }
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function input_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      input = $$value;
      $$invalidate(2, input);
    });
  }
  const input_handler = (e) => dispatch("search", e.target.value.trim());
  function select_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("placeHolder" in $$new_props)
      $$invalidate(0, placeHolder = $$new_props.placeHolder);
    if ("items" in $$new_props)
      $$invalidate(1, items = $$new_props.items);
    if ("$$scope" in $$new_props)
      $$invalidate(11, $$scope = $$new_props.$$scope);
  };
  return [
    placeHolder,
    items,
    input,
    dispatch,
    focus,
    $$restProps,
    slots,
    click_handler,
    input_1_binding,
    input_handler,
    select_handler,
    $$scope
  ];
}
class SearchableMultiSelectMenu extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { placeHolder: 0, items: 1 });
  }
}
const _$1 = window._;
const FieldOption = base.Model.extend({
  defaults: {
    "show": true
  },
  initialize: function(options) {
    FieldOption.__super__.initialize.call(this, options);
    this.set("id", `${this.get("type")}-${this.get("name")}`);
  },
  blacklistedJSONFields: ["id", "show", "selected"],
  toJSON: function(options) {
    return _$1.omit(_$1.clone(this.attributes), this.blacklistedJSONFields);
  }
});
const FieldOptions = base.Collection.extend({
  model: FieldOption
});
function create_label_slot(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text(ctx[1]);
      attr(div, "class", "truncate mw5-m mr1");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2)
        set_data(t, ctx2[1]);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_bottom_slot(ctx) {
  let li;
  return {
    c() {
      li = element("li");
      attr(li, "class", "divider");
    },
    m(target, anchor) {
      insert(target, li, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_fragment$3(ctx) {
  let searchablemultiselectmenu;
  let current;
  const searchablemultiselectmenu_spread_levels = [
    { getSectionName },
    { placeHolder: "Search fields to monitor" },
    { items: ctx[2] },
    { allowNull: false },
    ctx[5],
    { dropDownClass: ctx[0] }
  ];
  let searchablemultiselectmenu_props = {
    $$slots: {
      bottom: [create_bottom_slot],
      label: [create_label_slot]
    },
    $$scope: { ctx }
  };
  for (let i = 0; i < searchablemultiselectmenu_spread_levels.length; i += 1) {
    searchablemultiselectmenu_props = assign(searchablemultiselectmenu_props, searchablemultiselectmenu_spread_levels[i]);
  }
  searchablemultiselectmenu = new SearchableMultiSelectMenu({ props: searchablemultiselectmenu_props });
  searchablemultiselectmenu.$on("search", ctx[3]);
  searchablemultiselectmenu.$on("select", ctx[4]);
  return {
    c() {
      create_component(searchablemultiselectmenu.$$.fragment);
    },
    m(target, anchor) {
      mount_component(searchablemultiselectmenu, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const searchablemultiselectmenu_changes = dirty & 37 ? get_spread_update(searchablemultiselectmenu_spread_levels, [
        dirty & 0 && { getSectionName },
        searchablemultiselectmenu_spread_levels[1],
        dirty & 4 && { items: ctx2[2] },
        searchablemultiselectmenu_spread_levels[3],
        dirty & 32 && get_spread_object(ctx2[5]),
        dirty & 1 && { dropDownClass: ctx2[0] }
      ]) : {};
      if (dirty & 16386) {
        searchablemultiselectmenu_changes.$$scope = { dirty, ctx: ctx2 };
      }
      searchablemultiselectmenu.$set(searchablemultiselectmenu_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(searchablemultiselectmenu.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(searchablemultiselectmenu.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(searchablemultiselectmenu, detaching);
    }
  };
}
function getSectionName(item) {
  return item.get("type");
}
function instance$3($$self, $$props, $$invalidate) {
  const omit_props_names = ["selectorID", "allFields", "onChange", "fields", "dropDownClass"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { selectorID } = $$props;
  let { allFields } = $$props;
  let { onChange } = $$props;
  let { fields } = $$props;
  let { dropDownClass = "" } = $$props;
  let label;
  let allItems = new FieldOptions();
  let items = allItems.models;
  function updateItems() {
    if (allItems.length > 0) {
      return;
    }
    allItems.reset();
    allItems.push(new FieldOption({ name: "text", type: `builtin` }));
    allFields.filter((f) => f.type === "attribute").forEach((f) => {
      allItems.push(new FieldOption({ type: f.type, name: f.name }));
    });
    allFields.filter((f) => f.type === "property").forEach((f) => {
      allItems.push(new FieldOption({ type: f.type, name: f.name }));
    });
    if (fields) {
      fields.forEach((si) => {
        const item = allItems.get(`${si.type}-${si.name}`);
        if (item) {
          item.set("selected", true);
        } else {
          allItems.push(new FieldOption({
            type: si.type,
            name: si.name,
            selected: true
          }));
        }
      });
    } else {
      allItems.at(0).set("selected", true);
    }
    $$invalidate(2, items = allItems.models);
    notify();
  }
  function onSearch(e) {
    let phrase = e.detail.toLowerCase().trim();
    $$invalidate(2, items = allItems.filter((ai) => {
      return ai.get("name").toLowerCase().includes(phrase);
    }));
  }
  function onSelect(e) {
    const selectedItem = allItems.get(e.detail);
    selectedItem.set("selected", !selectedItem.get("selected"));
    if (allItems.filter((ai) => ai.get("selected")).length === 0) {
      allItems.at(0).set("selected", true);
    }
    notify();
  }
  function notify() {
    onChange(allItems.filter((i) => {
      return i.get("selected");
    }).map((i) => {
      return i.toJSON();
    }), selectorID);
    updateLabel();
  }
  function updateLabel() {
    const selectedItems = items.filter((item) => item.get("selected")).map((item) => item.get("name"));
    $$invalidate(1, label = selectedItems ? selectedItems.join(", ") : "<None>");
  }
  onMount(() => {
  });
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("selectorID" in $$new_props)
      $$invalidate(6, selectorID = $$new_props.selectorID);
    if ("allFields" in $$new_props)
      $$invalidate(7, allFields = $$new_props.allFields);
    if ("onChange" in $$new_props)
      $$invalidate(8, onChange = $$new_props.onChange);
    if ("fields" in $$new_props)
      $$invalidate(9, fields = $$new_props.fields);
    if ("dropDownClass" in $$new_props)
      $$invalidate(0, dropDownClass = $$new_props.dropDownClass);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 128) {
      allFields && updateItems();
    }
  };
  return [
    dropDownClass,
    label,
    items,
    onSearch,
    onSelect,
    $$restProps,
    selectorID,
    allFields,
    onChange,
    fields
  ];
}
class FieldSelector extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      selectorID: 6,
      allFields: 7,
      onChange: 8,
      fields: 9,
      dropDownClass: 0
    });
  }
}
const $ = window.jQuery;
if (!$) {
  throw new Error("ADD jQuery");
}
const _ = window._;
if (!_) {
  throw new Error("ADD _");
}
const async = window.async;
if (!async) {
  throw new Error("ADD async");
}
const domo = window.domo;
if (!domo) {
  throw new Error("ADD domo");
}
const moment = window.moment;
if (!moment) {
  throw new Error("ADD moment");
}
const Backbone$1 = window.Backbone;
if (!Backbone$1) {
  throw new Error("ADD Backbone");
}
const SieveLocator = View.Base.extend({
  name: "SieveLocator",
  className: "row",
  onTypeChange: function() {
    this.model.set("type", this.selType.value);
    this.renderParams();
  },
  postInit: function() {
    this.model.on("change", this.updateDOM);
  },
  render: function() {
    let elParams;
    const selOpts = _.map(Model.LocatorDescList, function(item) {
      return OPTION({ value: item.type }, T(item.label));
    });
    this.$el.append(DIV({ "class": "col-md-2" }, this.selType = SELECT({
      style: "margin:0 5px 0 0;width: auto;"
    })), DIV({ "class": "col-md-6" }, elParams = DIV()), DIV({ "class": "col-md-4" }, this.fieldParamsEL = DIV()));
    this.$elParams = $(elParams);
    $(this.selType).append(selOpts).change(this.onTypeChange);
    this.updateDOM();
    return this;
  },
  updatedSelectedFields(fields) {
    this.model.set("fields", fields);
  },
  renderParams: function() {
    const self = this;
    const model = this.options.model;
    const $elParams = this.$elParams;
    const fieldParamsEL = this.fieldParamsEL;
    const type = this.selType.value;
    const desc = _.findWhere(Model.LocatorDescList, { type });
    $elParams.empty();
    const els = _.map(desc.params, function(param) {
      return Editor.create(param.type, {
        param,
        parent: this,
        model: this.model
      }).render().el;
    }, this);
    $elParams.append(els);
    if (this.options.op === "INCLUDE") {
      if (this.fieldsView) {
        this.fieldsView.$destroy();
      }
      this.fieldsView = new FieldSelector({
        target: fieldParamsEL,
        props: {
          allFields: model.get("allFields"),
          fields: model.get("fields"),
          onChange: (items) => {
            self.updatedSelectedFields(items);
          }
        }
      });
    }
  },
  remove() {
    if (this.fieldsView) {
      this.fieldsView.$destroy();
    }
    SieveLocator.__super__.remove.call(this);
  },
  updateDOM: function() {
    this.selType.value = this.model.get("type");
    this.renderParams();
  }
});
var SieveLocators = View.Collection.extend({
  name: "SieveLocators",
  addOne: function(model) {
    $(this.help).hide();
    const view = new SieveLocator({
      model,
      parent: this,
      op: this.options.op
    });
    this.list.appendChild(view.render().el);
    return view;
  },
  removeOne: function() {
    SieveLocators.__super__.removeOne.apply(this, arguments);
    if (this.collection.length == 0) {
      $(this.help).show();
    }
  },
  renderBase: function() {
    this.$el.append(this.help = DIV({ "class": "info" }, T("l_none")), DIV(this.list = DIV()));
  }
});
const SieveConfigFrame = View.Base.extend({
  name: "SieveConfigFrame",
  render: function() {
    const attrs = this.model.attributes;
    this.$el.append(H5(attrs.index > 0 ? "Selections in child frame " + attrs.index : ""), DIV({ "class": "row" }, LABEL({ "class": "col-md-2", "style": "text-align:right" }, T("l_el_selected")), DIV({ "class": "col-md-10" }, (this.includes = new SieveLocators({
      model: attrs.includes,
      parent: this,
      op: "INCLUDE"
    }).render()).el)), DIV({ "class": "row" }, LABEL({ "class": "col-md-2", "style": "text-align:right" }, T("l_el_deselected")), DIV({ "class": "col-md-10" }, (this.excludes = new SieveLocators({
      model: attrs.excludes,
      parent: this,
      op: "EXCLUDE"
    }).render()).el)));
    return this;
  }
});
const SieveConfigFrames = View.Collection.extend({
  name: "SieveConfigFrames",
  addOne: function(model) {
    const view = new SieveConfigFrame({
      model,
      parent: this
    });
    this.$list.append(view.render().el);
    return view;
  },
  renderBase: function() {
    this.$list = this.$el;
    return this;
  }
});
const SieveConfigPage = View.Base.extend({
  name: "SieveConfigPage",
  render: function() {
    this.frames = new SieveConfigFrames({
      model: this.model.get("frames"),
      parent: this
    });
    this.$el.append(this.frames.render().el);
    return this;
  }
});
const SieveConfigPages = View.Collection.extend({
  name: "SieveConfigPages",
  addOne: function(model) {
    const view = new SieveConfigPage({
      model,
      parent: this
    });
    this.$list.append(view.render().el);
    return view;
  },
  renderBase: function() {
    this.$list = this.$el;
  }
});
const SieveConfigHTML = View.Base.extend({
  name: "SieveConfigHTML",
  className: "form form-horizontal",
  postInit: function(options) {
    SieveConfigHTML.__super__.postInit.call(this, options);
    this.pages = this.model.get("selections");
    this.viewPages = new SieveConfigPages({
      model: this.pages,
      parent: this
    });
    this.regexpEditor = Editor.create("regexp", {
      param: {
        help: "h_regexp_filter",
        must: false,
        name: "regexp",
        type: "regexp"
      },
      parent: this,
      model: this.model
    });
  },
  render: function() {
    this.$el.append(this.help = DIV({
      "class": "alert-info small",
      "style": "padding: 4px 12px;margin-bottom: 4px;"
    }, T("m_vs_help")), DIV({ "class": "row" }, LABEL({ "class": "col-md-2", "style": "text-align:right;" }, T("l_text_filter")), DIV({ "class": "col-md-10" }, this.regexpEditor.render().el)), this.viewPages.render().el);
    return this;
  },
  hideHelp: function() {
    if (this.model.isEmpty()) {
      $(this.help).show();
    } else {
      $(this.help).remove();
    }
  }
});
var HTML_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let div3;
  let div1;
  let div0;
  let t1;
  let elwrap0;
  let t2;
  let div2;
  let textarea;
  let t3;
  let elwrap1;
  let current;
  elwrap0 = new ElWrap({ props: { el: ctx[1].el } });
  elwrap1 = new ElWrap({
    props: { el: ctx[2].el }
  });
  return {
    c() {
      div3 = element("div");
      div1 = element("div");
      div0 = element("div");
      div0.textContent = `${T("m_vs_help")}`;
      t1 = space();
      create_component(elwrap0.$$.fragment);
      t2 = space();
      div2 = element("div");
      textarea = element("textarea");
      t3 = space();
      create_component(elwrap1.$$.fragment);
      attr(div0, "class", "alert-info small");
      set_style(div0, "padding", "4px 12px");
      set_style(div0, "margin-bottom", "4px");
      attr(div1, "class", "ct flex-auto svelte-rkpfh4");
      attr(textarea, "class", "form-control flex-auto");
      attr(textarea, "placeholder", T("m_vs_sel_preview"));
      textarea.value = ctx[0];
      attr(div2, "class", "w-30 bl flex flex-column");
      attr(div3, "class", "flex");
    },
    m(target, anchor) {
      insert(target, div3, anchor);
      append(div3, div1);
      append(div1, div0);
      append(div1, t1);
      mount_component(elwrap0, div1, null);
      append(div3, t2);
      append(div3, div2);
      append(div2, textarea);
      append(div2, t3);
      mount_component(elwrap1, div2, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & 1) {
        textarea.value = ctx2[0];
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(elwrap0.$$.fragment, local);
      transition_in(elwrap1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(elwrap0.$$.fragment, local);
      transition_out(elwrap1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_component(elwrap0);
      destroy_component(elwrap1);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { config } = $$props;
  let { page } = $$props;
  let { previewText } = $$props;
  let view = new SieveConfigPage({ model: page }).render();
  let regexpEditor = Editor.create("regexp", {
    param: {
      help: "h_regexp_filter",
      must: false,
      name: "regexp",
      type: "regexp"
    },
    model: config
  }).render();
  $$self.$$set = ($$props2) => {
    if ("config" in $$props2)
      $$invalidate(3, config = $$props2.config);
    if ("page" in $$props2)
      $$invalidate(4, page = $$props2.page);
    if ("previewText" in $$props2)
      $$invalidate(0, previewText = $$props2.previewText);
  };
  return [previewText, view, regexpEditor, config, page];
}
class HTML extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { config: 3, page: 4, previewText: 0 });
  }
}
var HTMLSelector_svelte_svelte_type_style_lang = "";
function create_if_block$1(ctx) {
  let htmlconfig;
  let current;
  htmlconfig = new HTML({
    props: {
      page: ctx[2],
      config: ctx[4],
      previewText: ctx[3]
    }
  });
  return {
    c() {
      create_component(htmlconfig.$$.fragment);
    },
    m(target, anchor) {
      mount_component(htmlconfig, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const htmlconfig_changes = {};
      if (dirty[0] & 4)
        htmlconfig_changes.page = ctx2[2];
      if (dirty[0] & 8)
        htmlconfig_changes.previewText = ctx2[3];
      htmlconfig.$set(htmlconfig_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(htmlconfig.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(htmlconfig.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(htmlconfig, detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let div1;
  let button0;
  let i0;
  let t0;
  let t1_value = T("a_select_elements") + "";
  let t1;
  let t2;
  let div0;
  let t3;
  let button1;
  let i1;
  let t4;
  let t5_value = T("a_save_selections") + "";
  let t5;
  let t6;
  let button2;
  let i2;
  let t7;
  let button3;
  let i3;
  let t8;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[1] && ctx[2] && create_if_block$1(ctx);
  return {
    c() {
      div1 = element("div");
      button0 = element("button");
      i0 = element("i");
      t0 = space();
      t1 = text(t1_value);
      t2 = space();
      div0 = element("div");
      t3 = space();
      button1 = element("button");
      i1 = element("i");
      t4 = space();
      t5 = text(t5_value);
      t6 = space();
      button2 = element("button");
      i2 = element("i");
      t7 = space();
      button3 = element("button");
      i3 = element("i");
      t8 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr(i0, "class", "fa");
      toggle_class(i0, "fa-play", !ctx[0]);
      toggle_class(i0, "fa-pause", ctx[0]);
      attr(button0, "class", "btn btn-default svelte-1cd5e8o");
      attr(div0, "class", "flex-auto");
      attr(i1, "class", "fa fa-save");
      attr(button1, "class", "btn btn-default svelte-1cd5e8o");
      attr(i2, "class", "fa");
      toggle_class(i2, "fa-expand", !ctx[1]);
      toggle_class(i2, "fa-compress", ctx[1]);
      attr(button2, "class", "btn btn-default svelte-1cd5e8o");
      attr(button2, "title", T("a_expand"));
      attr(i3, "class", "fa fa-times");
      attr(button3, "class", "btn btn-default svelte-1cd5e8o");
      attr(button3, "title", T("a_close"));
      attr(div1, "class", "xtbar xtbar-inverse flex svelte-1cd5e8o");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, button0);
      append(button0, i0);
      append(button0, t0);
      append(button0, t1);
      append(div1, t2);
      append(div1, div0);
      append(div1, t3);
      append(div1, button1);
      append(button1, i1);
      append(button1, t4);
      append(button1, t5);
      append(div1, t6);
      append(div1, button2);
      append(button2, i2);
      append(div1, t7);
      append(div1, button3);
      append(button3, i3);
      insert(target, t8, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(button0, "click", ctx[8]),
          listen(button1, "click", ctx[6]),
          listen(button2, "click", ctx[7]),
          listen(button3, "click", ctx[5])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 1) {
        toggle_class(i0, "fa-play", !ctx2[0]);
      }
      if (dirty[0] & 1) {
        toggle_class(i0, "fa-pause", ctx2[0]);
      }
      if (dirty[0] & 2) {
        toggle_class(i2, "fa-expand", !ctx2[1]);
      }
      if (dirty[0] & 2) {
        toggle_class(i2, "fa-compress", ctx2[1]);
      }
      if (ctx2[1] && ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & 6) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
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
      if (detaching)
        detach(div1);
      if (detaching)
        detach(t8);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      run_all(dispose);
    }
  };
}
const MSG_EVENT = 2;
const MSG_REQUEST = 3;
const MSG_RESPONSE = 4;
function instance$1($$self, $$props, $$invalidate) {
  let $currentPage, $$unsubscribe_currentPage = noop, $$subscribe_currentPage = () => ($$unsubscribe_currentPage(), $$unsubscribe_currentPage = subscribe(currentPage, ($$value) => $$invalidate(14, $currentPage = $$value)), currentPage);
  $$self.$$.on_destroy.push(() => $$unsubscribe_currentPage());
  let { on = true } = $$props;
  const _2 = window._;
  const ID = function(x) {
    return function() {
      return x++;
    };
  }(1);
  const PORT_INDEX = [];
  const responseHandlers = {};
  let expanded = false;
  let currentPage;
  let savedCurrentpage;
  let savedSieveModel;
  let savedConfig;
  let savedPages;
  let previewText = "Initializing...";
  const sieveConfigModel = new Model.SieveConfigHTML({ selections: [] }, { parse: true });
  const port = chrome.runtime.connect({ name: "selector:{}" });
  port.onMessage.addListener(function(msg2) {
    let { type, data } = msg2;
    switch (type) {
      case MSG_EVENT:
        onPortEvent(data.type, data.event);
        break;
      case MSG_REQUEST:
        console.error("Unhandled request: ", msg2);
        port.postMessage({
          _id: msg2._id,
          type: MSG_RESPONSE,
          err: { msg: "Request not handled" }
        });
        break;
      case MSG_RESPONSE:
        onPortResponse(msg2);
        break;
      default:
        console.warn("Unhandled msg type: ", msg2);
    }
  });
  function onPortEvent(type, event) {
    switch (type) {
      case "init":
        $$invalidate(3, previewText = "Page loaded...");
        savedSieveModel = new Model.Sieve(event.model, { parse: true }), savedConfig = savedSieveModel.get("config"), savedPages = savedConfig && savedConfig.get("selections"), savedConfig && sieveConfigModel.set("regexp", savedConfig.get("regexp"));
        $$invalidate(0, on = !!event.state.selectorOn);
        $$invalidate(1, expanded = !!event.state.expanded);
        break;
      case "loader:load":
        onLoadPort(event);
        break;
      case "loader:reset":
        $$invalidate(3, previewText = "");
        onLoaderReset(event);
        break;
      case "loader:port:select:close":
        onSelectClose(event);
        break;
      case "loader:port:select:display":
        onSelectDisplay(event);
        break;
      case "loader:port:select:new":
        onSelectNew(event);
        break;
      default:
        console.warn("Unhandled event type: ", type);
    }
  }
  function onPortResponse({ _id, err, data }) {
    let handler = responseHandlers[_id];
    if (handler) {
      delete responseHandlers[_id];
      handler(err, data);
    } else {
      console.error("Unhandled response: ", msg);
    }
  }
  port.onDisconnect.addListener(function() {
  });
  onMount(() => {
    sieveConfigModel.on("change:regexp", updatePreview);
  });
  async function close() {
    await Promise.allSettled(PORT_INDEX.map(portReset));
    $$invalidate(0, on = false);
    sendEvent("close");
  }
  async function save() {
    if (sieveConfigModel.isEmpty()) {
      showMsg("Please select elements to monitor before saving selections.");
      return;
    }
    savedSieveModel.set({
      uri: $currentPage.uri,
      config: sieveConfigModel,
      content_type: C.TYPE_HTML
    });
    const modelJSON = savedSieveModel.toJSON();
    await Promise.allSettled(PORT_INDEX.map(portReset));
    $$invalidate(0, on = false);
    sendEvent("save", modelJSON);
  }
  async function onLoadPort(event) {
    const index = event.index;
    const savedFrame = savedCurrentpage && savedCurrentpage.get("frames").findWhere({ index });
    PORT_INDEX.push(index);
    await portRequest(index, {
      path: "require",
      data: ["picker", "pickerui"]
    });
    if (savedFrame) {
      showVisualSelections(savedFrame);
    }
    portSetMode(index);
  }
  function onLoaderReset(event) {
    const pages = sieveConfigModel.get("selections");
    $$subscribe_currentPage($$invalidate(2, currentPage = pages.at(0) || new Model.Page(event, { parse: true })));
    PORT_INDEX.splice(0);
    pages.reset([currentPage]);
    savedCurrentpage = savedPages && savedPages.at(0);
  }
  async function onLocatorChange(locator, options) {
    if (options && options.source === "program")
      return;
    const frame = locator.collection.frame;
    await portRequest(frame.get("index"), {
      path: "picker_select_call",
      data: {
        method: "setLocator",
        id: locator.id,
        args: [_2.pick(locator.attributes, "expr", "type")]
      }
    });
    updatePreview();
  }
  function onSelectClose(event) {
    currentPage.removeLocator(event.index, event.id);
    updatePreview();
  }
  function onSelectDisplay(event) {
    const locator = currentPage.getLocator(event.index, event.id);
    const attrs = _2.extend({ id: event.id, allFields: event.allFields }, event.locator);
    if (!_2.isEqual(attrs, locator.attributes)) {
      locator.set(attrs, { source: "program" });
      updatePreview();
    }
  }
  function onSelectNew(event) {
    const attrs = _2.extend({ id: event.id }, event.locator);
    const locator = currentPage.addLocator({ index: event.index, uri: event.uri }, event.op, attrs);
    Backbone.listenTo(locator, "change", onLocatorChange);
  }
  function portRequest(portSelector, data) {
    return sendRequest("loader/request", { portSelector, data });
  }
  async function portReset(portIndex) {
    await portRequest(portIndex, { path: "picker_reset" });
  }
  async function portSetMode(portIndex) {
    await portRequest(portIndex, {
      path: "picker_setMode",
      data: on ? "SELECT" : "NOOP"
    });
    if (on && portIndex == 0) {
      showMsg("Selector is on. Click elements on page that you would like to monitor for changes.");
    }
  }
  function portSetModeForAll(mode) {
    for (let index of PORT_INDEX) {
      portSetMode(index);
    }
  }
  function sendEvent(type, event) {
    port.postMessage({ type: MSG_EVENT, data: { type, event } });
  }
  function sendRequest(path, data) {
    return new Promise((resolve, reject) => {
      const _id = ID();
      responseHandlers[_id] = (err, data2) => {
        err ? reject(err) : resolve(data2);
      };
      port.postMessage({ type: MSG_REQUEST, _id, path, data });
    });
  }
  function sendUIState(expanded2) {
    let data = { expanded: expanded2 };
    window.parent.postMessage({ type: "show", data }, "*");
    sendEvent("uistate", data);
  }
  function showMsg(msg2) {
    return portRequest(0, { path: "showMsg", data: { msg: msg2 } });
  }
  function showVisualSelections(savedFrame) {
    const index = savedFrame.get("index");
    const includes = savedFrame.get("includes").models;
    const excludes = savedFrame.get("excludes").models;
    includes.map((model) => portRequest(index, {
      path: "picker_select_new",
      data: { locator: model.toJSON(), op: "INCLUDE" }
    }));
    excludes.map((model) => portRequest(index, {
      path: "picker_select_new",
      data: { locator: model.toJSON(), op: "EXCLUDE" }
    }));
  }
  function toggleExpanded() {
    $$invalidate(1, expanded = !expanded);
  }
  function toggleSelector() {
    $$invalidate(0, on = !on);
  }
  async function updatePreview() {
    if (!currentPage)
      return;
    $$invalidate(3, previewText = "Loading...");
    try {
      let results = await Promise.all(currentPage.get("frames").map((frame) => portRequest(frame.get("index"), {
        path: "filterHTMLAndGetData",
        data: {
          includes: frame.get("includes").toJSON(),
          excludes: frame.get("excludes").toJSON()
        }
      })));
      const re = sieveConfigModel.get("regexp");
      let text2 = results.map((r) => r.text).join("");
      if (re && re.expr) {
        const matches = text2.match(new RegExp(re.expr, re.flags || ""));
        if (matches && matches.length > 0) {
          text2 = matches.join(" ");
        } else {
          text2 = "";
        }
      }
      $$invalidate(3, previewText = text2);
    } catch (e) {
      console.error("error while updating preview", e);
      $$invalidate(3, previewText = "Error: " + (e.message || e.msg || e.toString()));
    }
  }
  $$self.$$set = ($$props2) => {
    if ("on" in $$props2)
      $$invalidate(0, on = $$props2.on);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 2) {
      {
        sendUIState(expanded);
      }
    }
    if ($$self.$$.dirty[0] & 1) {
      {
        portSetModeForAll();
      }
    }
  };
  return [
    on,
    expanded,
    currentPage,
    previewText,
    sieveConfigModel,
    close,
    save,
    toggleExpanded,
    toggleSelector
  ];
}
class HTMLSelector extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { on: 0 }, null, [-1, -1]);
  }
}
function create_else_block(ctx) {
  let t;
  return {
    c() {
      t = text("Loading...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block(ctx) {
  let htmlselector;
  let current;
  htmlselector = new HTMLSelector({});
  return {
    c() {
      create_component(htmlselector.$$.fragment);
    },
    m(target, anchor) {
      mount_component(htmlselector, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(htmlselector.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(htmlselector.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(htmlselector, detaching);
    }
  };
}
function create_fragment(ctx) {
  let current_block_type_index;
  let if_block;
  let t;
  let tailwind;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[0])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  tailwind = new Tailwind({});
  return {
    c() {
      if_block.c();
      t = space();
      create_component(tailwind.$$.fragment);
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, t, anchor);
      mount_component(tailwind, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index !== previous_block_index) {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        }
        transition_in(if_block, 1);
        if_block.m(t.parentNode, t);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(tailwind.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(tailwind.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(t);
      destroy_component(tailwind, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let loaded = false;
  onMount(async () => {
    await syncUser();
    $$invalidate(0, loaded = true);
  });
  async function syncUser() {
    let user;
    try {
      user = await serviceProxy.store.UserStore.findOne({ id: await serviceProxy.auth.getId() });
      let locale = (user ? user.locale : await serviceProxy.store.Prefs.get("locale")) || "en-US";
      await loadLang(locale);
    } catch (e) {
      await loadLang("en-US");
    }
  }
  return [loaded];
}
class AppHTMLSelector extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { AppHTMLSelector as default };

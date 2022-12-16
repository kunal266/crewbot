Sentry.init({
  ...window.SENTRY,
  release: "3.4.0",
  ignoreErrors: [
    "ResizeObserver loop limit exceeded",
    "CreateHTMLCallback"
  ]
});

import React from "react";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn:
    "https://b826a04a4382492398fedb9749ca9474@o416397.ingest.sentry.io/5496133",
});

Sentry.configureScope(function (scope) {
  scope.setUser({
    id: "1",
    email: "316032603@qq.com",
    username: "xhm",
    domain: "domain",
  });
});

function App() {
  return (
    <button
      onClick={() => {
        throw new Error("test sentry track commit 123");
      }}
    >
      throw
    </button>
  );
}

export default App;

import React from "react";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn:
    "https://f342c52cd67d4f7282e65b1e0ea45b4f@o416397.ingest.sentry.io/5496103",
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
        throw new Error("test sentry");
      }}
    >
      throw
    </button>
  );
}

export default App;

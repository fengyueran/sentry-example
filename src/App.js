import React from "react";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn:
    "https://c4c3b2993c7d45228afa69deabac9e6f@o416397.ingest.sentry.io/5497056",
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
        throw new Error("test sentry track commit 3.0");
      }}
    >
      throw
    </button>
  );
}

export default App;

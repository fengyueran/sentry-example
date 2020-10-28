import React from "react";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn:
    "https://726ecd0052654e02af76728a9933a8d7@o416397.ingest.sentry.io/5495712",
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

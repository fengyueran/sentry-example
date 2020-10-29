import React from "react";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn:
    "https://6918da9b1ccd4e8489a1c768ceea96b0@o416397.ingest.sentry.io/5497068",
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
        throw new Error("test sentry track commit 4.0");
      }}
    >
      throw
    </button>
  );
}

export default App;

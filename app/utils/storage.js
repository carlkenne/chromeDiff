function saveState(state) {
  console.log("saveState");
  chrome.storage.local.set({ state: JSON.stringify(state) });
}

// diffs unmarked count
function setBadge(diffs) {
  if (chrome.browserAction) {
    if(diffs.hasBaseline)
      chrome.browserAction.setBadgeText({ text: "B" });
    else 
      chrome.browserAction.setBadgeText({ text: "" });
  }
}

export default function () {
  return next => (reducer, initialState) => {
    const store = next(reducer, initialState); 
    store.subscribe(() => {
      const state = store.getState();
      saveState(state);
      setBadge(state.diffs);
    });
    return store;
  };
}

chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(
    tab.id,
    {code: "inject_function(run_payload)"},
    (result) => {
      const lastErr = chrome.runtime.lastError
      if (lastErr)
        console.log('tab: ', tab.id, 'lastError: ', JSON.stringify(lastErr, null, 2))
    }
  )
})

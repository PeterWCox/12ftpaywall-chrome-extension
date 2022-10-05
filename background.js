// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) =>
{

  //Create URL we're going to be redirected to
  let newUrl = `https://12ft.io/proxy?q=${tab.url}`

  //Change tab URL to 12fit paywall bypass
  chrome.tabs.update(tab.id, { url: newUrl });

});

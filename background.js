// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//TEST URL
// https://www.telegraph.co.uk/news/2022/10/04/12-years-power-exhausted-conservatives-have-thrown-towel/

chrome.runtime.onInstalled.addListener(() =>
{
  chrome.action.setBadgeText({
    text: "OFF",
  });
});

const extensions = 'https://developer.chrome.com/docs/extensions'
const webstore = 'https://developer.chrome.com/docs/webstore'

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) =>
{

  //Get current URL in active tab
  let url = new URL(tab.url);
  url = `https://www.telegraph.co.uk/news/2022/10/04/12-years-power-exhausted-conservatives-have-thrown-towel/`;

  //Create URL we're going to be redirected to
  let newUrl = `https://12ft.io/proxy?q=${url}`


  // Change the current tab URL to https://google.com 
  chrome.tabs.update(tab.id, { url: newUrl });

});

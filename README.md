
# personalize-SSJS-local-dev

This repo makes it easy to write and test your Sitecore Personalize Server-Side JavaScript locally using Visual Studio Code & Node.


[Server-side JavaScript](https://doc.sitecore.com/cdp/en/users/sitecore-personalize/using-server-side-javascript-in-sitecore-personalize.html) (SSJS) is an extended version of JavaScript that enables back-end access to systems and servers. Sitecore Personalize can run server-side JavaScript when  [running programmable decisions in Sitecore Personalize decisioning](https://doc.sitecore.com/cdp/en/users/sitecore-personalize/managing-programmable-decisions.html "Managing programmable decisions") or  when  [applying a Condition](https://doc.sitecore.com/cdp/en/users/sitecore-personalize/build-a-real-time-audience-in-a-web-experiment.html "Build a real-time audience in a web experiment").


# Prerequisites

* Node
* Visual Studio Code


## What's here

[progammable.js](https://github.com/rjzflynnbx/personalize-SSJS-local-dev/blob/main/progammable.js "progammable.js") - A template to use for writing your programmable code, execute this file with node to test locally

[functions.js](https://github.com/rjzflynnbx/personalize-SSJS-local-dev/blob/main/functions.js "functions.js") contains utility functions specific to Sitecore Personalize for writing SSJS, load this as a JS module into your programmables (without the node exports function at the bottom)

[utils.js](https://github.com/rjzflynnbx/personalize-SSJS-local-dev/blob/main/utils.js "utils.js") contins some functions to enable local development of Sitecore Personalize SSJS 

## How to use

Load [functions.js](https://github.com/rjzflynnbx/personalize-SSJS-local-dev/blob/main/functions.js "functions.js") as a  Sitecore Personalize [JS Module](https://doc.sitecore.com/cdp/en/users/sitecore-personalize/js-modules.html) (without the node exports function at the bottom) and reference  it in all your decision model programmables.

Using visual studio code to develop locally - inside [progammable.js](https://github.com/rjzflynnbx/personalize-SSJS-local-dev/blob/main/progammable.js "progammable.js") you will have autocomplete for all the functions in [functions.js](https://github.com/rjzflynnbx/personalize-SSJS-local-dev/blob/main/functions.js "functions.js").

You will also have autocomplete for the "Guest" object.

Remove lines 1,2, and 3 of "progammable.js" when porting your local code to an actual Decision Model "programmable" or Condition.





## Adding additional Guest JSON files

To test specifics scenarios, copy the Guest JSON from the Sitecore Personalize UI, and put it in a new JSON file inside the [guest_data](https://github.com/rjzflynnbx/personalize-SSJS-local-dev/tree/main/guest_data "guest_data") folder.

Update the loadLocalGuest function in [progammable.js](https://github.com/rjzflynnbx/personalize-SSJS-local-dev/blob/main/progammable.js "progammable.js") with the name of your JSON file.

### How to get the JSON


Enable debug mode in your Sitecore CDP/P application. (Under Your name -> features ).


![enter image description here](https://i.ibb.co/ww8dG5Y/Untitled-design.png)

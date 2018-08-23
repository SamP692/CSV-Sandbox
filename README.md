# CSV Sandbox

## 1. What the heck is this :question: :exclamation:
This is a node application to be used in debug mode in order to play with complicated, data-heavy CSVs.

## 2. Where did this come from :question: :exclamation:
The need to combine huge amounts of data from a large number of disparate spreadsheets and preferring to do so in the Chrome console with JavaScript rather than in excel.

## 3. How do I use this crazy thing :question: :exclamation:
1. Clone the project
2. `npm install`
3. Drop all your CSVs into the "static" folder
4. `npm run parse`
5. Open a chrome browser and navigate to chrome://inspect
6. Click the link to your node application under "Remote Target"
7. Start the application from the console
8. Once the parse is complete, navigate to the "source" panel, expand the "Scope" section, right click on the `cleanData` variable, and select "store as global variable"
9. Play with your data using JavaScript like a BaWz

**NOTE 1** Got yourself a 'lil JavaScript knowledge, want to use this, but don't know what most of these instructions mean? No prob, open an issue and let me how familiar you are with JavaScript, Node, NPM, etc.

**NOTE 2** JavaScript connoisseur but not totally sure how this works with Chrome's integrated Node debugger? No prob, drop me an issue.

---

**CONTRIBUTING**

Anyone who makes a pull request will feel my endless love :heart: flowing through the universe toward them and will also receive *MAD* props right hur.


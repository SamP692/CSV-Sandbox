# CSV Sandbox

## What
This is a node application to be used in debug mode in order to play with complicated, data-heavy CSVs.

## How to use
1. Clone the project
2. `npm install`
3. Drop all your CSVs into the "static" folder
4. `npm run parse`
5. Open a chrome browser and navigate to chrome://inspect
6. Click the link to your node application under "Remote Target"
7. Start the application from the console
8. Once the parse is complete, navigate to the "source" panel, expand the "Scope" section, right click on the `cleanData` variable, and select "store as global variable"
9. Play with your data using JavaScript

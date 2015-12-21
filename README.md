### TEMPLATE EXAMPLE   TO RUN AND TEST APPLICATION:

1. Load dist/index.html in a browser

  * Four Headers should appear:

2. Enter food into search bar and hit return.

  * Message of "Loading Results" should appear below search bar.

3. Click on "Show More" button.

  * Three more results for the food should appear with each click.

12. Data Persistence.

  * Recently Selected Foods should persist upon page reload.
  * Foods table should persist upon page reload.
  * Clicking on "x" icon or "Clear All Foods" should prevent persistence.
  * Saved Days should not persist upon reload (undesireable, but expected for now).

11. Error Handling.

  * If server cannot be reached, should display "Failed To Reach API Server".
  * Test by inserting "XYXY" into url: https://api.nutritionix.com/
  * (found at line 154 in views/app.js).
  * If server cannot find a match, should display "No Matching Foods Were Found".
  * Test by typing in "foobar" in search bar and hitting return.

12. Build Environment.

  * Unzip nodes.modules.zip
  * Run "gulp build"
  * This will minimize relevant files in src/ and put the results in dist/

14. Known Problems.

  * The Saved Days do not persist upon page reload.

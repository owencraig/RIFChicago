# RIFChicago
[ ![Codeship Status for owencraig/RIFChicago](https://codeship.com/projects/8e5ba320-f603-0133-1205-7e18ff1a37b8/status?branch=master)](https://codeship.com/projects/150525)

### Gulp 
1. Install [Node](https://nodejs.org/en/) if you don't have it already 
2. Install [Gulp](http://gulpjs.com/) if you don't already have it: ```npm install –g gulp``` (this needs root access, so sudo is required)
3. Run ```cd Front\ End\ Access```
4. Run ```npm install``` 
5. Type ```gulp``` and hit enter, the watch/default tasks will start  (do this each time you start working)

### CSS*
* We are using SASS for this project and with the help of gulp, all .scss files are compiled to a single CSS file (css/rif.css) on save (see Gulp section below)
* Variables / Mixins: make sure to check these files out before starting to make use of the variables and mixins that are already added. Feel free to add to these files as needed
* Adding a new .scss file
    * Find appropriate folder in /scss -- please note the folder structure, naming conventions
    * Add the import to your new file in the /scss/rif.scss file (follow the pattern) 
    * Each new file should import variables/mixins at the top
* Bootstrap
    * Bootstrap's variables and mixins are loaded and available for use 
    * Our entire site is in a "container" - so no need to use the container class in your markup  
    * Creating columns with Boostrap
        * Name your classes semantically and use Bootstrap's mixins for the grid
        * See /scss/global/logo-nav.scss for a basic example 
            
### HTML
* We're using [Nunjucks](https://mozilla.github.io/nunjucks/) [templating](https://www.npmjs.com/package/gulp-nunjucks-render) so we can have a base layout and reuse markup as needed. With the help of gulp, html files will compile to /html on save so you can view your work right away. 
* Adding a new html file:
    * Module: add an html page to /html/templates/partials, then add the reference to the page you’d like to see it on
    * Page: add an html page to /html/pages -- on save it will be available in /html to view in the browser
* See /pages/home.html for an example 
* Only edit HTML files in the /html/pages or /html/templates folders
 
### JavaScript*
* We're using require.js to add all of our js to a single file /scripts/rif-main.js on save
* Adding a new JS file
    * Find appropriate folder (or make new folder) in /scripts and add your file 
    * Add reference to /scripts/rif-main.js -- follow pattern for existing files. These will be loaded in order
    * If you have questions about dependencies, let me know
* jQuery and Boostrap are both referenced in our main template so you can use these libraries 
 
### Images
* Images that will eventually be added through the CMS should go in /images/cms -- organize however you like inside this folder
* Images that will be referenced in the CSS or HTML and will NOT be editable can go right in the /images folder
* I'll hook up a minification task before we go to production

# HackmannWebsite
A website for Hackmann and his interns



### Tech used
This website uses scripts written in java script and the website is constructed with nodejs+express using html and css styling.

### Pages
Each team has its own page denoted by the year and season in which they worked, these pages can be easily created from template.ejs.template which can be copy pasted into a new .ejs file. Add an `app.get` entry for the page in `server.js` then add a link in `navbar.ejs` to go to your new page. This adds your page to the nav bar and page list, place it under whatever the previous group was.

This page can include whatever descriptions team definition or sub pages to describe team members and projects you'd like but I'd suggest at least one live link to a completed project and general overview of the team.

### Template
This template page can be used however you want, not just to create a team page, and following the above steps with the link in a different location will add whatever page you might want allowing for an easily changable website.

### Docker instructions

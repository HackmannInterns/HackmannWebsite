# HackmannWebsite
A website for Hackmann and his interns.


## Tech used
The website is constructed with a backend of node.js + express. We also use EJS for dynamic HTML templates.

## Pages
Each team should have their own page denoted by the year and season in which they worked, these pages can be easily created from (template.ejs.template)[/template.ejs.template] which can be copy pasted into a new .ejs file, {season}-{year}.ejs for example. Add an `app.get` entry for the page in `server.js` then add a link in `navbar.ejs` to go to your new page. This adds your page to the navbar and page list; place it under whatever the previous group was.

This page should include team definition, sub-pages, and/or project links to describe the experience and projects as you'd like.

## Template
This template page can be used however you want, not just to create a team page, and following the above steps with the link in a different location will add whatever page you might want allowing for an easily changeable website.

## Running the Project
### Docker (Compose)
The image is hosted on [DockerHub]("https://hub.docker.com/r/alexreynen/hackmannwebsite").

Create a ```docker-compose.yml``` file with the following contents. An example can be see in [docker-compose.yml](/docker-compose.yml) or below:
```
services:
  hackmann-website:
    image: "alexreynen/hackmannwebsite:latest"
    container_name: HackWeb
    ports:
      - "3000:3000"
    restart: unless-stopped
```

Then while in the same folder as the ``docker-compose.yml`` run:

```
docker compose up
```

To run the container in background add `-d` to the above command. The website can be accessed at http://localhost:3000 by default.

### Node(mon)
You can also run the project using node by running ``node server.js`` or by using (nodemon)[https://www.npmjs.com/package/nodemon] ``nodemon server.js``. The website can be accessed at http://localhost:3000 by default, as seen in the terminal output. 
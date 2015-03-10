react-webpack-node
==================

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Boilerplate for React application with webpack using Facebook's Flux running on a node express server.

Features:
==========
1. Uses Flux pattern for Front End
2. Simple webpack config file ( Includes code splitting )
3. Running on Express and socket.io
4. Mongoose for MongoDB
5. Includes a Procfile to enable deployment to heroku.

Mission
=================
The aim of this repo is to incorporate the best practices to building a powerful apps with Reactjs and Node.
I am working to document this repo extensively so it would be easy for both beginners and experts to begin dev-ing on it without pulling your hair out.

Instructions
================
1. `npm install`
2. `npm start` to run locally

Bundling with webpack
================
1. `npm run build` runs `webpack` will run configurations within webpack.config.js.
2. `npm run watch` runs `webpack --watch` to watch and recompile for changes.

Setting up your Database
================
1. `brew update`
2. `brew install mongodb`
3. `mongod` (Make sure you have the permissions to the directory /data/db)

Deploying to Heroku
================
1. `heroku create`
2. `heroku app:rename newname` if you need to
3. Run `webpack` . Commit and push the changes (I know, not the best idea).
4. `git push heroku master`

  Note: If you are working from a different machine and get `heroku does not appear to be a remote repository`     message, be sure to run `git remote add heroku git@heroku.com:appname.git`.

5. `heroku open` to open the link
6. If you wish to have a database setup on Heroku, remember to use `heroku addons:add mongohq` or `heroku addons:add mongolab`. 

Deploying to Digital Ocean
=====================
1. Create a Droplet
2. Follow [this](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04) or
[this](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server) tutorial
to set up nodejs
3. Follow [this](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-12-04) tutorial to install mongodb
4. git clone this repo
5. `npm install`
6. `sudo npm install pm2 -g`
7. `pm2 start server/index.js`
8. `pm2 startup ubuntu`
9. `sudo env PATH=$PATH:/usr/local/bin pm2 startup ubuntu -u sammy`


Todo:
================
1. Isomorphic React
2. Immutable JS
3. Include an easy set up for database (postgresql).
4. Use of PureRenderComponent mixin for performance
5. Improve webpack config for good build and webpack --watch
6. Passport auth with express - IN PROGRESS.
- [x] Fetching correct state on refresh.
7. Making the modules more extendible, so you can reuse them.
8. Let me know!

How to Contribute:
=================
1. As this repo is still in its baby stages, any suggestions/improvements/bugs can be in the form of Pull Requests, or creating an issue.

Credits to [webpack-server-side-example](https://github.com/webpack/react-webpack-server-side-example), [example-app](https://github.com/webpack/example-app), [flux-examples](https://github.com/facebook/flux/tree/master/examples), [node-express-mongo-demo](https://github.com/madhums/node-express-mongoose-demo), [web-starter-kit](https://github.com/google/web-starter-kit), [awesome material-ui](https://github.com/callemall/material-ui), and [material-ui-sass](https://github.com/gpbl/material-ui-sass/).

Please note that if you really wish to use material-ui React Components, you should npm install it into your repo and make it work.

License
===============
MIT

## Y-Naught CIS4919 Senior Project

### `yarn install`
Once project is cloned. Use Yarn install to install all the packages from the package.json file.

### `yarn workspace client start`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.


### `yarn workspace server start`

Runs just the server in development mode.<br>


### `yarn workspace server build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url and callbback functions for the routes
- #### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!

## Testing Admin Functions

There is no tab available for admin login so you must go through /admin/login and you will arrive at the screen.
For testing purposes we have provided an admin account aside from the team one. 
Email: Register@gmail.com
Password: 123456

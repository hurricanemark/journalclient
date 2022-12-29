# <span style="color:yellow">JournalClient - A Client Frontend React App  </span>

This separate frontend ReactJS project is referencing the backend Django Python server [https://github.com/hurricanemark/BusinessPersonemChronicler](https://github.com/hurricanemark/BusinessPersonelChronicler.git)

```bash
npx create-react-app journalclient
cd journalclient
code .
```

Edit `src/App.js` and `public/index.html`

```javascript
/* src/App.js */
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        React JS Frontend
      </h3>  
    </div>
  );
}

export default App;
```

Insert CDN links for css/javascript from [getbootstrap.com](https://getbootstrap.com/docs/5.3/getting-started/introduction/) code into `public/index.html`
at the head tag and at bottom of body tag.

**Install React Router DOM**

```bash
npm install react-router-dom
```

Add files `src/Home.js`, `src/User.js`, and `src/Employment.js` to extend components.

```javascript
/* src/Home.js */
import React, {Component} from 'react';

export class Home extends Component {
    render() {
        return (
            <div>
                <h3>This is the Home page</h3>
            </div>
        )
    }
}
```

```javascript
/* scr/Employment.js */
import React, {Component} from 'react';

export class Employment extends Component {
    render() {
        return (
            <div>
                <h3>This is the Employment page</h3>
            </div>
        )
    }
}
```

```javascript
/* src/User.js */
import React, {Component} from 'react';

export class User extends Component {
    render() {
        return (
            <div>
                <h3>This is the User page</h3>
            </div>
        )
    }
}
```

Register extended components in `src/App.js`

```javascript
...
import {Home} from './Home';
import {User} from './User';
import {Employment} from './Employment';
/* modules needed for routing*/
import { BrowserRoute, Route, Routes, NavLink } from 'react-router-dom';
...

```

Create file `src/Variables.js` to store API endpoints.  i.e. Referencing the endpoints from the Backend server.
```javascript
export const variables = {
    API_URL:"http://127.0.0.1:8000/",
    PHOTO_URL:"http://127.0.0.1:8000/Photos/"
}
```

Very usefull [Bootstrap Icons](https://icons.getbootstrap.com/) for `edit` and `delete` to liven up the frontend.

## Frontend Snapshots

![Home](./public/static/HomePage.PNG)

![Account Page](./public/static/AccountPage.PNG)

![EmployeeProfile Page](./public/static/PersonelPage.PNG)


<hr />

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

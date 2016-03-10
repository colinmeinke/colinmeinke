A route is a URL pattern that is mapped to a handler.

Traditionally in
[MCV](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
this handler is the **controller**. The controller holds all
of the logic that ties together models and views to output a
web page.

```js
const routes = [
  { match: '/', controller: 'Home' },
  { match: '/about', controller: 'About' },
  { match: '/blog/:id', controller: 'Blog' },
];
```

In [Flux](https://facebook.github.io/flux), there is no concept
of a controller. Only **views**, **stores** (which hold the
state of the app) and **actions** (which are dispatched to
update the stores).

In [React](http://facebook.github.io/react), our views take the
form of **components**.

Instead of a route being mapped to a controller, it's mapped
to a top-level page component.

```js
const routes = [
  { match: '/', component: <HomePage /> },
  { match: '/about', component: <AboutPage /> },
  { match: '/blog/:id', component: <BlogPage /> },
];
```

Where has the logic gone that used to live in our MVC
controllers?

- Defining page title and description.
- Getting the user based on the ID in the URL.
- Getting a list of blog posts from the user.

We are kind of forced to do this in our top-level page
components.

I'm not sure I like this. I would prefer simple, logicless
components. State as input. UI as output. Pure and simple.

```js
const ui = component( state );
```

I think a better solution is to move all logic tied to URL
into our routes. We could then dispatch actions to update
state *before* we call the component.

I like the idea of dropping a route file next to any top-level
page component, and letting the router handle the rest.

Using [Redux](http://redux.js.org) as our Flux library of
choice, that could look like this.

```js
import {
  postsUpdating,
  updateTags,
  getUser,
  getPosts,
  postsUpdated,
} from '../../actions';

import { meta } from '../../config';

const route = {
  match: 'blog/:id',
  title: state => `Blog of ${ state.user.name }`,
  meta: state => [
    ...meta,
    { name: 'description', content: state.user.description },
  ],
  onEnter: ( url, dispatch, getState, done ) => {
    dispatch( postsUpdating());
    dispatch( updateTags( url.tags ));

    getUser( url.id ).then( userAction => {
      dispatch( userAction );

      const state = getState();

      getPosts( state.user, state.tags ).then( postsAction => {
        dispatch( postsAction );
        postsUpdated();
        done();
      });
    });
  },
};

export default route;
```

I'm working on these ideas over at
[Universal Redux Router](https://github.com/colinmeinke/universal-redux-router).
This post is a preview of what the next version may look like.

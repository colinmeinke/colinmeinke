I'm in a happy place with my CSS right now, and I want to
share it with you.

Here are some rules that I think are important when designing
a CSS system that remains maintainable at scale.

- CSS files should be small, easy to read, and the context of
  where they apply should be immediately obvious.
- You shouldn't have to worry about global scope or class
  naming conventions.
- Your applied styles should be composed of smaller abstract
  rule-sets.

In this post, I want to talk about how my current workflow
achieves these things.

## Everything is a component

I've been using [React](https://facebook.github.io/react) a
lot recently. React makes you treat every part of your UI as a
component. This is also a handy way to organise your CSS.

Each component has its own directory. The CSS lives right
next to the React component that it relates to.

Take a blog post component as an example.

```
|–– components
|   |–– Post
|   |   |–– index.js
|   |   |–– styles.css
```

## Call classes whatever you want

Over the last few years I've successfully been using
[BEM](http://getbem.com/naming) to avoid troubles with the
global scope. BEM is a class naming convention where you
prefix classes with their scope to make them unique.

```css
.post__container { ... }
.post__title { ... }
.post__meta { ... }
.post__content { ... }
```

I'm now using [CSS modules](https://github.com/css-modules/css-modules)
instead. Here's why...

CSS modules allow me to write *generic* class names in my
CSS.

```css
.container { ... }
.title { ... }
.meta { ... }
.content { ... }
```

The premise being, as each CSS file relates to a React
component, whenever I open CSS I am *already* aware of its
scope.

If this is the case then the B in BEM is just for machines.
We should stop prefixing classes, and automate it.

[Webpack](https://webpack.github.io) has a
[loader](https://github.com/webpack/css-loader) that makes it
possible to import CSS files into a Javascript file. I know,
right. Totally fucked up. Let's just go with it.

When the loader is configured to work in CSS modules mode,
the imported object is a mapping of my generic class
names to corresponding unique hashes.

```js
import styles from './styles.css';

console.log( styles );

// {
//   container: '_13de2Xb7nUFi_yo57KT1tz',
//   title: '2rT8t9lrCcc6EHIQ9d5yl-',
//   meta: '_3C-zWmNwuYwp8wqi4hoVvK',
//   content: 'G6JJMqEHMdoBvMg7vt4d-',
// }
```

In my React component, all I need to know about are my generic
class names.

```js
import { container, title, meta, content } from './styles.css';

const Post = props => (
  <article className={ container }>
    <h1 className={ title }>{ props.title }</h1>
    <p className={ meta }>{ props.meta }</p>
    <div className={ content }>
      { props.content }
    </div>
  </article>
);
```

But the unique hashes are the *actual* classes output.

```html
<style>
  ._13de2Xb7nUFi_yo57KT1tz { ... }
  .2rT8t9lrCcc6EHIQ9d5yl- { ... }
  ._3C-zWmNwuYwp8wqi4hoVvK { ... }
  .G6JJMqEHMdoBvMg7vt4d- { ... }
</style>

<article class="_13de2Xb7nUFi_yo57KT1tz">
  <h1 class="2rT8t9lrCcc6EHIQ9d5yl-">...</h1>
  <p class="_3C-zWmNwuYwp8wqi4hoVvK">...</p>
  <div class="G6JJMqEHMdoBvMg7vt4d-">...</div>
</article>
```

## Don't repeat yourself

One CSS file per component is great in theory, but to create
maintainable CSS that scales we're going to need to abstract
code that is repeated in multiple components.

### Shared configuration

```
|–– components
|   |–– Post
|   |   |–– index.js
|   |   |–– styles.css
|–– styles
|   |-- config.css
```

I use [PostCSS](https://github.com/postcss/postcss) to give me
access to CSS future syntax. This includes
[CSS variables](https://www.w3.org/TR/css-variables). I like
to have a shared config file that defines variables for
properties that I use time and again.

```css
:root {
  --font-color: hsla( 0, 10%, 20%, 1 );
}
```

Each component's CSS file can then import this config and make
use of its variables.

```css
@import "../../styles/config.css";

.title {
  color: var( --font-color );
}
```

### Shared styles

Often we have groups of rules that are repeated in different
components. For example, let's say we have a certain way our
titles will look throughout a project. Multiple components
have a title, therefore each component needs to define the
same rules.

I abstract these rule-sets into shared *compositions*.

```
|–– components
|   |–– Post
|   |   |–– index.js
|   |   |–– styles.css
|–– styles
|   |-- config.css
|   |-- compositions
|   |   |-- typography.css
```

This is what the a shared title rule-set may look like in
`typography.css`.

```css
@import "../config.css";

.title {
  color: var( --font-color );
  font-size: var( --font-size-large );
  line-height: var( --line-height-small );
}
```

This is how the blog post component's CSS can make use of this
shared rule-set. It uses CSS modules' `composes` feature.

```css
.title {
  composes: title from "../../styles/compositions/typography";
}
```

## Further reading

I've found these techniques helpful in allowing me to write
CSS that stays simple but endlessly scalable.

Take a look at the [source code for this blog](https://github.com/colinmeinke/colinmeinke/tree/master/src/common)
to see how I'm using these techniques in practice.

I have also created an example Github repository to guide you
through [setting up CSS modules with Webpack](https://github.com/colinmeinke/css-modules-universal-example).

Talk to me on twitter
[@colinmeinke](https://twitter.com/colinmeinke).

Hasta luego.

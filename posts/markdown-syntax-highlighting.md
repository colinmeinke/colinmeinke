This morning I've been working on adding syntax highlighting
to the code blocks on this website. I'd like to share my
findings.

## Markdown it

I chose the [markdown it](https://github.com/markdown-it/markdown-it)
library to parse my markdown files, as it has a highlight
option built in.

```js
import Markdown from 'markdown-it';
import highlight from './highlight';

const md = new Markdown({ highlight });

const parseMarkdown = str => md( str );
```

`highlight` takes the form of a function.

```js
/**
 * Adds meaningful markup to code block so we
 * can later style with CSS
 * @param {string} code – Code block
 * @param {string} id – The code block's language identified. e.g. js or css
 * @return {string} Code block now with meaningful markup
 */
const highlight = ( code, id ) => {
  // ... do some stuff
  return code;
}
```

## Highlights

[Highlights](https://github.com/atom/highlights) is what
[Atom](https://atom.io) uses internally to add meaningful
markup to your code, so they can make it look all pretty.

Note that Highlights only works with Node. Since I am doing
this server-side, that's not a problem for me.

```js
import Highlights from 'highlights';

const highlighter = new Highlights();

const highlight = ( code, id ) => {
  // Only attempt to highlight if we're
  // passed a language identifier
  if ( id ) {
    try {
      // This is where the magic happens
      return highlighter.highlightSync({
        // This is self explanatory
        fileContents: code,
        // Don't freak out – I'll explain what
        // getScope does in minute
        scopeName: getScope( id ),
      });
    } catch ( error ) {
    }
  }

  return code;
},
```

## Get your grammar right

The term *grammar* in these circles means what language the
code block is thought to be.

Each Highlights language package has a `scopeName` defined.

In the `highlightSync` method above, we pass in a `scopeName`
property that we have derived from the code block's language
identifier.

When `highlightSync` is called, the available language
packages are iterated over and a match is attempted on the
`scopeName`'s. The first match wins, and that language package
is used to markup the code block.

Therefore, our `getScope` function exists to map the language
identifier passed into the `highlight` function, to the
`scopeName` of the desired language package.

```js
const getScope = id => {
  switch ( id ) {
    case 'html':
      return 'text.html.basic';
    case 'js':
      return 'source.js.jsx';
    case 'txt':
      return 'text.plain';
    default:
      return `source.${ id }`;
  }
};
```

## ES2015+

The Javascript language package that ships by default with
Highlights hasn't been updated in a while. And if it doesn't
understand destructuring then I'm screwed.

Fear not. Highlights has a method that lets us define
additional grammars. For example,
[language-babel](https://github.com/gandm/language-babel).

```js
highlighter.requireGrammarsSync({
  modulePath: path.resolve(
    __dirname, '../../..', 'node_modules', 'language-babel', 'package.json'
  ),
});
```

## Styling

Our markdown code blocks now have meaningful markup. All that's left is for some styling.

In theory, you should be able to add the CSS file of your
favorite Atom syntax theme. I like to keep it minimal, and
have added a few styles of my own.

Talk to me on twitter
[@colinmeinke](https://twitter.com/colinmeinke).

Hasta luego.

import Highlights from 'highlights';
import Markdown from 'markdown-it';
import path from 'path';

const highlighter = new Highlights();

highlighter.requireGrammarsSync({
  modulePath: path.resolve(
    __dirname, '../../..', 'node_modules', 'language-babel', 'package.json'
  ),
});

const getScope = ext => {
  switch ( ext ) {
    case 'html':
      return 'text.html.basic';
    case 'js':
      return 'source.js.jsx';
    case 'txt':
      return 'text.plain';
    default:
      return `source.${ ext }`;
  }
};

const md = new Markdown({
  highlight: ( str, ext ) => {
    if ( ext ) {
      try {
        return highlighter.highlightSync({
          fileContents: str,
          scopeName: getScope( ext ),
        });
      } catch ( error ) {
        // eslint-disable-line no-empty
      }

      return '';
    }

    return str;
  },
});

const parseMarkdown = str => md.render( str );

export { parseMarkdown };

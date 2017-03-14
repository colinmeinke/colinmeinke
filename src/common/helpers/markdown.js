import Highlights from 'highlights';
import Markdown from 'markdown-it';
import path from 'path';

const highlighter = new Highlights();

highlighter.requireGrammarsSync({
  modulePath: path.resolve(
    __dirname,
    '../../..',
    'node_modules',
    'language-babel',
    'package.json'
  )
});

const getScope = id => {
  switch (id) {
    case 'html':
      return 'text.html.basic';
    case 'js':
      return 'source.js.jsx';
    case 'txt':
      return 'text.plain';
    default:
      return `source.${id}`;
  }
};

const highlight = (code, id) => {
  if (id) {
    try {
      return highlighter.highlightSync({
        fileContents: code,
        scopeName: getScope(id)
      });
    } catch (error) {
      // eslint-disable-line no-empty
    }
  }

  return code;
};

const md = new Markdown({ highlight });
const parseMarkdown = str => md.render(str);

export { parseMarkdown };

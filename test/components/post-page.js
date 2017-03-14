/* globals describe it before */

import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Layout from '../../src/common/components/Layout';
import PostPage from '../../src/common/components/PostPage/index';
import PostPageContainer from '../../src/common/components/PostPage';

describe('component', () => {
  const props = {
    page: 1,
    post: {
      content: 'Hello world...',
      datePublished: '10 February, 2016',
      description: '',
      locationPublished: 'Hanoi, Vietnam',
      slug: 'hello-world',
      tags: ['coding'],
      title: 'Hello world'
    },
    postLoading: false,
    tags: []
  };

  describe('<PostPage />', () => {
    let postPage;

    before(() => {
      const renderer = createRenderer();

      renderer.render(<PostPage {...props} />);

      postPage = renderer.getRenderOutput();
    });

    it('should render correct markup', () => {
      expect(postPage.type).toBe(Layout);
    });
  });

  describe('<PostPageContainer />', () => {
    let postPage;

    before(() => {
      const store = createStore(() => props);

      const renderer = createRenderer();

      renderer.render(
        <Provider store={store}>
          <PostPageContainer />
        </Provider>
      );

      postPage = renderer.getRenderOutput();
    });

    it('should connect to redux store', () => {
      expect(postPage.type.displayName).toEqual('Connect(PostPage)');
    });
  });
});

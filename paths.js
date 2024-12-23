var paths = {
  '/': {
    title: 'Home',
    page: 'home.html'
  },
  '/about': {
    title: 'About',
    page: 'about.html'
  },
  '/blog': {
    title: 'Blog'
  },
  
  posts: {
     third_post: {
      title: '测试',
      md: 'test.md',
      published: '2024-12-22 16:28:00',
      preview: '测试一下'
    },
     second_post: {
      title: 'I Blogged Again',
      md: 'blogged_again.md',
      published: '2015-01-03',
      preview: 'Oops I did it again.'
    },
    first_post: {
      title: 'My First Blog Post',
      md: 'first_post.md',
      published: '2015-01-01',
      preview: 'Everyone has to start somewhere.'
    }
   
  }

};

module.exports = {
  allPaths: function() {
    return paths;
  },
  allPosts: function() {
    return paths.posts;
  },
  pageForPath: function(path) {
    return this.pageReq()('./' + paths[path].page);
  },
  postForPath: function(path) {
    return this.postReq()('./' + paths.posts[path].md);
  },
  pageReq: function() {
    return require.context('./pages', false, /^\.\/.*\.html$/);
  },
  postReq: function() {
    return require.context('./posts', false, /^\.\/.*\.md$/);
  }
};


var posts=["Yia./静态路由/","Yia./RIP/","Yia./hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
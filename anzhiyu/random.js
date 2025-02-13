var posts=["2025/02/13/条形图/","2025/02/13/线性图/","2025/01/27/RIP/","2025/01/25/静态路由/","2025/01/25/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
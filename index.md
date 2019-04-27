---
#
# By default, content added below the "---" mark will appear in the home page
# between the top bar and the list of recent posts.
# To change the home page layout, edit the _layouts/home.html file.
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
#
layout: default
---
<div id="bio">
  <img src="/assets/photos/self.jpg" id="portrait" alt="Hiatt Zhao self portrait">

  <h2>I am a
    <em class="title">fine art photographer</em>
    <em class="title">web application developer</em>
    <em class="title">creative coder</em>
    <em class="title">curious learner</em>
  </h2>

  <p>I have a passion for the visual arts and I've been exhibiting my photographs in galleries for over fifteen years. Mixed with a scientific mind, I currently work as a web developer. And in my spare time, I code art.</p>

  <p>When I'm not doing the above, I like to read positive psychology, business, and design books. I also like to build Raspberry Pi projects, such as a security camera, a video game emulator, and a smart speaker. Sometimes, I play the guitar.</p>

  <p>One of my goals in life is to see the world. My greatest adventure thus far has been a cross country bicycle trip in the spring and summer of 2018 where I biked from Philadelphia to San Francisco in 100 days.</p>

  <hr>
  
  <div class="social_icons">
    <a href="mailto:hiattzhao@gmail.com" target="_blank"><i class="fa fa-envelope-square fa-lg"
                aria-hidden="true"></i></a>
    <a href="https://www.facebook.com/hiattzhao" target="_blank"><i class="fa fa-facebook-square fa-lg"
          aria-hidden="true"></i></a>
    <a href="https://twitter.com/hiattzhao" target="_blank"><i class="fa fa-twitter-square fa-lg" aria-hidden="true"></i></a>
    <a href="https://www.instagram.com/hiattzhao/" target="_blank"><i class="fa fa-instagram fa-lg"
          aria-hidden="true"></i></a>
    <a href="https://www.linkedin.com/in/hiattzhao" target="_blank"><i class="fa fa-linkedin-square fa-lg"
          aria-hidden="true"></i></a>
    <a href="https://github.com/hiattzhao" target="_blank"><i class="fa fa-github-square fa-lg"
          aria-hidden="true"></i></a>
    <a href="https://vimeo.com/hiattzhao/" target="_blank"><i class="fa fa-vimeo-square fa-lg"
          aria-hidden="true"></i></a>
  </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  var titles = $(".title");
  var titleIndex = 0;
  function showNextTitle() {
    titles.eq(titleIndex % titles.length)
        .fadeIn(2000)
        .delay(1000)
        .fadeOut(2000, showNextTitle);
    titleIndex++;
  }
  showNextTitle();
});

</script>
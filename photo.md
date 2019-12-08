---
layout: page
title: Photo
permalink: /photo
---
<div id="galleria"></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
    crossorigin="anonymous"></script>
<script src="/assets/js/galleria-1.4.2.min.js"></script>

<script>
  var imageLocation = '/assets/photos/architecture-reflections/';
  var thumbLocation = imageLocation + 'thumb-ar/';
  var bigLocation = imageLocation;
  var imagePrefix = 'ar';
  var totalImages = 63;
  
  var data = [];

  for (var i = 1; i <= totalImages; i++) {
    if (i < 10) {
      i = '0' + i;
    }
    data.push({
      image : imageLocation + imagePrefix + i + '.jpg',
      thumb : thumbLocation + imagePrefix + i + '.jpg',
      big : imageLocation + imagePrefix + i + '.jpg',
      title: 'architecture reflections #' + i,
      description: 'none'
    });
  }

  // Load the custom theme
  Galleria.loadTheme('/assets/js/galleria/galleria.portfolio.js');
  // Configure Galleria
  Galleria.configure({
    showInfo: true
  });
  // Initialize Galleria
  Galleria.run('#galleria', {
    dataSource: data
  });
</script>

<div class="post">
  <hr>
  <p>I started photography in 2002 when I was a junior in high school. I was inspired by my AP US history teacher, Mr. Paul Mueller, when he showed us his photographs of places such as Monument Valley and the Alamo.</p>
  <p>After graduating high school, in the summer of 2003, with a camera and a guide books, along with a backpack full of travel essentials, I spent 45 days traveling on Greyhound buses across the United States. When I came back home I had captured over 6000 photographs.</p>
  <p>I've taken many photographs now and I'm best known for my abstract architectural photographs, in addition to other more "traditional" photographs. My photos have been publicly exhibited numerous times in galleries since I was 19 years old. They have been collected by a well known university in upstate New York. Collectors of my work often include leaders of corporations. Subsequently, my photographs have been displayed in offices around the world, including Beijing, Shanghai, and New York City. While individuals collect my work, private institutions have also used my photographs commercially. Moreover, I have published two books on photography.</p>

  <div class="center">
    <a class="page-link" href="https://vimeo.com/hiattzhao" target="_blank">My architecture reflection videos on Vimeo <i class="fa fa-external-link"></i></a>
  </div>
</div>
---
layout: page
title: Nature
permalink: /nature
---

<div id="galleria"></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
    crossorigin="anonymous"></script>
<script src="/assets/js/galleria-1.4.2.min.js"></script>

<script>
  var imageLocation = '/assets/photos/nature/';
  var thumbLocation = imageLocation + 'thumb-n/';
  var bigLocation = imageLocation;
  var imagePrefix = 'n';
  var totalImages = 28;
  
  var data = [];

  for (var i = 1; i <= totalImages; i++) {
    if (i < 10) {
      i = '0' + i;
    }
    data.push({
      image : imageLocation + imagePrefix + i + '.jpg',
      thumb : thumbLocation + imagePrefix + i + '.jpg',
      big : imageLocation + imagePrefix + i + '.jpg',
      title: 'nature #' + i,
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
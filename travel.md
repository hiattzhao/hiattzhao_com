---
layout: page
title: Travel
permalink: /travel
---
<div id="galleria"></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
    crossorigin="anonymous"></script>
<script src="/assets/js/galleria-1.4.2.min.js"></script>

<script>
  var imageLocation = '/assets/photos/travel/';
  var thumbLocation = imageLocation + 'thumb-t/';
  var bigLocation = imageLocation;
  var imagePrefix = 't';
  var totalImages = 26;
  
  var data = [];

  for (var i = 1; i <= totalImages; i++) {
    if (i < 10) {
      i = '0' + i;
    }
    data.push({
      image : imageLocation + imagePrefix + i + '.jpg',
      thumb : thumbLocation + imagePrefix + i + '.jpg',
      big : imageLocation + imagePrefix + i + '.jpg',
      title: 'travel #' + i,
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
  <p>My first solo traveling was a 45 days Greyhound bus trip around the US when I was 19 years old. Consequently, it boosted my interest in photography.</p>
  <p>I didn't travel for ten years, until I was 29 years old. I had some health struggles in my twenties, but I realized that life is about experiencing the world and it's my goal to travel the world before I die. I decided to travel on average 30 days out of every year. So in 2013, I couchsurfed from Alaska to Mexico along the West Coast of United States for 40 days.</p>
  <p>A year later, I took a solo road trip up the Hudson River Valley and arrived in Burlington, Vermont. I was planning to go east all the way to Cape Cod, but I had to head home after a week's stay at the hospital.</p>
  <p>I finished my master degree in finance from 2014 to 2015 then I went out west again. This time, with two friends from graduate school, we went to Salt Lake City, Yellowstone National Park, Antelope Canyon, Grand Canyon, and Las Vegas.</p>
  <p>I kept my promise of travel every year and in 2016 I spent a month in western Europe where I traveled to London, France, Spain, and Portugal.</p>
  <p>Unfortunately, I didn't do any traveling next year, but I made it up the following year when I bicycled across the United States from Philadelphia to San Francisco in 100 days. This was the best adventure I've had so far in my life.</p>


  <div class="center">
    <a class="page-link" href="https://hiattzhao2018.blogspot.com" target="_blank">My 2018 cross country bicycle trip blog <i class="fa fa-external-link"></i></a>
  </div>
</div>
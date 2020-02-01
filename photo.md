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

  var titles = [
    '2006 Atlanta 174',
    '2006 Boston 015',
    '2007 NYC 029',
    '2007 NYC 279',
    '2007 NYC 290',
    '2007 Philadelphia 089',
    '2007 Philadelphia 184',
    '2008 Dallas 27',
    '2011 Bethlehem 54',
    '2012 Beijing 0156',
    '2012 Beijing 1304',
    '2012 Beijing 2532',
    '2012 Beijing 2562',
    '2012 Beijing 2581',
    '2012 Beijing 2602',
    '2012 Hong Kong 093',
    '2012 Hong Kong 108',
    '2012 Hong Kong 267',
    '2012 Hong Kong 273',
    '2012 Hong Kong 290',
    '2012 Hong Kong 299',
    '2012 Shanghai 0200',
    '2012 Shanghai 0415',
    '2012 Shanghai 0433',
    '2012 Shanghai 0541',
    '2012 Shanghai 0797',
    '2012 Shanghai 0933',
    '2012 Shanghai 1181',
    '2012 Shanghai 1427',
    '2012 Shanghai 1581',
    '2012 Shanghai 1598',
    '2012 Shanghai 1624',
    '2012 Shanghai 2136',
    '2012 Shanghai 2389',
    '2012 Shanghai 2414',
    '2012 Shanghai 2427',
    '2012 Shanghai 2454',
    '2012 Shanghai 2806',
    '2012 Shanghai 3043',
    '2012 Shanghai 3063',
    '2012 Shanghai 3202',
    '2012 Shanghai 3236',
    '2012 Shanghai 3277',
    '2012 Shenzhen 329',
    '2012 Shenzhen 418',
    '2012 Shenzhen 453',
    '2012 XiAn 1151',
    '2012 XiAn 1164',
    '2012 XiAn 1176',
    '2012 XiAn 1270',
    '2013 Anchorage 096',
    '2013 Anchorage 118',
    '2013 Anchorage 202',
    '2013 Beijing 0218',
    '2013 Portland 085',
    '2013 Portland 150',
    '2013 San Diego 047',
    '2013 San Diego 058',
    '2013 Seattle 785',
    '2013 Vancouver 169',
    '2013 Vancouver 176',
    '2013 Vancouver 339',
    '2013 Vancouver 621'
  ];

  for (var i = 1; i <= totalImages; i++) {
    var j = i;
    if (i < 10) {
      j = '0' + i;
    }
    data.push({
      image : imageLocation + imagePrefix + j + '.jpg',
      thumb : thumbLocation + imagePrefix + j + '.jpg',
      big : imageLocation + imagePrefix + j + '.jpg',
      title: titles[i - 1],
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
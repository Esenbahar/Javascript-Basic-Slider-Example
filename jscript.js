
 var i = 0;
 var images = ['https://loremflickr.com/320/240?random=1', 'https://loremflickr.com/320/240?random=2', 'https://loremflickr.com/320/240?random=3'];

 var duration = 2000;

 function slideImg(){

 	document.slide.src = images[i];

 	if (i < images.length -1) {
 		i++
 	}else {
 		i =0;
 	}

 	setTimeout("slideImg()", duration);

 }

window.onload = slideImg;






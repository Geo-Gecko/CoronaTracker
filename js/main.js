
$("#Visualizebtn").off().on("click", function() {
	$("#visualize").toggle();
  });
  $(document).click(function(e) {
	if ($(e.target).closest('#visualize, #Visualizebtn').length === 0) {
	  $("#visualize").hide();
	}
  })
  $("#Interrogatebtn").off().on("click", function() {
	$("#interrogate").toggle();
  });
  $(document).click(function(e) {
	if ($(e.target).closest('#interrogate, #Interrogatebtn').length === 0) {
	  $("#interrogate").hide();
	}
  })



// Creating a slider
var slidervar = document.getElementById('slider')
noUiSlider.create(slider, {
  start: [0, 100],
  connect: true,
  step: 5,
  range: {
	'min': 0,
	'max': 100
  },
  tooltips: true
});


var slidervar2 = document.getElementById('slider2')
noUiSlider.create(slider2, {
  start: [0, 100],
  connect: true,
  range: {
	'min': 0,
	'max': 100
  },
  tooltips: true
});

var slidervar3 = document.getElementById('slider3')
noUiSlider.create(slider3, {
  start: [0, 100],
  connect: true,
  step: 5,
  range: {
	'min': 0,
	'max': 100
  },
  tooltips: true
});

var slidervar4 = document.getElementById('slider4')
noUiSlider.create(slider4, {
  start: [0, 100],
  connect: true,
  step: 5,
  range: {
	'min': 0,
	'max': 100
  },
  tooltips: true
});


var slidervar5 = document.getElementById('slider5')
noUiSlider.create(slider5, {
  start: [0, 100],
  connect: true,
  step: 5,
  range: {
	'min': 0,
	'max': 100
  },
  tooltips: true
});

var slidervar6 = document.getElementById('slider6')
noUiSlider.create(slider6, {
  start: [0, 100],
  connect: true,
  step: 5,
  range: {
	'min': 0,
	'max': 100
  },
  tooltips: true
});










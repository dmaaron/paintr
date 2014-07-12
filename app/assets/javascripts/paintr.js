var clicked = false;
//adds a color to the color palette

function add_color() {
	var color_choice = $('#color-input').val();
	var new_swatch = $('<div>');
	new_swatch.addClass('swatch');
	new_swatch.css('background-color', color_choice);
	$('#palette').append(new_swatch);
	$('#color-input').val('');
}
// adds an image to the image palette

function add_image() {
	console.log('add image');
	var image_choice = $('#image-input').val();
	var new_image = $('<img>');
	new_image.addClass('swatch');
	new_image.attr('src', image_choice);
	$('#image-palette').append(new_image);
	$('#image-input').val('');
}
// sets an image to the canvas 

function select_image() {
	var selected_image = $(this).attr('src');
	$('#canvas').css('background-image', 'url(' + selected_image + ')');
}
//removes an image from the canvas

function remove_image() {
	$('#canvas').css('background-image', 'none');
}
//Called when a swatch of color is clicked, changes the selected color to that color

function select_color() {
	var selected_color = $(this).css('background-color');
	$('#selected-color.swatch').css('background-color', selected_color);
}
//Called when the user hovers over the canvas, changes the color of hovered paint dots
//to the selected color. 

function draw() {
	if (clicked === true) {
		var current_color = $('#selected-color.swatch').css('background-color');
		$(this).css('background-color', current_color);
	}
}

function set_eraser() {
	$('#selected-color.swatch').css('background-color', 'white');
}

//Called when document loads, fills the canvas with .paintdot div elements

function populate_cavas() {
	for (var i = 0; i < 1200; i++) {
		var dot = $('<div></div>');
		dot.addClass('paint-dot');
		$('#canvas').append(dot);
	}
}

function clear_canvas() {
	$('.paint-dot').css('background-color','');
}
//Called when the clear button is clicked, remove all of the swatches in the pallatte
//and clears selected color

function clear_palette() {
	$('#palette').empty();
	$('#image-palette').empty();
}

//Alternate(pretty) way to run code after DOM load
$(function() {
	$('#canvas').on('mouseover', '.paint-dot', draw);
	//Add Color Event
	$('#add-color').on('click', add_color);
	populate_cavas();
	$('#clear-palette').on('click', clear_palette);
	$('#clear-canvas').on('click', clear_canvas);
	$('#erase').on('click', set_eraser);
	$('#palette').on('click', '.swatch', select_color);
	$('#add-image').on('click', add_image);
	$('#remove-image').on('click', remove_image);
	$('#image-palette').on('click', '.swatch', select_image);
	$('body').mousedown(function() {
		clicked = true;
	});
	$('body').mouseup(function() {
		clicked = false;
	});
});
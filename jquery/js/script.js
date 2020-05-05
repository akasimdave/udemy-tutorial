// script.js

	/* -----------------
		JQUERY SYNTAX
		---------------- */
	$(function(){
		$("button").click(function(){
			$('#box').fadeOut(1000);
		});

	/* -----------------
		JQUERY SELECTORS
		---------------- */

	// grouping selector
	$('h2,h3,h4').css('border', 'solid 1px green');

	// ID selector
	$('div#container').css('border', 'solid 2px yellow');

	// class selector
	$('p.lead').css('border', 'solid 1px red');

	// pseudo-element selector - selects first element
	$('li:first').css('border', 'solid 1px blue');

	// descendant selector
	$('p:even').css('border', 'dotted 2px red');

	// child selector
	$('div em').css('border', 'solid 1px blue');

	// jQuery header selector
	$('div > p').css('border', 'solid 1px orange');

	// jQuery contains selector
	// $(':header').css('border', 'dashed 2px cyan');

	$('div:contains("Brad")').css('border', 'solid 1px green');

	/* ---------------------
		JQUERY EVENT METHODS
		-------------------- */
	$('#box').click(function(){
		alert('You just clicked the box');
	});

	$("input").blur(function(){
		if ($(this).val() == "") {
			$(this).css('border', 'solid 1px red');
			$('#box').text('You forgot to add text');
		}
	});

	$("input").keydown(function(){
		if ($(this).val() !== "") {
			$(this).css('border', 'solid 1px #777');
			$('#box').text('Thanks for that.');
		}
	});

	$('#box').hover(function(){
		$(this).text('You hovered in');
	}, function(){
		$(this).text('You hovered out');
	});

});
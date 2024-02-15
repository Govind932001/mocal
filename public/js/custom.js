$(document).ready(function () {
	//main slider
	$("#banner-slider").owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		loop: true,
		autoplay: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
		autoplayHoverPause: false,

	});

	//tab slider	
	$(".tab_slider2").owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		autoplay: false,
		mouseDrag: true,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 2,
				nav: false,
				margin: 0
			},
			768: {
				items: 6,
				nav: false,
				margin: 0

			},
			1280: {
				items: 6,
				nav: false,
				loop: true,
				margin: 20
			},
			1000: {
				items: 6,
				nav: false,
				loop: true,
				margin: 0
			}
		}

	});

	//tab slider 2	
	$(".tab_slider").owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		autoplay: false,
		mouseDrag: true,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 2,
				nav: false,
				margin: 8
			},
			768: {
				items: 4,
				nav: false,
				margin: 8

			},
			1280: {
				items: 6,
				nav: false,
				loop: true,
				margin: 8
			},
			1000: {
				items: 5,
				nav: false,
				loop: true,
				margin: 8
			}
		}

	});

	//recruiting_logo_slider	
	$(".recruiting_logo_slider").owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		autoplay: false,
		mouseDrag: true,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 3,
				nav: false,
				margin: 8
			},
			768: {
				items: 5,
				nav: false,
				margin: 8

			},
			1280: {
				items: 9,
				nav: false,
				loop: true,
				margin: 8
			},
			1000: {
				items: 8,
				nav: false,
				loop: true,
				margin: 8
			}
		}

	});

});




/* custmer_chat js */
$(document).ready(function () {
	$(".custmer_chat .custmer_chat_icon").click(function () {
		$("body").addClass("chatpop_show");
		$(this).closest(".custmer_chat").toggleClass("active");
	});
	$(".custom_chat .close_chatbox").click(function () {
		$("body").removeClass("chatpop_show");
		$(this).closest(".custmer_chat").removeClass("active");
	});


	/* Chat tabbing */
	$('.maincontent').hide().fadeIn();
	$('.chat_tab a').bind('click', function (e) {
		$('.chat_tab li a.activetab').removeClass('activetab');
		$('.maincontent:visible').hide();
		$(".maincontent").removeClass("active");
		$(this.hash).show().addClass("active");
		$(this).closest(".owl-item").siblings().find("a").removeClass('activetab');
		$(this).addClass('activetab');
		e.preventDefault();
	}).filter(':first').click();
	$('.chat_tab a').bind('click', function (e) {
		$(this.hash).hide().fadeIn().addClass('active');
	});

	/* Chat Messages function */
	$(".chat_msgcontent .commonrow2 .leftside strong").click(function () {
		$(".messages_screen_1").hide();
		$(".custom_chat .chat_tab").hide();
		$(".messages_screen_2").show();
	});
	$(".chat_msgcontent .messages_screen_2 .back_screen1").click(function () {
		$(".messages_screen_2").hide();
		$(".messages_screen_1").show();
		$(".custom_chat .chat_tab").show();
	});

	$(".chat_content_in").has(".read_more").append("<div class='white_overlay'></div>").addClass("redtext");

});

// jQuery script for filtering with input
$(document).ready(function () {
	$('#chat_tabhome').on('input', function () {
		var searchValue = $(this).val().toLowerCase();

		$('#chat_contenthome .commonrow').each(function () {
			var listItemText = $(this).text().toLowerCase();

			if (listItemText.includes(searchValue)) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	});
});

// jQuery script for filtering with input
$(document).ready(function () {
	$('#chat_tabmsg').on('input', function () {
		var searchValue = $(this).val().toLowerCase();

		$('#chat_contentmsg .commonrow2').each(function () {
			var listItemText = $(this).text().toLowerCase();

			if (listItemText.includes(searchValue)) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	});
});

function sendMessage() {
	var userInput = document.getElementById("user-message").value;
	var fileInput = document.getElementById("file-upload");
	var chatMessages = document.getElementById("chat-messages");

	// Display the user's message in the chat
	// chatMessages.innerHTML += "<p>User: " + userInput + "</p>";
	chatMessages.innerHTML += "<p>" + userInput + "</p>";

	// Check if a file is attached
	if (fileInput.files.length > 0) {
		var fileName = fileInput.files[0].name;
		chatMessages.innerHTML += "<p>Attachment: " + fileName + "</p>";
		// You may want to handle file upload logic here
	}

	// Clear the input field
	document.getElementById("user-message").value = "";
	fileInput.value = "";
}


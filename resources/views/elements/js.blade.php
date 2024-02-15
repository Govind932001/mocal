<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.5.0/semantic.min.js"></script>
<script>
	$(".dropdownmenu").dropdown();
	$("#clientvalue").change(function () {
		if ($(this).val().length === 0) {
			//  alert('yes');
			//$(this).parent('.selectWrap').siblings('.profileSection').addClass('extya');
			$(".profileSection").css("display", "none");
		} else {
			//$(this).parent('.selectWrap').siblings('.profileSection').removeClass('extya');
			//alert('no');
			$(".profileSection").css("display", "block");
		}
	});


	$(document).ready(function () {
		$(".my_calender .eventcolor").click(function () {
			$(".choosecolor").slideToggle();
		});

		$(".b_time").siblings(".mcalender_popup").parent("").children(".b_time").addClass("show");
		$(".my_calender .b_time").click(function () {
			$(this).siblings(".mcalender_popup").addClass("show_popup");
		});

		$(".mcalender_popup .close_btn").click(function () {
			$(this).closest(".mcalender_popup").removeClass("show_popup");
		});
	});
</script>
<script>
	$(function () {
		$('.c_data').hide();
		$('.d2').show();
		$('#selectField').on("change", function () {
			$('.c_data').hide();
			$('.d' + $(this).val()).show();
		}).val(2);
	});

	$(document).ready(function () {
		$(".slot_selected .slot_btn").click(function () {
			$(this).toggleClass("active");
			$(".slot_selected .slot_popup").toggleClass("show");
		});

		$('.my_calender .column .b_time').click(function () {
			$(this).css("opacity", "1");
		});

		$('.slot_popup li .cross').click(function () {
			$(this).parent("li").remove();
		});
		$('.my_calender .slot_popup .clear_all').click(function () {
			$(this).closest(".slot_popup").find(".slot_time").remove();
		});

	});
</script>
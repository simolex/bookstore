$(document).ready(function () {
  $.validator.addMethod(
    "phoneGlo",
    function (phone_number, element) {
      return (
        this.optional(element) || phone_number.match(/^(\+7\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2})$/)
      );
    },
    "Please specify a valid phone number"
  );

  $(".form").each(function () {
    $(this).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: {
          required: true,
          phoneGlo: true,
        },
        email: {
          required: true,
          email: true,
        },
      },
      errorClass: "invalid__text",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Please enter at least 2 characters.",
        },
        phone: {
          required: "Phone number required",
          phoneGlo: "Phone number format of +7 (xxx) xxx-xx-xx",
        },
        email: {
          required: "Email address required",
          email: "Email address format of name@domain.com",
        },
      },
      highlight: function (element, errorClass, validClass) {
        if ($(element).parent().hasClass("subscribe")) {
          $(element)
            .closest(".subscribe")
            .addClass("invalid__field-error")
            .removeClass("invalid__field-valid");
        } else {
          $(element).addClass("invalid__field-error").removeClass("invalid__field-valid");
        }
      },
      unhighlight: function (element, errorClass, validClass) {
        if ($(element).parent().hasClass("subscribe")) {
          $(element)
            .closest(".subscribe")
            .removeClass("invalid__field-error")
            .addClass("invalid__field-valid");
        } else {
          $(element).removeClass("invalid__field-error").addClass("invalid__field-valid");
        }
      },
      errorPlacement: function (error, element) {
        if (element.parent().hasClass("subscribe") && element.attr("name") == "email") {
          console.log();
          element.closest(".newsletter__group").children(".invalid__text").remove();
          error.addClass("invalid__text--position");
          error.insertAfter(".subscribe");
        } else {
          error.insertAfter(element);
        }
      },
      success: function (error) {
        error.removeClass("error");
        error.parent().removeClass("error");
      },
    });
  });
});

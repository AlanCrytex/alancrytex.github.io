// Fixs the menu so when link is clicked it would close the menu.
$(function () {

    $('#bs-example-navbar-collapse-1')
        .on('shown.bs.collapse', function () {
            $('#navbar-hamburger').addClass('hidden');
            $('#navbar-close').removeClass('hidden');
        })
        .on('hidden.bs.collapse', function () {
            $('#navbar-hamburger').removeClass('hidden');
            $('#navbar-close').addClass('hidden');
        });

});

$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
        $(this).collapse('hide');
    }
});
$(function () {
    $(document).click(function (event) {
        $('.navbar-collapse').collapse('hide');
    });
});

$(document).ready(function () {
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
    }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function () {
        $("#cookieConsent").fadeOut(200);
    });
});

(function () {

  var youtube = document.querySelectorAll(".youtube");

  for (var i = 0; i < youtube.length; i++) {

    var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";

    var image = new Image();
    image.src = source;
    image.addEventListener("load", function () {
      youtube[i].appendChild(image);
    }(i));

    youtube[i].addEventListener("click", function () {

      var iframe = document.createElement("iframe");

      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

      this.innerHTML = "";
      this.appendChild(iframe);
    });
  };

})();

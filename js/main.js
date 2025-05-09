(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Courses carousel
  $(".courses-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    loop: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });

  // Team carousel
  $(".team-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  });

  // Related carousel
  $(".related-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });

  // Contact form to WhatsApp
  $(document).ready(function () {
    $("#contact-form").on("submit", function (e) {
      e.preventDefault(); // Mencegah form submit biasa

      var name = $("#contact-name").val();
      var email = $("#contact-email").val();
      var subject = $("#contact-subject").val();
      var message = $("#contact-message").val();

      var whatsappNumber = "6289523260729"; // Ganti dengan nomor WhatsApp tujuan

      var whatsappMessage =
        "Halo, saya ingin menghubungi Anda.\n\n" +
        "Nama: " +
        name +
        "\n" +
        "Email: " +
        email +
        "\n" +
        "Subjek: " +
        subject +
        "\n" +
        "Pesan: " +
        message;

      var whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);

      window.open(whatsappURL, "_blank");
    });
  });

  // Fungsi WhatsApp untuk Form Pendaftaran
  $(document).ready(function () {
    $("#formPendaftaran").on("submit", function (e) {
      e.preventDefault();

      var nama = $("#nama").val();
      var email = $("#email").val();
      var telepon = $("#telepon").val();
      var alamat = $("#alamat").val();

      var nomorWA = "6289523260729"; // Ganti dengan nomor tujuan Anda

      var pesan =
        "Halo, saya ingin mendaftar kursus di UBHI Course.\n\n" +
        "*Nama:* " +
        nama +
        "\n" +
        "*Email:* " +
        email +
        "\n" +
        "*Telepon:* " +
        telepon +
        "\n" +
        "*Alamat:* " +
        alamat;

      var urlWA =
        "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(pesan);

      window.open(urlWA, "_blank");
      console.log($("#nama").val());
    });
  });

  // Animasi muncul/hilang saat scroll
  $(document).ready(function () {
    function toggleVisibility() {
      $(".scroll-reveal").each(function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        // Muncul jika elemen masuk ke dalam layar
        if (elementBottom > viewportTop && elementTop < viewportBottom) {
          $(this).addClass("visible").removeClass("hidden");
        } else {
          $(this).addClass("hidden").removeClass("visible");
        }
      });
    }

    // Panggil saat load & scroll
    toggleVisibility();
    $(window).on("scroll resize", toggleVisibility);
  });
})(jQuery);

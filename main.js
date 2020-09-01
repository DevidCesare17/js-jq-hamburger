// 1. Apertura menù (diventa display: block)
$(".header-right > a").click(
  function () {
    $(".hamburger-menu").addClass("active");
  }
);

// 2. Chiusura menù (ritorno a display: none)
$(".close").click(
  function() {
    $(".hamburger-menu").removeClass("active");
  }
);

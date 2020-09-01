// 1. Apertura menù (diventa display: block)
$(".header-right a>i.fa-bars").click(
  function () {
    $(".hamburger-menu").addClass("active");
  }
);

// 2. Chiusura menù (ritorno a display: none)
$(".hamburger-menu a>i.fa-times").click(
  function() {
    $(".hamburger-menu").removeClass("active");
  }
);

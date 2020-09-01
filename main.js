// 1. Apertura menù (diventa display: block)
var hambMenu = $(".fa-bars");
hambMenu.click(
  function () {
    $(".hamburger-menu").show("slow");
  }
);

// 2. Chiusura menù (ritorno a display: none)
var closeAll = $(".fa-times");
closeAll.click(
  function () {
    $(".hamburger-menu").hide("fast");
  }
);

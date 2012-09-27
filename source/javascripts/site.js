$("a").each(function(){
	$(this).tooltip();
});

$("ul").each(function(){
	$(this).addClass("unstyled");
});

function printFriendly() {
  $("#paper").removeAttr("id")
  $("body").css("backgroundColor","white");
  $("footer").remove();
  
  $("a").each(function(){
    $(this).contents().unwrap();
  });
  
  $(".initials span").remove();
  $(".initials h1").css("float","right");
  $(".span3 h3").css("border-right","1px black solid");
  
  console.log("Ready to Print");
}

$("a#print").click(function(){
  $(this).tooltip('hide')
  printFriendly();
  console.log("Printer Clicked");
});
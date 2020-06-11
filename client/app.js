$(document).ready(function () {
  // $.ajax({
  //   type: "GET",
  //   url: "/api/count",
  //   dataType: "json",
  // }).then((res) => {
  //   $(".text").html(res.count);
  // });
  $("#btnSubmit").on("click", () => {
    $.ajax({
      type: "GET",
      url: "/api/test",
      dataType: "json",
    }).then((res) => {
      console.log(res);
    });
  });

  $("#btnSubmit2").on("click", () => {
    $.ajax({
      type: "GET",
      url: "/api/test2",
      dataType: "json",
    }).then((res) => {
      console.log(res);
    });
  });
});

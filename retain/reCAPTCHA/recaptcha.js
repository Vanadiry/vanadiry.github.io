$.ajax({
  type: "POST",
  url: "recaptcha.php",
  data: "&g-recaptcha-response=" + grecaptcha.getResponse(),
  success: function (data) {
    if (data == "ok") {
      //验证通过，执行操作
    } else if (data == "error") {
      //验证错误，执行操作
    } else if (data == "not verify") {
      //未进行验证，执行操作
    }
  },
  error: function () {
    alert("error!");
  },
});

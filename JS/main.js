$("document").ready(() => {
  $("#telephone").mask("(00)0000-00000", {
    placeholder: "(xx)xxxx-xxxxx",
  });

  $("#cpf").mask("000.000.000-00", {
    placeholder: "xxx.xxx.xxx-xx",
  });
  $("#cep").mask("00000-000", {
    placeholder: "xxxx-xxx",
  });

  $("form").on("submit", (e) => {
    e.preventDefault();
    let validateInputs = true;

    $("input").each((i, e) => {
      if ($(e).val() === "") {
        validateInputs = false;
        $(e).addClass("error");
      } else {
        $(e).removeClass("error");
      }
    });

    if (validateInputs) {
      $("input").each((i, e) => {
        $(e).val("");
      });

      alert("Formulário enviado!");
    } else {
      alert("Preencha os campos em vermelho!");
    }
  });
});

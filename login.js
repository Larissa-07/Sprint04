function validarFormulario() {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    const cpf = document.getElementById("cpf");
    const senha = document.getElementById("senha");

    senha = document.getElementsByName('senha').value;
    senhaC = document.getElementsByName('senhaC').value;
 
    if (senha != senhaC) {
      senhaC.setCustomValidity("Senhas diferentes!");
      return false;
    } else {
      return true;
    }
  }
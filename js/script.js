function InitTelefoneMask() {
  var tel = document.getElementById("telefone").value;
  tel = tel.slice(0, 14); 
  console.log(tel);
  document.getElementById("telefone").value = tel;
  tel = document.getElementById("telefone").value.slice(0, 10);
  console.log(tel);
  var tel_formatado = document.getElementById("telefone").value;
  if (tel_formatado[0] != "(") {
    if (tel_formatado[0] != undefined) {
      document.getElementById("telefone").value = "(" + tel_formatado[0];
    }
  }
  if (tel_formatado[3] != ")") {
    if (tel_formatado[3] != undefined) {
      document.getElementById("telefone").value =
        tel_formatado.slice(0, 3) + ")" + tel_formatado[3];
    }
  }
  if (tel_formatado[9] != "-") {
    if (tel_formatado[9] != undefined) {
      document.getElementById("telefone").value =
        tel_formatado.slice(0, 9) + "-" + tel_formatado[9];
    }
  }
}

function InitCepMask() {
  let cep = document.getElementById("cep").value;
  console.log(cep);
  if (cep[2] != ".") {
    if (cep[2] != undefined) {
      document.getElementById("cep").value = cep.slice(0, 2) + "." + cep[2];
    }
  }
  if (cep[6] != "-") {
    if (cep[6] != undefined) {
      document.getElementById("cep").value = cep.slice(0, 6) + "-" + cep[6];
    }
  }
}

function InitCpfMask() {
  let cpf = document.getElementById("cpf").value;
  console.log(cpf);
  if (cpf[3] != ".") {
    if (cpf[3] != undefined) {
      document.getElementById("cpf").value = cpf.slice(0, 3) + "." + cpf[3];
    }
  }
  if (cpf[7] != ".") {
    if (cpf[7] != undefined) {
      document.getElementById("cpf").value = cpf.slice(0, 7) + "." + cpf[7];
    }
  }
  if (cpf[11] != "-") {
    if (cpf[11] != undefined) {
      document.getElementById("cpf").value = cpf.slice(0, 11) + "-" + cpf[11];
    }
  }
}

function InitCnpjMask() {
  let cnpj = document.getElementById("cnpj").value;
  if (cnpj[2] != ".") {
    if (cnpj[2] != undefined) {
      document.getElementById("cnpj").value = cnpj.slice(0, 2) + "." + cnpj[2];
    }
  }
  if (cnpj[6] != ".") {
    if (cnpj[6] != undefined) {
      document.getElementById("cnpj").value = cnpj.slice(0, 6) + "." + cnpj[6];
    }
  }
  if (cnpj[10] != "/") {
    if (cnpj[10] != undefined) {
      document.getElementById("cnpj").value =
        cnpj.slice(0, 10) + "/" + cnpj[10];
    }
  }
  if (cnpj.length > 11 && cnpj[11] !== "0") {
    cnpj = cnpj.slice(0, 11) + "0" + cnpj.slice(11);
  }
  if (cnpj.length > 12 && cnpj[12] !== "0") {
    cnpj = cnpj.slice(0, 12) + "0" + cnpj.slice(12);
  }
  if (cnpj.length > 13 && cnpj[13] !== "0") {
    cnpj = cnpj.slice(0, 13) + "0" + cnpj.slice(13);
  }
  if (cnpj[14] != "1") {
    if (cnpj[14] != undefined) {
      document.getElementById("cnpj").value =
        cnpj.slice(0, 14) + "1" + cnpj[14];
    }
  }
  if (cnpj[15] != "-") {
    if (cnpj[15] != undefined) {
      document.getElementById("cnpj").value =
        cnpj.slice(0, 15) + "-" + cnpj[15];
    }
  }
}

function InitSusuCode() {
  let code = document.querySelector("#codigo").value;
  if (code[2] != "_") {
    if (code[2] != undefined) {
      document.getElementById("codigo").value =
        code.slice(0, 2) + "_" + code[2];
    }
  }
  if (code[5] != "/") {
    if (code[5] != undefined) {
      document.getElementById("codigo").value =
        code.slice(0, 5) + "/" + code[5];
    }
  }
  if (code[6] != "/") {
    if (code[6] != undefined) {
      document.getElementById("codigo").value =
        code.slice(0, 6) + "/" + code[6];
    }
  }
  if (code[10] != "-") {
    if (code[10] != undefined) {
      document.getElementById("codigo").value =
        code.slice(0, 10) + "-" + code[10];
    }
  }
  if (code[10] != "-") {
    if (code[10] != undefined) {
      document.getElementById("codigo").value =
        code.slice(0, 10) + "-" + code[10];
    }
  }
  if (code[14] != ".") {
    if (code[14] != undefined) {
      document.getElementById("codigo").value =
        code.slice(0, 14) + "." + code[14];
    }
  }
  if (code[15] != "9") {
    if (code[15] != undefined) {
      document.getElementById("codigo").value =
        code.slice(0, 15) + "9" + code[15];
    }
  }
  if (code[16] != ".") {
    if (code[16] != undefined) {
      document.getElementById("codigo").value =
        code.slice(0, 16) + "." + code[16];
    }
  }
}

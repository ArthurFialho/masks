addEventListener("DOMContentLoaded", () => {
    const saveTel = localStorage.getItem("tel");
    document.querySelector(".result-son-tel").innerHTML = saveTel;
})
addEventListener("DOMContentLoaded", () => {
    const saveCPF = localStorage.getItem("cpf");
    document.querySelector(".result-son-cpf").innerHTML = saveCPF;
})
addEventListener("DOMContentLoaded", () => {
    const saveCEP = localStorage.getItem("cep");
    document.querySelector(".result-son-cep").innerHTML = saveCEP;
})
addEventListener("DOMContentLoaded", () => {
    const saveCNPJ = localStorage.getItem("cnpj");
    document.querySelector(".result-son-cnpj").innerHTML = saveCNPJ;
})
addEventListener("DOMContentLoaded", () => {
    const saveCode = localStorage.getItem("code");
    document.querySelector(".result-son-code").innerHTML = saveCode;
})
addEventListener("DOMContentLoaded", () => {
    const saveName = localStorage.getItem("nome");
    document.querySelector(".result-son-nome").innerHTML = saveName;
})
addEventListener("DOMContentLoaded", () => {
    const saveEndereco = localStorage.getItem("endereco");
    document.querySelector(".result-son-endereco").innerHTML = saveEndereco;
})

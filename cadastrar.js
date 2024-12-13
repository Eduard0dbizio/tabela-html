const form = document.querySelector("#form-produto");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const fornecedor = {
      nome: form.nome.value,
      email: form.email.value,
      forme: form.forme.value,
      produto: form.produto.value,
    };
  
    const resultado = await fetch(
      "https://aula-html-48736-default-rtdb.firebaseio.com/fornecedor.json",
      {
        method: "POST",
        body: JSON.stringify(fornecedor),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (resultado.ok) {
      form.reset();
      window.alert("Fornecedor cadastrado com sucesso!");
    }
  });
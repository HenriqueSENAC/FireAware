async function cadastrar(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;  
    let cel = document.getElementById("cel").value;  
    
    let data = {email, senha, cel}  

    const response = await fetch('http://localhost:3005/api/store/user', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();    
        console.log("content")
    if(content.success) {
        alert("Sucesso")
    } else {
        alert('Não');
    }
}
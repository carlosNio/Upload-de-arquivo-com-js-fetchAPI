/**
 * Send file via AJAX using Fetch API
 * 
 * @author git:carlosNio
 * @return false
 * 
 */
function sendAjax() {

    // get the file in form
    let file = document.getElementById('file').files[0];
    // BACKEND ENDPOINT
    let url = '/';
    //  request form data
    let data = new FormData();
    data.append("ARQUIVO", file);

    fetch(url, {
        method: "POST",
        body: data
    }).then((resposta) => {
        if (resposta.status != 200) return resposta;
        return resposta.json();
    }).then((dados) => {

        // algo correu mau
        if (dados instanceof Response) {
            console.error(`Error code: ${dados.status}`);
            console.log(dados.text());
            return false;
        }

        alert(dados.msg);
        return false;
    });

    return false;
}
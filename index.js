function buscarFoto(e){
    
    let busca = document.getElementById('busca').value;
    const chave_api = "563492ad6f9170000100000182cfa5251b204eb7954b4d9fd8c1a8f8";
    let url = "https://api.pexels.com/v1/search/?page=1&per_page=100&query=" + busca;
    var req = new XMLHttpRequest();
    req.open('GET',url);
    req.onload = () => {
        manipulaResposta(req);
    }
    req.setRequestHeader("Authorization", chave_api);
    req.send();
}

function manipulaResposta(req){
    let response = JSON.parse(req.responseText);
    let imgs = document.querySelector('.imgs');
    let lim = document.getElementById('limite').value;
    console.log(response);
    if(lim == ''){
        lim = 1;
    } 
    if(lim < 1){
        alert('Quantidade Inválida')
    } else {
        imgs.innerHTML = '';
        let limite = lim;
        for(i=0;i<limite;i++){
            const image = document.createElement('img');
            image.src = response.photos[i].src.medium;
            imgs.appendChild(image);
        }
    }
}

document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        buscarFoto();
    }
})
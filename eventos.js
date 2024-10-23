//para aparecer a mensagem de pesquisar.
function searchEvent() {
    const query = document.getElementById('searchBar').value;
    if (query) {
    alert(`Você está pesquisando por: ${query}`);
    // Aqui você pode adicionar lógica para realmente buscar os eventos, como chamadas a APIs, etc.
    } else {
    alert('Por favor, insira um termo de pesquisa.');
    }
    }


    //para puxar as informações do json e enviar para o html.
    function createPolaroidGallery(images) {
        const gallery = document.getElementById('polaroid-gallery');
        images.forEach(image => {
        const polaroid = document.createElement('div');
        polaroid.className = 'polaroid';
        
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        
        const captionElement = document.createElement('div');
        captionElement.className = 'caption';
        captionElement.textContent = image.caption;
        
        polaroid.appendChild(imgElement);
        polaroid.appendChild(captionElement);
        gallery.appendChild(polaroid);
        });
        }
        
        // Carregar o JSON usando fetch
        fetch("./eventos.json")
        .then(response => response.json())
        .then(data => createPolaroidGallery(data))
        .catch(error => console.error('Erro ao carregar o JSON:', error));
fetch('https://mariahdzsegura.github.io/JavaScript-Assignment4/data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const contentDiv = document.getElementById('content');
        data.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            itemDiv.innerHTML = `
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <p>Price: $${item.price}</p>
                <img src="${item.image}" alt="${item.name}">
            `;
            contentDiv.appendChild(itemDiv);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
const form = document.getElementById('urlForm');
const resultSection = document.getElementById('result');
const apiURL = 'https://jsonplaceholder.typicode.com/posts';

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch(apiURL);
        if (!response.ok) throw new Error('API no encontrada');
        const data = await response.json();
        mostrarDatos(data);
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});

function mostrarDatos(publicaciones) {
    resultSection.innerHTML = '';
    
    if (publicaciones.length > 0) {
        const table = document.createElement('table');
        const headerRow = document.createElement('tr');

        const headers = ['ID', 'Título', 'Cuerpo'];
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);

        publicaciones.forEach(publicacion => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${publicacion.id}</td>
                <td>${publicacion.title}</td>
                <td>${publicacion.body}</td>
            `;
            table.appendChild(row);
        });

        resultSection.appendChild(table);
    } else {
        resultSection.textContent = 'No se encontraron publicaciones.';
    }
}

    document.getElementById('apiUrl').value = 'https://jsonplaceholder.typicode.com/posts'
        
        document.getElementById('urlForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const apiUrl = document.getElementById('apiUrl').value;

            if (!apiUrl) {
                alert("Por favor, ingrese una URL válida.");
                return;
            }

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const resultSection = document.getElementById('result');

                    if (Array.isArray(data)) {
                        let tableHtml = '<h3>Resultados:</h3><table><thead><tr>';

                        Object.keys(data[0]).forEach(key => {
                            tableHtml += `<th>${key.charAt(0).toUpperCase() + key.slice(1)}</th>`;
                        });

                        tableHtml += '</tr></thead><tbody>';

                        data.forEach(item => {
                            tableHtml += '<tr>';
                            Object.values(item).forEach(value => {
                                tableHtml += `<td>${value}</td>`;
                            });
                            tableHtml += '</tr>';
                        });

                        tableHtml += '</tbody></table>';
                        resultSection.innerHTML = tableHtml;
                    } else {
                        resultSection.innerHTML = `<p>No se encontraron datos en formato adecuado.</p>`;
                    }
                })
                .catch(error => {
                    const resultSection = document.getElementById('result');
                    resultSection.innerHTML = `<p>Error al realizar la solicitud: ${error.message}</p>`;
                });
        });
document.getElementById('getFactBtn').addEventListener('click', getCatFact);

function getCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('catFact').innerText = data.fact;
        })
        .catch(error => {
            console.error('Error fetching the cat fact:', error);
        });
}
"use strict";
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
fetch(endpoint)
    .then(response => response.json())
    .then(json => {
    const input = document.querySelector('input.search');
    const suggestions = document.querySelector('ul.suggestions');
    if (!input || !suggestions) {
        throw new Error('elements not found');
    }
    const items = json.map((entry) => ({
        name: `${entry.city}, ${entry.state}`,
        population: Number(entry.population).toLocaleString(),
    }));
    input.addEventListener('input', () => {
        const value = input.value;
        console.log(value);
        const ui = items
            .filter(item => containText(item.name, value))
            .map(item => {
            const regex = new RegExp(value, 'gi');
            const name = value
                ? item.name.replace(regex, `<span class="hl">${value}</span>`)
                : item.name;
            return `
          <li>
            <span>${name}</span>
            <span class="population">${item.population}</span>
          </li>`;
        })
            .join('');
        suggestions.innerHTML = ui;
    });
});
function containText(content, text) {
    const regex = new RegExp(text, 'gi');
    return content.match(regex);
}
//# sourceMappingURL=main.js.map
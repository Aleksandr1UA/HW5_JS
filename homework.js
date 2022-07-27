console.table(countries);

/* Домашка
1. Отрендерить таблицу стран. в таблицу должны войти поля: name, capital, region, area
2. добавить поисковик (по примеру с занятия), событие на него
3. по событию искать частичные совпадения введенного текста с полями name, capital, region. выдавать полученные результаты в таблицу
4. если нет результатов - показывать соответствующую строку "не найдено" в результатах поиска
*/

renderCountries = (countries) => {
    let tableCountries = countries.map(country => `<tr>
                                                <td>${country.name}</td>
                                                <td>${country.capital || '------'}</td>
                                                <td>${country.region}</td>
                                                <td>${country.area}</td>
                                                </tr>`).join('');
                                                
    document.querySelector('.countries tbody').innerHTML = tableCountries || `<tr><td colspan="4" class="text-center">Not Found</td></tr>`;
}
renderCountries(countries);

/*let searchInput = document.querySelector('#search');*/

document.querySelector('#search').onkeyup = (act) => {
    let value = act.currentTarget.value.toLowerCase().trim();
    let filteredCountries = countries.filter(country => 
        country.name.toLowerCase().includes(value) || country.capital.toLowerCase().includes(value) || country.region.toLowerCase().includes(value));

    renderCountries(filteredCountries);
}


/*
Write a function called hasMostFollowers
which accepts a variable number of arguments.
You should then make an AJAX call to the 
Github User API(https: //developer.github.com/v3/users/#get-a-single-user) 
to get the name and number of followers of each argument. 
The function should return a string which displays the username who has the most followers. 
*/

async function hasMostFollowers(...users) {
    let baseUrl = "https://api.github.com/users/"
    let requests = users.map(u => $.getJSON(`${baseUrl}${u}`))
    console.log(requests)
    let responses = await Promise.all(requests)
    console.log(responses)
    let max = responses.sort((a, b) => a.followers > b.followers)[0];
    return `${max.name} has the most followers`;
}

hasMostFollowers('elie', 'tigarcia', 'colt').then(function (data) {
    console.log(data)
});


async function starWarsString(id) {
    let str = '';
    let results = await $.getJSON(`https://swapi.co/api/people/${id}/`)
    str += `${results.name} is featured in `;
    let movies = results.films[0];
    let moreResults = await $.getJSON(movies);
    str += `${moreResults.title}, directed by ${moreResults.director} `
    let planetData = moreResults.planets[0];
    let finalResults = await $.getJSON(planetData)
    str += `and it takes place on ${finalResults.name}`;
    return str;
}

starWarsString(1).then(function (data) {
    console.log(data)
})
export function getAllNbaPlayers() {
    return fetch("https://free-nba.p.rapidapi.com/players?page=0&per_page=5000", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-nba.p.rapidapi.com",
            "x-rapidapi-key": "74960b0721msh5dc28c918b43967p115c93jsnabd89fcdde11"
        }
    })
    .then(res => {
        return res.json();
    })
    .then(data => {
        return data.data;
    })
    .catch(err => {
        console.log(err);
    });
}

export function getAllTeams() {
    return fetch("https://free-nba.p.rapidapi.com/teams?page=0", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-nba.p.rapidapi.com",
            "x-rapidapi-key": "74960b0721msh5dc28c918b43967p115c93jsnabd89fcdde11"
        }
    })
    .then(res => {
        return res.json();
    }).then(data => {
        return data.data;
    })
    .catch(err => {
        console.log(err);
    });
}
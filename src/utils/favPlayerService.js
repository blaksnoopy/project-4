import tokenService from'./tokenService';
const BASE_URL = '/api/';

export default {
    getFavPlayers,
    addFavPlayer,
}

export function getFavPlayers() {
    return fetch(BASE_URL + 'favPlayers', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + tokenService.getToken()
        },
    })
    .then(res => res.json());
}

export function addFavPlayer(favPlayer) {
    return fetch(BASE_URL + '/favPlayers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body:JSON.stringify(favPlayer)
    }).then(res => res.json());
}
  
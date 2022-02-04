export async function postData(data, path = '') {
    const response = await fetch(`https://kavsko-library-server.herokuapp.com/${path}`, {
        method: 'POST',
        // mode: 'cors',
        // cache: 'no-cache',
        // credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return response;
}

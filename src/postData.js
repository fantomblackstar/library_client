export async function postData(data, path = '') {
    const response = await fetch(`http://192.168.0.106:3080/${path}`, {
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

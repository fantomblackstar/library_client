export async function postData(data, path = '') {
    const response = await fetch(`http://localhost:3080/${path}`, {
        method: 'POST',
        // mode: 'no-cors',
        // cache: 'no-cache',
        // credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return response;
}

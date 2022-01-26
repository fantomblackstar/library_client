export async function postData(data) {
    const response = await fetch('http://localhost:3080', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    });
    return response;
}

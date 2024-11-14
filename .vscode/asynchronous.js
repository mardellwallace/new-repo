async function fetchData() {
    try {
        const response = await fetch(' https://cnt-eb7eaba0-3be2-44bb-afac-b12c6438a705.containerhub.tripleten-services.com', {
                method: 'POST'
            });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData()
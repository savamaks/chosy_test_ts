async function requestAPI(changeData: any, url: string): Promise<void> {
    try {
        const response = await fetch(url);
        const data = await response.json();
        changeData(data);
    } catch {
       console.log('error');;
    }
}

export default requestAPI;

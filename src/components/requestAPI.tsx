async function requestAPI(changeData: any, url: string): Promise<void> {
    console.log('api');
    try {
        const response = await fetch(url);
        const data = await response.json();
        changeData(data);
        //данные уходят в компонент app
    } catch {
        //данные уходят в компонент app
        changeData("error");
    }
}

export default requestAPI;

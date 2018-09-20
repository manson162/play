function loadDatasheet() {

    const url = 'https://api.electrika.com/api/DatasheetsPdf?brandNodeId=119288&partNumber=' + urlRef;

    fetch(url)

        .then(data => {
            return data.json()
        })

        .then(
            (res) =>
            {
                console.log(res)
                document.getElementById("datasheet").href = res;
                if (res == null) {
                    document.getElementById("addUrl").style.display = "none";
                }
            })

}
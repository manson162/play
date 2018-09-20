const url='http://api.electrika.com/api/DatasheetsPdf?brandNodeId=119288&partNumber=CFP702-4';

fetch(url)
.then(data=>{return data.json()})
.then(
  (res) =>
  {
    console.log(res)
    document.getElementById("addUrl").href = res;
    document.getElementById("addUrl").innerHTML = "Datasheet";
    if (res == null) {
      document.getElementById("addUrl").style.display = "none";
  }
  })

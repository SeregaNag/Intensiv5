const restourant = 'tanuki'

const renderItems = (data) => {

}

fetch(`./db/${restourant}.json`)
    .then((response) => response.json())
    .then((data) => {
        renderItems(data)
    })
    .catch((error) => {
        console.log(error);
    })
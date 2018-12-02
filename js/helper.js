const MAP_SERVER = `http://localhost:8000`
const MAP_SERVER_URL = MAP_SERVER + `/data/maps.json`;

// Get tags. These will be used to build accordian sections
var fetchTags = () => {

}

// Try to fetch maps by tag from server
var fetchMaps = (tag) => {
    fetch(`${MAP_SERVER_URL}`)
        // Fetch succeeded. Return the live data
        .then(server_data => {
            return callback(null, server_data);
        })
        // Fetch failed. Return the error
        .catch(error => {
            console.log("Map fetch failed");
            return callback(error, null);
        })
}  
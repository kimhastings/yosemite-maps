/**
 * Fetch maps from server as soon as the page is loaded.
 */
document.addEventListener('DOMContentLoaded', (event) => {
    createMapListSections(); // read the tags? one section per tag?
    addMapsToSections(); // requires static list of sections
});

/**
 * Fetch all maps and write their HTML.
 */
var createMapList = () => {
    fetchMaps((error, maps) => {
        if (error) { // Got an error
            console.error(error);
        } else {
            self.maps = maps;
            fillMaplistHTML();
        }
    });
};

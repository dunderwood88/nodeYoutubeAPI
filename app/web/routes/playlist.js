var playlistControl = require('../controllers/playlistController');

module.exports = function(router){
    //on routes that end in /tracks
    // ===================================================================
    //router.route('/tracks')

        //create a track (access at POST http://localhost:8080/api/tracks)
        //.post(trackControl.add)

        //get all the tracks (accessed at GET ) http://localhost:8080/api/tracks
        //.get(trackControl.getAll);

    //on routes that end in /tracks/:track_id
    // ===================================================================
    //router.route('/tracks/:track_id')

        //get the track with that id (accessed at GET http://localhost:8080/api/tracks/:track_id)
        //.get(bearControl.getBear)

        //update the track with this id (accessed at PUT http://locahost:8080/api/tracks/:track_id)
        //.put(bearControl.updateBear)

        //delete the track with this id (accessed at DELETE http://localhost:8080/api/tracks/:track_id)
        //.delete(bearControl.deleteBear);

    //router.route('/tracks/search/:search_term')

        //search for tracks
        //.get(trackControl.search);


    router.route('/playlist')

        //add a track to playlist
        .get(playlistControl.playlistSelect);

}
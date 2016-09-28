# nodeYoutubeAPI

This API acts as a proxy/wrapper to allow multiple users to submit to a common youtube playlist.

Google API credentials (client id/secret, api key, playlist id) are specified in the server config files.

Run app using node server.js and then navigate to http://localhost:8080/ to login via google account.

Once config settings are defined users can use API to search tracks and submit to the common playlist:

GET: http://localhost:8080/api/tracks/search/#artist-name#
POST: http://localhost:8080/api/tracks/add/#video-id#

Pretty basic at the mo, very much a work in progress!

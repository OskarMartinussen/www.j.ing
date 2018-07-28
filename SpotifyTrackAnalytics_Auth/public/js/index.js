/*
    Spotify Track Analytics
    
    This script uses the user's access token for the Spotify API
    to GET and dispaly track info and analytics. The script also
    initiates downloading the raw JSON file of the track's 
    analytics JSON. 
*/

// Global variable keeping track of current track's ID
var currentTrackID = "";

// Main function checking for track changes and saving JSON files.
function getTrackAnalytics(accessToken) {

    // Getting now playing track ID.
    $.ajax({
        type: "GET",
        url: 'https://api.spotify.com/v1/me/player/currently-playing',

        // Setting auth headers for api.
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
        },

        // GET success.
        success: function(data){
            
            // Checking if the user is playing anything or not.
            if(typeof data !== "undefined") {

                // Checking if there is a change in current track's ID.
                if(data.item.id !== currentTrackID) {

                    // Updating current track ID.
                    currentTrackID = data.item.id;

                    // Displaying track info on the HTML.
                    $("#albumArt").html("<img alt='Album Art' width='100' src=" + data.item.album.images[1].url + ">");
                    $("#trackTitle").html("<h3>" + data.item.name + "</h3>");
                    $("#trackArtistAlbum").html("<h4>" + data.item.artists[0].name + " - " + data.item.album.name + "</h4>");

                    // Getting current track analytics.
                    $.ajax({
                        type: "GET",
                        url: 'https://api.spotify.com/v1/audio-analysis/' + currentTrackID,

                        // Setting auth headers for api.
                        beforeSend: function(xhr) {
                            xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
                        },

                        // GET success.
                        success: function(analytics) {

                            // Displaying track analytics on the HTML.
                            $("#trackAnalytics").html("<h3 style='text-align: center;'>Track Analytics</h3><br>" + JSON.stringify(analytics, undefined, 4));
                            
                            // Downloading track analytics JSON.
                            storeJSON(JSON.stringify(analytics), currentTrackID + ".json", 'text/plain');
                        },

                        // GET error.
                        error: function() {
                            console.log("GET Request Failed: Track Analytics");
                            $("#trackAnalytics").html("<h4>Error: GET request failed for track analytics.</h4>");
                        }
                    });
                }
            }

            // If no user is not using Spotify, remove exiting HTML elements.
            else {
                $("#albumArt").html("");
                $("#trackTitle").html("");
                $("#trackArtistAlbum").html("");
                $("#trackAnalytics").html("");                
            }
        },
        
        // GET error.
        error: function(){
            console.log("GET Request Failed: Now Playing Track ID");
            $("#albumArt").html("");
            $("#trackTitle").html("");
            $("#trackArtistAlbum").html("");
            $("#trackAnalytics").html("<h4>Error: GET request failed for current track. Check your Access Token. Reset Access Token if expired <a href='https://developer.spotify.com/console/get-users-currently-playing-track/?market=' target='_blank'>here</a>.</h4>");
        },
    });
}

// Storing JSON file externally.
function storeJSON(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

// Waiting for document to finish loading.
$(document).ready(function(){
    /*
        This function takes the user's access token
        input and performs the getTrackAnalytics()
        function every 5 sec.
    */
    
    // Initial empty access token.
    var accessToken = "";
    
    // Checks to see if the token input is empty or not.
    function checkToken(token) {
        if(token !== "") {
            accessToken = token;

            // Applies the getTrackAnalytics every 5 sec.
            setInterval(function() {
                getTrackAnalytics(accessToken);
            }, 5000);
        }
    }

    // Access token input button click handler.
    $("#sendToken").click(function(){
        checkToken($('#token').val());
    });

    // Access token input enter handler.
    $(document).keypress(function(e) {
        if(e.which == 13) {
            checkToken($('#token').val());
        }
    });
});
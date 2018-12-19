$(document).ready(function () {

    $("#get_user_data").on('click',linkedinLoginBtn);

    function linkedinLoginBtn() {
        // body...
        alert("linkedin login button");
        onBtnClick();
    }


// Setup an event listener to make an API call once auth is complete
    function onLinkedInLoad() {
        console.log("onLinkedINLoad");
        IN.UI.Authorize().place();
        console.log(IN.User.isAuthorized());
        IN.Event.on(IN, "auth", getProfileData);

    }

    function onBtnClick() {
        IN.UI.Authorize().place();
        IN.Event.on(IN, "auth", getProfileData);

    }

    // Handle the successful return from the API call
    function onSuccess(data) {
        console.log("onSuccess");
        console.log(data);
        IN.User.logout(onLogOut);
    }

    function onLogOut(){

        console.log("Logout successfully");

    }

    // Handle an error response from the API call
    function onError(error) {
        console.log("onError");
        console.log(error);
    }

    // Use the API call wrapper to request the member's basic profile data
    function getProfileData() {
        console.log("getProfileData");
        IN.API.Raw("/people/~").result(onSuccess).error(onError);
    }



});



var socket = new easyXDM.Socket({
    remote: "https://marksignup.hscampaigns.com/",
    onMessage: function(message, origin){
        // Get data from JanRain
        var info = {firstName: "Mark", lastName: "Allen", email: "mark@markcallen.com"};
        socket.postMessage(JSON.stringify(info));
    }
});

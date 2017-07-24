var socket = new easyXDM.Socket({
    remote: "https://marksignup.hscampaigns.com/",
    onMessage: function(message, origin){
        // Get data from JanRain
        var info = {firstName: "Mark", lastName: "Allen", email: "mark@markcallen.com"};
        console.log("prepostmessage");
        setTimeout(function() {
          console.log("intimeout");
          socket.postMessage(JSON.stringify(info));
        }, 10000);
    }
});

$("#bk_iframe").ready(function (){
    // do something once the iframe is loaded
    resizeCrossDomainIframe('bk_iframe', 'https://marksignup.hscampaigns.com');
});


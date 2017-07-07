function loadScript(url, callback){

    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/easyXDM/2.4.20/easyXDM.js", function() {
  var socket = new easyXDM.Socket({
      remote: "https://cb718eeb.ngrok.io/",
      onMessage: function(message, origin){
          var info = JSON.parse(message);
          console.log(info);
          $('#firstname_elem').val(info.firstName);
          $('#lastname_elem').val(info.lastName);
          $('#email_elem').val(info.email);
      },
      onReady: function() {
          socket.postMessage("ready!!");
      }
  });
});

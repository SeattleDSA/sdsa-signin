document.addEventListener('DOMContentLoaded', function(_event) {
  function getEventName() {
    return window.localStorage.getItem("eventName");
  }

  function setEventName(eventName) {
    window.localStorage.setItem("eventName", eventName);
  }

  function promptForEventName() {
    var newEventName = prompt("Enter the event name");

    if(newEventName) {
      setEventName(newEventName);
      window.location.reload();
    }
  }

  var eventName = getEventName();

  console.log("eventName", eventName);

  if(!eventName) {
    promptForEventName();
  } else {
    var header = document.getElementById("header");
    header.innerHTML = eventName;
    header.addEventListener('click', promptForEventName);
    
    var iframe = document.createElement("iframe");
    iframe.classList.add("airtable-embed");
    iframe.src = "https://airtable.com/embed/shrnffzX1TPyb9SK0?backgroundColor=red&prefill_Event=" + eventName;
    iframe.frameborder="0";
    iframe.onmousewheel="";
    iframe.width="100%";
    iframe.height="90%";
    iframe.style="background: transparent; border: 1px solid #ccc;";
    document.body.appendChild(iframe);
  }
});

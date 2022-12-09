function notify(content) {

  let accessGranted = "Notification Ready"
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    const notification = new Notification(content);
    notification.onclick = (event) => {
    let url = window.location.href
    window.open(url, '_blank');
    }
    // …
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const notification = new Notification(accessGranted)
      }
    });
  }

}

export {notify}


//setTimeout(notifyMe, 2000)

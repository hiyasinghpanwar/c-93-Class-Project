function logout()
{
    localStorage.removeItem("user_name");
    localStoarge.removeItem("room_name");
    window.ocation = "kwitter.html"
}

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
}
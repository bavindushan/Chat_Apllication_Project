
var sender = sender2;
function changeSender() {
    sender = document.getElementById("selectSender").value;
}

function sendMsg() {
    let msg = document.getElementById("txtInput").value;
    console.log(sender);
    console.log(msg);

    let body;

    if (sender === "sender1") {
        body += `<div class="senderOneSide">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${sender}</h5>
                            <p>${msg}</p>
                        </div>
                    </div>
                </div>`;
    } else {
        body += `<div class="senderMe">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Me</h5>
                            <p>${msg}</p>
                        </div>
                    </div>
                </div>`;
    }

    document.getElementById("msgBody").innerHTML = body;
}
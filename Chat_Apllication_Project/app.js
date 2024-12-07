
// let sender = "";
// function changeSender() {
//     sender = document.getElementById("selectSender").value;
// }

function sendMsg() {

    let body = "";

    let msg = document.getElementById("txtInput").value;
    console.log(msg);

    body += `<div class="senderMe">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h6 class="card-title">Me</h6>
                            <p>${msg}</p>
                        </div>
                    </div>
                </div>`;

    /////////////////////////AI Intergrasion Part////////////////////////////////////////////////////////////////
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "contents": [
            {
                "parts": [
                    {
                        "text": document.getElementById("txtInput").value
                    }
                ]
            }
        ]
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCQRZXFSwjbYxhiyUh9gbGFZ4tX8Ojnw9Y", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            console.log(result);

                body += `<div class="senderOneSide">
                            <div class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">ChatBot</h5>
                                    <p>${result}</p>
                                </div>
                            </div>
                        </div>`;
            document.getElementById("msgBody").innerHTML += body;
            document.getElementById("txtInput").value = "";
        })
        .catch((error) => console.error(error));
        
        ///////////////////////////////////////END///////////////////////////////////////////////////////////////
        
}


// let sender = "";
// function changeSender() {
//     sender = document.getElementById("selectSender").value;
// }

var md = window.markdownit();


function sendMsg() {

    let body = "";
    let loader = false;

    let msg = document.getElementById("txtInput").value;
    console.log(msg);

    body += `<div class="senderMe">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h6 class="card-title"></h6>
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
                        "text": msg
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
        .then((response) => response.json())
        .then((result) => {
            loader = true;
            console.log(result.candidates[0].content.parts[0].text);

                body += `<div class="senderOneSide">
                            <div class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title"></h5>
                                    <p>${md.render(result.candidates[0].content.parts[0].text)}</p>
                                </div>
                            </div>
                        </div>`;
            document.getElementById("msgBody").innerHTML += body;
            document.getElementById("txtInput").value = "";
        })
        .catch((error) => console.error(error));
        
        ///////////////////////////////////////END///////////////////////////////////////////////////////////////
        
}

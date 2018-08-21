let friends = ["Tracy", "Fannie", "Benjamin", "Teresa", "Louise"];
let singBtn = document.getElementById("singBtn")

friendLoop:
for (i of friends) {
    lyricLoop:
    for (j = 99; j > 0; j--) {
        if (j > 1) {
            if (j == 2) {
                console.log(j + " lines of code in the file, " + j + " lines of code; " + i + " strikes one out, clears it all out, " + (j - 1) + " more line of code in the file");
                singBtn.addEventListener("click", function () {
                    let friends = ["Tracy", "Fannie", "Benjamin", "Teresa", "Louise"];

                    for (i of friends) {
                        let hr = document.createElement("hr");
                        let friendDiv = document.createElement("div");
                        friendDiv.className = "friend";
                        let friendHeader = document.createElement("h3");
                        friendHeader.className = "row justify-content-center";
                        let friendName = document.createTextNode(i);
                        friendHeader.appendChild(friendName);
                        friendDiv.appendChild(friendHeader);

                        for (j = 99; j > 0; j--) {
                            let p = document.createElement("p");
                            p.className = "row justify-content-center";

                            if (j > 1) {
                                if (j == 2) {
                                    let line = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + i + " strikes one out, clears it all out, " + (j - 1) + " more line of code in the file");
                                    p.appendChild(line);

                                } else {
                                    let line = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + i + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
                                    p.appendChild(line);
                                }
                            } else {
                                console.log(j + " lines of code in the file, " + j + " lines of code; " + i + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");

                                let line = document.createTextNode(j + " line of code in the file, " + j + " line of code; " + i + " strikes it out, clears it all out, no more lines of code in the file");
                                p.appendChild(line);
                            }
                            } else {
                            console.log(j + " line of code in the file, " + j + " line of code; " + i + " strikes it out, clears it all out, no more lines of code in the file");
                            friendDiv.appendChild(p);
                        }
                        document.body.appendChild(hr);
                        document.body.appendChild(friendDiv);
                    }
                }           
});
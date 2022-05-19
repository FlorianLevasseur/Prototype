if (document.getElementById("scan") != null) {
    document.getElementById("scan").addEventListener("click", () => {
        window.location.href = "views/card.html";
    })
} else {
    let firstLine = "";
    let secondLine = "";

    for (let i = 1; i <= 5; i++) {
        if (i == 1) {
            firstLine += `<button class="btn col-2 mt-5 mb-3 pt-1 case bg-white rounded" id="case${i}"><i class="bi bi-plus-square text-dark fs-1"></i></button>`
        } else {
            firstLine += `<button class="btn col-2 mt-5 mb-3 case bg-white rounded" id="case${i}"></button>`
        }
    }
    for (let i = 6; i <= 10; i++) {
        secondLine += `<button class="btn col-2 mb-3 case bg-white rounded" id="case${i}"></button>`
    }
    document.getElementById("content").innerHTML = `<p>Ajouter le nombre de tampons correspondant à la commande en appuyant sur le bouton +</p>
        <div class="row m-0 p-0">
            <div class="bg-info rounded">
                <div class="row justify-content-evenly">
                    ${firstLine}
                </div>
                <div class="row justify-content-evenly">
                    ${secondLine}
                </div>
            </div>
        </div>
        <div class="text-center" id="reinit"></div>
        <div class="text-center" id="return"><button class="btn btn-info text-white mt-3">Retour</button></div>`
}
if (document.getElementById("case1") != null) {
    document.getElementById("case1").addEventListener("click", () => {
        if (document.getElementById("case1").innerHTML == `<i class="bi bi-plus-square text-dark fs-1"></i>`) {
            document.getElementById("case2").innerHTML = `<i class="bi bi-plus-square text-dark fs-1"></i>`;
            document.getElementById("case1").innerHTML = `<i class="bi bi-check2-square text-success fs-1"></i>`;
        }
    })

    document.getElementById("case2").addEventListener("click", () => {
        if (document.getElementById("case2").innerHTML == `<i class="bi bi-plus-square text-dark fs-1"></i>`) {
            document.getElementById("case3").innerHTML = `<i class="bi bi-plus-square text-dark fs-1"></i>`;
            document.getElementById("case2").innerHTML = `<i class="bi bi-check2-square text-success fs-1"></i>`;
        }
    })

    document.getElementById("case3").addEventListener("click", () => {
        if (document.getElementById("case3").innerHTML == `<i class="bi bi-plus-square text-dark fs-1"></i>`) {
            document.getElementById("case4").innerHTML = `<i class="bi bi-plus-square text-dark fs-1"></i>`;
            document.getElementById("case3").innerHTML = `<i class="bi bi-check2-square text-success fs-1"></i>`;
        }
    })

    document.getElementById("case4").addEventListener("click", () => {
        if (document.getElementById("case4").innerHTML == `<i class="bi bi-plus-square text-dark fs-1"></i>`) {
            document.getElementById("case5").innerHTML = `<i class="bi bi-plus-square text-dark fs-1"></i>`;
            document.getElementById("case4").innerHTML = `<i class="bi bi-check2-square text-success fs-1"></i>`;
        }
    })

    document.getElementById("case5").addEventListener("click", () => {
        if (document.getElementById("case5").innerHTML == `<i class="bi bi-plus-square text-dark fs-1"></i>`) {
            document.getElementById("case6").innerHTML = `<i class="bi bi-plus-square text-dark fs-1"></i>`;
            document.getElementById("case5").innerHTML = `<i class="bi bi-check2-square text-success fs-1"></i>`;
        }
    })

    document.getElementById("case6").addEventListener("click", () => {
        if (document.getElementById("case6").innerHTML == `<i class="bi bi-plus-square text-dark fs-1"></i>`) {
            document.getElementById("case7").innerHTML = `<i class="bi bi-plus-square text-dark fs-1"></i>`;
            document.getElementById("case6").innerHTML = `<i class="bi bi-check2-square text-success fs-1"></i>`;
        }
    })

    document.getElementById("case7").addEventListener("click", () => {
        if (document.getElementById("case7").innerHTML == `<i class="bi bi-plus-square text-dark fs-1"></i>`) {
            document.getElementById("case8").innerHTML = `<i class="bi bi-plus-square text-dark fs-1"></i>`;
            document.getElementById("case7").innerHTML = `<i class="bi bi-check2-square text-success fs-1"></i>`;
        }
    })

    document.getElementById("case8").addEventListener("click", () => {
        if (document.getElementById("case8").innerHTML == `<i class="bi bi-plus-square text-dark fs-1"></i>`) {
            document.getElementById("case9").innerHTML = `<i class="bi bi-plus-square text-dark fs-1"></i>`;
            document.getElementById("case8").innerHTML = `<i class="bi bi-check2-square text-success fs-1"></i>`;
        }
    })

    document.getElementById("case9").addEventListener("click", () => {
        if (document.getElementById("case9").innerHTML == `<i class="bi bi-plus-square text-dark fs-1"></i>`) {
            document.getElementById("case10").innerHTML = `<i class="bi bi-plus-square text-dark fs-1"></i>`;
            document.getElementById("case9").innerHTML = `<i class="bi bi-check2-square text-success fs-1"></i>`;
        }
    })

    document.getElementById("case10").addEventListener("click", () => {
        if (document.getElementById("case10").innerHTML == `<i class="bi bi-plus-square text-dark fs-1"></i>`) {
            document.getElementById("case10").innerHTML = `<i class="bi bi-check2-square text-success fs-1"></i>`;
            document.getElementById("reinit").innerHTML = `<button class="btn btn-info text-white mt-3">Réinitialiser</button>`
        }
    })

    document.getElementById("reinit").addEventListener("click", () => {
        document.getElementById("reinit").innerHTML = "";
        for (let i = 1; i <= 10; i++) {
            document.getElementById(`case${i}`).innerHTML = "";
        }
        document.getElementById("case1").innerHTML = `<i class="bi bi-plus-square text-dark fs-1"></i>`;
    })

    document.getElementById("return").addEventListener("click", () => {
        window.location.href = "../index.html";
    })
}
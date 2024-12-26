document.addEventListener("DOMContentLoaded", function (event) {
    let body = document.querySelector('body');
    let dark_mode_btn = document.querySelector('.dark_mode_btn');
    let exPresion = document.querySelector(".calCulation");
    const calBtns = document.querySelectorAll("#Normal_btn");
    const delBtn = document.querySelector("#delete_single_num");
    const clBtn = document.querySelector("#clear");
    const Result = document.querySelector(".mYresult");
    let Error = document.querySelector("#error");
    const equalTo = document.querySelector("#equalTo");
    Error.innerText = "";
    let lastAns = "";


    exPresion.innerText = "";

    /*dark_mode*/
    let dark_mode_status = false;
    dark_mode_btn.addEventListener('click', function () {
        body.classList.toggle('dark_mode_active');
        if (dark_mode_status == false) {
            this.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>';
            dark_mode_status = true;
        } else {
            this.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
            dark_mode_status = false;
        }
    });

    calBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            let calBtnVal = this.innerText;
            let exp = exPresion.innerText;
            let lastChar = exp.charAt(exp.length - 1);
            let result = document.querySelector(".mYresult");
            result.innerText = "";

            if (exp.length === 0) {
                if (["+", "-", "*", "/"].includes(calBtnVal)) {
                    Error.innerText = "E";
                } else {
                    Error.innerText = "";
                    exPresion.innerText += calBtnVal;
                    lastAns = this.innerText;
                }
            } else {
                if (["+", "-", "*", "/"].includes(lastChar) && ["+", "-", "*", "/"].includes(calBtnVal)) {
                    exPresion.innerText = exp.slice(0, -1) + calBtnVal;
                } else {
                    // Append the value to the expression
                    exPresion.innerText += calBtnVal;
                }
            }


            if (["+", "-", "*", "/"].includes(this.innerText)) {
                let ans = "";
                if (ans) {
                    result.innerText = ans;
                } else {
                    result.innerText = lastAns;
                }
            } else {
                let ans = eval(exPresion.innerText);
                console.log(ans);
                result.innerText = ans;
                lastAns = ans;
            }


        });
    });

    delBtn.addEventListener('click', function () {
        if (["+", "-", "*", "/"].includes(exPresion.innerText.length - 1)) {
            exPresion.innerText = exPresion.innerText.slice(0, -1);
        }else{
            exPresion.innerText = exPresion.innerText.slice(0, -1);
        }
    });

    clBtn.addEventListener('click', function() {
        exPresion.innerText = '';
        Result.innerText = '';
    });
    
    equalTo.addEventListener('click', function() {
        exPresion.innerHTML = Result.innerHTML;
        Result.innerText = '';
    })


});
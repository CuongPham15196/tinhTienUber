document.getElementById('payMoney').addEventListener('click', function () {
    var uberX = document.getElementById('uberX').checked;
    var uberSuv = document.getElementById('uberSUV').checked;
    var uberBlack = document.getElementById('uberBlack').checked;
    var distance = Number(document.getElementsByClassName('input100')[0].value);
    var timeWaiting = Number(document.getElementsByClassName('input100')[1].value);


    var totalMoney = 0;

    if (uberX != true && uberSUV != true && uberBlack != true || distance == "" || timeWaiting == "") {
        return alert('Chưa nhập thông tin');
    }
    else {
        if (uberX == true) {
            if (distance > 20)
                totalMoney = 8000 + 19 * 12000 + (distance - 20) * 10000 + timeWaiting * 2000;
            else if (distance > 1)
                totalMoney = 8000 + (distance - 1) * 12000 + timeWaiting * 2000;
            else if (distance > 0)
                totalMoney = 8000 + timeWaiting * 2000;
        }
        else if (uberSuv == true) {
            if (distance > 20)
                totalMoney = 9000 + 19 * 14000 + (distance - 20) * 12000 + timeWaiting * 3000;
            else if (distance > 1)
                totalMoney = 9000 + (distance - 1) * 14000 + timeWaiting * 3000;
            else if (distance > 0)
                totalMoney = 9000 + timeWaiting * 3000;
        }
        else if (uberBlack == true) {
            if (distance > 20)
                totalMoney = 10000 + 19 * 16000 + (distance - 20) * 14000 + timeWaiting * 4000;
            else if (distance > 1)
                totalMoney = 10000 + (distance - 1) * 16000 + timeWaiting * 4000;
            else if (distance > 0)
                totalMoney = 10000 + timeWaiting * 4000;
        }
    }
    
    document.getElementById('divThanhTien').style.display = "block";
    document.getElementById('xuatTien').innerHTML = totalMoney;
});
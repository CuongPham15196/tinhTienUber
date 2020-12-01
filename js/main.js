var listCustomer = [];

document.getElementById('payMoney').addEventListener('click', function () {
    var _uberX = document.getElementById('uberX').checked;
    var _uberSuv = document.getElementById('uberSUV').checked;
    var _uberBlack = document.getElementById('uberBlack').checked;
    var _distance = Number(document.getElementsByClassName('input100')[0].value);
    var _timeWaiting = Number(document.getElementsByClassName('input100')[1].value);
    var _uber;

    if (_uberX != true && _uberSuv != true && _uberBlack != true || _distance == "" || _timeWaiting == "") {
        return alert('Chưa nhập thông tin');
    }
    else if (_uberX == true) {
        _uber = "uberX";
    } else if (_uberSuv == true) {
        _uber = "uberSuv";
    } else if (_uberBlack == true) {
        _uber = "uberBlack";
    }

    var customer = new Customer(_uber, _distance, _timeWaiting);

    listCustomer.push(customer);
    newTable();


    document.getElementById('divThanhTien').style.display = "block";
    document.getElementById('xuatTien').innerHTML = customer.payMoney();
});



function newTable() {
    document.getElementById('tbodyHoaDon').innerHTML = "";
    for (var i = 0; i < listCustomer.length; i++) {

        var tagTR__1KM = document.createElement('tr');
        var tagTR__19KM = document.createElement('tr');
        var tagTR__21KM = document.createElement('tr');
        var tagTR__TIME__WAITING = document.createElement('tr');
        var tagTR__TOTAL = document.createElement('tr');
        tagTR__TOTAL.style.background = "aqua";

        var tagTD__1KM__UBER = document.createElement('td');
        var tagTD__19KM__UBER = document.createElement('td');
        var tagTD__21KM__UBER = document.createElement('td');
        var tagTD__1KM = document.createElement('td');
        var tagTD__19KM = document.createElement('td');
        var tagTD__21KM = document.createElement('td');
        var tagTD__1KM__MONEY = document.createElement('td');
        var tagTD__19KM__MONEY = document.createElement('td');
        var tagTD__21KM__MONEY = document.createElement('td');
        var tagTD__1KM__PAY = document.createElement('td');
        var tagTD__19KM__PAY = document.createElement('td');
        var tagTD__21KM__PAY = document.createElement('td');


        var tagTD__TIME__WAITING = document.createElement('td');
        var tagTD__TIME__USER = document.createElement('td');
        var tagTD__TIME__MONEY = document.createElement('td');
        var tagTD__TIME__PAY = document.createElement('td');

        var tagTD__TOTAL = document.createElement('td');
        var tagTD__TOTAL__MONEY = document.createElement('td');



        tagTR__1KM.appendChild(tagTD__1KM__UBER);
        tagTR__1KM.appendChild(tagTD__1KM);
        tagTR__1KM.appendChild(tagTD__1KM__MONEY)
        tagTR__1KM.appendChild(tagTD__1KM__PAY);

        tagTR__19KM.appendChild(tagTD__19KM__UBER);
        tagTR__19KM.appendChild(tagTD__19KM);
        tagTR__19KM.appendChild(tagTD__19KM__MONEY)
        tagTR__19KM.appendChild(tagTD__19KM__PAY);

        tagTR__21KM.appendChild(tagTD__21KM__UBER);
        tagTR__21KM.appendChild(tagTD__21KM);
        tagTR__21KM.appendChild(tagTD__21KM__MONEY)
        tagTR__21KM.appendChild(tagTD__21KM__PAY);


        tagTD__1KM__UBER.innerHTML = listCustomer[i].uber;
        tagTD__19KM__UBER.innerHTML = listCustomer[i].uber;
        tagTD__21KM__UBER.innerHTML = listCustomer[i].uber;
        tagTD__1KM.innerHTML = "1 KM";
        tagTD__19KM.innerHTML = "19 KM";
        tagTD__21KM.innerHTML = "21 KM";

        
        
        if(listCustomer[i].uber == 'uberX') {
            tagTD__1KM__MONEY.innerHTML = 8000;
            tagTD__19KM__MONEY.innerHTML = 12000;
            tagTD__21KM__MONEY.innerHTML = 10000;

            tagTD__TIME__MONEY.innerHTML = 2000;
        } else if (listCustomer[i].uber == 'uberSuv') {
            tagTD__1KM__MONEY.innerHTML = 9000;
            tagTD__19KM__MONEY.innerHTML = 14000;
            tagTD__21KM__MONEY.innerHTML = 12000;

            tagTD__TIME__MONEY.innerHTML = 3000;
        } else if (listCustomer[i].uber == 'uberBlack') {
            tagTD__1KM__MONEY.innerHTML = 10000;
            tagTD__19KM__MONEY.innerHTML = 16000;
            tagTD__21KM__MONEY.innerHTML = 14000;

            tagTD__TIME__MONEY.innerHTML = 4000;
        }

        if(listCustomer[i].distance > 20) {
            tagTD__1KM__PAY.innerHTML = tagTD__1KM__MONEY.innerHTML;
            tagTD__19KM__PAY.innerHTML = tagTD__19KM__MONEY.innerHTML * 19;
            tagTD__21KM__PAY.innerHTML = tagTD__21KM__MONEY.innerHTML * (listCustomer[i].distance - 20);

            document.getElementById('tbodyHoaDon').appendChild(tagTR__1KM);
            document.getElementById('tbodyHoaDon').appendChild(tagTR__19KM);
            document.getElementById('tbodyHoaDon').appendChild(tagTR__21KM);
        
        } else if (listCustomer[i].distance > 1) {
            tagTD__1KM__PAY.innerHTML = tagTD__1KM__MONEY.innerHTML;
            tagTD__19KM__PAY.innerHTML = tagTD__19KM__MONEY.innerHTML * (listCustomer[i].distance - 1);

            document.getElementById('tbodyHoaDon').appendChild(tagTR__1KM);
            document.getElementById('tbodyHoaDon').appendChild(tagTR__19KM);
        } else if (listCustomer[i].distance > 0) {
            tagTD__1KM__PAY.innerHTML = tagTD__1KM__MONEY.innerHTML;

            document.getElementById('tbodyHoaDon').appendChild(tagTR__1KM);

        }



        tagTD__TIME__WAITING.innerHTML = "TIME WAITING";
        tagTD__TIME__USER.innerHTML = listCustomer[i].timeWaiting + " min";
        tagTD__TIME__PAY.innerHTML = tagTD__TIME__MONEY.innerHTML * listCustomer[i].timeWaiting;

        tagTR__TIME__WAITING.appendChild(tagTD__TIME__WAITING);
        tagTR__TIME__WAITING.appendChild(tagTD__TIME__USER);
        tagTR__TIME__WAITING.appendChild(tagTD__TIME__MONEY);
        tagTR__TIME__WAITING.appendChild(tagTD__TIME__PAY);

        document.getElementById('tbodyHoaDon').appendChild(tagTR__TIME__WAITING);


        tagTD__TOTAL.innerHTML = "TOTAL";
        tagTD__TOTAL__MONEY.innerHTML = listCustomer[i].payMoney();      

        tagTR__TOTAL.appendChild(tagTD__TOTAL);
        tagTR__TOTAL.appendChild(document.createElement('td'));
        tagTR__TOTAL.appendChild(document.createElement('td'));
        tagTR__TOTAL.appendChild(tagTD__TOTAL__MONEY);

        document.getElementById('tbodyHoaDon').appendChild(tagTR__TOTAL);

    }
}
function Customer(_uber, _distance, _timeWaiting) {
    this.uber = _uber;
    this.distance = _distance;
    this.timeWaiting = _timeWaiting;

    this.payMoney = function() {
        this.totalPayMoney = 0;
        if (this.uber == "uberX") {
            if (this.distance > 20)
                this.totalPayMoney =  8000 + 19 * 12000 + (this.distance - 20) * 10000 + this.timeWaiting * 2000;
            else if (this.distance > 1)
                this.totalPayMoney =  8000 + (this.distance - 1) * 12000 + this.timeWaiting * 2000;
            else if (this.distance > 0)
                this.totalPayMoney =  8000 + this.timeWaiting * 2000;
        }
        else if (this.uber == "uberSuv") {
            if (this.distance > 20)
                this.totalPayMoney =  9000 + 19 * 14000 + (this.distance - 20) * 12000 + this.timeWaiting * 3000;
            else if (this.distance > 1)
                this.totalPayMoney =  9000 + (this.distance - 1) * 14000 + this.timeWaiting * 3000;
            else if (this.distance > 0)
                this.totalPayMoney =  9000 + this.timeWaiting * 3000;
        }
        else if (this.uber == "uberBlack") {
            if (this.distance > 20)
                this.totalPayMoney =  10000 + 19 * 16000 + (this.distance - 20) * 14000 + this.timeWaiting * 4000;
            else if (this.distance > 1)
                this.totalPayMoney =  10000 + (this.distance - 1) * 16000 + this.timeWaiting * 4000;
            else if (this.distance > 0)
                this.totalPayMoney =  10000 + this.timeWaiting * 4000;
        }
        return this.totalPayMoney;
    }
}
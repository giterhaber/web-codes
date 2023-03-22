class chatConfigure {
    constructor (dom) {
        this.dom = dom;
    }

    async send() {
        var result;
        var L = this.dom.val().length
        var M = this.dom.val()
        var data = {message: M, result: ""}

        // console.log(M)
        if (L <= 1) {
            this.dom.val('')
            data.result = 'error';
            return data;
        } else {
            this.dom.val('')
            data.result = 'success';
            return data;
        }
        
    }
}

export {chatConfigure}

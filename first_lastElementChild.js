Element.prototype.firstEl = function (selector) {
    var length = this.children.length
    if(length==0) return null
    for(var i=0; i<length;i++){
        console.log(this.children[i])
        if(this.children[i].matches(selector)) return this.children[i]
    }
    return null
}


Element.prototype.lastEl = function (selector) {
    var length = this.children.length
    if(length==0) return null
    var last = null
    for(var i=0; i<length;i++){
        console.log(this.children[i])
        if(this.children[i].matches(selector)) last = this.children[i]
    }
    return last
}




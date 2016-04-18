var $ = function (selector) {
    selector+=""
    if ( /([\.#])\D\w+\s?/.test(selector) ) {
        elList = document.querySelectorAll(selector)
        var arr = []
        for(var i = 0;i<elList.length;i++){
            arr.unshift(elList[i])
        }
        return arr
    }
    else if ( /^<[a-z]+>$/.test(selector) ){
      return  document.createElement(selector.slice(1,selector.length-1))
    }


}

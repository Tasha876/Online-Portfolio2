String.prototype.replaceJSX = function (find, replace) {
    let res = []
    this.valueOf().split(find).forEach((fragment,i) => {
        if (i) res.push(replace,fragment)
        else res.push(fragment)
    })
    return res
}


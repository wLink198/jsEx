function mutation(arr) {
    var bool = true;
    arr[1].toLowerCase().split("").forEach(function(e) {
        if (bool === true) {
            var n = arr[0].toLowerCase().indexOf(e);
            if (n === -1) {
                bool = false
            } else bool = true;
        }
    })
    return bool;
}
alert(mutation(["Hello", "hel"]))
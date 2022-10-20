var uf = document.querySelector("#uform")
uf.addEventListener('submit',(val)=>{
    var eval = document.querySelector('#email').value
    var nval = document.querySelector('#num').value
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eval) && /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(nval))
    {}else{
        alert('not vaidated')
        val.preventDefault()
    }
})
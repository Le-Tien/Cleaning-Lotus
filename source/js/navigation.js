(function () {
    var my={};
    var form = document.querySelector('.form-container');
    var closeButton = null;

    function onClose(e){
        e.preventDefault();
        my.close();
        closeButton.removeEventListener('click',onClose)
    }

    my.open = function(){
        form.classList.remove('is-hidden');

        closeButton = document.querySelector('.btnClose');
        closeButton.addEventListener('click',onClose)
    };
    my.close = function(){
        form.classList.add('is-hidden')
    };

    window.form = my;
}());
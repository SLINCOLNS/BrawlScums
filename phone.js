window.onload = function() {
    var messageElement = document.getElementById('message');

    if(!isMobile()) {
        // Проверяем, не находимся ли мы уже на странице PC
        if(window.location.pathname !== '/pc.html') {
            messageElement.innerText = 'Redirecting to PC version...';
            window.location.href = 'pc.html'; // Перенаправляем на страницу PC только если не на странице PC
        }
    } else {
        messageElement.innerText = 'You are using the mobile version of the site.';
    }
};

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function v3download() {
    var download = "https://gitee.com/Antecer/OsuKeyboard/raw/master/OsuKeyboard/bin/Release/OsuKeyboard.exe";
    window.open(download, "_blank", 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=1,height=1');
    this.window.focus();
}

function sixkeydownload() {
    fetch('https://raw.githubusercontent.com/Antecer/antecer.github.io/master/drivers/app/AppVerList.txt')
        .then(res => res.text())
        .then(txt => {
            let versions = txt.split('\n');
            let lastVer = versions.length > 0 ? versions[0] : '0.0.0.0';
            console.log('LastAppVer:', lastVer)

            let downnode = document.createElement("a");
            downnode.download = 'AmusingDeviceApplication.exe';
            downnode.href = `https://antecer.github.io/drivers/app/app_${lastVer}.exe`;
            document.body.appendChild(downnode); // Fix for firefox, the anchor has to be appended to the DOM.
            downnode.click();
            document.body.removeChild(downnode);
        })
}

function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert(text + " has been copied succesfully!");
}

$(document).ready(function() {
    $('.faq_question').click(function() {
        if ($(this).parent().is('.open')) {
            $(this).closest('.faq').find('.faq_answer_container').slideUp();
            $(this).closest('.faq').removeClass('open');
        } else {
            $('.faq_answer_container').slideUp();
            $('.faq').removeClass('open');
            $(this).closest('.faq').find('.faq_answer_container').slideDown();
            $(this).closest('.faq').addClass('open');
        }
    });
});
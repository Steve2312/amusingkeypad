function v3download() {
    var download = "/drivers_exe/OsuKeyboardV3.exe";
    document.getElementById('download').src = download;
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

function scrolltotop() {
    $('html, body').animate({ scrollTop: "0px" }, {
        duration: 3000,
        easing: "easeInOutExpo"
    });
}

function scrollDiv(a) {
    $('html, body').animate({ scrollTop: $(a).offset().top}, {
        duration: 2500,
        easing: "easeInOutExpo"
    });
}

function scrollDivMobile(a) {
    $('html, body').animate({ scrollTop: $(a).offset().top - 400 }, {
        duration: 2500,
        easing: "easeInOutExpo"
    });
}

function scrollContact() {
    $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, {
        duration: 2500,
        easing: "easeInOutExpo"
    });
}

function showhide() {
    var mobilenav = document.getElementById("mobilenav");
    mobilenav.classList.toggle("mobilenavhide");
}
var numbers = [0, 1]

function imagebanner() {
    var banner = document.getElementById("banner");
    var images = ["setup1.png", "setup2.png"];
    var random = Math.floor(Math.random() * 2)
    var file = `images/webready/${images[random]}`;
    banner.style.backgroundImage = `linear-gradient(#0d0d0d, rgba(0, 0, 0, 0.38), rgba(0, 0, 0, 0.38), #0d0d0d), url(` + `"` + `${file}` + `"` + `)`;
    setTimeout(function() { banner.classList.remove("fade-in"); }, 5000);
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

    imagebanner();
});

$(window).resize(function() {
    if (!$("#mobilenav").hasClass(".mobilenavhide")) {
        var mobilenav = document.getElementById("mobilenav");
        mobilenav.classList.add("mobilenavhide");
    }
});
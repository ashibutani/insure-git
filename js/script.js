// ///////fv ヘッダー追従///////
window.addEventListener('scroll', function () {
    const header = document.querySelector('.headerWrapper');
    const headerHeight = header.offsetHeight; // ヘッダーの高さを取得
    const scrollY = window.pageYOffset;

    if (scrollY >= 100) {
        header.classList.add('headerWrapper--sticky');
        document.body.style.marginTop = '100px'; // コンテンツにヘッダーの高さ分の余白を設定
    } else {
        header.classList.remove('headerWrapper--sticky');
        document.body.style.marginTop = '0'; // コンテンツの余白をリセット
    }
    if (window.matchMedia('(max-width: 870px)').matches) {
        // ウィンドウサイズ870px以下のときの処理
        header.classList.remove('headerWrapper--sticky');
    }

});

// ///////ハンバーガー///////
$(function () {
    $(".hm_menu").on("click", function () {
        $(".sp_nav").slideToggle(300);
        $(".hm_menu span").toggleClass("active");

    });
});
$(function () {
    $(window).resize(function () {/*画面サイズが変更された時*/
        $(".sp_nav").css("display", "none");/*sp-nav-areaを消す*/
        $(".hm_menu span").removeClass("active");/*クラスactiveをつけるとボタンがななめになるので、クラスactiveを消す*/
    });
});

$(function () {
    $(".sp_nav a").on("click", function () {
        $(".sp_nav").css("display", "none");/*sp-nav-areaを消す*/
        $(".hm_menu span").toggleClass("active");
    });
});

// ///////モーダル//////
MicroModal.init({
    openClass: 'is-open',
    disableScroll: true,
});





// ///////テキストのカウントアップ+バーの設定//////
var bar = new ProgressBar.Line(splash_text, {//id名を指定
    easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
    duration: 1000,//時間指定(1000＝1秒)
    strokeWidth: 0.5,//進捗ゲージの太さ
    color: '#3E4F3C',//進捗ゲージのカラー
    trailWidth: 0.5,//ゲージベースの線の太さ
    trailColor: '#E8DDC4',//ゲージベースの線のカラー
    text: {//テキストの形状を直接指定       
        style: {//天地中央に配置
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: '0',
            margin: '-30px 0 0 0',//バーより上に配置
            transform: 'translate(-50%,-50%)',
            'font-size': '1rem',
            color: '#3E4F3C',
        },
        autoStyleContainer: false //自動付与のスタイルを切る
    },
    step: function (state, bar) {
        bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
    }
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
    $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});



///googleフォーム送信////
$(document).ready(function () {

    $('#form2').submit(function (event) {
        var formData = $('#form2').serialize();
        $.ajax({
            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScJucxP_DS7_2HVpQszU4l_fJIYgBRjCXcEjJZDbFCiK7lfUg/formResponse",
            data: formData,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    $(".end-message").slideDown();
                    $("#form2").fadeOut();
                    $(".formfont2").fadeOut();
                    $(".form-wrapper").css("height", "350px");
                    //window.location.href = "thanks.html";
                },
                200: function () {
                    $(".false-message").slideDown();
                }
            }
        });
        event.preventDefault();
    });

});



// ///////submitボタン無効有効化無効有効化//////
const form2 = document.getElementById("form2");
const button2 = document.getElementById("button2");

form2.addEventListener("input", update);


function update() {
    const isRequired = form2.checkValidity();

    if (isRequired) {
        button2.disabled = false;
        button2.style.opacity = 1;
        button2.style.cursor = "pointer";
        return;
    }
}
entry

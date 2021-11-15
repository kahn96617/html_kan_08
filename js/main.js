// jsを記述する際はここに記載していく

//モーダルウィンドウ 実験//

window.onload = function() {
    var popup = document.getElementById('js-popup');
    if(!popup) return;
    popup.classList.add('is-show');
  
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('close1');
    var closeBtn2 = document.getElementById('close2');
  
    closePopUp(blackBg);
    closePopUp(closeBtn);
    closePopUp(closeBtn2);
  
    function closePopUp(elem) {
      if(!elem) return;
      elem.addEventListener('click', function() {
        popup.classList.remove('is-show');
      })
    }
  }

  //モーダルウィンドウ 実験終わり// 




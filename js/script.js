jQuery(function () {
  /*
		課題①：ドロワーメニューの実装
		実装条件
		・Menuをクリックすると
		・新発売・おすすめ・期間限定のメニューを表示
		・開閉時間の指定は不要
		*/
  jQuery('#js-drawer').on('click', function (e) {
    jQuery('.header-nav-drawer-list').slideToggle();
    e.preventDefault();
    //  return false; /* aタグ本来の動きを無効化 */
  });

  /*
		課題②：ページトップへ戻るボタンを付ける
		実装条件
		・トップから80pxスクロールしたら
		・300ms（0.3秒）かけて
		・フェードイン・フェードアウトで表示・非表示
		・表示してる間はボタンはページ右下に固定
		・ボタンを押したら500ms（0.5秒）かけてページトップへ戻る
		*/
  // 下に80pxスクロールしたときのイベント
  jQuery(window).on('scroll', function () {
    jQuery('.header-nav-drawer-list').hide();
    if (jQuery(window).scrollTop() > 80) {
      jQuery('#js-pagetop').fadeIn(300);
    } else {
      jQuery('#js-pagetop').fadeOut(300);
    }
  });

  // TOPボタンをクリックしたときのイベント
  jQuery('#js-pagetop').click(function (e) {
    jQuery('html, body').animate({ scrollTop: 0 }, 500);
    e.preventDefault();
  });

  /*
		課題③：モーダルで画像の拡大表示
		実装条件
		・メニュー一覧の画像をクリックすると
		・縦横画面いっぱいに薄いグレーの背景ボックスを表示
		・その枠の中心に拡大されたメニュー写真を表示
		・画面のどこかをクリックすると拡大写真と背景ボックスを非表示
		・アニメーションはフェードイン・フェードアウト
		※要 style.cssの修正（モーダルウィンドウのレイアウト指定）
		*/
  jQuery('.menu-img img').on('click', function () {
    let imgurl = $(this).attr('src');
    jQuery('#js-modal').css('display', 'flex');
    jQuery('.js-modal-img').attr('src', imgurl).fadeIn();
    jQuery('html,body').css('overflow', 'hidden'); // モーダルが表示されているときはスクロールバーを非表示に
  });
  jQuery('#js-modal').on('click', function () {
    if (jQuery('#js-modal').is(':visible')) {
      jQuery('#js-modal').fadeOut();
      jQuery('html,body').removeAttr('style'); //  overflow:hidden; のスタイルを削除
    }
  });
  jQuery('.js-modal-img').on('click', function (e) {
    e.stopPropagation(); // 画像の上をクリックしたときは、モーダルが消えないようにする
  });
});

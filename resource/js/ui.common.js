$(function(){
    datePicker();
    popupFunc();
})

$(window).load(function(){

})

function datePicker(){
    // datepicker
	$(".datepicker").datepicker({
		showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다.
		buttonImage: "../../resource/images/icons/ico_calender.png", // 버튼 이미지.
		dateFormat: "yy-mm-dd", // 텍스트 필드에 입력되는 날짜 형식.
		changeMonth: true ,
		changeYear: true,
		nextText: '다음 달', // next 아이콘의 툴팁.
		prevText: '이전 달', // prev 아이콘의 툴팁.
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNames: ['일','월','화','수','목','금','토'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토']
	});
}

// 팝업오픈
function popupFunc(e) {
    var layerPop = $("#" + e);
    popClose = $(".popup_bg, .pop_close");

    layerPop.addClass("active");

    popClose.on("click", function () {
        $(this).parents(layerPop).removeClass("active"); /* 2022-09-01 수정 */
    });
}


// 탭 메뉴
function tabMenu(e, cont) {

    var tabMenu = null,
        tabMenuList = null,
        tabCont = null,
        tabContShow = null;

    function tabMenuFunc(e) {
        tabMenu = $(e);
        tabMenuList = tabMenu.find('li a');
        tabCont = $(cont).children();
        tabContShow = $(cont).children('.active');

        tabCont.hide();
        tabContShow.show();

        tabMenuList.on('click', function () {
            tabMenuList.parent('li').removeClass('on');
            $(this).parent('li').addClass('on');
            tabCont.hide();
            var activeTabs = $(this).parent('li').attr('rel');
            $('#' + activeTabs).stop().fadeIn();
            // $(".nano").nanoScroller();
            // new Swiper('.swiper-container');
        });
    }

    tabMenuFunc(e);
}
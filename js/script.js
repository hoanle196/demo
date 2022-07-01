$(window).scroll(function(event) {
    //     / Act on the event /
    // Vị trí top của cửa sổ trình duyệt so với top của document
    let a = ($(window).scrollTop());
    let b = ($('.home').offset().top);
    let c = ($('#portfolio').offset().top)
    if (a <= c) {
        $('.focus').addClass('active');
    } else {
        $('.focus').removeClass('active');
    }
    if (a >= b) {
        //         console.log('fixedmenu');
        $('nav').addClass('fixed-top');
        $('.back-to-top').addClass('hidend');

        $('header').addClass('dummy-padding-top');
    } else {
        //         console.log('normal');
        $('nav').removeClass('fixed-top');
        $('.back-to-top').removeClass('hidend');

        $('header').removeClass('dummy-padding-top');
    }
});
$('#portfolio button').click(function() {
    // console.log('OK');
    const dataval = $(this).attr('data');
    // const showall = $(this).attr('data', 'all');
    // console.log(showall);
    // alert(dataval);
    const divAll = $('#portfolio .row>div'); // 8 div
    // console.log(divAll);
    const divPick = $(`#portfolio .row>div[data=${dataval}]`);
    console.log(divPick);
    const divRemove = divAll.not(divPick);
    // divRemove.();
    divPick.show();
    divRemove.hide();
    if (dataval === 'all') {
        divAll.show();
    }
    // console.log(divRemove);
})
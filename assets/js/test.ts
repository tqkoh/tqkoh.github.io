console.log('hello')

$(function(){
    $.pjax({
        area : '#pjax-area',
        link : 'a:not([target])'
    });
});

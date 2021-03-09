
$(function () {

  $('.Tabs-container').each(function (i,n) {
    $(n).find('.Tabs-item').eq(0).addClass('active')
  })

  $('.TabViews-views').each(function (i,n) {
    $(n).find('.TabViews-slide').hide()
    $(n).find('.TabViews-slide').eq(0).show()
  })

  $('.Tabs-container .Tabs-item').click(function () {
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
    var thisIndex=$(this).index()
    $(this).parents('.Tabs-scroller').next('.TabViews-views').find('.TabViews-slide').hide();
    $(this).parents('.Tabs-scroller').next('.TabViews-views').find('.TabViews-slide').eq(thisIndex).show();
  })
  window.addEventListener('resize', () => {
    echartResize()
  })
})

function echartResize() {
  $('.TabViews-slide').each(function (i,n) {
    var _width=$(n).width()
    $(n).find('div[id]').css('width',_width)
  })
}


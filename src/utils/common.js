import $ from 'jquery'

var Commonjs = {
  tabsClick:function(){
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

    function echartResize() {
      $('.TabViews-slide').each(function (i,n) {
        var _width=$(n).width()
        $(n).find('div[id]').css('width',_width)
      })
    }
  },

  pageClick:function () {
    //分页效果
    $('ul.page').each(function(index, element) {
      $(this).children().attr('sta', 'a')
      $(this).children().first().addClass('page-click')
      $(this).children().first().attr('sta', 'b')
    });

    $('ul.page li').click(function() {
      $(this).siblings().removeClass('page-click')
      $(this).siblings().attr('sta', 'a')
      $(this).addClass('page-click')
      $(this).attr('sta', 'b')
    })
    /*点击上一页�*/
    $('.page-prev').click(function() {
      var num = $(this).siblings('ul.page').children('li[sta=b]').nextAll().length;
      var maxnum = $(this).siblings('ul.page').children('li').length;
      if (num !== maxnum - 1) {
        $(this).siblings('ul.page').children('li').removeClass('page-click')
        $(this).siblings('ul.page').children('li[sta=b]').prev().addClass('page-click')
        $(this).siblings('ul.page').children('li[sta=b]').prev().attr('sta', 'c')
        $(this).siblings('ul.page').children('li').not('li[sta=c]').removeClass('page-click')
        $(this).siblings('ul.page').children('li').not('li[sta=c]').attr('sta', 'a')
        $(this).siblings('ul.page').children('li[sta=c]').attr('sta', 'b')
      } else {
        $(this).siblings('ul.page').children('li').removeClass('page-click')
        $(this).siblings('ul.page').children('li').attr('sta', 'a')
        $(this).siblings('ul.page').children('li').first().addClass('page-click')
        $(this).siblings('ul.page').children('li').first().attr('sta', 'b')
      }
    })
    /*点击下一页�*/
    $('.page-next').click(function() {
      var num = $(this).siblings('ul.page').children('li[sta=b]').nextAll().length;
      if (num !== 0) {
        $(this).siblings('ul.page').children('li').removeClass('page-click')
        $(this).siblings('ul.page').children('li[sta=b]').next().addClass('page-click')
        $(this).siblings('ul.page').children('li[sta=b]').next().attr('sta', 'c')
        $(this).siblings('ul.page').children('li').not('li[sta=c]').removeClass('page-click')
        $(this).siblings('ul.page').children('li').not('li[sta=c]').attr('sta', 'a')
        $(this).siblings('ul.page').children('li[sta=c]').attr('sta', 'b')
      } else {
        $(this).siblings('ul.page').children('li').removeClass('page-click')
        $(this).siblings('ul.page').children('li').attr('sta', 'a')
        $(this).siblings('ul.page').children('li').last().addClass('page-click')
        $(this).siblings('ul.page').children('li').last().attr('sta', 'b')
      }
    })
  }
};
export default Commonjs;
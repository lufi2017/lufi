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
  },
  fixednavClick:function () {
    var click_quick = null;
    var last_scroll_num = 0;
    $(window).scroll(function() {
      var w_top = $(window).scrollTop();
      // 循环页面正文中定位锚点 找到定位位置
      $('.Tabs-item').each(function(i) {
        var flag;
        // 80 代表是导航条占据的高度
        if ($(this).offset().top - 160 >= w_top) {
          flag = click_quick !== null ? click_quick : i - 1;
          // 滚动了才会触发清除点击项记录
          if (last_scroll_num != w_top && w_top > 0) {
            click_quick = null;
          }

          $('.FixnavRight li[sta]').removeClass('Factive');
          $('.FixnavRight li[sta=' + i + ']').addClass('Factive')
          last_scroll_num = w_top;
          return false;
        }
      })
    })

    $('#nav a').click(function() {
      $('#nav a').removeClass("c");
      $(this).addClass("c");
    });

    $(document).on('click', '.FixnavRight li', function() {
      var sta = $(this).attr('sta');
      $(this).siblings().removeClass('Factive')
      $(this).addClass('Factive')
      console.log(sta)
      //        $(window).scrollTop($('#'+s+'1').offset().top);
      var _H1 = $('.p-top').height()
      var _height = $('.Tabs-item[sta=' + sta + ']').offset().top;
      $('html,body').animate({scrollTop: _height}, 200)

    });

  }
};
export default Commonjs;
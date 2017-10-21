import '../css/feedback.css' 
import $ from 'jquery'
// import Vue from 'vue/dist/vue.common.js'
import res from './data.js'
import pngStar from '../img/feedback/star.png'
import pngInvertStar from '../img/feedback/star-invert.png'


//1.parseint
//eq
//

//问题和星星
let questionList = ''
  for(let i = 0; i < res.length; i++) {
    questionList += '<div class="demostyle"><div><div class="question"><p class="title">'+res[i].title+'</p></div><div class="fivestar"><img class="star" src='+pngInvertStar+' /><img class="star" src='+pngInvertStar+' /><img class="star" src='+pngInvertStar+' /><img class="star" src='+pngInvertStar+' /><img class="star" src='+pngInvertStar+' /></div><div class="comment"><p class="comments"></p></div></div></div>'
  }
 $('.demo').html(questionList)


//attr设置属性时有两个参数，获取属性时说一个参数
//map() 把每个图片都遍历一遍,加三个属性
//index是所有img的集合，num是第几个，parentindex是第几组
 $('.fivestar').children('.star').map(function(index){
     var num = index % 5 ;
     var parentIndex = Math.floor(index / 5)
     $(this).attr({'data-index':num,'parent-index':parentIndex,'ifChange':0});
  })
 //遍历过程中，如果当前图片大于时就让星星为0
 $('.fivestar').children('.star').on('click',function(){
      var clickItenIndex = parseInt($(this).attr('data-index'))
      var clickParentIndex = parseInt($(this).attr('parent-index'))
      $(this).parent().children().map(function(index){
        if(index > clickItenIndex){
          $(this).attr('ifChange',0)
          $('.fivestar').eq(clickParentIndex).children('.star')[index].src=pngInvertStar
          $('.comment').eq(clickParentIndex).children('.comments').html(res[clickParentIndex].back[clickItenIndex+1]) 
          return 
        }
        // 匹配元素集上元素的位置索引是从0开始的。
          $(this).attr('ifChange',1)
          $('.fivestar').eq(clickParentIndex).children('.star')[index].src= pngStar
          $('.comment').eq(clickParentIndex).children('.comments').html(res[clickParentIndex].back[clickItenIndex+1])
      })
  })
 $(".btn").click(function(){
  var length = 0;
  console.log('res.length:',res.length)
  $('.demostyle').each( function (item) {
    $(item).find('img').each( function (item, index) {
      console.log('ifchange:',$(this).attr('ifchange'))
      if($(this).attr('ifchange') == 1){
        console.log('index:', index)
        length++
        console.log('匿名评论成功')
        return
      }
        console.log('您还有问题没回答哦')
    })
  })
  console.log('length:', length)
  if(length = 5) {
    alert('done')
  }else {
    alert('not done')
  }
 }) 
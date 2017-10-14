import '../css/feedback.css' 
import $ from 'jquery'
// // import Vue from 'vue/dist/vue.common.js'
import res from './data.js'
import pngStar from '../img/feedback/star.png'
import pngInverteStar from '../img/feedback/star-invert.png'

// console.log(res)
// let questionList = ''
// for(let i = 0; i < 3; i++) {
// 	questionList += '<div class="demostyle"></div>'
// }
// $('.demo').html(questionList)
// console.log($('body').html())



// $getScript("data.js",function(){alert("");})
// let questionList = ''
//  for(let i = 0; i < 5; i++) {
// 	questionList += '<div class="demostyle"><div class="question"><p>question</p></div><span class="allstar">
// 	<ul><li><img src="../img/feedback/star.png" class="one-star" /></li><li><a href="javascript:void(0)" data-name="较差"
// 	 class="two-stars">2</a></li><li><a href="javascript:void(0)" data-name="一般" class="three-stars">3</a></li>
// 	 <li><a href="javascript:void(0)" data-name="较好" class="four-stars">4</a></li> 
// 	 <li><a href="javascript:void(0)" data-name="很好" class="five-stars">5</a></li></ul></span></div>'
// }
//  $('.demo').html(questionList)


let questionList = ''
for(let i = 0; i < res.length; i++) {
	questionList += '<div class="demostyle"><div><div id="question"><p id="title"></p></div><div id="star"><img id="1" src="" /><img id="2" src="../img/feedback/star-invert.png" /><img id="3" src="../img/feedback/star-invert.png" /><img id="4" src="../img/feedback/star-invert.png" /><img id="5" src="../img/feedback/star-invert.png" /></div></div></div>'
}
$('.demo').html(questionList)
$('.demostyle img').attr('src', pngStar)
console.log('')

// var i, j, x = "",p;
// for (i=1;i<=res.length;i++) {
//     i=res.id;
//     p=res.title;
//     document.getElementById("title").innerHTML=p;
//     x += "<h1>" + res.back[i].name + "</h1>";
//     for (j=1;j<=res.back.length;j++) {
//         x += res.back[i].info[j] + "<br>";
//     }
// }

// document.getElementById("demo").innerHTML = x;
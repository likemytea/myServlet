function NewWindow(e){win=window.open(e,"","top=0,left=0,width=400,height=230")}function createCookie(e,t,i){var n="";if(i){var o=new Date;o.setTime(o.getTime()+24*i*60*60*1e3),n="; expires="+o.toUTCString()}document.cookie=e+"="+t+n+"; path=/"}function readCookie(e){for(var t=e+"=",i=document.cookie.split(";"),n=0;n<i.length;n++){for(var o=i[n];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null}function eraseCookie(e){createCookie(e,"",-1)}function isWeiXin(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}function dashangToggle(){$(".hide_box").fadeToggle(),$(".shang_box").fadeToggle()}function popFunction(){document.getElementById("myPopup").classList.toggle("show")}jQuery(document).ready(function(c){c(".pay_item").click(function(){c(this).addClass("checked").siblings(".pay_item").removeClass("checked");var e=c(this).attr("data-id");c(".shang_payimg img").attr("src","https://static.runoob.com/images/dashang/"+e+"img.png"),c("#shang_pay_txt").text("alipay"==e?"支付宝":"微信")}),c(".search-reveal").click(function(){c(".row-search-mobile").slideToggle("400",function(){})}),c(".placeholder").on("blur",function(){""==c(this).val()&&c(this).val("搜索……")}),c(".placeholder").on("focus",function(){"搜索……"==c(this).val()&&c(this).val("")}),c("#feed_email").on("blur",function(){""==c(this).val()&&c(this).val("输入邮箱 订阅笔记")}),c("#feed_email").on("focus",function(){"输入邮箱 订阅笔记"==c(this).val()&&c(this).val("")}),c("pre").each(function(){c(this).hasClass("prettyprint")||c(this).addClass("prettyprint")}),c(".altblock").click(function(){0!==c(this).find("i.fa-plus-square").length?(c("#postcomments").show(),c(this).find("i").removeClass("fa-plus-square").addClass("fa-minus-square")):(c("#postcomments").hide(),c(this).find("i").removeClass("fa-minus-square").addClass("fa-plus-square"))}),c("#qa_headline").click(function(){c(".altblock").click()}),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(c(".feedback-btn").hide(),c("#respond").hide(),c("#index-nav li").each(function(e){2<e&&c(this).hide()}),0!=c("#ad-336280").length&&isWeiXin()):(c(".feedback-btn").show(),0!=c("#ad-618").length&&c("#ad-618").show()),c(".comt-main li").prepend('<i style="font-size:12px;color:#cfcfcf;padding-right: 4px;" class="fa fa-circle" aria-hidden="true"></i>'),color_flag=!1,prev_title_flag=!1,next_title_flag=!1,href=window.location.href,c("#content img").hasClass("navup")&&(navup_flag=!1,c("#leftcolumn").find("a").each(function(e,t){if(-1!=href.indexOf(c(this).prop("href")))return!(navup_flag=!0)}),navup_flag||(href=c(".navup").parent("a").prop("href")));var n=c("#leftcolumn a").length;if(c("#leftcolumn").find("a").each(function(e,t){if(next_title_flag)return!1;if(cur_href=c(this).prop("href"),cur_obj=c(this),-1!=href.indexOf(cur_href)){if(0==e&&c(".previous-design-link").hide(),e==n-1&&c(".next-design-link").hide(),-1==cur_href.indexOf("/")&&(tmp_url=href.substring(0,href.lastIndexOf("/")+1)+cur_href,href!=tmp_url))return;color_flag||(c(this).css({"background-color":"#96b97d","font-weight":"bold",color:"#fff"}),color_flag=!0),prev_href=c(this).prev("a").prop("href"),prev_title=c(this).prev("a").prop("title"),prev_title||(prev_title=c(this).prev("a").text()),next_href=c(this).next("a").prop("href"),next_title=c(this).next("a").prop("title"),next_title||(next_title=c(this).next("a").text()),prev_title_flag||(prev_title?(c(".previous-design-link a").prop("href",prev_href),c(".previous-design-link a").prop("title",prev_title),c(".previous-design-link a").text(prev_title)):"undefined"!=typeof prev_obj&&(prev_href=prev_obj.prop("href"),prev_title=prev_obj.prop("title"),prev_title||(prev_title=prev_obj.text()),prev_title&&(c(".previous-design-link a").prop("href",prev_href),c(".previous-design-link a").prop("title",prev_title),c(".previous-design-link a").text(prev_title))),prev_title_flag=!0),next_title&&(c(".next-design-link a").prop("href")?(c(".next-design-link a").prop("href",next_href),c(".next-design-link a").prop("title",next_title),c(".next-design-link a").text(next_title)):c(".next-design-link").html('<a href="'+next_href+'" rel="next" title="'+next_title+'">'+next_title+'</a> <i style="font-size:16px;" class="fa fa-arrow-right" aria-hidden="true"></i>'),next_title_flag=!0)}else{if(prev_obj=cur_obj,next_title_flag)return!1;prev_title_flag&&(next_href=c(this).prop("href"),next_title=c(this).prop("title"),next_title||(next_title=c(this).text()),next_title&&(c(".next-design-link a").prop("href")?(c(".next-design-link a").prop("href",next_href),c(".next-design-link a").prop("title",next_title),c(".next-design-link a").text(next_title)):c(".next-design-link").html('<a href="'+next_href+'" rel="next" title="'+next_title+'">'+next_title+'</a> <i style="font-size:16px;" class="fa fa-arrow-right" aria-hidden="true"></i>'),next_title_flag=!0))}}),c(".sidebar-tree > ul > li").hover(function(){c(this).addClass("selected"),c(this).children("a:eq(0)").addClass("h2-tit"),c(this).children("ul").show()},function(){c(this).removeClass("selected"),c(this).children(".tit").removeClass("h2-tit"),c(this).children("ul").hide()}),c(".qqinfo").hide(),c("#index-nav li").click(function(){c(this).find("a").addClass("current"),c(this).siblings().find("a").removeClass("current"),id=c(this).find("a").attr("data-id"),c(".sub-navigation-articles").hide(),id,"note"==id||"tool"==id||("quiz"==id?(c("#tool").hide(),c("#manual").hide(),c("#"+id).show(),c(".sub-navigation-articles").show()):"manual"==id?(c("#tool").hide(),c("#quiz").hide(),c("#"+id).show(),c(".sub-navigation-articles").show()):(c("#tool").hide(),c("#quiz").hide(),c("#manual").hide()))}),c("#note-nav li").each(function(){if(window.location.pathname==c(this).find("a").attr("href"))return c(this).find("a").addClass("current"),!1}),c("#cate0").click(function(){c(".codelist-desktop").show()}),c(".design").click(function(){id=c(this).prop("id"),c("."+id).show(),c("."+id).siblings().hide()}),c("a").on("click touchend",function(e){if(548==screen.availHeight&&320==screen.availHeight){var t=c(this).attr("href");window.location=t}}),c("#pull").click(function(){c(".left-column").slideToggle("400",function(){})}),c(".qrcode").hover(function(){c("#bottom-qrcode").show()},function(){c("#bottom-qrcode").hide()}),c(window).scroll(function(){100<=c(window).scrollTop()?(c(".go-top").fadeIn(),c("#htmlfeedback-container").length&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||c("#htmlfeedback-container").show())):c(".go-top").fadeOut()}),c(".go-top").click(function(e){return c("html,body").animate({scrollTop:0},100),!1}),c(window).resize(function(){var e=c(window).width();-1!=window.location.href.indexOf("w3cnote")||768<e&&c(".left-column").show(),e<568?c("#index-nav li").each(function(e){2<e&&c(this).hide()}):c("#index-nav li").show()}),c(".ad-600160").hasClass("aliyun-ads")&&c.getJSON("/api/ads.php",function(e){e.aliyun.is_show&&(_adhtml='<a target="_blank" href="'+e.aliyun.url+'"><img src="'+e.aliyun.image+'"></a>',c(".ad-600160").html(_adhtml),c(".ad-600160").parent(".ad-box-large").show())}),_arr1=window.location.href.split("."),0<parseInt(_arr1.length)-parseInt(1)&&"html"==_arr1[parseInt(_arr1.length)-parseInt(1)]&&c(".writer").show(),c(".writer").click(function(){if(0<parseInt(_arr1.length)-parseInt(1)&&"html"==_arr1[parseInt(_arr1.length)-parseInt(1)]){var e=c.trim(c("#content h1").text()),t=c.trim(document.URL);if("undefined"!=typeof Storage){var n="";if(null===localStorage.getItem("artObject"))n='{"urls" : [{ "title": " '+e+'", "url": " '+t+'" }] }',localStorage.setItem("artObject",n),alert("文章标记成功！");else{var o=localStorage.getItem("artObject"),r=JSON.parse(o),s=!0,a="",l=0;for(i in r.urls)if(r.urls[i].title==e){s=!1,alert("文章已标记！");break}if(1==s){for(i in a='{"urls" : [',20<=r.urls.length&&(l=1),r.urls)1==l&&0==i||(i==l?a+='{ "title": "'+r.urls[i].title+'", "url":"'+r.urls[i].url+'"}':a+=',{ "title": "'+r.urls[i].title+'", "url":"'+r.urls[i].url+'"}');a+=',{ "title":"'+e+'", "url":"'+t+'" }] }',localStorage.setItem("artObject",a),alert("文章标记成功！")}}}else alert("抱歉! 您的浏览器不支持 web 存储。")}}),c("#historylist").length&&"undefined"!=typeof Storage&&null!==localStorage.getItem("artObject")){var e="",t=localStorage.getItem("artObject"),o=JSON.parse(t),r=o.urls.length-1;for(i=r;0<=i;i--)e+='<li><a target="_blank" href="'+o.urls[i].url+'">'+o.urls[i].title+"</a></li>";c("#historylist").html(e)}else c("#historylist").html("<li>没有标记记录！！！</li>");c(".previous-design-link i").wrap('<a href="'+c(".previous-design-link a").prop("href")+'"></a>'),c(".next-design-link i").wrap('<a href="'+c(".next-design-link a").prop("href")+'"></a>')}),jQuery(document).ready(function(r){var t=r(".cd-user-modal"),e=t.find("#cd-login"),i=t.find("#cd-signup"),n=r(".cd-switcher"),o=n.children("li").eq(0).children("a"),s=n.children("li").eq(1).children("a"),a=r(".runoob-pop"),l=!1;function c(){e.addClass("is-selected"),i.removeClass("is-selected"),o.addClass("selected"),s.removeClass("selected")}function d(){e.removeClass("is-selected"),i.addClass("is-selected"),o.removeClass("selected"),s.addClass("selected")}if(r.ajaxSetup({async:!1}),readCookie("checklogin_ajax")&&r.post("/wp-content/themes/runoob/option/user/log.php",{action:"checklogin"},function(e){0==e.error?(r('<a target="_blank" href="//www.runoob.com/member">'+e.msg+"</a>").replaceAll(".runoob-pop"),l=!0):eraseCookie("checklogin_ajax")},"json"),"undefined"!=typeof aid&&0<aid&&l&&r.post("/wp-content/themes/runoob/option/user/userinfo.php",{aid:aid,action:"collarticle",opt:"init"},function(e){0==e.error?(r("#content").find("h1:first").append(e.msg),r(".comment-signarea").hide(),r("#commentform").show(),r("#comment-author-info li:lt(2)").hide(),r("#is_user_logged_in").val(1),r(".comt-title p:first").html(e.username)):(r(".comment-signarea").show(),r("#commentform").hide(),r("#is_user_logged_in").val(0))},"json"),a.on("click",function(e){t.addClass("is-visible"),r(e.target).is(".cd-signup")?d():c()}),r(".cd-user-modal").on("click",function(e){(r(e.target).is(t)||r(e.target).is(".cd-close-form"))&&t.removeClass("is-visible")}),r(document).keyup(function(e){"27"==e.which&&t.removeClass("is-visible")}),n.on("click",function(e){e.preventDefault(),r(e.target).is(o)?c():d()}),r(".full-width2").on("click",function(e){e.preventDefault();var t=r(this).parent().parent(),i=t.find('input[name="action"]').val(),n="",o="signup"==i;i&&(o?(verifycode=t.find('input[name="verifycode"]').val(),email=t.find('input[name="email"]').val(),name=t.find('input[name="name"]').val(),password=t.find('input[name="password"]').val(),password2=t.find('input[name="password2"]').val(),n={verifycode:verifycode,name:name,password:password,email:email,password2:password2,action:i}):(username=t.find('input[name="username"]').val(),password=t.find('input[name="password"]').val(),r("#remember-me").prop("checked")?remember=1:remember=0,n={username:username,password:password,action:i,remember:remember}),r.ajax({type:"POST",url:jsui.uri+"/option/user/log.php",data:n,dataType:"json",success:function(e){if(createCookie("checklogin_ajax",!0,15),e.error)return error_msg='<p class="errtip">\t<strong>错误</strong>：'+e.msg+"</p>",void r(".err-msg").html(error_msg);location.reload()}}))}),-1!==window.location.href.indexOf("bootstrap-v2")){r("#content").prepend('<div style="color:#a94442;background-color:#f2dede;border-color:#ebccd1;padding: 15px;margin-bottom: 20px;border: 1px solid transparent;border-radius: 4px;"><strong>提示：</strong>你当前查看的是 Bootstrap 2.x 版本，<a target="_blank" href="/bootstrap/bootstrap-tutorial.html">Bootstrap3.x 版本点我</a>。</div>')}r(".widget-header i:odd").click(function(){r(this).hasClass("fa-caret-up")?(r(this).parent(".widget-header").siblings(".widget-content").hide(),r(this).removeClass("fa-caret-up").addClass("fa-caret-down")):(r(this).parent(".widget-header").siblings(".widget-content").show(),r(this).removeClass("fa-caret-down").addClass("fa-caret-up"))});var u=r("#moon").attr("data-cate");if(u)var h=readCookie("moon"+u);r("#moon").click(function(){r(this).hide(),r("#sun").show(),r(".example_code").css({"background-color":"#eee"}),r(".hl-main").css({"background-color":"#eee"}),r(".article").css({"background-color":"#eee"}),r(".reference tr:nth-child(even)").css("background-color","#eee"),r(".simditor-wrapper").css("background-color","#eee"),r(".simditor-toolbar").css("background-color","#eee"),r(".comt-ctrl").css("background-color","#eee"),r(".ipt").css("background-color","#eee"),h||createCookie("moon"+u,1,1)}),r("#sun").click(function(){r(this).hide(),r("#moon").show(),r(".example_code").css({"background-color":"#fff"}),r(".hl-main").css({"background-color":"#fff"}),r(".article").css({"background-color":"#fff"}),r(".reference tr:nth-child(even)").css("background-color","#fff"),r(".simditor-wrapper").css("background-color","#fff"),r(".simditor-toolbar").css("background-color","#fff"),r(".comt-ctrl").css("background-color","#fbfbfb"),r(".ipt").css("background-color","#fff"),eraseCookie("moon"+u)}),u&&h&&r("#moon").trigger("click"),-1<window.location.href.indexOf("python-exercise")&&r("#respond").hide()}),jQuery.fn.putCursorAtEnd=function(){return this.each(function(){if(this.setSelectionRange){var e=2*$(this).val().length;this.setSelectionRange(e,e)}else $(this).val($(this).val())})},function(g,e,v,t){"use strict";g.quiz=function(e,t){var r=this;r.$el=g(e),r.$el.data("quiz",r),r.options=g.extend(g.quiz.defaultOptions,t);var s=r.options.questions,i=s.length,n=r.options.startScreen,o=r.options.startButton,a=r.options.homeButton,l=r.options.resultsScreen,c=r.options.gameOverScreen,d=r.options.nextButtonText,u=r.options.finishButtonText,h=r.options.restartButtonText,f=1,p=0,m=!1;r.methods={init:function(){r.methods.setup(),g(v).on("click",o,function(e){e.preventDefault(),r.methods.start()}),g(v).on("click",a,function(e){e.preventDefault(),r.methods.home()}),g(v).on("click",".answers a",function(e){e.preventDefault(),r.methods.answerQuestion(this)}),g(v).on("click","#quiz-next-btn",function(e){e.preventDefault(),r.methods.nextQuestion()}),g(v).on("click","#quiz-finish-btn",function(e){e.preventDefault(),r.methods.finish()}),g(v).on("click","#quiz-restart-btn, #quiz-retry-btn",function(e){e.preventDefault(),r.methods.restart()})},setup:function(){var i="";r.options.counter&&(i+='<div id="quiz-counter"></div>'),i+='<div id="questions">',g.each(s,function(e,t){i+='<div class="question-container">',i+='<p class="question">'+t.q+"</p>",i+='<ul class="answers">',g.each(t.options,function(e,t){i+='<li><a href="#" data-index="'+e+'">'+t+"</a></li>"}),i+="</ul>",i+="</div>"}),i+="</div>",0===g(l).length&&(i+='<div id="'+l.substr(1)+'">',i+='<p id="quiz-results"></p>',i+="</div>"),i+='<div id="quiz-controls">',i+='<p id="quiz-response"></p>',i+='<div id="quiz-buttons">',i+='<a href="#" id="quiz-next-btn">'+d+"</a>",i+='<a href="#" id="quiz-finish-btn">'+u+"</a>",i+='<a href="#" id="quiz-restart-btn">'+h+"</a>",i+="</div>",i+="</div>",r.$el.append(i).addClass("quiz-container quiz-start-state"),g("#quiz-counter").hide(),g(".question-container").hide(),g(c).hide(),g(l).hide(),g("#quiz-controls").hide()},start:function(){r.$el.removeClass("quiz-start-state").addClass("quiz-questions-state"),g(n).hide(),g("#quiz-controls").hide(),g("#quiz-finish-btn").hide(),g("#quiz-restart-btn").hide(),g("#questions").show(),g("#quiz-counter").show(),g(".question-container:first-child").show().addClass("active-question"),r.methods.updateCounter()},answerQuestion:function(e){if(!m){m=!0;var t=g(e),i="",n=t.data("index"),o=f-1;if(n===s[o].correctIndex)t.addClass("correct"),i=s[o].correctResponse,p++;else if(t.addClass("incorrect"),i=s[o].incorrectResponse,!r.options.allowIncorrect)return void r.methods.gameOver(i);g("#quiz-response").html(i),g("#quiz-controls").fadeIn(),"function"==typeof r.options.answerCallback&&r.options.answerCallback(f,n,s[o])}},nextQuestion:function(){m=!1,g(".active-question").hide().removeClass("active-question").next(".question-container").show().addClass("active-question"),g("#quiz-controls").hide(),++f===i&&(g("#quiz-next-btn").hide(),g("#quiz-finish-btn").show()),r.methods.updateCounter(),"function"==typeof r.options.nextCallback&&r.options.nextCallback()},gameOver:function(e){if(0===g(c).length){var t="";t+='<div id="'+c.substr(1)+'">',t+='<p id="quiz-gameover-response"></p>',t+='<p><a href="#" id="quiz-retry-btn">'+h+"</a></p>",t+="</div>",r.$el.append(t)}g("#quiz-gameover-response").html(e),g("#quiz-counter").hide(),g("#questions").hide(),g("#quiz-finish-btn").hide(),g(c).show()},finish:function(){r.$el.removeClass("quiz-questions-state").addClass("quiz-results-state"),g(".active-question").hide().removeClass("active-question"),g("#quiz-counter").hide(),g("#quiz-response").hide(),g("#quiz-finish-btn").hide(),g("#quiz-next-btn").hide(),g("#quiz-restart-btn").show(),g(l).show();var e=r.options.resultsFormat.replace("%score",p).replace("%total",i);g("#quiz-results").html(e),"function"==typeof r.options.finishCallback&&r.options.finishCallback()},restart:function(){r.methods.reset(),r.$el.addClass("quiz-questions-state"),g("#questions").show(),g("#quiz-counter").show(),g(".question-container:first-child").show().addClass("active-question"),r.methods.updateCounter()},reset:function(){m=!1,f=1,p=0,g(".answers a").removeClass("correct incorrect"),r.$el.removeClass().addClass("quiz-container"),g("#quiz-restart-btn").hide(),g(c).hide(),g(l).hide(),g("#quiz-controls").hide(),g("#quiz-response").show(),g("#quiz-next-btn").show(),g("#quiz-counter").hide(),g(".active-question").hide().removeClass("active-question")},home:function(){r.methods.reset(),r.$el.addClass("quiz-start-state"),g(n).show(),"function"==typeof r.options.homeCallback&&r.options.homeCallback()},updateCounter:function(){var e=r.options.counterFormat.replace("%current",f).replace("%total",i);g("#quiz-counter").html(e)}},r.methods.init()},g.quiz.defaultOptions={allowIncorrect:!0,counter:!0,counterFormat:"%current/%total",startScreen:"#quiz-start-screen",startButton:"#quiz-start-btn",homeButton:"#quiz-home-btn",resultsScreen:"#quiz-results-screen",resultsFormat:"You got %score out of %total correct!",gameOverScreen:"#quiz-gameover-screen",nextButtonText:"Next",finishButtonText:"Finish",restartButtonText:"Restart"},g.fn.quiz=function(e){return this.each(function(){new g.quiz(this,e)})}}(jQuery,window,document);
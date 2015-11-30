
var height=$('.item img').height();
$('.shadow').css({'height':height+'px','margin-top':-(height)+'px'})
var activityData=[{
			title:'那个世界没有我们 唯有一笔一画陪伴',
			subTitle:'患有自闭症的他走在狭长的工笔画廊上，摸索未来',
			reporter:'朱营',
			content:['在这个星球上，生活着一群与我们不同的精灵。在无边无际的黑暗中、在不容于世的单纯中，他们犹如卑微而坚韧的小草，努力寻找着阳光的方向。音乐、舞蹈、绘画、文字，是他们与世界沟通的方式，在他们的心中，也存在着自己小小的梦想，渴望一个大大的舞台让梦想照进现实。','如果梦想真能点亮心灯，这群特殊青少年的人生中将有一次非凡的成功。爱讲相声的双胞胎盲童；重度自闭症患儿、工笔画达人杨成伟；多才多艺的唐氏儿王安；钢琴小王子、自闭症患儿陈正桐；智障诗人袁永瑞......从今天起，让我们走进这群才艺出众的特殊“达人”，他们中的一部分人将在下月举行的特殊青少年达人秀舞台上展现生命的精彩。而另一些已荣膺“学生艺术家”称号的青少年也在继续寻找着前行的方向。无论在他们的人生舞台上梦想有多大，只要有更多的爱与关怀，他们心中的“梦想舞台”就将绽放绚烂的光芒。'],
			imgurl:['files/images/draw.png'],
			imgIntro:'伟伟喜欢在一种安静的环境里画画',
			imgFrom:'贺佳颖'
		},{
			title:'2013年1月10日-1月17日，长宁区图书馆展出',
			imgurl:['files/images/activity1/1.png',
					'files/images/activity1/2.png',
					'files/images/activity1/3.png',
					'files/images/activity1/4.png',
					'files/images/activity1/5.png',
					'files/images/activity1/6.png',
					'files/images/activity1/7.png',
					'files/images/activity1/8.png',
					'files/images/activity1/9.png',
					'files/images/activity1/10.png',
					'files/images/activity1/11.png',
					'files/images/activity1/12.png',
					'files/images/activity1/13.png',
					'files/images/activity1/14.png',
					'files/images/activity1/15.png'],
		},{
			title:'2013年3月5日-3月11日，上海多伦现代美术馆',
			imgurl:['files/images/activity2/1.png',
					'files/images/activity2/2.png',
					'files/images/activity2/3.png',
					'files/images/activity2/4.png',
					'files/images/activity2/5.png',
					'files/images/activity2/6.png',
					'files/images/activity2/7.png'],
		},{
			title:'2013年4月2日莫干山路华府艺术空间展出',
			content:['2013年3月26日---4月6日, 伟伟参加了 “爱. 让星空蓝起来 兰丝带在行动”自闭症儿童艺术展示, 自闭症儿童画展在上海莫干山路50号4号楼217室上海华府艺术空间举行。',
					'患有自闭症症的人，就像被困在机器人里的灵魂，他们的一生都无法逃脱，在各自的星球独自生活着，但无论多么不同，他们需要被世界了解，他们与平凡人一样，也是其中的一块拼图。'],
			imgurl:['files/images/activity3/1.png',
					'files/images/activity3/2.png',
					'files/images/activity3/3.png',
					'files/images/activity3/4.png',
					'files/images/activity3/5.png'],
		},{
			title:'2013年5月18日“上海市民文化节书画展”',
			imgurl:['files/images/activity4/1.png',
					'files/images/activity4/2.png',
					'files/images/activity4/3.png',
					'files/images/activity4/4.png',
					'files/images/activity4/5.png'],
		},{
			title:'2013年7月27日，伟伟作品与外滩Swatch艺术中心访问艺术家一起展出',
			imgurl:['files/images/activity5/1.png',
					'files/images/activity5/2.png',
					'files/images/activity5/3.png',
					'files/images/activity5/4.png',
					'files/images/activity5/5.png'],
		},{
			title:'2014年3月1日伟伟在上海波特曼参加慈善绘画展出活动',
			imgurl:['files/images/activity6/1.png',
					'files/images/activity6/2.png',
					'files/images/activity6/3.png',
					'files/images/activity6/4.png',
					'files/images/activity6/5.png',
					'files/images/activity6/6.png'],
		},{
			title:'2014年6月8日“爱让梦想成真”慈善募捐活动, 平安信托与长宁初职合办',
			imgurl:['files/images/activity7/1.png',
					'files/images/activity7/2.png',
					'files/images/activity7/3.png',
					'files/images/activity7/4.png',
					'files/images/activity7/5.png',
					'files/images/activity7/6.png',
					'files/images/activity7/7.png',
					'files/images/activity7/8.png'],
		},{
			title:'2015年4月2日参加“大手牵小手”全国自闭症画展',
			imgurl:['files/images/activity8/1.png',
					'files/images/activity8/2.png'],
		}]
		$('#activityModal').on('show.bs.modal', function (event) {
		  var buttonIndex = $(event.relatedTarget).attr("data-index") ;
		  $('#activityModal .modal-body').html(renderActivity(activityData[buttonIndex]))
		})
		function renderActivity(a){
			var html='<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;'
				+'</span></button><h3 style="title">'+a.title+'</h3>';
		    if(a.subTitle){
		    	html+=' <p class="sub-title">'+a.subTitle+'</p>';
		    }
		    if(a.reporter){
		    	html+='<p>记者 '+a.reporter+'</p>';
		    }
		    if(a.content){
		    	for(var i=0;i<a.content.length;i++){
		        	html+='<p class="content">'+a.content[i]+'</p>';
		        }
		    }
	        
	        if(a.imgurl.length!=0){
	        	for(var i=0;i<a.imgurl.length;i++){
	        		html+='<img class="col-xs-6" src="'+a.imgurl[i]+'" alt="">';
	        	}
	        	
	        }
	        if(a.imgIntro){
	        	html+='<br/><span>'+a.imgIntro+'</span>';
	        }
	        if(a.imgFrom){
	        	html+='<span>本报记者 '+a.imgFrom+' 摄</span>';
	        }
	        html+='<div class="clear"></div>'
	        return html;
		}


		$('#workModal').on('show.bs.modal', function (event) {
		  var imgurl = $(event.relatedTarget).attr("data-src") ;

		  var html='<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><img src="'+imgurl+'" alt="" class="img-responsive">'
		  var width=$(html).width();
		 
		  $('#workModal .modal-body').html(html)
		})


        $(window).resize(function(){
            var height=$('.item img').height();
            $('.shadow').css({'height':height+'px','margin-top':-(height)+'px'})
        })
        $(window).scroll(function(){
        	console.log( document.body.scrollTop)
        	if(document.body.scrollTop>300){
        		$('.backToTop').css('display','block')
        	}
        	else{
        		$('.backToTop').css('display','none')
        	}
        })

var height=$('.item img').height();
$('.shadow').css({'height':height+'px','margin-top':-(height)+'px'})
var activityData=[{
			title:'那个世界没有我们 唯有一笔一画陪伴',
			subTitle:'患有自闭症的他走在狭长的工笔画廊上，摸索未来',
			reporter:'朱营',
			content:['在这个星球上，生活着一群与我们不同的精灵。在无边无际的黑暗中、在不容于世的单纯中，他们犹如卑微而坚韧的小草，努力寻找着阳光的方向。音乐、舞蹈、绘画、文字，是他们与世界沟通的方式，在他们的心中，也存在着自己小小的梦想，渴望一个大大的舞台让梦想照进现实。','如果梦想真能点亮心灯，这群特殊青少年的人生中将有一次非凡的成功。爱讲相声的双胞胎盲童；重度自闭症患儿、工笔画达人杨成伟；多才多艺的唐氏儿王安；钢琴小王子、自闭症患儿陈正桐；智障诗人袁永瑞......从今天起，让我们走进这群才艺出众的特殊“达人”，他们中的一部分人将在下月举行的特殊青少年达人秀舞台上展现生命的精彩。而另一些已荣膺“学生艺术家”称号的青少年也在继续寻找着前行的方向。无论在他们的人生舞台上梦想有多大，只要有更多的爱与关怀，他们心中的“梦想舞台”就将绽放绚烂的光芒。'],
			imgurl:'files/images/draw.png',
			imgIntro:'伟伟喜欢在一种安静的环境里画画',
			imgFrom:'贺佳颖'
		}]
		$('#activityModal').on('show.bs.modal', function (event) {
		  var buttonIndex = $(event.relatedTarget).attr("data-index") ;
		  $('#activityModal .modal-body').html(renderActivity(activityData[buttonIndex]))
		})
		function renderActivity(a){
			var html='<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;'
				+'</span></button><h3 style="title">'+a.title+'</h3>'
		       +' <p class="sub-title">'+a.subTitle+'</p><p>记者 '+a.reporter+'</p>'
	        for(var i=0;i<a.content.length;i++){
	        	html+='<p class="content">'+a.content[i]+'</p>';
	        }
	        if(a.imgurl){
	        	html+='<img src="'+a.imgurl+'" alt=""><br/>';
	        }
	        if(a.imgIntro){
	        	html+='<span>'+a.imgIntro+'</span>';
	        }
	        if(a.imgFrom){
	        	html+='<span>本报记者 '+a.imgFrom+' 摄</span>';
	        }
	        return html;
		}


		$('#workModal').on('show.bs.modal', function (event) {
		  var imgurl = $(event.relatedTarget).attr("data-src") ;

		  var html='<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><img src="'+imgurl+'" alt="" class="img-responsive">'
		  var width=$(html).width();
		 
		  $('#workModal .modal-body').html(html)
		   console.log(width)
		})


        $(window).resize(function(){
            var height=$('.item img').height();
            console.log('img'+height)
            $('.shadow').css({'height':height+'px','margin-top':-(height)+'px'})
            console.log($('.shadow').css('margin-top'))
        })
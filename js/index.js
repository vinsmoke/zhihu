var zhihu=angular.module('zhihu',['ngRoute']);
zhihu.controller('mainCtrl',['$scope',function($scope){
	$scope.title="首页";
	if(localStorage.zhihu){
		$scope.isFistOpen=false;
	}else{
		$scope.isFistOpen=true;
	}

	$scope.center=function(){
		console.log(1)
		$scope.isFistOpen=false;
		localStorage.zhihu = true;
	}
}])
zhihu.directive('zhShanpin',[function(){
	return{
		restrict:'E',         
		replace:true,
		templateUrl:'views/directive/shanpin.html',
		link:function($scope,en){
 $(function(){
        var mySwiper = new Swiper ('.swiper-container', {
          pagination: '.swiper-pagination',
        })
      })
		}
	}
}])
zhihu.directive('zhTop',[function(){
	return{
		restrict:'E',
		replace:true,
		templateUrl:'views/directive/zhtop.html'
	}
}])
zhihu.directive('zhBar',[function(){
	return{
		restrict:'E',
		replace:true,
		templateUrl:'views/directive/zhbar.html'
	}
}])
zhihu.directive('shouYe',[function(){
	return{
		restrict:'E',
		replace:true,
		templateUrl:'views/directive/shouye.html',
		link:function($scope,en){
       $('.zan').on('click',function(){
       	console.log(0)
       })
		}
	}
}])
zhihu.controller('zhuceCtrl',['$scope',function($scope){
}])
zhihu.controller('denglvCtrl',['$scope',function($scope){

}])
zhihu.controller('shouyeCtrl',['$scope',function($scope){
$scope.lists=[
	{
	touxiang:'./image/ac.png',title:'星巴克是否存在问题？如有，怎么解决？',
	text:'作为在星巴克工作了两年的员工来回答个问题(我表明工作身份只想说自己对在该问题上还算有点认知度，并无其他，先说说赞同度最高的同志的答案，我',
	dianzan:'4.5k',
	pinglun:'911'
},
{
	touxiang:'./image/qw.png',title:'女生在穿戴内方面有哪些误区？如何矫正正确的习惯',
	text:'80年代女性开始穿戴文胸，可是直到现在除了穿着时要求挤出乳沟，对内衣基本知识几乎一无所知，比如乳房的胸的位置，相信大多数女生是不知道的',
	dianzan:'7.7k',
	pinglun:'811'
},
{
	touxiang:'./image/rt.png',title:'男生怎么样才能流长头发？',
	text:'2015.11.26因为关闭了评论和点赞，所以很久都没有回答这样的问题了，没想到竟然破了一万。大大出乎了我的意料',
	dianzan:'3.3k',
	pinglun:'911'
},
]
}])
	

zhihu.controller('faxianCtrl',['$scope',function($scope){
	$scope.yuanzhu=[
	{image:'./image/eddw.png',
		p:'孙亚飞 在秀色不可餐，智慧尚能饭中',
		title:'第七篇：你想知道的‘小龙虾’的秘密，都在这里了',
		text:'美食季里的美食忌和美食记里的美食记来一次亲密的PK.第一说还是要说小龙溪登录大陆的情况，是应为南京发生了事件，因为食用',		
		zan:'4534'
},
{image:'./image/rerewr.png',
		p:'孙亚飞 在秀色不可餐，智慧尚能饭中',
		title:'第七篇：你想知道的‘小龙虾’的秘密，都在这里了',
		text:'美食季里的美食忌和美食记里的美食记来一次亲密的PK.第一说还是要说小龙溪登录大陆的情况，是应为南京发生了事件，因为食用',		
		zan:'4534'
},

	]
}])
zhihu.controller('huidaCtrl',['$scope','$routeParams',function($scope,$routeParams){
	var id=$routeParams.aa;
	$scope.xinxi=[
{title:'这是星巴克',
	image:'./image/refsf.png',
	name:'chris xia',
	biaoyu:'"就是不想让你们说这不科学"',
	neirong:'在年审前夜给这个问题写回答，真是百感交集；一想到在年审当天要把这个回答发出来，大家看到我的回答的时候我正在经受两位独立考官的追问（虽然我和他俩都很熟），我就更是百感交集了——这跟在知乎上回答问题然后再查看回复有什么本质上的区别嘛……总觉得在写的时候手都有点发抖。为什么呢？因为我去年有半年就在整理这方面的东西呀，我明天年审的时候就要被考官问到这些呀，所以我今天就顺手复习一下了。先回答题主在标题里提出的问题：学习一门语言（包括我们的母语），会不会对其他语言的学习产生（或者是正面或者是负面的）影响？会，虽然这个“会”不意味着“一定会”。',
	},
	{title:'女生',
	image:'./image/erwerwe.png',
	name:'duka',
	biaoyu:'"就是不想让你们说这不科学"',
	neirong:'女生进入国防科技大学有下面几点要注意： 国防科技大学只有测控技术与仪器、计算机科学与技术、通信工程、指挥自动化工程、自动化、外国语言文学、公共事业管理招收女生 招生基本要求：女生身高1.58米以上；体重45公斤以上；发育正常，体形匀称，无O形腿、X形腿，无特体；面部无明显疤痕，无纹身（文身）；语言表达流利，无口吃；表情自然，举止文明有礼，衣着整洁得当，动作协调自然；报考动机明确，愿为祖国国防事业献身。面试办法：一是提问，通过问答，了解考生有无良好的动机，有何爱好特长，听令是否准确，反应是否敏锐，口齿是否清楚；二是观察，通过对考生坐、立、行的观察，看体形、仪表举止神态是否符合标准；三是检测，对面试中有疑问的可操作项目进行测试，如测量身高、体重等。高考成绩：国防科技大学为985高校，高考分数一般要过一本线80分以上才有希望。而且军校为提前批，填写志愿要注意',
	},
	{title:'学习[某一门语言]会对学习其他语言产生帮助或者干扰嘛？',
	image:'./image/wqrere.png',
	name:'youmen',
	biaoyu:'"就是不想让你们说这不科学"',
	neirong:'在年审前夜给这个问题写回答，真是百感交集；一想到在年审当天要把这个回答发出来，大家看到我的回答的时候我正在经受两位独立考官的追问（虽然我和他俩都很熟），我就更是百感交集了——这跟在知乎上回答问题然后再查看回复有什么本质上的区别嘛……总觉得在写的时候手都有点发抖。为什么呢？因为我去年有半年就在整理这方面的东西呀，我明天年审的时候就要被考官问到这些呀，所以我今天就顺手复习一下了。先回答题主在标题里提出的问题：学习一门语言（包括我们的母语），会不会对其他语言的学习产生（或者是正面或者是负面的）影响？会，虽然这个“会”不意味着“一定会”。',
	},
	]
	$scope.images=$scope.xinxi[id].image;
	$scope.name=$scope.xinxi[id].name;
	$scope.title=$scope.xinxi[id].title;
	$scope.biaoyu=$scope.xinxi[id].biaoyu;
	$scope.neirong=$scope.xinxi[id].neirong;

}])
zhihu.controller('gengduoCtrl',['$scope',function($scope){
}])
zhihu.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		 controller:'zhuceCtrl',
		templateUrl:'views/directive/shouye.html'
	})
	.when('/zhuce',{
		 controller:'zhuceCtrl',
		templateUrl:'views/directive/zhuce.html'
	})
	.when('/denglv',{
		controller:'denglvCtrl',
		templateUrl:'views/directive/denglv.html'
	})
	.when('/shouye',{
		controller:'shouyeCtrl',
		templateUrl:'views/directive/shouye.html'
	})
	.when('/faxian',{
		controller:'faxianCtrl',
		templateUrl:'views/directive/faxian.html'
	})
	.when('/gengduo',{
		controller:'gengduoCtrl',
		templateUrl:'views/directive/gengduo.html'
	})
	.when('/huida/:aa',{
		controller:'huidaCtrl',
		templateUrl:'views/directive/huida.html'
	})
	

	.otherwise({
		redirectTo:'/'
	})
}])
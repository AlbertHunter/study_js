var karray = new Array();
karray['英雄联盟']	=	new Array('lol','http://www.sogou.com');
karray['王者荣耀']	=	new Array('wzry','http://www.baidu.com');
karray['王者农药']	=	new Array('wzry','http://www.baidu.com');
karray['九阳神功']	=	new Array('jysg','http://www.so.com');
karray['九阳']		=	new Array('jysg','http://www.so.com');
karray['守望先锋']	=	new Array('ow','http://www.bing.com');
karray['魔兽世界']	=	new Array('wow','http://www.bing.com');
karray['魔兽']		=	new Array('wow','http://www.bing.com');
karray['wow']		=	new Array('wow','http://www.bing.com');
//default page
var default_url = 'http://www.hao123.com';


showPage(karray,default_url);
function showPage(data,default_url){
	data['end'] = new Array('default',default_url);
	var title = document.title;
	var laybox = document.getElementsByTagName('body')[0];
	for(i in data){
		//console.log(i+'--->'+data[i][0]);
		if(title.indexOf(i)>= 0){
			//console.log("包含"+i+'--->'+data[i][0]);
			var newItem = itembox(data[i][1]);
			laybox.insertBefore(newItem,laybox.childNodes[0]);//插入到body标签后
			break;
		}else if(i !='end'){  
			continue;
		}else{
			//console.log(data[i][1]);
			if(data[i][1] != ''){
				var newItem = itembox(data[i][1]);
				laybox.insertBefore(newItem,laybox.childNodes[0]);//插入到body标签后			
			}
			break;
		}
	}
}
function itembox(url){
	/*设置展示效果,iframe*/
	var newItem=document.createElement("iframe");
	/*设置iframe参数*/
	newItem.setAttribute('src',url);//url
	newItem.setAttribute('width','100%');	//width
	newItem.setAttribute('height','100%');	//height
	newItem.setAttribute('frameborder','0');
	newItem.setAttribute('border','0');	
	newItem.setAttribute('scrolling','auto');
	return newItem;
}
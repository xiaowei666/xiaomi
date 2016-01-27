window.onload = function(){
var 
banhome= document.getElementsByClassName('bannerhome'),
banner = document.getElementsByClassName('ban'),
botton = document.getElementsByClassName('xuanzedian'),
bban   = document.getElementById('ban'),
topzi  = document.getElementsByClassName('mjmj'),
zhizhen= document.getElementsByClassName('smalltree'),
bottonkaiguan = false;
var jiTuo = 1,numT=0 ;
var ceng = 20 ; 
for(var i = 0 ; i < botton.length ; i++){
	botton[i].style.position= 'absolute';
	botton[i].style.bottom = 30+'px';
	botton[i].style.right  = 280-i*40+'px';
	botton[i].style.zIndex = ceng ; 
	// botton[i].style.background = 'red';
}
for(var i = 0 ; i<botton.length ; i++){
	botton[i].index = i ;
	botton[i].onclick = function(){
	botton[this.index].style.background = 'rgb(255, 110, 0)';
	banhome[0].style.marginLeft = -(this.index*1266)+'px' ;
	}

}

var index = 0 ,timeId,bannerleft,num = 0 ;
var fly = function(){
	if(index == 5 ){
		index = 0 ;
	}

	banhome[0].style.marginLeft = -(index*1266)+'px' ;
	botton[num].style.background = 'rgb(117,117,117)';
	botton[index].style.background = 'white';
	num = index;
	index++;
	
	
};
timeId = setInterval(fly,1000);
var shangyici; 
for(i = 0 ; i < botton.length ; i++ ){
	botton[i].index = i ;
	banner[i].index = i ; 
	botton[i].onclick = function(){
		clearInterval(timeId);
		botton[this.index].style.background = 'white' ;
		if(shangyici>=0){
			botton[shangyici].style.background = 'rgb(117,117,117)' ; 
		} 
		banhome[0].style.marginLeft = -(this.index*1266)+'px' ;
		bottonkaiguan = true ; 
		shangyici = this.index;
		shangyici = this.index;
	}
	botton[i].onmouseover = function(){
		botton[this.index].style.background = 'white' ;
	}
	botton[i].onmouseout = function(){
		botton[this.index].style.background = 'rgb(117,117,117)' ;
		index = this.index + 1 ; 
	}
	banner[i].onmouseover = function(){
		clearInterval(timeId);
		botton[this.index].style.background = 'white' ; 
		banhome[0].style.marginLeft = -(this.index*1266)+'px' ;

	}
	banner[i].onmouseout = function(){
		if( bottonkaiguan ) return;
		clearInterval(timeId);
		index = this.index ; 
		timeId = setInterval(fly,1000);
	}
}
zhizhen[0].onclick = function(){
	if(jiTuo == -1 ){
		jiTuo = 4 ;
	}
	console.log(jiTuo,numT);
	banhome[0].style.marginLeft = -(jiTuo*1266)+'px' ;
	botton[numT].style.background = 'rgb(117,117,117)';
	botton[jiTuo].style.background = 'white';
	numT = jiTuo;
	jiTuo--;  
}

zhizhen[1].onclick = function(){
	if(jiTuo == 5 ){
		jiTuo = 0 ;
	}
	banhome[0].style.marginLeft = -(jiTuo*1266)+'px' ;
	botton[numT].style.background = 'rgb(117,117,117)';
	botton[jiTuo].style.background = 'white';
	numT = jiTuo;
	jiTuo++; 
}
	
	



































};
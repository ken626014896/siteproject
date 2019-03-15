// JavaScript Document

$(document).ready(function(){
	//首页导航
	$(".menu li").hover(function(){
			$(this).addClass("hover");
			$(this).children("ul li").attr('class','');
		},function(){
			$(this).removeClass("hover");  
			$(this).children("ul li").attr('class','');
		}
	); 
	$(".menu li.no_sub").hover(function(){
			$(this).addClass("hover1");
		},function(){
			$(this).removeClass("hover1");  
		}
	); 
	
	try{
		var str = $(".list_current",window.document).text(); 
		var str1 = $.trim(str.split(">")[1]);
		$(".listmenu a").each(function(){
		if($.trim(str1)==null || $.trim(str1)==""){
			
			}
			else{
				if($(this).text().search($.trim(str1))>-1){
					$(this).addClass("jian");
					$(this).parent().parent().next().css("display","block");
					} 
				}
			})
		}catch(e){}
		
		$(".dropdown a").each(function(){
			if($.trim($(this).text())==$.trim($(".listClm").text())){
				$(this).css({"color":"#003674","font-weight":"bold"});
			}
		})
	
	//列表页栏目树
	$.easing.def = "easeOutBounce";
	$('li.button div').click(function(e){
		var dropDown = $(this).parent().next();
		$('li.button div').not(this).removeClass("jian");
		$('.dropdown').not(dropDown).slideUp('slow');
		$(this).toggleClass("jian");
		dropDown.slideToggle('slow');
		e.preventDefault();
	})
})

function setTabx(a,b){
 var tli=document.getElementById("menu"+a).getElementsByTagName("li");
 var mli=document.getElementById("main"+a).getElementsByTagName("ul");
 for(i=0;i<tli.length;i++){
  tli[i].className=i==b?"hover":"";
  mli[i].style.display=i==b?"block":"none";
 }
}

//-----------调整字体大小-----------//
var tgs = new Array( 'div','td','tr','font','p','span');   
var fontsizePx = 12;  // same as font-size in body   
/* *** Adjust Font Size *** */  
function adjustFontsize(tag, sizechange) {   
  if (!document.getElementById) return;   
  var d = document,cEl = null,i,j,cTags;   
  if( sizechange == 'smaller' && fontsizePx > 14 ) fontsizePx = fontsizePx - 1;   
  else if( sizechange == 'larger' ) fontsizePx = 18;   
  else if( sizechange == 'small' ) fontsizePx = 14;  // same as font-size in body   
  else if( sizechange == 'large') fontsizePx = 16;   
  if ( !( cEl = d.getElementById( tag ) ) ) cEl = d.getElementsByTagName( tag )[ 0 ];   
  //debug(cEl);   
  cEl.style.fontSize = fontsizePx + "px";   
  for ( i = 0 ; i < tgs.length ; i++ ) {   
    cTags = cEl.getElementsByTagName( tgs[ i ] );   
    t = cEl.all.tags(tgs[ i ]);   
    //alert(tgs[i] +":" + cTags.length);   
    for ( j = 0 ; j < cTags.length ; j++ ) cTags[ j ].style.fontSize = fontsizePx + "px";   
  }   
}   
/* *** end of Adjust Font Size *** */  
				function doZoom(size1,size2,size3,size4){
				document.getElementById('zoomtitle').style.fontSize=size1+'px';
				document.getElementById('zoomsubtitl').style.fontSize=size2+'px';
				document.getElementById('zoomtime').style.fontSize=size3+'px';
}




function keyDown(e)
{
	var e=(typeof event!="undefined")?window.event:e;   // IE : Firefox
	//var s=(document.getSelection)?document.getSelection():document.selection.createRange().text;
 	var s = getSelectedText();
	//alert(s);
	if(e.ctrlKey && e.keyCode==13){
		//alert(1);
		if (s!="") 
		{	
			if(s.length>200){
				alert("选择出错的内容片断长度不能超过200个字符，请重新选择！");
				return;
			}else{
					//editOpenDialog(s);
					var host = top.window.location.href;
					var url ='/sofprodglg/error/submit_error.jsp?error_txt='+encodeURI(encodeURI(s))+'&error_url='+encodeURI(encodeURI(host)) ;
					window.open(url,"","width=800,height=400");
			}
			//editOpenDialog(s);	
			
		}else{
			alert("请用鼠标选中出错的内容片段，然后同时按下“CTRL”与“ENTER”键 或 点击“内容纠错”按钮，谢谢！");
			return false;
		}
	}
}
function s(s){
	editOpenDialog(s);	
	
}
//function getSelectText(){ 
//	        //适用于IE 
//        if (document.selection && document.selection.createRange){ 
//		                return document.selection.createRange().text; 
//	        //适用于其他浏览器
//        } else if (window.getSelection){ 
//		                return window.getSelection(); 
//	    } 
//}

function getSelectedText() {

 if (window.getSelection) {
  return window.getSelection().toString();
  
 } else if (document.getSelection) {
  return document.getSelection();
  
 } else if (document.selection) {//IE
  return document.selection.createRange().text;
 }
}


function getJC() {
		var s = getSelectedText();
		if (s!="") 
		{	
			if(s.length>200){
				alert("选择出错的内容片断长度不能超过200个字符，请重新选择！");
				return;
			}else{
					//editOpenDialog(s);
					var host = top.window.location.href;
					var url ='/sofprodglg/error/submit_error.jsp?error_txt='+encodeURI(encodeURI(s))+'&error_url='+encodeURI(encodeURI(host)) ;
					window.open(url,"","width=800,height=400");
			}
			//editOpenDialog(s);	
			
		}else{
			

			alert("请用鼠标选中出错的内容片段，然后同时按下“CTRL”与“ENTER”键 或 点击“内容纠错”按钮，谢谢！");
			return false;
		}

}

document.onkeydown = keyDown;



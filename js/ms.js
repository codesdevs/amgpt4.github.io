var tim=1;
setInterval("tim++",10);
var autourl=new Array();
for(i=0;i<=50;i++){
autourl[i]=$('.speedlist li').eq(i).find('a').attr("href");
}
function auto(url){
	var str=tim;
	console.log(str);
	if(url==autourl[0]){
		$('#lineMs0').html(str+'ms')
	}
	if(url==autourl[1]){
		$('#lineMs1').html(str+'ms')
	}
	if(url==autourl[2]){
		$('#lineMs2').html(str+'ms')
	}
	if(url==autourl[3]){
		$('#lineMs3').html(str+'ms')
	}
	if(url==autourl[4]){
		$('#lineMs4').html(str+'ms')
	}
	if(url==autourl[5]){
		$('#lineMs5').html(str+'ms')
	}
	if(url==autourl[6]){
		$('#lineMs6').html(str+'ms')
	}
	if(url==autourl[7]){
		$('#lineMs7').html(str+'ms')
	}
	if(url==autourl[8]){
		$('#lineMs8').html(str+'ms')
	}
	if(url==autourl[9]){
		$('#lineMs9').html(str+'ms')
	}
	if(url==autourl[10]){
		$('#lineMs10').html(str+'ms')
	}
	if(url==autourl[11]){
		$('#lineMs11').html(str+'ms')
	}
	if(url==autourl[12]){
		$('#lineMs12').html(str+'ms')
	}
	if(url==autourl[13]){
		$('#lineMs13').html(str+'ms')
	}
    if(url==autourl[14]){
    $('#lineMs14').html(str+'ms')
    }
    if(url==autourl[15]){
    $('#lineMs15').html(str+'ms')
    }
    if(url==autourl[16]){
    $('#lineMs16').html(str+'ms')
    }
    if(url==autourl[17]){
    $('#lineMs17').html(str+'ms')
    }
    if(url==autourl[18]){
    $('#lineMs18').html(str+'ms')
    }
    if(url==autourl[19]){
    $('#lineMs19').html(str+'ms')
    }
    if(url==autourl[20]){
    $('#lineMs20').html(str+'ms')
    }
    if(url==autourl[21]){
    $('#lineMs21').html(str+'ms')
    }
    if(url==autourl[22]){
    $('#lineMs22').html(str+'ms')
    }
    if(url==autourl[23]){
    $('#lineMs23').html(str+'ms')
    }
    if(url==autourl[24]){
    $('#lineMs24').html(str+'ms')
    }
    if(url==autourl[25]){
    $('#lineMs25').html(str+'ms')
    }
    if(url==autourl[26]){
    $('#lineMs26').html(str+'ms')
    }
    if(url==autourl[27]){
    $('#lineMs27').html(str+'ms')
    }
    if(url==autourl[28]){
    $('#lineMs28').html(str+'ms')
    }
    if(url==autourl[29]){
    $('#lineMs29').html(str+'ms')
    }
    if(url==autourl[30]){
    $('#lineMs30').html(str+'ms')
    }
    if(url==autourl[31]){
    $('#lineMs31').html(str+'ms')
    }
    if(url==autourl[32]){
    $('#lineMs32').html(str+'ms')
    }
    if(url==autourl[33]){
    $('#lineMs33').html(str+'ms')
    }
    if(url==autourl[34]){
    $('#lineMs34').html(str+'ms')
    }
    if(url==autourl[35]){
    $('#lineMs35').html(str+'ms')
    }
    if(url==autourl[36]){
    $('#lineMs36').html(str+'ms')
    }
    if(url==autourl[37]){
    $('#lineMs37').html(str+'ms')
    }
    if(url==autourl[38]){
    $('#lineMs38').html(str+'ms')
    }
    if(url==autourl[39]){
    $('#lineMs39').html(str+'ms')
    }
    if(url==autourl[40]){
    $('#lineMs40').html(str+'ms')
    }
    if(url==autourl[41]){
    $('#lineMs41').html(str+'ms')
    }
    if(url==autourl[42]){
    $('#lineMs42').html(str+'ms')
    }
    if(url==autourl[43]){
    $('#lineMs43').html(str+'ms')
    }
    if(url==autourl[44]){
    $('#lineMs44').html(str+'ms')
    }
    if(url==autourl[45]){
    $('#lineMs45').html(str+'ms')
    }
    if(url==autourl[46]){
    $('#lineMs46').html(str+'ms')
    }
    if(url==autourl[47]){
    $('#lineMs47').html(str+'ms')
    }
    if(url==autourl[48]){
    $('#lineMs48').html(str+'ms')
    }
    if(url==autourl[49]){
    $('#lineMs49').html(str+'ms')
    }
    if(url==autourl[50]){
    $('#lineMs50').html(str+'ms')
    }
	
}
function run(){
	for(var i=0;i<autourl.length;i++){
		document.write("<img src="+autourl[i]+"/"+Math.random()+" width=1 height=1 onerror=auto('"+autourl[i]+"') style='display:none'>");
	}
}
run()
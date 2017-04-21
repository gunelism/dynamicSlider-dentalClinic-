var datas = [
// img, name, number, data
	['img/1.jpg', 'Scott Riley', "Our clinic's Chief Dental Officer, Dr. Scott Riley has been working in this field of medical specialization since 2002."],
	['img/2.jpg', 'Leslie Gross', "Our clinic's Chief Dental Officer, Dr. Scott Riley has been working in this field of medical specialization since 2002."],
	['img/3.jpg', 'Dana Sims', "Our clinic's Chief Dental Officer, Dr. Scott Riley has been working in this field of medical specialization since 2002."],
	
	['img/1.jpg', 'Scott Riley', "Our clinic's Chief Dental Officer, Dr. Scott Riley has been working in this field of medical specialization since 2002."],
	['img/2.jpg', 'Leslie Gross', "Our clinic's Chief Dental Officer, Dr. Scott Riley has been working in this field of medical specialization since 2002."],
	['img/3.jpg', 'Dana Sims', "Our clinic's Chief Dental Officer, Dr. Scott Riley has been working in this field of medical specialization since 2002."],
	
	['img/1.jpg', 'Scott Riley', "Our clinic's Chief Dental Officer, Dr. Scott Riley has been working in this field of medical specialization since 2002."],
	['img/2.jpg', 'Leslie Gross', "Our clinic's Chief Dental Officer, Dr. Scott Riley has been working in this field of medical specialization since 2002."],
	['img/3.jpg', 'Dana Sims', "Our clinic's Chief Dental Officer, Dr. Scott Riley has been working in this field of medical specialization since 2002."]	

];
var gorunenndiv;
var kecmek;

function createDivs(arg, gorunen, btnsay) {
		$('.pics').empty();
gorunenndiv = gorunen;
	// team divlerinin yaradilmasi
	for (var i = 0; i < arg.length; i++) {
		$('<div/>',{
			class: 'divs'
		})
		.prepend('<img src="'+ arg[i][0]+'">',
		'<p>'+arg[i][1]+i+'</p>',
		'<p>'+arg[i][2]+'</p>')
		.appendTo('.pics');
	}	

	//enlerin teyin edilmesi
	$('.pics').width(arg.length*$('.divs').width());
	$('.centering').width(gorunen*$('.divs').width());

	//kecidin pixelin teyin olunmasi
	 kecmek = $('.divs').width()*gorunenndiv;

	 btnsCreate(btnsay)
}



function btnsCreate(arg) {
	$('ul').empty();
	for (var i = 0; i < arg; i++) {
		$('<li>'+(i+1)+'</li>').appendTo('ul');
	}
	
	$('li').click(function(event) {
		// console.log(event)
		console.log($(this).index());
		$('.pics').css ({
            'margin-left' : '-'+($(this).index()*kecmek)+'px'
          });
	});
}


$( document ).ready(function() {
	createDivs(datas, 3, 3);
	if ($( window ).width()<990) {
		createDivs(datas, 1, 9);
	}
});

$( window ).resize(function() {
 	if($( window ).width()<990){
 		createDivs(datas, 1, 9);
 	}else{
 		createDivs(datas, 3, 3);
 	}
});

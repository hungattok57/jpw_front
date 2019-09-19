document.addEventListener('DOMContentLoaded',function(){
	var nut = document.querySelectorAll('.chuyenslide ul li');
	var slides = document.querySelectorAll('.cacslide ul li');


	// autoSlide();

	var thoigian = setInterval(function(){
			// buoc 1 xem slide nao dang hien thi

			autoSlide();
		},5000);


	for( var i = 0; i < nut.length; i++){
		nut[i].addEventListener('click',function(){
			// huy tuự chuyển động

			clearInterval(thoigian);



			for( var i = 0; i < nut.length; i++){
				nut[i].classList.remove('kichhoat');
			}
			
			this.classList.add('kichhoat');

			// xu ly tinh vi tri nut slide

			console.log(this.previousElementSibling);
			var nutactive = this;
			// var vt = 0
			for (var vt = 0;nutactive =  nutactive.previousElementSibling; vt++) {
				// het vong lap nay thi bien vt = stt
				console.log('bien vt =' + vt);
				console.log('phan tu nut kick hoat la ' + nutactive);
			}
			console.log('vi tri nut kick hoat la =' + vt);


			// b1: cho slide an di = remove opacity o class active

			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
				slides[vt].classList.add('active');
			}
		})
	} // hết sự kiện cho nut


	// viet ham tu chuyen slide

	function autoSlide(){
		var vitrislide = 0;
		var slidehientai = document.querySelector('.cacslide ul li.active')
		for (var vitrislide = 0; slidehientai = slidehientai.previousElementSibling; vitrislide++) {}

			// neu chua den slide cuoi cung tuc laf vitrislide <= slides.length -> hd binhf thuowngf
		if(vitrislide < ( slides.length -1 )){
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
				nut[i].classList.remove('kichhoat');
			}	
				// cho pt tieps theo cua slide hien ra

				slides[vitrislide].nextElementSibling.classList.add('active');
				nut[vitrislide].nextElementSibling.classList.add('kichhoat');

			} else{

				for (var i = 0; i < slides.length; i++) {
					slides[i].classList.remove('active');
					nut[i].classList.remove('kichhoat');
				}	
				// cho pt tieps theo cua slide hien ra

				slides[0].classList.add('active');
				nut[0].classList.add('kichhoat');

			}
		}




	},false)
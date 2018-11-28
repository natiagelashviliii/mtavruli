  var myScroll = $("html").easeScroll({
  frameRate: 60,
  animationTime: 1000,
  stepSize: 120,
  pulseAlgorithm: 1,
  pulseScale: 8,
  pulseNormalize: 1,
  accelerationDelta: 20,
  accelerationMax: 1,
  keyboardSupport: true,
  arrowScroll: 10,
  touchpadSupport: true,
  fixedBackground: true
});

    if ($(window).width() <= 1370) {
       var durationNm = "1750%";
       var lastPercent = "-59%";
    } else {
        var durationNm = "1700%";
       var lastPercent = "-41%";
    }

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "1700%"
        })
        .setPin("#pinContainer")
        // .addIndicators()
        .addTo(controller);

    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#triggers #t1",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(TweenMax.fromTo("section.panel.section-1", 1, {y: "0%"}, {y: "-101%", ease: Linear.easeNone}))
    // .addIndicators()
    .addTo(controller);
        
    var scene2  = new ScrollMagic.Scene({
        triggerElement: "#triggers #t2",
        triggerHook: "onLeave",
        duration: "450%"
    })
    .setTween(new TimelineMax()
            	.fromTo("section.panel.section-2",    1, {y:  "0"}, {y: "-101%", ease: Linear.easeNone})
             )
    // .addIndicators()
    .addTo(controller);

    scene1.on('update', function(event) {
        if (event.scrollPos > 10 ) {
            $('.progress.blue').fadeIn('slow', function() {
                
            });
        } else {
            $('.progress.blue').fadeOut('slow', function() {
                
            });
        }
    });


    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#triggers #t3",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(new TimelineMax()
              .fromTo("section.panel.section-3",    1, {y:  "0"}, {y: "-100%", ease: Linear.easeNone}) 
             )
    // .addIndicators()
    .addTo(controller);


    var scene4  = new ScrollMagic.Scene({
        triggerElement: "#triggers #t4",
        triggerHook: "onLeave",
        duration: "450%"
    })
    .setTween(new TimelineMax()
                .fromTo("section.panel.section-4",    1, {y:  "0"}, {y: "-101%", ease: Linear.easeNone})
             )
    // .addIndicators()
    .addTo(controller);


    var scene5  = new ScrollMagic.Scene({
        triggerElement: "#triggers #t5",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(new TimelineMax()
                .fromTo("section.panel.section-5",    1, {y:  "0"}, {y: "-101%", ease: Linear.easeNone})
             )
    // .addIndicators()
    .addTo(controller);


    var scene6  = new ScrollMagic.Scene({
        triggerElement: "#triggers #t6",
        triggerHook: "onLeave",
        duration: "180%"
    })
    .setTween(new TimelineMax()
                .fromTo("section.panel.section-6",    1, {y:  "0"}, {y: "-101%", ease: Linear.easeNone})
             )
    // .addIndicators()
    .addTo(controller);



    var scene7  = new ScrollMagic.Scene({
        triggerElement: "#triggers #t7",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(new TimelineMax()
                .fromTo("section.panel.section-7",    1, {y:  "0"}, {y: "-101%", ease: Linear.easeNone})
             )
    // .addIndicators()
    .addTo(controller);


    var scene8  = new ScrollMagic.Scene({
        triggerElement: "#triggers #t8",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setTween(new TimelineMax()
                .fromTo("section.panel.section-8",    1, {y:  "0"}, {y: lastPercent, ease: Linear.easeNone})
             )
    // .addIndicators()
    .addTo(controller);



var controller1 = new ScrollMagic.Controller();

var fade1 = new ScrollMagic.Scene({triggerElement: '#fade1', duration: '100%', triggerHook: "onEnter"})
	.setTween(TweenMax.to('.fadeout-section1', 1, { opacity: 0 , ease:Power1.easeInOut  }))
	// .addIndicators()
	.addTo(controller1); 

	fade1.on("leave", function (event) {
        $('.fadeout-section1').css('display', 'none');
    });
    fade1.on("enter", function (event) {
	    $('.fadeout-section1').css('display', 'block');
	});

var fade2 = new ScrollMagic.Scene({triggerElement: '#fade2', duration: '250%', triggerHook: "onEnter"})
	.setTween(TweenMax.to('.fadeout-section2', 1, { opacity: 0 , ease:Power1.easeInOut  }))
	// .addIndicators()
	.addTo(controller1); 

	fade2.on("leave", function (event) {
	    $('.fadeout-section2').css('display', 'none');
	});
	fade2.on("enter", function (event) {
	    $('.fadeout-section2').css('display', 'block');
	});


var fade3 = new ScrollMagic.Scene({triggerElement: '#fade3', duration: '90%', triggerHook: "onEnter"})
	.setTween(TweenMax.to('.fadeout-section-3', 1, { opacity: 0 , ease:Power1.easeInOut  }))
	// .addIndicators()
	.addTo(controller1); 


	fade3.on("leave", function (event) {
	    $('.fadeout-section-3').css('display', 'none');
	});
	fade3.on("enter", function (event) {
	    $('.fadeout-section-3').css('display', 'block');
	});


var fade4 = new ScrollMagic.Scene({triggerElement: '#fade4', duration: '90%', triggerHook: "onEnter"})
    .setTween(TweenMax.to('.fadeout-section-4', 1, { opacity: 0 , ease:Power1.easeInOut  }))
    // .addIndicators()
    .addTo(controller1); 


    fade4.on("leave", function (event) {
        $('.fadeout-section-4').css('display', 'none');
    });
    fade4.on("enter", function (event) {
        $('.fadeout-section-4').css('display', 'block');
    });


var fade5 = new ScrollMagic.Scene({triggerElement: '#fade5', duration: '90%', triggerHook: "onEnter"})
    .setTween(TweenMax.to('.fadeout-section-5', 1, { opacity: 0 , ease:Power1.easeInOut  }))
    // .addIndicators()
    .addTo(controller1); 


    fade5.on("leave", function (event) {
        $('.fadeout-section-5').css('display', 'none');
    });
    fade5.on("enter", function (event) {
        $('.fadeout-section-5').css('display', 'block');
    });

var fade6 = new ScrollMagic.Scene({triggerElement: '#fade6', duration: '90%', triggerHook: "onEnter"})
    .setTween(TweenMax.to('.fadeout-section-6', 1, { opacity: 0 , ease:Power1.easeInOut  }))
    // .addIndicators()
    .addTo(controller1); 


    fade6.on("leave", function (event) {
        $('.fadeout-section-6').css('display', 'none');
    });
    fade6.on("enter", function (event) {
        $('.fadeout-section-6').css('display', 'block');
    });


var fade7 = new ScrollMagic.Scene({triggerElement: '#fade7', duration: '90%', triggerHook: "onEnter"})
    .setTween(TweenMax.to('.fadeout-section-7', 1, { opacity: 0 , ease:Power1.easeInOut  }))
    // .addIndicators()
    .addTo(controller1); 


    fade7.on("leave", function (event) {
        $('.fadeout-section-7').css('display', 'none');
    });
    fade7.on("enter", function (event) {
        $('.fadeout-section-7').css('display', 'block');
    });


// var controller3 = new ScrollMagic.Controller();

// var fade1 = new ScrollMagic.Scene({triggerElement: '#fade1', duration: '100%', triggerHook: "onEnter"})
//     .setTween(TweenMax.to('.fadeout-section1', 1, { opacity: 0 , ease:Power1.easeInOut  }))
//     .addIndicators()
//     .addTo(controller1); 

//     fade1.on("leave", function (event) {
//         $('.fadeout-section1').css('display', 'none');
//     });
//     fade1.on("enter", function (event) {
//         $('.fadeout-section1').css('display', 'block');
//     });



$('nav a').on('click',function() {
    controller.scrollTo($(this).attr('href')); 
});






// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function (newpos) {
	TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
});

//  bind scroll to anchor links
$(document).on("click", "a.n[href^='#']", function (e) {
	var id = $(this).attr("href");
	if ($(id).length > 0) {
		e.preventDefault();

		// trigger scroll
		controller.scrollTo(id);

			// if supported by the browser we can even update the URL.
		if (window.history && window.history.pushState) {
			history.pushState("", document.title, id);
		}
	}
});






// reveal 

jQuery(document).ready(function($) {



    //section-2-1
    watcher_1 = scrollMonitor.create(document.getElementById('rev1', { bottom: 150 }));			
    rev1 = new RevealFx(document.querySelector('#history-reveal-1 span'), {
        revealSettings : {
            bgcolor: '#ff5252',
            delay: 1000,
            duration: 400,
            easing: 'easeOutQuart',
	        onCover: function(contentEl, revealerEl) {
	 	        contentEl.style.opacity = 1;
	        }
        }
    });
    rev2 = new RevealFx(document.querySelector('#history-reveal-2'), {
        revealSettings: {
            bgcolor: '#ff5252',
            easing: 'easeOutQuart',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
	watcher_1.enterViewport(function() {
         rev1.reveal();
         rev2.reveal();
         $('.section-2 .block-1 .img-block .block-before').addClass('image-before');
         $('.section-2 .block-1 .img-block .fade-image-1').addClass('image-anim');
         $('.section-2 .block-1 .image-cont').addClass('image-anim-fade-in');
         $('.section-2 .block-1 .image-cont img').addClass('image-scale');
	 	watcher_1.destroy();
	});


    // //section-2-2
    watcher_2 = scrollMonitor.create(document.getElementById('rev2', { bottom: 150 }));
    rev4 = new RevealFx(document.querySelector('#history-reveal-3 span'), {
        revealSettings: {
            bgcolor: '#ff5252',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    rev5 = new RevealFx(document.querySelector('#history-reveal-4'), {
        revealSettings: {
            bgcolor: '#ff5252',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    watcher_2.enterViewport(function () {
        rev4.reveal();
        rev5.reveal();
        // rev6.reveal();
        $('.section-2 .block-2 .img-block .block-before').addClass('image-before');
        $('.section-2 .block-2 .img-block .fade-b').addClass('image-anim');
        $('.section-2 .block-2 .image-cont').addClass('image-anim-fade-in');
        $('.section-2 .block-2 .image-cont img').addClass('image-scale');
        watcher_2.destroy();
    });


    //section 3 (full screen)
    watcher_3 = scrollMonitor.create(document.getElementById('rev3', { bottom: 150 }));
    rev6 = new RevealFx(document.querySelector('#history-reveal-5 span'), {
        revealSettings: {
            bgcolor: '#ff5252',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    rev7 = new RevealFx(document.querySelector('#history-reveal-6'), {
        revealSettings: {
            bgcolor: '#ff5252',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    watcher_3.enterViewport(function () {
        rev6.reveal();
        rev7.reveal();
        // $('.section-2 .block-2 .img-block .fade-b').addClass('image-anim-fade');
        // $('.section-2 .block-2 .image-cont').addClass('image-anim-fade-in');
        watcher_3.destroy();
    });



    //section 4-1 (problems)
    watcher_4 = scrollMonitor.create(document.getElementById('rev4', { bottom: 150 }));
    rev8 = new RevealFx(document.querySelector('#problem-reveal-1 span'), {
        revealSettings: {
            bgcolor: '#ff5252',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    rev9 = new RevealFx(document.querySelector('#problem-reveal-2'), {
        revealSettings: {
            bgcolor: '#ff5252',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    watcher_4.enterViewport(function () {
        rev8.reveal();
        rev9.reveal();
        $('.section-4 .block-1 .img-block .block-before').addClass('image-before');
        $('.section-4 .block-1 .img-block .fade-b').addClass('image-anim');
        $('.section-4 .block-1 .image-cont').addClass('image-anim-fade-in');
        $('.section-4 .block-1 .image-cont img').addClass('image-scale');
        watcher_4.destroy();
    });


    //section 4-2 (unicode)
    watcher_4_2 = scrollMonitor.create(document.getElementById('rev5', { bottom: 150 }));
    rev4_2 = new RevealFx(document.querySelector('#unicode-reveal-2'), {
        revealSettings: {
            bgcolor: '#ff5252',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    watcher_4_2.enterViewport(function () {
        rev4_2.reveal();
        watcher_4_2.destroy();
    });



    //section 5 (table)
    watcher_5 = scrollMonitor.create(document.getElementById('rev6', { bottom: 150 }));
    rev10 = new RevealFx(document.querySelector('#table-reveal-1 span'), {
        revealSettings: {
            bgcolor: '#ff5252',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });

    rev11 = new RevealFx(document.querySelector('#table-reveal-2'), {
        revealSettings: {
            bgcolor: '#ff5252',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    watcher_5.enterViewport(function () {
        rev10.reveal();
        rev11.reveal();
        watcher_5.destroy();
    });



    //section 6_1 ()
    watcher_6_1 = scrollMonitor.create(document.getElementById('rev7', { bottom: 150 }));
    rev12 = new RevealFx(document.querySelector('#reflect-reveal-1 span'), {
        revealSettings: {
            bgcolor: '#ff5252',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    rev13 = new RevealFx(document.querySelector('#reflect-reveal-2'), {
        revealSettings: {
            bgcolor: '#ff5252',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    watcher_6_1.enterViewport(function () {
        rev12.reveal();
        rev13.reveal();
        $('.section-6 .block-2 .img-block .block-before').addClass('image-before');
        $('.section-6 .block-2 .img-block .fade-b').addClass('image-anim');
        $('.section-6 .block-2 .image-cont').addClass('image-anim-fade-in');
        $('.section-6 .block-2 .image-cont img').addClass('image-scale');
        watcher_6_1.destroy();
    });


    //section 6_2 (questions)
    watcher_6_2 = scrollMonitor.create(document.getElementById('rev8', { bottom: 150 }));
    rev14 = new RevealFx(document.querySelector('#future-reveal-3 span'), {
        revealSettings: {
            bgcolor: '#ff5252',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    rev15 = new RevealFx(document.querySelector('#future-reveal-4'), {
        revealSettings: {
            bgcolor: '#ff5252',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    watcher_6_2.enterViewport(function () {
        rev14.reveal();
        rev15.reveal();
        $('.mark-container-1, .mark-container-2, .mark-container-3').addClass('fade-paralax-in');
        watcher_6_2.destroy();
    });




    //section 7 (future full)
    watcher_7 = scrollMonitor.create(document.getElementById('rev9', { bottom: 150 }));
    rev16 = new RevealFx(document.querySelector('#future-reveal-5 span'), {
        revealSettings: {
            bgcolor: '#ff5252',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    rev17 = new RevealFx(document.querySelector('#future-reveal-6'), {
        revealSettings: {
            bgcolor: '#ff5252',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    watcher_7.enterViewport(function () {
        rev16.reveal();
        rev17.reveal();
        watcher_7.destroy();
    });




    //section 8_1
    watcher_8_1 = scrollMonitor.create(document.getElementById('rev10', { bottom: 150 }));
    rev18 = new RevealFx(document.querySelector('#information-reveal-1 span'), {
        revealSettings: {
            bgcolor: '#ff5252',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    rev19 = new RevealFx(document.querySelector('#information-reveal-2'), {
        revealSettings: {
            bgcolor: '#ff5252',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    watcher_8_1.enterViewport(function () {
        rev18.reveal();
        rev19.reveal();
        $('.tags-container-1, .tags-container-2').addClass('fade-paralax-in');
        watcher_8_1.destroy();
    });



    //section 8_2
    watcher_8_2 = scrollMonitor.create(document.getElementById('rev11', { bottom: 150 }));         
    rev20 = new RevealFx(document.querySelector('#information-reveal-3 span'), {
        revealSettings : {
            bgcolor: '#ff5252',
            delay: 1000,
            duration: 400,
            easing: 'easeOutQuart',
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    rev21 = new RevealFx(document.querySelector('#information-reveal-4'), {
        revealSettings: {
            bgcolor: '#ff5252',
            easing: 'easeOutQuart',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    watcher_8_2.enterViewport(function() {
         rev20.reveal();
         rev21.reveal();
         $('.section-8 .block-1 .img-block .block-before').addClass('image-before');
         $('.section-8 .block-1 .img-block .fade-image-1').addClass('image-anim');
         $('.section-8 .block-1 .image-cont').addClass('image-anim-fade-in');
         $('.section-8 .block-1 .image-cont img').addClass('image-scale');
        watcher_8_2.destroy();
    });



});








$(document).mousemove(function(e) {
    $('#cursor-shadow').css({left: e.pageX, top:e.pageY});
});


$( window ).resize(function() {
  location.reload();
});







var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        if ((this.txt).length == 2) {
            var delta = 500 - Math.random() * 100;
        }else {
            var delta = 200 - Math.random() * 100;
        }

        if (this.isDeleting) { delta /= 2; }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 8px solid #fff}";
        document.body.appendChild(css);
    };





    $('#myTabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })








    var ParlScene1 = document.getElementById('mark-1');
    var parallaxInstance = new Parallax(ParlScene1, {});

    var ParlScene2 = document.getElementById('mark-2');
    var parallaxInstance = new Parallax(ParlScene2, {});

    var ParlScene3 = document.getElementById('mark-3');
    var parallaxInstance = new Parallax(ParlScene3, {});



    var ParlScene4 = document.getElementById('layer-photo');
    var parallaxInstance = new Parallax(ParlScene4, {});



    var ParlScene5 = document.getElementById('tags-1');
    var parallaxInstance = new Parallax(ParlScene5, {});

    var ParlScene6 = document.getElementById('tags-2');
    var parallaxInstance = new Parallax(ParlScene6, {});





    var alpha = {
        '0': 'ა',
        '3': 'ბ',
        '6': 'გ',
        '9': 'დ',
        '12': 'ე',
        '15': 'ვ',
        '18': 'ზ',
        '21': 'თ',
        '24': 'ი',
        '27': 'კ',
        '30': 'ლ',
        '33': 'მ',
        '36': 'ნ',
        '39': 'ო',
        '41': 'პ',
        '44': 'ჟ',
        '47': 'რ',
        '50': 'ს',
        '53': 'ტ',
        '56': 'უ',
        '59': 'ფ',
        '61': 'ქ',
        '64': 'ღ',
        '67': 'ყ',
        '80': 'შ',
        '83': 'ჩ',
        '86': 'ძ',
        '89': 'წ',
        '91': 'ჭ',
        '93': 'ხ',
        '95': 'ჯ',
        '100' : 'ჰ'

    }


    rev0 = new RevealFx(document.querySelector('#rev0_1 span'), {
        revealSettings : {
            bgcolor: '#fff',
            delay: 1000,
            duration: 400,
            easing: 'easeOutQuart',
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    rev0_1 = new RevealFx(document.querySelector('#rev0_2'), {
        revealSettings: {
            bgcolor: '#fff',
            easing: 'easeOutQuart',
            delay: 1000,
            duration: 400,
            onCover: function (contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });





    function move() {
    var elem = document.getElementById("myBar"); 
        var width = 1;
        var id = setInterval(frame, 40);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                setTimeout(function() {
                    $(".loading-page").fadeOut(1500, function() { 
                        $(this).remove();
                        rev0.reveal();
                        rev0_1.reveal();
                        $('.scroll-down').addClass('scroll-down-fade');
                    });
                }, 1000);
            } else {
                width++; 
                    elem.style.width = width + '%'; 
                if (alpha[width]) {
                    $('.bar-txt').text(alpha[width]);
                }
            }
        }
    }

    move();


    var docHeight = $(document).height();
    $(document).on('scroll', function(event) {
        scrollProgress();
    });


    function scrollProgress() {
      
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      persent = scrolled.toFixed(0);
      if (persent >= 50) {
        $('.progress .progress-right .progress-bar').css({ transform : 'rotate(180deg)' });
      }
      $('.progress-value').text(persent + '%');
      if (persent < 50) {
        var anim = persent * 3.6;
        $('.progress .progress-right .progress-bar').css({ transform : 'rotate(' + (anim) +'deg)' })
      }
      if (persent >= 50) {
        var anim = (persent-50) * 3.6;
        $('.progress .progress-left .progress-bar').css({ transform : 'rotate(' + (anim) +'deg)' })
      }
    }


$('.resources-btn').on('click',  function(event) {
    $('.resources').addClass('open');
    $('.resources-btn').css('display', 'none');
});

$('.cancel').on('click', function(event) {
    $('.resources').removeClass('open');
   $('.resources-btn').css('display', 'block'); 
});
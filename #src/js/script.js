$(document).ready(function () {
    var brands = new Map([
        ["EyeZen" , {
            logo : "img/Essilor_LogoBrand_Eyezen_White.png",
            title : "Улучшенные однофокальные линзы",
            icons : [
                '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 19.2.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve"><style type="text/css">	.st0{clip-path:url(#SVGID_2_);fill:#0082CA;}	.st1{fill:#0082CA;}	.st2{clip-path:url(#SVGID_4_);fill:#0082CA;}	.st3{clip-path:url(#SVGID_6_);fill:#0082CA;}</style><g>	<path class="st1" d="M20,22.9c-1.8,0-3.2-1.4-3.2-3.2c0-1.8,1.4-3.2,3.2-3.2c1.8,0,3.2,1.4,3.2,3.2C23.2,21.4,21.7,22.9,20,22.9z		 M20,17c-1.5,0-2.7,1.2-2.7,2.7s1.2,2.7,2.7,2.7c1.5,0,2.7-1.2,2.7-2.7S21.4,17,20,17z"/>	<path class="st1" d="M20.9,19.6c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9		C20.4,18.7,20.9,19.1,20.9,19.6"/>	<g>		<path class="st1" d="M32.1,27.4H7.9V11.3h24.2V27.4z M8.5,26.8h23.1v-15H8.5V26.8z"/>		<path class="st1" d="M29.5,25.1h-19V13.9h19V25.1z M11,24.6H29V14.5H11V24.6z"/>		<path class="st1" d="M32.6,29.6H7.4c-1.3,0-2.4-1.1-2.4-2.4v-0.4H35v0.4C35,28.6,33.9,29.6,32.6,29.6z M5.6,27.4			c0.1,0.9,0.8,1.7,1.8,1.7h25.2c0.9,0,1.7-0.7,1.8-1.7H5.6z"/>		<path class="st1" d="M20,23.2c-4,0-6.4-3.3-6.5-3.4l-0.1-0.2l0.1-0.2C13.5,19.3,16,16,20,16c4,0,6.4,3.3,6.5,3.4l0.1,0.2l-0.1,0.2			C26.4,19.9,24,23.2,20,23.2z M14,19.6c0.5,0.7,2.7,3,5.9,3c3.2,0,5.4-2.4,5.9-3c-0.5-0.7-2.7-3-5.9-3C16.7,16.6,14.6,19,14,19.6z"			/>		<path class="st1" d="M21.1,13.5h-2.5c-0.2,0-0.3-0.1-0.3-0.3s0.1-0.3,0.3-0.3h2.5c0.2,0,0.3,0.1,0.3,0.3S21.3,13.5,21.1,13.5z"/>	</g></g></svg>',
                '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 19.2.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve"><style type="text/css">	.st0{clip-path:url(#SVGID_2_);fill:#0082CA;}	.st1{fill:#0082CA;}	.st2{clip-path:url(#SVGID_4_);fill:#0082CA;}	.st3{clip-path:url(#SVGID_6_);fill:#0082CA;}</style><g>	<g>		<defs>			<rect id="SVGID_1_" x="9" y="7.2" width="12.3" height="24.4"/>		</defs>		<clipPath id="SVGID_2_">			<use xlink:href="#SVGID_1_"  style="overflow:visible;"/>		</clipPath>		<path class="st0" d="M21.3,25.8c-3.2,0-5.9-2.6-5.9-5.9S18,14,21.3,14s5.9,2.6,5.9,5.9S24.5,25.8,21.3,25.8z M21.3,14.8			c-2.8,0-5.1,2.3-5.1,5.1c0,2.8,2.3,5.1,5.1,5.1s5.1-2.3,5.1-5.1C26.4,17.1,24.1,14.8,21.3,14.8z"/>	</g>	<path class="st1" d="M13.5,20h-2.6c-0.2,0-0.4-0.2-0.4-0.4s0.2-0.4,0.4-0.4h2.6c0.2,0,0.4,0.2,0.4,0.4S13.7,20,13.5,20z"/>	<path class="st1" d="M14.5,16.1c-0.1,0-0.1,0-0.2,0l-2.3-1.3c-0.2-0.1-0.2-0.3-0.1-0.5c0.1-0.2,0.3-0.2,0.5-0.1l2.3,1.3		c0.2,0.1,0.2,0.3,0.1,0.5C14.8,16,14.7,16.1,14.5,16.1z"/>	<path class="st1" d="M17.4,13.2c-0.1,0-0.3-0.1-0.3-0.2l-1.4-2.2c-0.1-0.2-0.1-0.4,0.1-0.5c0.2-0.1,0.4-0.1,0.5,0.1l1.4,2.2		c0.1,0.2,0.1,0.4-0.1,0.5C17.5,13.2,17.4,13.2,17.4,13.2z"/>	<g>		<defs>			<rect id="SVGID_3_" x="9" y="7.2" width="12.3" height="24.4"/>		</defs>		<clipPath id="SVGID_4_">			<use xlink:href="#SVGID_3_"  style="overflow:visible;"/>		</clipPath>		<path class="st2" d="M21.3,12.2c-0.2,0-0.4-0.2-0.4-0.4l0-2.6c0-0.2,0.2-0.4,0.4-0.4c0,0,0,0,0,0c0.2,0,0.4,0.2,0.4,0.4l0,2.6			C21.7,12,21.5,12.2,21.3,12.2C21.3,12.2,21.3,12.2,21.3,12.2z"/>	</g>	<path class="st1" d="M12.3,25.1c-0.1,0-0.3-0.1-0.3-0.2c-0.1-0.2,0-0.4,0.1-0.5l2.3-1.3c0.2-0.1,0.4,0,0.5,0.1		c0.1,0.2,0,0.4-0.1,0.5l-2.3,1.3C12.4,25.1,12.3,25.1,12.3,25.1z"/>	<path class="st1" d="M16,28.9c-0.1,0-0.1,0-0.2-0.1c-0.2-0.1-0.2-0.3-0.1-0.5l1.4-2.2c0.1-0.2,0.3-0.2,0.5-0.1		c0.2,0.1,0.2,0.3,0.1,0.5l-1.4,2.2C16.3,28.8,16.1,28.9,16,28.9z"/>	<g>		<path class="st1" d="M21.3,30.3C21.3,30.3,21.3,30.3,21.3,30.3c-0.2,0-0.4-0.2-0.4-0.4l0-2.6c0-0.2,0.2-0.4,0.4-0.4c0,0,0,0,0,0			c0.2,0,0.4,0.2,0.4,0.4l0,2.6C21.6,30.1,21.5,30.3,21.3,30.3z"/>	</g>	<g>		<defs>			<rect id="SVGID_5_" x="21.3" y="6.4" width="8.2" height="26.1"/>		</defs>		<clipPath id="SVGID_6_">			<use xlink:href="#SVGID_5_"  style="overflow:visible;"/>		</clipPath>		<path class="st3" d="M27.5,30.6h-9.7c-0.6,0-1.2-0.5-1.2-1.2V10.3c0-0.6,0.5-1.2,1.2-1.2h9.7c0.6,0,1.2,0.5,1.2,1.2v19.2			C28.7,30.1,28.2,30.6,27.5,30.6z M17.8,9.7c-0.3,0-0.6,0.2-0.6,0.6v19.2c0,0.3,0.2,0.6,0.6,0.6h9.7c0.3,0,0.6-0.2,0.6-0.6V10.3			c0-0.3-0.2-0.6-0.6-0.6H17.8z"/>		<path class="st3" d="M26.7,27h-8.3c-0.3,0-0.5-0.2-0.5-0.5V12.2c0-0.3,0.2-0.5,0.5-0.5h8.3c0.3,0,0.5,0.2,0.5,0.5v14.2			C27.2,26.7,27,27,26.7,27z M18.5,26.4h8.2V12.3h-8.2V26.4z"/>		<path class="st3" d="M23.3,10.7h-1.7c-0.1,0-0.2-0.1-0.2-0.2s0.1-0.2,0.2-0.2h1.7c0.1,0,0.2,0.1,0.2,0.2S23.4,10.7,23.3,10.7z"/>		<path class="st3" d="M23.6,28.9c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9C23.2,28,23.6,28.4,23.6,28.9			"/>	</g>	<g>		<path class="st1" d="M21.3,35.4c-0.2,0-0.4-0.2-0.4-0.4V5.9c0-0.2,0.2-0.4,0.4-0.4s0.4,0.2,0.4,0.4V35			C21.6,35.3,21.5,35.4,21.3,35.4z"/>	</g></g></svg>',
                '<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 19.2.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve"><style type="text/css">	.st0{clip-path:url(#SVGID_2_);fill:#0082CA;}	.st1{fill:#0082CA;}	.st2{clip-path:url(#SVGID_4_);fill:#0082CA;}	.st3{clip-path:url(#SVGID_6_);fill:#0082CA;}</style><g>	<g>		<defs>			<rect id="SVGID_1_" x="9" y="7.2" width="12.3" height="24.4"/>		</defs>		<clipPath id="SVGID_2_">			<use xlink:href="#SVGID_1_"  style="overflow:visible;"/>		</clipPath>		<path class="st0" d="M21.3,25.8c-3.2,0-5.9-2.6-5.9-5.9S18,14,21.3,14s5.9,2.6,5.9,5.9S24.5,25.8,21.3,25.8z M21.3,14.8			c-2.8,0-5.1,2.3-5.1,5.1c0,2.8,2.3,5.1,5.1,5.1s5.1-2.3,5.1-5.1C26.4,17.1,24.1,14.8,21.3,14.8z"/>	</g>	<path class="st1" d="M13.5,20h-2.6c-0.2,0-0.4-0.2-0.4-0.4s0.2-0.4,0.4-0.4h2.6c0.2,0,0.4,0.2,0.4,0.4S13.7,20,13.5,20z"/>	<path class="st1" d="M14.5,16.1c-0.1,0-0.1,0-0.2,0l-2.3-1.3c-0.2-0.1-0.2-0.3-0.1-0.5c0.1-0.2,0.3-0.2,0.5-0.1l2.3,1.3		c0.2,0.1,0.2,0.3,0.1,0.5C14.8,16,14.7,16.1,14.5,16.1z"/>	<path class="st1" d="M17.4,13.2c-0.1,0-0.3-0.1-0.3-0.2l-1.4-2.2c-0.1-0.2-0.1-0.4,0.1-0.5c0.2-0.1,0.4-0.1,0.5,0.1l1.4,2.2		c0.1,0.2,0.1,0.4-0.1,0.5C17.5,13.2,17.4,13.2,17.4,13.2z"/>	<g>		<defs>			<rect id="SVGID_3_" x="9" y="7.2" width="12.3" height="24.4"/>		</defs>		<clipPath id="SVGID_4_">			<use xlink:href="#SVGID_3_"  style="overflow:visible;"/>		</clipPath>		<path class="st2" d="M21.3,12.2c-0.2,0-0.4-0.2-0.4-0.4l0-2.6c0-0.2,0.2-0.4,0.4-0.4c0,0,0,0,0,0c0.2,0,0.4,0.2,0.4,0.4l0,2.6			C21.7,12,21.5,12.2,21.3,12.2C21.3,12.2,21.3,12.2,21.3,12.2z"/>	</g>	<path class="st1" d="M12.3,25.1c-0.1,0-0.3-0.1-0.3-0.2c-0.1-0.2,0-0.4,0.1-0.5l2.3-1.3c0.2-0.1,0.4,0,0.5,0.1		c0.1,0.2,0,0.4-0.1,0.5l-2.3,1.3C12.4,25.1,12.3,25.1,12.3,25.1z"/>	<path class="st1" d="M16,28.9c-0.1,0-0.1,0-0.2-0.1c-0.2-0.1-0.2-0.3-0.1-0.5l1.4-2.2c0.1-0.2,0.3-0.2,0.5-0.1		c0.2,0.1,0.2,0.3,0.1,0.5l-1.4,2.2C16.3,28.8,16.1,28.9,16,28.9z"/>	<g>		<path class="st1" d="M21.3,30.3C21.3,30.3,21.3,30.3,21.3,30.3c-0.2,0-0.4-0.2-0.4-0.4l0-2.6c0-0.2,0.2-0.4,0.4-0.4c0,0,0,0,0,0			c0.2,0,0.4,0.2,0.4,0.4l0,2.6C21.6,30.1,21.5,30.3,21.3,30.3z"/>	</g>	<g>		<defs>			<rect id="SVGID_5_" x="21.3" y="6.4" width="8.2" height="26.1"/>		</defs>		<clipPath id="SVGID_6_">			<use xlink:href="#SVGID_5_"  style="overflow:visible;"/>		</clipPath>		<path class="st3" d="M27.5,30.6h-9.7c-0.6,0-1.2-0.5-1.2-1.2V10.3c0-0.6,0.5-1.2,1.2-1.2h9.7c0.6,0,1.2,0.5,1.2,1.2v19.2			C28.7,30.1,28.2,30.6,27.5,30.6z M17.8,9.7c-0.3,0-0.6,0.2-0.6,0.6v19.2c0,0.3,0.2,0.6,0.6,0.6h9.7c0.3,0,0.6-0.2,0.6-0.6V10.3			c0-0.3-0.2-0.6-0.6-0.6H17.8z"/>		<path class="st3" d="M26.7,27h-8.3c-0.3,0-0.5-0.2-0.5-0.5V12.2c0-0.3,0.2-0.5,0.5-0.5h8.3c0.3,0,0.5,0.2,0.5,0.5v14.2			C27.2,26.7,27,27,26.7,27z M18.5,26.4h8.2V12.3h-8.2V26.4z"/>		<path class="st3" d="M23.3,10.7h-1.7c-0.1,0-0.2-0.1-0.2-0.2s0.1-0.2,0.2-0.2h1.7c0.1,0,0.2,0.1,0.2,0.2S23.4,10.7,23.3,10.7z"/>		<path class="st3" d="M23.6,28.9c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9C23.2,28,23.6,28.4,23.6,28.9			"/>	</g>	<g>		<path class="st1" d="M21.3,35.4c-0.2,0-0.4-0.2-0.4-0.4V5.9c0-0.2,0.2-0.4,0.4-0.4s0.4,0.2,0.4,0.4V35			C21.6,35.3,21.5,35.4,21.3,35.4z"/>	</g></g></svg>'
            ]
        }],
        ["Varilux" , {
            logo : "img/essilor_sg.png",
            title : "qwertyu2i",
            icons : []
        }],
        ["Stellest" , {
            logo : "img/essilor_sg.png",
            title : "qwertyu2i",
            icons : []
        }],
        ["Transitions" , {
            logo : "img/essilor_sg.png",
            title : "qwertyu2i",
            icons : []
        }],
        ["Crizal Alize" , {
            logo : "img/essilor_sg.png",
            title : "qwertyu2i",
            icons : []
        }],
        ["Crizal Prevencia" , {
            logo : "img/essilor_sg.png",
            title : "qwertyu2i",
            icons : []
        }],
        ["Crizal Sapphire" , {
            logo : "img/essilor_sg.png",
            title : "qwertyu2i",
            icons : []
        }]
    ]);
    var combinations = [
        {
            no: [{
                name: "vision-challenge", val: "kids"
            }],
            yes: [],
            more: [],
            less: [{
                name: "in-comp", val: 3
            }],
            value: "EyeZen"
        },
      
    ]
        
    var template = function(logo, title, icons){
        let iconsFlex = "";
        icons.forEach(icon => {
            iconsFlex =iconsFlex+icon
        });
        return '<div class="brand-template-wrapper"><div class="brand-template"><div class="brand-template__logo"><img src="'+logo+'" alt=""></div><div class="brand-template__title">'+title+'</div><div class="brand-template__icons">'+iconsFlex+'</div></div></div>';
    }

    
    $("#mainpage_button").on("click", function(){
        $(".questions").removeClass("hidden")
        $(".js-lens-builder__start-screen").addClass("hidden")
    })

    $(".twentytwenty-handle").on("mouseout", function(event){
        console.log("mouiseout!!!")
        console.log( $(this).parent().find(".real-val"))
        // console.log($(this).css("left").replace(/[a-z]/gi, '') / $("#filter-image-wrapper").width())
        $(this).parent().find(".real-val").html($(this).css("left").replace(/[a-z]/gi, '') / $("#filter-image-wrapper").width());
    })

    $( "#timer-range").slider({
        animate: "slow",
        min: 0,
        max: 12,    
        value: 4
    });

    $( "#timer-range" ).slider({
        slide : function( event, ui ) {
            $(".circle").html(ui.value);
            $(".num").html("<strong>"+ui.value+ "</strong><small> ЧАСОВ</small>");
            Circle(".circle", ui.value);   
            $(".time-slider").find(".real-val").text(ui.value);
         }
    });

    var Circle = function(sel, val){
        var el = document.querySelector(sel);
            var valEl = parseFloat(el.innerHTML);
            
            valEl = val*526/12 +1 ;

            el.innerHTML = ' <svg width="178" height="178"><circle transform="rotate(-90)" style="stroke-dasharray:'+valEl+'px 526px;" r="84" cx="-89" cy="89" /></svg>';
            
    };
    
    Circle('.circle');
    $(".kids-input").on("click", function(){
        let title = "ГДЕ ВАШ РЕБЕНОК ПРОВОДИТ БОЛЬШУЮ ЧАСТЬ СВОЕГО ДНЯ?"
        $("#step-3").find(".lens-builder__question-title").text(title)
        title= "СКОЛЬКО ЧАСОВ В ДЕНЬ ВАШ РЕБЕНОК ПРОВОДИТ ПЕРЕД ЭКРАНОМ КОМПЬЮТЕРА, ТЕЛЕФОНА, ТЕЛЕВИЗОРА И Т.Д.?";
        $("#step-4").find(".lens-builder__question-title").text(title)

        titleKids = "Сталкивался ли ваш ребенок с чем-то из перечисленного?";
        $("#step-5").find(".lens-builder__question-title").text(title)
        title = "УЧАСТВУЕТ ЛИ ВАШ РЕБЕНОК В КАКОЙ-ЛИБО ИЗ СЛЕДУЮЩИХ АКТИВНОСТЕЙ?";
        $("#step-6").find(".lens-builder__question-title").text(title)

    });

    

    let question = 0;
    let questions = $(".question");
    let questionsLength = questions.length;
    let backBtn = $(".back-btn");
    let nextBtn = $(".lens-builder__arrow--next");
    let points = 0;

    $("input").removeAttr("checked");


    function backQuestion(){
        if (question>0){
            question --;
            nextBtn.removeClass("disable")
            refresh ();

            if(question==0)
                backBtn.addClass("disable")

        }
    }
    
    function nextQuestion(toskip){
        question ++;
        backBtn.removeClass("disable")
        if (toskip){
            question += Number(toskip)
        }
        if (questionsLength <= question){
            console.log("result")
            $(".questions").addClass("hidden");
            $(".test__result").removeClass("hidden");
            getResult();
        }
        else{ 
            nextBtn.addClass("disable")
            refresh();
        }

    }

    function refresh(){
        questions.addClass("hidden");
        try {
            questions.eq(question).removeClass("hidden");
            $("#filter-image-wrapper").twentytwenty({
                no_overlay: true
            });
            $(".twentytwenty-handle").on("mouseout", function(event){
                console.log("mouiseout!!!")
                console.log( $(this).parent().find(".real-val"))
                // console.log($(this).css("left").replace(/[a-z]/gi, '') / $("#filter-image-wrapper").width())
                $(this).parent().find(".real-val").html($(this).css("left").replace(/[a-z]/gi, '') / $("#filter-image-wrapper").width());
            })
            
            if (questions.eq(question).find("input:checked").length>0)
                nextBtn.removeClass("disable")
        } 
        catch (TypeError) {  

        }
      
    }

 
    function getResult(){
        let checkeds = $("input:checked");
        let rvals = $(".real-val");
        let vals = [];
        // console.log(checkeds)
        // console.log(rvals)
        checkeds.each(function( index, el ) {
            vals.push({name : el.getAttribute("name"), val : $(el).val(), rName : "-1"});
        });


        rvals.each(function( index, el ) {
            vals.push({name : el.getAttribute("data-name"), val : $(el).text(), rName : "-1"});
        });

        vals.forEach(val => {
            if (val.name == "in-comp"){
                let text = "Часов перед компьютером: " + val.val;
            }
            else if (val.name == "most-day"){
                if (val.val<0.15){
                    console.log("Весь день на улице")
                }
                else if (val.val<0.35){
                    console.log("В основном на улице");
                }
                else if (val.val<0.65){
                    console.log("Часть времени в помещении, часть – на улице");
                }
                else if (val.val<0.85){
                    console.log("В основном в помещении")
                }
                else{
                    console.log("Весь день в помещении")
                }

            }
            else{
                console.log($('[name="'+val.name+'"][value="'+val.val+'"]+label span').html());
            }
            
        });

        console.log(vals)
        let lastValName = vals[0].name;
        console.log(lastValName)
        let list = "<li>"
        let i =0;
        vals.forEach(val => {
            if (i!=0){
                console.log(val.name)
                if (val.name != lastValName){
                    list = list  + "</li><li>"
                }
                else{
                    list = list + ", "

                }
            }
            
            let text
            if (val.name == "in-comp"){
                text = "Часов перед компьютером: " + val.val;
            }
            else if (val.name == "most-day"){
                if (val.val<0.15){
                    text = "Весь день на улице"
                }
                else if (val.val<0.35){
                    text = "В основном на улице"
                }
                else if (val.val<0.65){
                    text = "Часть времени в помещении, часть – на улице"
                }
                else if (val.val<0.85){
                    text = "В основном в помещении"
                }
                else{
                    text = "Весь день в помещении"
                }

            }
            else{
                text = $('[name="'+val.name+'"][value="'+val.val+'"]+label span').html();
            }
             list = list + text
             lastValName = val.name;
             i++;
        });
        list = list + "</li>";
        $(".lens-builder__bullets").html($(list));


        i=0;
        let resutSet = new Set();
        combinations.forEach(element => {
            let resNo = true;
            console.log(element)
            if (element.no != []){
                element.no.forEach(theNo => {
                    // console.log(theNo)

                    vals.forEach(value => {
                        // console.log(value)
                        if (JSON.stringify(theNo) == JSON.stringify(value)){
                            resNo = false
                        }
                    });    
                });
            }
            let resYes = true;
            if (element.yes != []){
                element.yes.forEach(theYes => {
                    let tmpRes = false

                    vals.forEach(value => {
                        if (JSON.stringify(theYes) == JSON.stringify(value)){
                            tmpRes = true;
                        }
                    });   
                    if (!tmpRes){
                        resYes = false;
                    }


                });
            }
            let resMore = true;
            if (element.more != []){
                
                element.more.forEach(theMore => {
                    tmpRes = false
                    vals.forEach(value => {
                        if (theMore.name == value.name){
                            if (value.val > theMore.val){
                                tmpRes = true;
                            }
                        }
                    }); 
                    if (!tmpRes){
                        resMore = false;
                    }   
                });
            }
            let resLess = true;
            if (element.less != []){
                
                element.less.forEach(theless => {
                    tmpRes = false
                    vals.forEach(value => {
                        if (theless.name == value.name){
                            if (value.val < theless.val){
                                tmpRes = true;
                            }
                        }
                    }); 
                    if (!tmpRes){
                        resLess = false;
                    }   
                });
            }
            console.log (resNo , resYes , resMore , resLess)


            if (resNo && resYes && resMore && resLess){
                let tmpLen = resutSet.size;
                resutSet.add(element.value);
                if (resutSet.size != tmpLen){
                    console.log(element.value)
                    $('[data-brand="'+element.value+'"]').removeClass("hidden")
                    console.log(brands.get(element.value))
                    
                    if (i==0){
                        $(".position-right .position-wrapper").html(template(brands.get(element.value).logo, brands.get(element.value).title, brands.get(element.value).icons))

                    }
                    else{
                        $(".position-left .position-wrapper").html($(".position-left .position-wrapper").html() + template(brands.get(element.value).logo, brands.get(element.value).title, brands.get(element.value).icons))
                    
                    }
                    i++;   
                }
                
            }
        });

    }

    nextBtn.on('click', function() {
        // if (!$(this).hasClass("disable"))
            nextQuestion();
    })

    backBtn.on('click', function() {
        backQuestion();
    })

    $('.question input:radio').on('change', function () {
        if ($(this).attr("data-to-skip")){
            console.log("has attr")
            nextQuestion($(this).attr("data-to-skip"));

        }
        else
            nextQuestion();
    });

    questions.each(() => {
        let localQuestion = $(this);
        $('input:checkBox').on('change', function () {
            nextBtn.removeClass("disable")
            let checkedcheckboxes = localQuestion.find("input:checkbox:checked");
            if(checkedcheckboxes.length>0){
                nextBtn.removeClass("disable")
            } else{
                nextBtn.addClass("disable")
            }

        });
    })

    refresh();




})
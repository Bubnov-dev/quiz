$(document).ready(function () {
 
  

    var brands = new Map([
        ["EyeZen" , {
            logo : "img/Essilor_LogoBrand_Eyezen_White.png",
            title : "Улучшенные однофокальные линзы",
            icons : [
                'img/icons/EYEZEN ICONS-01.svg',
                'img/icons/EYEZEN ICONS-02.svg',
                'img/icons/EYEZEN ICONS-03.svg'
            ]
        }],
        ["Varilux" , {
            logo : "img/logos/Essilor_LogoBrand_Varilux_White.png",
            title : "",
            icons : [
                'img/icons/VARILUX ICONS-01.svg',
                'img/icons/VARILUX ICONS-02.svg',
                'img/icons/VARILUX ICONS-03.svg',
                
            ]
        }],
        ["Stellest" , {
            logo : "img/logos/Essilor_LogoBrand_Stellest_White.png",
            title : "Коррекция миопии и четкое зрение вдаль",
            icons : [
                'img/icons/EYEZEN ICONS-02.svg',
                'img/icons/EYEZEN ICONS-03.svg'
            ]
        }],
        ["Transitions" , {
            logo : "img/logos/transitions_logo_white.png",
            title : "Легко адаптируются к меняющемуся освещению",
            icons : [
                'img/icons/TRANSITIONS ICONS-01.svg',
                'img/icons/TRANSITIONS ICONS-02.svg',
                'img/icons/TRANSITIONS ICONS-03.svg',
            ]
        }],
        ["Crizal Alize" , {
            logo : "img/logos/Essilor_LogoProduct_Crizal_AlizeUV_White.png",
            title : "Защита от ультрафиолета и 5 врагов прозрачности линзы",
            icons : [
                'img/icons/CRIZAL ICONS-01.svg',
                'img/icons/CRIZAL ICONS-02.svg',
                'img/icons/CRIZAL ICONS-03.svg'
            ]
        }],
        ["Crizal Prevencia" , {
            logo : "img/logos/Essilor_LogoProduct_Crizal_Prevencia_White.png",
            title : "Защита от ультрафиолета, синего света и 5 врагов прозрачности линзы",
            icons : [
                
                'img/icons/CRIZAL ICONS-01.svg',
                'img/icons/CRIZAL ICONS-02.svg',
                'img/icons/CRIZAL ICONS-03.svg'
            ]
        }],
        ["Crizal Sapphire" , {
            logo : "img/logos/Essilor_LogoProduct_Crizal_SapphireUV_White.png",
            title : "Защита от ультрафиолета и 5 врагов прозрачности линзы",
            icons : [
                'img/icons/CRIZAL ICONS-01.svg',
                'img/icons/CRIZAL ICONS-02.svg',
                'img/icons/CRIZAL ICONS-03.svg'
            ]
        }]
    ]);
    var combinations = [
        {
            no: [
                {name: "vision-challenge", val: "kids"},
                {name: "vision-challenge-age", val: "45+"}
            ],
            yes: [],
            more: [],
            less: [],
            value: "EyeZen"
        },
        {
            no: [
                {name: "vision-challenge", val: "kids"},
                
            ],
            yes: [
                {name: "vision-challenge-age", val: "45+"}
            ],
            more: [],
            less: [],
            value: "Varilux"
        },
        {
            no: [
                // {name: "vision-challenge", val: "kids"},
            ],
            yes: [],
            more: [],
            less: [{
                name: "most-day", val: 0.85
            }],
            value: "Transitions"
        },
        {
            no: [
                {name: "experience", val: "crizalsa"},
            ],
            yes: [],
            more: [],
            less: [{
                name: "in-comp", val: 2
            }],
            value: "Crizal Alize"
        },
        {
            no: [
                {name: "experience", val: "crizalsa"},
            ],
            yes: [],
            more: [{
                name: "in-comp", val: 1
            }],
            less: [],
            value: "Crizal Prevencia"
        },
        {
            no: [
                
            ],
            yes: [{name: "experience", val: "crizalsa"},],
            more: [],
            less: [],
            value: "Crizal Sapphire"
        },

        //kids
        {
            no: [
            ],
            yes: [
                {name: "vision-challenge", val: "kids"},
                {name: "children-problem", val: "kid-near"},
            ],
            more: [],
            less: [],
            value: "Stellest"
        },
      
    ]
        
    var template = function(logo, title, icons){
        let iconsFlex = "";
        icons.forEach(icon => {
            iconsFlex =iconsFlex+'<img src="'+icon+'" alt="">'
        });
        return '<div class="brand-template-wrapper"><div class="brand-template"><div class="brand-template__logo"><img src="'+logo+'" alt=""></div><div class="brand-template__title">'+title+'</div><div class="brand-template__icons">'+iconsFlex+'</div></div></div>';
    }
    var templateMobile = function(logo){
        return '<div class="brand-logo-mobile"><img src="'+logo+'" alt=""></div>';
    }
   if(window.location.search!=""){
        var params = window
        .location
        .search
        .replace('?','')
        .split('&')
        .reduce(
            function(p,e){
                var a = e.split('=');
                p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
            },
            {}
        );

        console.log(params);
        console.log("params")
        let vals = []

        for (var key in params) {
            vals.push({name : key, val : params[key]});

        }
        console.log(vals)
        $(".js-lens-builder__start-screen").addClass("hidden")

        $(".questions").addClass("hidden");
            $(".test__result").removeClass("hidden");
            getResult(vals);
    }
    
    $("#mainpage_button").on("click", function(){
        $(".questions").removeClass("hidden")
        $(".js-lens-builder__start-screen").addClass("hidden")
    })

    // $(".twentytwenty-handle").on("mouseout", function(event){
    //     $(this).parent().find(".real-val").html($(this).css("left").replace(/[a-z]/gi, '') / $("#filter-image-wrapper").width());
    // })

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
        console.log("next")
        if (question == 3){
            $(".most-day-real-val").html($(".twentytwenty-handle").css("left").replace(/[a-z]/gi, '') / $("#filter-image-wrapper").width());

        }
        question ++;
        
        backBtn.removeClass("disable")
        if (toskip){
            question += Number(toskip)
        }
        if (questionsLength <= question){
            $(".questions").addClass("hidden");
            $(".test__result").removeClass("hidden");
            getResult();
        }
        else{ 
            nextBtn.addClass("disable")
            refresh();
        }
        console.log ("q" + question)
        if (question == 3){
            $("#filter-image-wrapper").twentytwenty({
                no_overlay: true
            });
        }

    }
  
    function refresh(){
        questions.addClass("hidden");
        try {
            questions.eq(question).removeClass("hidden");
            
            
            if (questions.eq(question).find("input:checked").length>0)
                nextBtn.removeClass("disable")
        } 
        catch (TypeError) {  

        }
      
    }

 
    function getResult(vals=[]){
        let checkeds = $("input:checked");
        let rvals = $(".real-val");
        // let vals = [];
        // console.log(checkeds)
        // console.log(rvals)
        if (vals==[]){
           checkeds.each(function( index, el ) {
            vals.push({name : el.getAttribute("name"), val : $(el).val()});
            });


            rvals.each(function( index, el ) {
                vals.push({name : el.getAttribute("data-name"), val : $(el).text()});
            });   
        }
      

        
        let getText = window.location.origin + window.location.pathname
        vals.forEach(val =>{
            getText += val.name+"="+val.val+"&";
        })
        getText = getText.substr(0, getText.length-1);
        console.log(getText)
        var formattedBody =  "Основываясь на ваших ответах, мы рекомендуем следующее решение, соответствующее вашему образу жизни и потребностям:\n"+getText ;
        var mailToLink = "mailto:?body=" + encodeURIComponent(formattedBody);
        $("a.mailto").attr("href", mailToLink);
        // $("a.mailto").attr("href", "mailto:?subject=Ваши персональные линзы&body="+ encodeURIComponent("Основываясь на ваших ответах, мы рекомендуем следующее решение, соответствующее вашему образу жизни и потребностям:    <br> <a href='"+getText + "'>ссылка</a>"));
        

        console.log(vals)
        let lastValName = vals[0].name;
        let list = "<li>"
        let i =0;
        vals.forEach(val => {
            if (i!=0){
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
                        console.log("no: " + JSON.stringify(theNo) + " " + JSON.stringify(value))

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
                        console.log("yes: " + JSON.stringify(theYes) + " " + JSON.stringify(value))
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
                            console.log("more : " + value.val+ " " + theMore.val);

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
                            console.log ("less: " + value.val + " " + theless.val);
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
                    $(".position-mobile").html($(".position-mobile").html()+ templateMobile(brands.get(element.value).logo))

                    i++;   
                }
                
            }
        });
        console.log(resutSet)
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
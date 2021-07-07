$(document).ready(function($){

    // aumentar e diminuir a fonte de conteudo
    var minTamanhoFont = 8;
    var maxTamanhoFont = 30;

    $(".elementor-social-icon-plus-circle").on("click", function(e){
       
        e.preventDefault();

        //alterar
        var ellements = $("#main-section p, #main-section span, #main-section li, #main-section h1, #main-section h2, #main-section h3, #main-section h4, #main-section h5, #main-section h6, #main-section a");
	ellements.each( function(){
            var fontSize = $(this).css("font-size");
                fontSize = parseInt(fontSize) + 1;

            if( fontSize < maxTamanhoFont){
                $(this).css("font-size", fontSize );
            }
	    if( fontSize > 19 ){
		if ($(this).context.localName == "p"){
			$(this).css("line-height", 1.2);
		}
	    }
        } );
	    var fontSizeBtn = ($("#home-intro a.btn").css("font-size")).slice(0,-2);
	    if (fontSizeBtn >= 16){
		$("#home-intro a.btn").css("max-width", "500px");
	    }
    });

    $(".elementor-social-icon-minus-circle").on("click", function(e){    
        e.preventDefault();

        var ellements = $("#main-section p, #main-section span, #main-section li, #main-section h1, #main-section h2, #main-section h3, #main-section h4, #main-section h5, #main-section h6, #main-section a");


        ellements.each( function(){
            var fontSize = $(this).css("font-size");
                fontSize = parseInt(fontSize) -1;
        
            if( fontSize > minTamanhoFont){
                $(this).css("font-size", fontSize );
            }
            if( fontSize <= 19 ){
		if ($(this).context.localName == "p"){
			$(this).css("line-height", 1)
		}
	    }
        } );
	   var fontSizeBtn = ($("#home-intro a.btn").css("font-size")).slice(0,-2);
	    if (fontSizeBtn < 16){
		$("#home-intro a.btn").css("max-width", "272px");
	    }
    });

    var ellements = $("#main-section p, #main-section span, #main-section li, #main-section h1, #main-section h2, #main-section h3, #main-section h4, #main-section h5, #main-section h6, #main-section a");

    var values_defaults = [];

    ellements.each(function(){
        var font_size = $(this).css("font-size");
        var index_val = $(this).context.localName;
        values_defaults.push({  "tagname" : index_val, "fontsize": font_size })
    });

    $(".elementor-social-icon-font").on("click", function(e){    
        
        e.preventDefault();       

        var ellements = $("#main-section p, #main-section span, #main-section li, #main-section h1, #main-section h2, #main-section h3, #main-section h4, #main-section h5, #main-section h6, #main-section a");
        
        ellements.each( function(el){            
            var $this = $(this);
            if( $this.context.localName == values_defaults[el].tagname ){
                $this.css( "font-size" , values_defaults[el].fontsize);
            }
        } );

    });

    $(".elementor-social-icon-adjust ").on("click", function(e){

        e.preventDefault();

        $("body").toggleClass(" pojo-a11y-negative-contrast");

    });

     $("#accessibility-btn").on("click", function(e){

        e.preventDefault();
	if($("#accessibility-box").hasClass("accessibility-active")){
		$("#accessibility-box").removeClass("accessibility-active")
		$("#accessibility-box").addClass("accessibility-deactive")
		return
	}
        $("#accessibility-box").removeClass("accessibility-deactive");
	$("#accessibility-box").addClass("accessibility-active");
    });
});


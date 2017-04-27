/**
 * Created by Ing. Denys Sotolongo Ramos on 3/20/2017.
 * Vercion 1.1
 */



 /*opciones*/

  var options = {
      sessionVisited:false,
      animatedScroll:false,
      btnTop:false,
      toolbarScrollCh:false,
      ChangeScrollPos:4,
  };

 /*fin opciones*/

function init(option)
{
    if(option!=null)
    {
      options = option;   
    }    
}

function menuActivoConScroll(e) {

    if(options.sessionVisited)
    {
        $("#nav-menu li a").removeClass("active");
        var scrollPost = $(window).scrollTop();
        var activa = $(".seccion:last").attr("id");
        $(".seccion").each(function(indice)
        {
            var posTop = $(this).offset().top;
            var altura = $(this).height();
            if (scrollPost < posTop + altura) {
                activa = $(this).attr("id");
                return false;
            }
        });
        $("#nav-menu a[href='#" + activa + "']").addClass("active");
    }

   }



    $(window).scroll(menuActivoConScroll);
    $(document).ready(menuActivoConScroll);

    $(document).ready(function()
    {
        if(options.btnTop == true)
        {
            $('#linkTopSite').append('<a href="#top" class="gototop">Subir</a>');
        }

        if (options.animatedScroll==true)
        {
            InternalLink = $('a[href^="#"]');
            InternalLink.on('click',function(e)
            {
                e.preventDefault();
                var href = $(this).attr('href');
                position = $( href ).offset().top;
                $('html, body').animate({ scrollTop : position }, 2000, 'easeInOutExpo');
            });
        }

    });

    $(document).scroll(function()
    {

         if (options.toolbarScrollCh)
         {
             var pos = $(document).scrollTop();

             if (pos>options.ChangeScrollPos)
             {
                 $('.headerNav').addClass('scrolling-header');
             }
             else
             {
                 $('.headerNav').removeClass('scrolling-header');
             }
         }



    });




$(document).ready(function () {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 180, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  AOS.refresh();
  setTimeout("AOS.refresh()", 1000);
  setTimeout("AOS.refresh()", 2000);

  var lastScroll = 0;
  var scTop = $(window).scrollTop();
  $(window).scroll(function () {
    scTop = $(window).scrollTop();
    if (scTop + window.innerHeight >= $(document).height() - 1) {
      $("#aside .a_function").addClass("off");
      $("#aside .a_ai").addClass("off");
    } else {
      $("#aside .a_function").removeClass("off");
      $("#aside .a_ai").removeClass("off");
    }
  });
  $(window).resize(function () {
    AOS.refresh();
    setTimeout("AOS.refresh()", 1000);

    if ($(".cmh_slide").length) {
      setTimeout(function () {
        $(".cmh_slide").slick("setPosition");
      }, 500);
      setTimeout(function () {
        $(".cmh_slide").slick("setPosition");
      }, 1000);
    }

    if ($("#aside .a_wrap").hasClass("active")) {
      if (window.innerWidth > 1440) {
        $("#aside .a_control").attr("tabindex", "4100");
        $("#aside .a_nav > ul > li:eq(0) .an_btn").attr("tabindex", "4000");
        $("#aside .a_nav > ul > li:eq(1) .an_btn").attr("tabindex", "4010");
        $("#aside .a_nav > ul > li:eq(2) .an_btn").attr("tabindex", "4020");
        $("#aside .a_nav > ul > li:eq(2) .an_list li:eq(0) a").attr("tabindex", "4021");
        $("#aside .a_nav > ul > li:eq(2) .an_list li:eq(1) a").attr("tabindex", "4022");
        $("#aside .a_nav > ul > li:eq(3) .an_btn").attr("tabindex", "4030");
        $("#aside .a_nav > ul > li:eq(4) .an_btn").attr("tabindex", "4040");
      } else {
        $("#aside .a_control").attr("tabindex", "4300");
        $("#aside .a_nav > ul > li:eq(0) .an_btn").attr("tabindex", "4310");
        $("#aside .a_nav > ul > li:eq(1) .an_btn").attr("tabindex", "4320");
        $("#aside .a_nav > ul > li:eq(2) .an_btn").attr("tabindex", "4330");
        $("#aside .a_nav > ul > li:eq(2) .an_list li:eq(0) a").attr("tabindex", "4331");
        $("#aside .a_nav > ul > li:eq(2) .an_list li:eq(1) a").attr("tabindex", "4332");
        $("#aside .a_nav > ul > li:eq(3) .an_btn").attr("tabindex", "4340");
        $("#aside .a_nav > ul > li:eq(4) .an_btn").attr("tabindex", "4350");
      }
    } else {
      $("#aside .a_nav > ul > li .an_btn").attr("tabindex", "-1");
      $("#aside .a_nav > ul > li .an_list li a").attr("tabindex", "-1");
    }
  });

  if ($("#aside .a_wrap").hasClass("active")) {
    if (window.innerWidth > 1440) {
      $("#aside .a_control").attr("tabindex", "4100");
      $("#aside .a_nav > ul > li:eq(0) .an_btn").attr("tabindex", "4000");
      $("#aside .a_nav > ul > li:eq(1) .an_btn").attr("tabindex", "4010");
      $("#aside .a_nav > ul > li:eq(2) .an_btn").attr("tabindex", "4020");
      $("#aside .a_nav > ul > li:eq(2) .an_list li:eq(0) a").attr("tabindex", "4021");
      $("#aside .a_nav > ul > li:eq(2) .an_list li:eq(1) a").attr("tabindex", "4022");
      $("#aside .a_nav > ul > li:eq(3) .an_btn").attr("tabindex", "4030");
      $("#aside .a_nav > ul > li:eq(4) .an_btn").attr("tabindex", "4040");
    } else {
      $("#aside .a_control").attr("tabindex", "4300");
      $("#aside .a_nav > ul > li:eq(0) .an_btn").attr("tabindex", "4310");
      $("#aside .a_nav > ul > li:eq(1) .an_btn").attr("tabindex", "4320");
      $("#aside .a_nav > ul > li:eq(2) .an_btn").attr("tabindex", "4330");
      $("#aside .a_nav > ul > li:eq(2) .an_list li:eq(0) a").attr("tabindex", "4331");
      $("#aside .a_nav > ul > li:eq(2) .an_list li:eq(1) a").attr("tabindex", "4332");
      $("#aside .a_nav > ul > li:eq(3) .an_btn").attr("tabindex", "4340");
      $("#aside .a_nav > ul > li:eq(4) .an_btn").attr("tabindex", "4350");
    }
  } else {
    if (window.innerWidth > 1440) {
      $("#aside .a_control").attr("tabindex", "4100");
    } else {
      $("#aside .a_control").attr("tabindex", "4300");
    }
    $("#aside .a_nav > ul > li:eq(0) .an_btn").attr("tabindex", "-1");
    $("#aside .a_nav > ul > li:eq(1) .an_btn").attr("tabindex", "-1");
    $("#aside .a_nav > ul > li:eq(2) .an_btn").attr("tabindex", "-1");
    $("#aside .a_nav > ul > li:eq(2) .an_list li:eq(0) a").attr("tabindex", "-1");
    $("#aside .a_nav > ul > li:eq(2) .an_list li:eq(1) a").attr("tabindex", "-1");
    $("#aside .a_nav > ul > li:eq(3) .an_btn").attr("tabindex", "-1");
    $("#aside .a_nav > ul > li:eq(4) .an_btn").attr("tabindex", "-1");
  }

  $("#aside .a_ad .aa_close").on("click", function () {
    setCookie("popupAdClosed", "true", 1);
    $("#aside .a_ad").removeClass("on");
  });
  $("#aside .a_nav ul li .an_doc").on("click", function () {
    $(this).toggleClass("open");
  });

  $("#aside .a_control").on("click", function () {
    fetch("/com/inc/quick_menu_session.jsp");
    $(this).toggleClass("on");
    $("#aside .a_wrap").toggleClass("active");
    $("#footer").toggleClass("on");

    if ($("#aside .a_wrap").hasClass("active")) {
      if (window.innerWidth > 1440) {
        $("#aside .a_nav > ul > li:eq(0) .an_btn").attr("tabindex", "4000");
        $("#aside .a_nav > ul > li:eq(1) .an_btn").attr("tabindex", "4010");
        $("#aside .a_nav > ul > li:eq(2) .an_btn").attr("tabindex", "4020");
        $("#aside .a_nav > ul > li:eq(2) .an_list li:eq(0) a").attr("tabindex", "4021");
        $("#aside .a_nav > ul > li:eq(2) .an_list li:eq(1) a").attr("tabindex", "4022");
        $("#aside .a_nav > ul > li:eq(3) .an_btn").attr("tabindex", "4030");
        $("#aside .a_nav > ul > li:eq(4) .an_btn").attr("tabindex", "4040");
      } else {
        $("#aside .a_nav > ul > li:eq(0) .an_btn").attr("tabindex", "4310");
        $("#aside .a_nav > ul > li:eq(1) .an_btn").attr("tabindex", "4320");
        $("#aside .a_nav > ul > li:eq(2) .an_btn").attr("tabindex", "4330");
        $("#aside .a_nav > ul > li:eq(2) .an_list li:eq(0) a").attr("tabindex", "4331");
        $("#aside .a_nav > ul > li:eq(2) .an_list li:eq(1) a").attr("tabindex", "4332");
        $("#aside .a_nav > ul > li:eq(3) .an_btn").attr("tabindex", "4340");
        $("#aside .a_nav > ul > li:eq(4) .an_btn").attr("tabindex", "4350");
      }
      $("#aside .a_control").attr("aria-expanded", "true");
    } else {
      $("#aside .a_nav > ul > li:eq(0) .an_btn").attr("tabindex", "-1");
      $("#aside .a_nav > ul > li:eq(1) .an_btn").attr("tabindex", "-1");
      $("#aside .a_nav > ul > li:eq(2) .an_btn").attr("tabindex", "-1");
      $("#aside .a_nav > ul > li:eq(2) .an_list li:eq(0) a").attr("tabindex", "-1");
      $("#aside .a_nav > ul > li:eq(2) .an_list li:eq(1) a").attr("tabindex", "-1");
      $("#aside .a_nav > ul > li:eq(3) .an_btn").attr("tabindex", "-1");
      $("#aside .a_nav > ul > li:eq(4) .an_btn").attr("tabindex", "-1");
      $("#aside .a_control").attr("aria-expanded", "false");
    }
  });

  $("#contents .c_submain .cs_faq .csf_list .csfl_q").on("click", function () {
    $(this).parent("li").toggleClass("on");
    $(this).siblings(".csfl_a").slideToggle(150);

    if ($(this).parent("li").hasClass("on")) {
      $(this).attr("aria-expanded", "true");
    } else {
      $(this).attr("aria-expanded", "false");
    }
  });

  $("#board .bf_list li .bfl_q").on("click", function () {
    $(this).parent("li").toggleClass("on");
    $(this).siblings(".bfl_a").slideToggle(150);
    if ($(this).parent("li").hasClass("on")) {
      $(this).attr("aria-expanded", "true");
    } else {
      $(this).attr("aria-expanded", "false");
    }
  });

  $("#header .h_menu > ul  button").hover(
    function () {
      $(this).parent("li").addClass("on");
    },
    function () {
      $(this).parent("li").removeClass("on");
    }
  );

  $("#header .h_function button").on("click", function () {
    if ($(this).hasClass("on")) {
      $("body").addClass("on");
      $(this).removeClass("on").addClass("off");
      $(".h_allview").show();
      $("#header .h_function button span").text(decodeURIComponent("%EB%A9%94%EB%89%B4%20%EB%8B%AB%EA%B8%B0"));
      $("#header .h_function button").attr("aria-expanded", "true");
    } else if ($(this).hasClass("off")) {
      $(this).removeClass("off").addClass("on");
      $("body").removeClass("on");
      $(".h_allview").hide();
      $("#header .h_function button span").text(decodeURIComponent("%EB%A9%94%EB%89%B4%20%EC%97%B4%EA%B8%B0"));
      $("#header .h_function button").attr("aria-expanded", "false");
    }
  });

  $(".u_skip .uk_btn").on("click", function () {
    if ($("#header .h_function button").hasClass("on")) {
      $("body").addClass("on");
      $("#header .h_function button").removeClass("on").addClass("off");
      $(".h_allview").show();
      $("#header .h_function button span").text(decodeURIComponent("%EB%A9%94%EB%89%B4%20%EB%8B%AB%EA%B8%B0"));
      $("#header .h_function button").attr("aria-expanded", "true");
    }
  });

  $("#header .h_menu > ul a,header .h_menu > ul button").on("focus", function () {
    var submenu = $(this).next("ul");
    // ? ?™?˜™? ?™?˜™ ? ?™?˜™ì»¤å ?™?˜™? ?™?˜™ ? ?Œ¨?Œ?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™? ?‹¹ê³¤ì˜™ ? ?™?˜™? ï¿? ? ?™?˜™? ?™?˜™æ¿±å ï¿? ? ?Œ¥ê¹ì˜™
    // ? ?™?˜™? ?™?˜™ ? ?™?˜™ì»¤å ?™?˜™? ?™?˜™ ? ?Œ¨?Œ?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™æ¿±å ï¿? ? ?™?˜™? ?™?˜™
    if (submenu.length) {
      submenu.css("display", "block");
    }
  });
  $("#header .h_menu > ul a,header .h_menu > ul button").on("blur", function () {
    var submenu = $(this).next("ul");
    if (submenu.length) {
      // ? ?™?˜™? ?™?˜™æ¿±å ï¿? ? ?™?˜™? ?‹¸ë¤„ì˜™ ? ?™?˜™ì»¤å ?™?˜™? ?™?˜™ ? ?‹±?“¸?˜™? ?‹¹?Œ?˜™? ?™?˜™ ?™•? ?™?˜™ ? ?™?˜™ ? ?Œ¥ê¹ì˜™
      setTimeout(function () {
        if (!submenu.find("a").is(":focus")) {
          submenu.css("display", "none");
        }
      }, 100); // ? ?…ê°„å ?™?˜™ ? ?™?˜™? ?™?˜™? ?™?˜™ ? ?‹¸?–µ?˜™ ? ?™?˜™ì»¤å ?™?˜™ ? ?‹±?“¸?˜™? ?™?˜™ ? ?™?˜™?‘¸? ï¿?
    }
  });
  // ? ?™?˜™? ?™?˜™æ¿±å ï¿? ? ?™?˜™? ?™?˜™ ? ?™?˜™?¬? ?™?˜™ ? ?™?˜™ì»¤å ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™? ?™?˜™ ? ?Œ¨?Œ?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™ ? ?Œê³¤ì˜™ ? ?™?˜™? ?™?˜™
  $("#header .h_menu ul.hm_sub a").on("focus", function () {
    $(this).closest("ul.hm_sub").css("display", "block");
  });
  // ? ?™?˜™? ?™?˜™æ¿±å ï¿? ? ?™?˜™? ?™?˜™? ?™?˜™ ? ?™?˜™ì»¤å ?™?˜™? ?™?˜™ ? ?™?˜™? ?˜?‚˜? ?™?˜™ ? ?™?˜™? ?™?˜™æ¿±å ï¿? ? ?Œ¥ê¹ì˜™
  $("#header .h_menu ul.hm_sub a").on("blur", function () {
    var submenu = $(this).closest("ul.hm_sub");
    setTimeout(function () {
      if (!submenu.find("a").is(":focus")) {
        submenu.css("display", "none");
      }
    }, 100);
  });
  let isClick = false;

  // ?´? ?™?˜™ ? ?‹±ë¸ì˜™?Š¸ ì²˜å ?™?˜™
  // 1? ?™?˜™ ? ?Œ¨?Œ?˜™ (has_depth01) ?´? ?™?˜™ ? ?‹±ë¸ì˜™?Š¸
  $("#header .ha_sitemap").on("click", ".has_depth01 > .accordion", function (e) {
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
    } else {
      $(this).addClass("on");
    }
  });

  // 2? ?™?˜™ ? ?Œ¨?Œ?˜™ (has_depth01) ?´? ?™?˜™ ? ?‹±ë¸ì˜™?Š¸
  $("#header .ha_sitemap").on("click", ".has_depth02 .accordion", function (e) {
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
    } else {
      $(this).addClass("on");
    }
  });

  // ï§ë¶¿?”¤ ï¿½ã…»?‰¬å¯ƒëš¯?” ï¿½ï¿½ ï§ë?°ë?¾ï¿½ï¿?
  $("#contents.c_main .cm_nav ul li .cmn_explanation").hover(
    function () {
      $(this).parent("li").css("z-index", "1");
      $(this).parent("li").siblings("li").css("z-index", "0");
    },
    function () {
      $(this).parent("li").siblings("li").css("z-index", "0");
    }
  );

  $("#contents.c_main .cm_nav ul li a")
    .on("focus", function () {
      $(this).parent("li").css("z-index", "1");
      $(this).parent("li").siblings("li").css("z-index", "0");
    })
    .on("blur", function () {
      $(this).parent("li").css("z-index", "0");
    });

  // ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™? ï¿? ? ?™?˜™? ?™?˜™? ?‹±?“¸?˜™
  if ($(".cmh_slide").length) {
    var speed = 0.67;
    var bar = $("#contents.c_main .cm_hero .cmh_nav .cmhn_bar .cmhnb_progress");
    var changeWhenPaused;
    var percentTime;
    var tick;

    $(".cmh_slide.t1")
      .slick({
        infinite: true,
        fade: true,
        asNavFor: ".cmh_slide.t2",
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false, // ï¿½ï¿½ ï¿½ë†ë¸·æ¹²ï¿?
        arrows: false, // ï¿½ëŒ?Ÿ¾/ï¿½ã…¼?“¬ è¸°ê¾ª?“‰ ï¿½ë†ë¸·æ¹²ï¿?
      })
      .on("init afterChange", function () {
        $(".cmh_slide.t1 .slick-slide").attr("tabindex", "-1");
        setTimeout(() => {
          $(".cmh_slide.t1 .slick-slide").attr("tabindex", "-1");
        }, 100);
      });
    setTimeout(() => {
      $(".cmh_slide.t1 .slick-slide").attr("tabindex", "-1");
    }, 100);

    $(".cmh_slide.t2").slick({
      infinite: true,
      vertical: true,
      asNavFor: ".cmh_slide.t1",
      dots: false, // ï¿½ï¿½ ï¿½ë†ë¸·æ¹²ï¿?
      arrows: false, // ï¿½ëŒ?Ÿ¾/ï¿½ã…¼?“¬ è¸°ê¾ª?“‰ ï¿½ë†ë¸·æ¹²ï¿?
    });

    // ? ?™?˜™? ?™?˜™ ? ?™?˜™?Š¼ ?´? ?™?˜™ ? ?™?˜™
    $("#contents.c_main .cm_hero .cmh_nav .cmhn_control .prev").on("click", function () {
      $(".cmh_slide.t1").slick("slickPrev"); // ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™? ?‹±?“¸?˜™? ï¿? ? ?‹±?“¸?˜™
    });

    // ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™? ?‹±?“¸?˜™? ï¿? ? ?‹±?“¸?˜™
    $("#contents.c_main .cm_hero .cmh_nav .cmhn_control .next").on("click", function () {
      $(".cmh_slide.t1").slick("slickNext"); // ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™? ?‹±?“¸?˜™? ï¿? ? ?‹±?“¸?˜™
    });

    //? ?™?˜™? ï¿?/? ?™?˜™? ?™?˜™ ? ?™?˜™?Š¼ ?´? ?™?˜™ ? ?™?˜™
    let isPlaying = true; // ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™ (? ?™?˜™? ï¿?/? ?™?˜™? ?™?˜™)

    $("#contents.c_main .cm_hero .cmh_nav .cmhn_control .control").on("click", function () {
      if (isPlaying) {
        $(".cmh_slide.t1").slick("slickPause");
        $(this).find("i").removeClass("pause").addClass("play");
        bar.css({ width: 0 + "%" });
        isPlaying = false;
        $("#contents.c_main .cm_hero .cmh_nav .cmhn_control li button > span").text(decodeURIComponent("%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C%20%EC%9E%AC%EC%83%9D"));
      } else {
        $(".cmh_slide.t1").slick("slickPlay");
        $(this).find("i").removeClass("play").addClass("pause");
        isPlaying = true;
        startProgressbar();
        $("#contents.c_main .cm_hero .cmh_nav .cmhn_control li button > span").text(decodeURIComponent("%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C%20%EC%A0%95%EC%A7%80"));
      }
    });

    const totalSlides = $(".cmh_slide.t1").slick("getSlick").slideCount;
    var totalCount = "0" + totalSlides;
    $(".cmhn_pagination .total").text(totalCount); // ? ?™?˜™ì²? ? ?™?˜™? ?™?˜™? ?‹±?“¸?˜™ ? ?™?˜™ ?‘œ? ?™?˜™

    // ? ?™?˜™? ?™?˜™? ?‹±?“¸?˜™ ? ?™?˜™? ?™?˜™ ? ?™?˜™, ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™? ?‹±?“¸?˜™ ? ?™?˜™?˜¸ ? ?™?˜™? ?™?˜™
    $(".cmh_slide.t1").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      var count = "0" + (nextSlide + 1);
      $(".cmhn_pagination .current").text(count); // ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™? ?‹±?“¸?˜™ ? ?™?˜™?˜¸ ?‘œ? ?™?˜™ (1? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™)
      startProgressbar();
      if (!isPlaying) changeWhenPaused = true; // ? ?‹¹?™?˜™? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™? ?‹¹?°?˜™ ? ?™?˜™? ?™?˜™? ?‹±?“¸?˜™ ? ?™?˜™?™˜
    });
    startProgressbar();

    function startProgressbar() {
      resetProgressbar();
      percentTime = 0;
      if (isPlaying) {
        tick = setInterval(interval, 30); // ? ?‹¹?™?˜™? ?™?˜™? ?™?˜™ ? ?™?˜™? ?Š¹ê³¤ì˜™ ? ?‹£?‹ˆëªŒì˜™ ? ?™?˜™? ?™?˜™? ?™?˜™? ï¿?
      }
    }
    function interval() {
      if (isPlaying) {
        percentTime += speed;
        bar.css({
          width: percentTime + "%",
        });
        if (percentTime >= 100) {
          $(".cmh_slide.t1").slick("slickNext");
          startProgressbar();
        }
      }
    }

    function resetProgressbar() {
      bar.css({
        width: 0 + "%",
      });
      clearTimeout(tick);
    }

    var lastDirection = null;
    var mytotalSlides = totalSlides - 1;
    $(".cmh_slide.t2").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      setTimeout(() => {
        const $currentSlide = $(slick.$slides[nextSlide]);
        if ((mytotalSlides == nextSlide && currentSlide == 0) || (mytotalSlides == currentSlide && nextSlide == 0)) {
          $currentSlide.addClass("nobound");
        }
        if (currentSlide - nextSlide == -1) {
          lastDirection = "up";
        } else {
          lastDirection = "down";
        }

        if (lastDirection == "up") {
          $currentSlide.addClass("rebound");
          setTimeout(() => {
            $currentSlide.removeClass("rebound");
            $currentSlide.removeClass("nobound");
          }, 300);
        } else {
          $currentSlide.addClass("rereversebound");
          setTimeout(() => {
            $currentSlide.removeClass("rereversebound");
            $currentSlide.removeClass("nobound");
          }, 300);
        }
      }, 250);
    });

    $(".cmh_slide.t1").on("beforeChange", function (event, slick, currentSlide, nextSlide) {});
  }

  // ? ?‹¯?–µ?˜™ ? ?™?˜™? ?™?˜™? ï¿? ? ?™?˜™? ?™?˜™? ?‹±?“¸?˜™
  if ($("#aside .a_pop .ap_silde").length) {
    $("#aside .a_pop .ap_silde").slick({
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
    });
    let ispopPlaying = true; // ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™ (? ?™?˜™? ï¿?/? ?™?˜™? ?™?˜™)
    $("#aside .a_pop .ap_nav .apn_control").on("click", function () {
      if (ispopPlaying) {
        $("#aside .a_pop .ap_silde").slick("slickPause"); // ? ?™?˜™? ?™?˜™? ?‹±?“¸?˜™ ? ?™?˜™? ?™?˜™
        $(this).find("i").removeClass("pause").addClass("play"); // ? ?™?˜™? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™
        $("#aside .a_pop .ap_nav .apn_control span").text(decodeURIComponent("%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C%20%EC%9E%AC%EC%83%9D"));
      } else {
        $("#aside .a_pop .ap_silde").slick("slickPlay"); // ? ?™?˜™? ?™?˜™? ?‹±?“¸?˜™ ? ?™?˜™? ï¿?
        $(this).find("i").removeClass("play").addClass("pause"); // ? ?™?˜™? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™
        $("#aside .a_pop .ap_nav .apn_control span").text(decodeURIComponent("%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C%20%EC%A0%95%EC%A7%80"));
      }
      ispopPlaying = !ispopPlaying; // ? ?™?˜™? ?™?˜™ ? ?™?˜™? ï¿?
    });

    const dots = document.querySelector("#aside .slick-dots");
    const nav = document.querySelector("#aside .ap_nav");

    if (dots && nav) {
      const firstChild = nav.children[1];

      if (firstChild) {
        nav.insertBefore(dots, firstChild);
      } else {
        nav.appendChild(dots);
      }

      for (var i = 0; i < $("#aside .slick-dots li").length; i++) {
        $("#aside .slick-dots li:eq(" + i + ") button").attr("tabindex", "101");
      }
      $("#aside .a_pop .ap_silde .slick-active a").attr("tabindex", "99");
    }
  }

  /* ai On Off */
  $("#aside .a_function ul li.af_ai button").click(function () {
    $("#aside .a_function ul li.af_ai .afa_dim").addClass("on");
    if (!$("#aside .a_ai").hasClass("open")) {
      $("#aside .a_ai").addClass("open");
      $("#aside .a_function ul li.af_ai").addClass("open");
      setTimeout(function () {
        $("#aside .a_ai").addClass("open2");
        $("#aside .a_function .af_ai button span").text(decodeURIComponent("AI%20%EC%83%81%EB%8B%B4%20%EB%8B%AB%EA%B8%B0"));
        $("#aside .a_function .af_ai button").attr("aria-expanded", "true");
      }, 10);
    } else {
      $("#aside .a_ai").removeClass("open2");
      setTimeout(function () {
        $("#aside .a_ai").removeClass("open");
        $("#aside .a_function ul li.af_ai .afa_dim").removeClass("on");
        $("#aside .a_function ul li.af_ai").removeClass("open");
        $("#aside .a_function .af_ai button span").text(decodeURIComponent("AI%20%EC%83%81%EB%8B%B4%20%EC%97%B4%EA%B8%B0"));
        $("#aside .a_function .af_ai button").attr("aria-expanded", "false");
      }, 300);
    }
  });

  $("#aside .a_function ul li.af_ai button").click(function () {});

  $("#aside .a_function ul li.af_ai .afa_dim").click(function () {
    $(this).removeClass("on");
    $("#aside .a_ai").removeClass("open");
    $("#aside .a_ai").removeClass("open2");
    $("#aside .af_ai").blur("");
    $("#aside .af_ai").removeClass("open");
    $("#aside .af_ai").removeClass("open2");
  });

  /* popbanner On Off */
  $("#aside .a_function ul li.af_popbanner button").click(function () {
    if (!$("#aside .a_pop").hasClass("open")) {
      $("#aside .a_pop").addClass("open");
      $("#aside .a_function ul li.af_popbanner").addClass("open");

      setTimeout(function () {
        $("#aside .a_pop").addClass("open2");
        $("#aside .a_function ul li.af_popbanner button > span").text(decodeURIComponent("%EB%B0%B0%EB%84%88%20%EB%8B%AB%EA%B8%B0"));
        $("#aside .a_function ul li.af_popbanner button").attr("aria-expanded", "true");

        if ($("#aside .a_pop .ap_silde").length) {
          const dots = document.querySelector("#aside .slick-dots");
          const nav = document.querySelector("#aside .ap_nav");

          if (dots && nav) {
            const firstChild = nav.children[1];

            if (firstChild) {
              nav.insertBefore(dots, firstChild);
            } else {
              nav.appendChild(dots);
            }

            for (var i = 0; i < $("#aside .slick-dots li").length; i++) {
              $("#aside .slick-dots li:eq(" + i + ") button").attr("tabindex", "4220");
            }
            $("#aside .a_pop .ap_silde .slick-active a").attr("tabindex", "4201");
            $("#aside .a_pop .ap_nav .apn_control").attr("tabindex", "4210");
            $("#aside .a_pop .ap_nav .apn_close button").attr("tabindex", "4230");
          }
        }
      }, 10);
    } else {
      $("#aside .a_pop").removeClass("open2");
      setTimeout(function () {
        $("#aside .a_pop").removeClass("open");
        $("#aside .a_function ul li.af_popbanner").removeClass("open");
        $("#aside .a_function ul li.af_popbanner button > span").text(decodeURIComponent("%EB%B0%B0%EB%84%88%20%EC%97%B4%EA%B8%B0"));
        $("#aside .a_function ul li.af_popbanner button").attr("aria-expanded", "false");
      }, 300);
    }
  });
  /* popbanner Off */
  $("#aside .a_pop .ap_nav .apn_close button.close").click(function () {
    $("#aside .a_pop").removeClass("open2");
    setTimeout(function () {
      $("#aside .a_pop").removeClass("open");
      $("#aside .a_function ul li.af_popbanner").removeClass("open");
      $("#aside .a_function ul li.af_popbanner button > span").text(decodeURIComponent("%EB%B0%B0%EB%84%88%20%EC%97%B4%EA%B8%B0"));
    }, 300);
    $("#aside .a_function ul li.af_popbanner button").attr("aria-expanded", "false");
  });

  /* popbanner Off */
  $("#aside .a_pop .ap_nav .apn_close button.today").click(function () {
    $("#aside .a_pop").removeClass("open2");
    setTimeout(function () {
      $("#aside .a_pop").removeClass("open");
      $("#aside .a_function ul li.af_popbanner").removeClass("open");
    }, 300);

    /* ? ?™?˜™? ?™?˜™? ?‹­?š¸?˜™ */
    /* ? ?‹¹ë£¨ë™? ?™?˜™ ?˜¹? ?™?˜™ ? ?™?˜™? ?™?˜™? ?‹¹?“¸?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™  */
    setCookie("popupClosed", "true", 1);
    $("#aside .a_function ul li.af_popbanner button").attr("aria-expanded", "false");
  });

  /* ? ?™?˜™?¬? ?™?˜™ ?´? ?™?˜™? ?™?˜™ ? ?Œ?‚¼?˜™? ?™?˜™? ?™?˜™? ï¿? ? ?‹±?“¸?˜™ */
  $("#aside .a_function ul li.af_scrolltop button").click(function () {
    $("html, body").animate({ scrollTop: "0" }, 1000, "swing");
  });

  $("html, body").on("mousewheel DOMMouseScroll", function (e) {
    $("body,html").stop(false);
  });

  // AI Ball ?°?™”? ?™?˜™
  const MIN_SPEED = 3;
  const MAX_SPEED = 6;

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  class Blob {
    constructor(el) {
      this.el = el;
      const boundingRect = this.el.getBoundingClientRect();
      this.size = boundingRect.width;
      this.initialX = randomNumber(0, 390);
      this.initialY = randomNumber(0, 540);
      this.el.style.top = `${this.initialY}px`;
      this.el.style.left = `${this.initialX}px`;
      this.vx = randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
      this.vy = randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
      this.x = this.initialX;
      this.y = this.initialY;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x >= 390 - this.size) {
        this.x = 390 - this.size;
        this.vx *= -1;
      }
      if (this.y >= 540 - this.size) {
        this.y = 540 - this.size;
        this.vy *= -1;
      }
      if (this.x <= 0) {
        this.x = 0;
        this.vx *= -1;
      }
      if (this.y <= 0) {
        this.y = 0;
        this.vy *= -1;
      }
    }

    move() {
      this.el.style.transform = `translate(${this.x - this.initialX}px, ${this.y - this.initialY}px)`;
    }
  }

  function initBlobs() {
    const blobEls = document.querySelectorAll(".aab_ball");
    const blobs = Array.from(blobEls).map((blobEl) => new Blob(blobEl));

    function update() {
      requestAnimationFrame(update);
      blobs.forEach((blob) => {
        blob.update();
        blob.move();
      });
    }

    requestAnimationFrame(update);
  }

  initBlobs();

  // AI Ball? ?™?˜™? ?™?˜™?™”? ?™?˜™
  const MIN_SPEED2 = 0.25;
  const MAX_SPEED2 = 0.5;

  class Blob2 {
    constructor(el) {
      this.el = el;
      const boundingRect = this.el.getBoundingClientRect();
      this.size = boundingRect.width;
      this.initialX = randomNumber(window.innerWidth - 80, window.innerWidth - 20);
      this.initialY = randomNumber(window.innerHeight - 160, window.innerHeight - 220);
      this.el.style.top = `${this.initialY}px`;
      this.el.style.left = `${this.initialX}px`;
      this.vx = randomNumber(MIN_SPEED2, MAX_SPEED2) * (Math.random() > 0.5 ? 1 : -1);
      this.vy = randomNumber(MIN_SPEED2, MAX_SPEED2) * (Math.random() > 0.5 ? 1 : -1);
      this.x = this.initialX;
      this.y = this.initialY;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x >= 60 - this.size) {
        this.x = 60 - this.size;
        this.vx *= -1;
      }
      if (this.y >= 60 - this.size) {
        this.y = 60 - this.size;
        this.vy *= -1;
      }
      if (this.x <= 0) {
        this.x = 0;
        this.vx *= -1;
      }
      if (this.y <= 0) {
        this.y = 0;
        this.vy *= -1;
      }
    }

    move() {
      this.el.style.transform = `translate(${this.x - this.initialX}px, ${this.y - this.initialY}px)`;
    }
  }

  function initBlobs2() {
    const blobEls2 = document.querySelectorAll(".afasb_ball");
    const blobs2 = Array.from(blobEls2).map((blobEl) => new Blob2(blobEl));

    function update() {
      requestAnimationFrame(update);
      blobs2.forEach((blob2) => {
        blob2.update();
        blob2.move();
      });
    }

    requestAnimationFrame(update);
  }

  initBlobs2();

  setTimeout(function () {
    $("body").addClass("onload");

    if ($(".tabwrap.t1 .tab").length) {
      $(".tabwrap.t1 .t_btn").attr("aria-expanded", "false");
      $(".tabwrap.t1 .t_btn.on").attr("aria-expanded", "true");
    }

    if ($(".tabwrap.t2 .tab").length) {
      $(".tabwrap.t2 .t_btn").attr("aria-expanded", "false");
      $(".tabwrap.t2 .t_btn.on").attr("aria-expanded", "true");
    }
  }, 100);

  $("#cate .c_copy").on("click", function () {
    // ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™? ?™?˜™ URL? ?™?˜™ ? ?™?˜™? ?™?˜™? ?™?˜™? ?™?˜™
    var currentUrl = window.location.href;

    // ? ?Œˆ?™?˜™ ? ?Œ”?™?˜™?Š¸ ? ?™?˜™? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™? ï¿? URL? ?™?˜™ ? ?™?˜™? ?™?˜™
    var tempInput = $("<input>");
    $("body").append(tempInput);
    tempInput.val(currentUrl).select();
    document.execCommand("copy");
    tempInput.remove();
    //alert("URL%EC%9D%B4%20%EB%B3%B5%EC%82%AC%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4.");
    alert(decodeURIComponent("URL%EC%9D%B4%20%EB%B3%B5%EC%82%AC%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4."));
  });

  $("#footer .f_function .ff_familysite").on("click", function () {
    $(this).toggleClass("on");
    if ($("#footer .f_function .ff_familysite").hasClass("on")) {
      $("#footer .f_function .ff_familysite").attr("aria-expanded", "true");
    } else {
      $("#footer .f_function .ff_familysite").attr("aria-expanded", "false");
    }
  });

  // ?´? ?™?˜™ ? ?‹±ë¸ì˜™?Š¸ ? ?Œ˜?“¤?Ÿ¬
  $("#contents .c_menu > li").on("click", function (e) {
    e.stopPropagation(); // ?´? ?™?˜™ ? ?‹±ë¸ì˜™?Š¸? ?™?˜™ ? ?™?˜™? ?™?˜™ ? ?™?˜™ì²´å ?™?˜™ ? ?™?˜™? ?‹?“¸?˜™? ?™?˜™ ? ?‹­?“¸?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™

    // ?´? ?™?˜™? ?™?˜™ li ? ?™?˜™? ?™?˜™ ? ?™?˜™? ï¿? li? ?™?˜™ ? ?™?˜™? ?™?˜™æ¿±å ï¿? ? ?Œ¥ê¹ì˜™
    $("#contents .c_menu > li").not(this).removeClass("on").addClass("off");
    $("#contents .c_menu > li").not(this).children("ul").hide();

    // ?´? ?™?˜™? ?™?˜™ li? ?™?˜™ ? ?™?˜™? ?™?˜™æ¿±å ï¿? ? ?™?˜™? ?™?˜™/? ?Œ¥ê¹ì˜™
    if ($(this).hasClass("on")) {
      $(this).removeClass("on").addClass("off");
      $(this).children("ul").hide();
    } else if ($(this).hasClass("off")) {
      $(this).removeClass("off").addClass("on");
      $(this).children("ul").show();
    }
  });

  // ? ?™?˜™? ?™?˜™ ? ?™?˜™ì²´å ?™?˜™? ?™?˜™ ?´? ?™?˜™ ? ?™?˜™ ? ?™?˜™? ?™?˜™æ¿±å ï¿? ? ?Œ¥ê¹ì˜™ (? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™)
  $(document).on("click", function (e) {
    // ? ?™?˜™? ?™?˜™ ? ?Œ¨?Œ?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™
    if ($("#contents .c_menu > li.on").length) {
      // ?´? ?™?˜™? ?™?˜™ ? ?™?˜™?Ÿ°? ï¿? .c_menu ? ?™?˜™? ?‹¸ê³¤ì˜™ ? ?‹£?Œ?˜™ ? ?™?˜™?‘?ˆ½?˜™? ï¿? ? ?™?˜™? ?™?˜™æ¿±å ï¿? ? ?Œ¥ê¹ì˜™
      if (!$(e.target).closest("#contents .c_menu").length) {
        $("#contents .c_menu ul").hide();
        $("#contents .c_menu > li").removeClass("on").addClass("off");
      }
    }
    // ? ?™?˜™? ?™?˜™ ? ?Œ¨?Œ?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™
    if ($("#footer .f_function .ff_familysite.on").length) {
      // ?´? ?™?˜™? ?™?˜™ ? ?™?˜™?Ÿ°? ï¿? .c_menu ? ?™?˜™? ?‹¸ê³¤ì˜™ ? ?‹£?Œ?˜™ ? ?™?˜™?‘?ˆ½?˜™? ï¿? ? ?™?˜™? ?™?˜™æ¿±å ï¿? ? ?Œ¥ê¹ì˜™
      if (!$(e.target).closest("#footer .f_function .ff_familysite").length) {
        $("#footer .f_function .ff_familysite ul").hide();
        $("#footer .f_function .ff_familysite").removeClass("on");
      }
    }
  });

  // ?´? ?™?˜™ ? ?‹±ë¸ì˜™?Š¸ ? ?Œ˜?“¤?Ÿ¬
  $("#cate .c_menu > ul > li").on("click", function (e) {
    e.stopPropagation(); // ?´? ?™?˜™ ? ?‹±ë¸ì˜™?Š¸? ?™?˜™ ? ?™?˜™? ?™?˜™ ? ?™?˜™ì²´å ?™?˜™ ? ?™?˜™? ?‹?“¸?˜™? ?™?˜™ ? ?‹­?“¸?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™

    // ?´? ?™?˜™? ?™?˜™ li ? ?™?˜™? ?™?˜™ ? ?™?˜™? ï¿? li? ?™?˜™ ? ?™?˜™? ?™?˜™æ¿±å ï¿? ? ?Œ¥ê¹ì˜™
    $("#cate .c_menu > ul > li").not(this).removeClass("on").addClass("off");
    $("#cate .c_menu > ul > li").not(this).children("ul").hide();

    // ?´? ?™?˜™? ?™?˜™ li? ?™?˜™ ? ?™?˜™? ?™?˜™æ¿±å ï¿? ? ?™?˜™? ?™?˜™/? ?Œ¥ê¹ì˜™
    if ($(this).hasClass("on")) {
      $(this).removeClass("on").addClass("off");
      $(this).children("ul").hide();
      $(this).children("button").attr("aria-expanded", "false");
    } else if ($(this).hasClass("off")) {
      $(this).removeClass("off").addClass("on");
      $(this).children("ul").show();
      $(this).children("button").attr("aria-expanded", "true");
    }
  });

  // ? ?™?˜™? ?™?˜™ ? ?™?˜™ì²´å ?™?˜™? ?™?˜™ ?´? ?™?˜™ ? ?™?˜™ ? ?™?˜™? ?™?˜™æ¿±å ï¿? ? ?Œ¥ê¹ì˜™ (? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™)
  $(document).on("click", function (e) {
    // ? ?™?˜™? ?™?˜™ ? ?Œ¨?Œ?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™
    if ($("#cate .c_menu > ul > li.on").length) {
      // ?´? ?™?˜™? ?™?˜™ ? ?™?˜™?Ÿ°? ï¿? .c_menu ? ?™?˜™? ?‹¸ê³¤ì˜™ ? ?‹£?Œ?˜™ ? ?™?˜™?‘?ˆ½?˜™? ï¿? ? ?™?˜™? ?™?˜™æ¿±å ï¿? ? ?Œ¥ê¹ì˜™
      if (!$(e.target).closest("#cate .c_menu > ul").length) {
        $("#cate .c_menu > ul > li > ul").hide();
        $("#cate .c_menu > ul > li").removeClass("on").addClass("off");
      }
    }
    // ? ?™?˜™? ?™?˜™ ? ?Œ¨?Œ?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™ ? ?™?˜™? ?™?˜™
    if ($("#footer .f_function .ff_familysite.on").length) {
      // ?´? ?™?˜™? ?™?˜™ ? ?™?˜™?Ÿ°? ï¿? .c_menu ? ?™?˜™? ?‹¸ê³¤ì˜™ ? ?‹£?Œ?˜™ ? ?™?˜™?‘?ˆ½?˜™? ï¿? ? ?™?˜™? ?™?˜™æ¿±å ï¿? ? ?Œ¥ê¹ì˜™
      if (!$(e.target).closest("#footer .f_function .ff_familysite").length) {
        $("#footer .f_function .ff_familysite ul").hide();
        $("#footer .f_function .ff_familysite").removeClass("on");
      }
    }
  });

  function openPopup(url, title, width, height) {
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    window.open(url, title, `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`);
  }
  $('input[type="number"][maxlength]').on("input", function () {
    const maxLength = parseInt($(this).attr("maxlength"), 10);
    if ($(this).val().length > maxLength) {
      $(this).val($(this).val().slice(0, maxLength));
    }
  });

  if (navigator.userAgent.toLowerCase().includes("firefox")) {
    $("body").addClass("firefox");
  }

  // ? ?™?˜™? ï¿? class="comma" ? ?™?˜™å¥´å ï¿? ? ?‹±ë¸ì˜™?Š¸ ? ?™?˜™? ?™?˜™? ?™?˜™ ? ?Œ©ê³¤ì˜™
  const inputBoxes = document.querySelectorAll(".comma");
  inputBoxes.forEach((inputBox) => {
    inputBox.addEventListener("input", (event) => {
      let value = event.target.value;
      // ? ?™?˜™? ?™?˜™ ? ?Œ¨ëªŒì˜™ ? ?™?˜™? ?™?˜™
      value = value.replace(/,/g, "");
      // ? ?™?˜™? ?Œ˜ê³¤ì˜™ ? ?‹£?Œ?˜™ ? ?™?˜™ ? ?™?˜™? ?‹¶ëªŒì˜™
      if (isNaN(value)) {
        value = value.replace(/[^0-9]/g, "");
      }
      // ì²? ? ?™?˜™? ?™?˜™ ? ?Œ¨ëªŒì˜™ ? ?Œ©ê³¤ì˜™
      event.target.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
  });

  const searchBoxContainer = document.querySelectorAll(".has_searchbox form");

  searchBoxContainer.forEach((search) => {
    const searchBox = search.firstElementChild;
    const searchReset = searchBox.nextElementSibling;

    searchBox.addEventListener("input", function () {
      const thisSearchInputValue = this.value.replace(/\s/g, "");

      if (thisSearchInputValue === "") {
        searchReset.setAttribute("disabled", "");
      } else {
        searchReset.removeAttribute("disabled");
      }
    });

    searchReset.addEventListener("click", function () {
      searchBox.value = "";
      this.setAttribute("disabled", "");
    });
  });
});

// ? ?™?˜™?‚¤ ? ?™?˜™? ?™?˜™
function setCookie(name, value, days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = `${name}=${value}; path=/; expires=${date.toUTCString()}`;
}

// ? ?™?˜™?‚¤ ? ?™?˜™? ?™?˜™? ?™?˜™? ?™?˜™
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split("=");
    if (key === name) return value;
  }
  return null;
}

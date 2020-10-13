$(document).ready(function () {
  $('.slider').slick({ arrows: true, autoplaySpeed: 1000 });
  $('.section.section-1 .tabs-group .tabs .tab-title').click(function () { $(this).next().slideToggle(), $(this).toggleClass("minimize") })

  $('.create-account form .form-group i.fa-eye-slash').click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $(this).siblings('#password');
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }

  })

  $('.create-account-tabs li').click(function () {
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
    let ids = $(this).attr('id')
    $(`.create-account-tabs-content #${ids}-content`).siblings().hide()
    $(`.create-account-tabs-content #${ids}-content`).show()
  })

  // $('.create-account-manu li').click(function () {
  //   $(this).siblings().removeClass('active')
  //   $(this).addClass('active')
  //   let id = $(this).attr('id')
  //   $(`.create-account-manu-content #${id}-content`).siblings().hide()
  //   $(`.create-account-manu-content #${id}-content`).show()
  // })

  $('.create-account form #formback').click(function () {
    let id = $(this).parents('li.create-account').attr('id')
    $('html, body').animate({
      scrollTop: $(".create-account-manu-content").offset().top
    }, 800);
    $(`.create-account-manu-content > li#${id}`).hide()
    $(`.create-account-manu-content > li#${id}`).prev().show()
    $('html, body').animate({
      scrollTop: $(".create-account-manu-content").offset().top
    }, 800);

  })
  $('.create-account form #formbackinfo').click(function () {
    let id = $(this).parents('li.create-account').attr('id')
    $('html, body').animate({
      scrollTop: $(".create-account-manu-content").offset().top
    }, 800);
    $(`.create-account-manu li#${id}2-id`).removeClass('active')
    $(`.create-account-manu li#${id}2-id`).prev().addClass('active')
    $(`.create-account-manu-content > li#${id}`).hide()
    $(`.create-account-manu-content > li#${id}`).prev().show()
    $('html, body').animate({
      scrollTop: $(".create-account-manu-content").offset().top
    }, 800);
  })

  $('.create-account form #formbacktrading').click(function () {
    let id = $(this).parents('li.create-account').attr('id')
    $('html, body').animate({
      scrollTop: $(".create-account-manu-content").offset().top
    }, 800);
    $(`.create-account-manu li#${id}5-id`).removeClass('active')
    $(`.create-account-manu li#${id}5-id`).prev().addClass('active')
    $(`.create-account-manu-content > li#${id}`).hide()
    $(`.create-account-manu-content > li#${id}`).prev().show()
    $('html, body').animate({
      scrollTop: $(".create-account-manu-content").offset().top
    }, 800);
  })

  $('.create-account form #formbacksimple').click(function () {
    let id = $(this).parents('li.create-account').attr('id')
    $('html, body').animate({
      scrollTop: $(".create-account-manu-content").offset().top
    }, 800);
    $(`.create-account-manu li#${id}-id`).removeClass('active')
    $(`.create-account-manu li#${id}-id`).prev().addClass('active')
    $(`.create-account-manu-content > li#${id}`).hide()
    $(`.create-account-manu-content > li#${id}`).prev().show()
    $('html, body').animate({
      scrollTop: $(".create-account-manu-content").offset().top
    }, 800);
  })

  $(".create-account form#corporate-account, .create-account form#joint-account, .create-account form#individual-account").submit(function (e) {
    e.preventDefault()
    let id = $(this).parents('li.create-account').attr('id')
    $(`.create-account-manu li#${id}-id`).next().addClass('active')
    $(`.create-account-manu li#${id}-id`).removeClass('active')
    $(`.create-account-manu-content > li#${id}`).next().show()
    $(`.create-account-manu-content > li#${id}`).hide()
    $('html, body').animate({
      scrollTop: $(".create-account-manu-content").offset().top
    }, 800);
  })

  $('.create-account form#basic-info').submit(function (e) {
    e.preventDefault()
    let id = $(this).parents('li.create-account').attr('id')
    $(`.create-account-manu-content > li#${id}`).next().show()
    $(`.create-account-manu-content > li#${id}`).hide()
    $('html, body').animate({
      scrollTop: $(".create-account-manu-content").offset().top
    }, 800);
  })

  $('.create-account form#basic-info2').submit(function (e) {
    e.preventDefault()
    let id = $(this).parents('li.create-account').attr('id')
    $(`.create-account-manu li#${id}-id`).next().addClass('active')
    $(`.create-account-manu li#${id}-id`).removeClass('active')
    $(`.create-account-manu-content > li#${id}`).next().show()
    $(`.create-account-manu-content > li#${id}`).hide()
    $('html, body').animate({
      scrollTop: $(".create-account-manu-content").offset().top
    }, 800);
  })

  $('.create-account form#trading').submit(function (e) {
    e.preventDefault()
    let id = $(this).parents('li.create-account').attr('id')
    $(`.create-account-manu-content > li#${id}`).next().show()
    $(`.create-account-manu-content > li#${id}`).hide()
    $('html, body').animate({
      scrollTop: $(".create-account-manu-content").offset().top
    }, 800);
  })

  $('.create-account form#trading2').submit(function (e) {
    e.preventDefault()
    let id = $(this).parents('li.create-account').attr('id')
    $(`.create-account-manu-content > li#${id}`).next().show()
    $(`.create-account-manu-content > li#${id}`).hide()
    $('html, body').animate({
      scrollTop: $(".create-account-manu-content").offset().top
    }, 800);
  })
  $('.create-account form#trading3').submit(function (e) {
    e.preventDefault()
    let id = $(this).parents('li.create-account').attr('id')
    $(`.create-account-manu-content > li#${id}`).next().show()
    $(`.create-account-manu-content > li#${id}`).hide()
    $('html, body').animate({
      scrollTop: $(".create-account-manu-content").offset().top
    }, 800);
  })
  $('.create-account form#trading4').submit(function (e) {
    e.preventDefault()
    let id = $(this).parents('li.create-account').attr('id')
    $(`.create-account-manu-content > li#${id}`).next().show()
    $(`.create-account-manu-content > li#${id}`).hide()
    $('html, body').animate({
      scrollTop: $(".create-account-manu-content").offset().top
    }, 800);
  })
  $('.create-account form#trading5').submit(function (e) {
    e.preventDefault()
    let id = $(this).parents('li.create-account').attr('id')
    $(`.create-account-manu li#${id}-id`).next().addClass('active')
    $(`.create-account-manu li#${id}-id`).removeClass('active')
    $(`.create-account-manu-content > li#${id}`).next().show()
    $(`.create-account-manu-content > li#${id}`).hide()
    $('html, body').animate({
      scrollTop: $(".create-account-manu-content").offset().top
    }, 800);
  })
  $('.create-account form#agreements').submit(function (e) {
    e.preventDefault()
    let id = $(this).parents('li.create-account').attr('id')
    $(`.create-account-manu li#${id}-id`).next().addClass('active')
    $(`.create-account-manu li#${id}-id`).removeClass('active')
    $(`.create-account-manu-content > li#${id}`).next().show()
    $(`.create-account-manu-content > li#${id}`).hide()
    $('html, body').animate({
      scrollTop: $(".create-account-manu-content").offset().top
    }, 800);
  })
  $('.create-account form#address').submit(function (e) {
    e.preventDefault()
    let id = $(this).parents('li.create-account').attr('id')
    $(`.create-account-manu li#${id}-id`).removeClass('active')
    $(`.create-account-manu-content > li#${id}`).next().show()
    $(`.create-account-manu-content > li#${id}`).hide()
    $('html, body').animate({
      scrollTop: $(".create-account-manu-content").offset().top
    }, 800);
  })
  $('.create-account form#thankyou').submit(function (e) {
    e.preventDefault()
    alert('completed')
    $('html, body').animate({
      scrollTop: $(".create-account-manu-content").offset().top
    }, 800);
  })

});
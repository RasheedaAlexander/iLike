// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$.ajax({
  url: "https://api.instagram.com/v1/users/self/media/liked?access_token=30799451.f89139e.79f62261ef4f4abc89c9afb03a86486e",
  type: "get",
  dataType: "json"
  // $.ajax takes an object as an argument with at least three key-value pairs...
  // (1) The URL endpoint for the JSON object.
  // (2) Type of HTTP request.
  // (3) Datatype. Usually JSON.
}).done((response) => {
  console.log(response)
  // Here is where you place code for DOM manipulation or anything else you'd like to do with the response
}).fail(() => {
  console.log("Ajax request fails!")
}).always(() => {
  console.log("This always happens regardless of successful ajax request or not.")
})

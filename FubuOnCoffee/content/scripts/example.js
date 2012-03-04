$(document).ready(function () {
    var builder = new TemplateBuilder();
    var msg = builder.build('World');

    $('#message').html(msg);
});
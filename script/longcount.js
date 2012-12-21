/*
 * Celebrate the Mayan Long Count New Baktun!
 */

Date.prototype.longCount = function() {
    var count = 1856305 + this / 1000 / 60 / 60 / 24;
    return [144000, 7200, 360, 20, 1].map(function(factor) {
        var digit = Math.floor(count / factor);
        count %= factor;
        return digit;
    }).join(".");
};

$(document).ready(function() {
    $('time.date').each(function() {
        this.innerHTML = new Date(this.getAttribute('datetime')).longCount();
    });
    $('ul.archive li').each(function() {
        var $this = $(this);
        var text = $this.contents().first();
        var date = new Date(text.text().match(/\d+-\d+-\d+/)[0]);
        text.replaceWith(date.longCount() + ' - ');
        $this.css('font-size', '85%');
    });
});

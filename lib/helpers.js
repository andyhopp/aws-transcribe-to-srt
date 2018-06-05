'use strict'

module.exports =
class Helpers
{
    constructor()
    {
        function padString(string, length) {
            return (new Array(length + 1).join('0') + string).slice(-length);
        }

        this.secondsToMinutes = function(seconds)
        {
            var hours = 0;
            var minutes = 0;
            hours = Math.floor(seconds / 3600);
            seconds = seconds - (hours * 3600);
            minutes = Math.floor(seconds / 60);
            seconds = (seconds - (minutes * 60)).toFixed(3);
    
            var response = padString(hours, 2) + ':' + padString(minutes, 2) + ':' + padString(seconds, 6);
            return response;
        }
    }
}

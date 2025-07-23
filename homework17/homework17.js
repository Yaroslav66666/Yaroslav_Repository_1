$(function () {
    $('#button').click(function () {
        const number = $('#number').val() || 666;
        const url = `http://numbersapi.com/${number}`;

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'text', 
            success: function (data) {
                $('#result').text(data);
            },
            error: function () {
                $('#result').text('Будь ласка, введіть правильне число');
            }
        });
    });
});

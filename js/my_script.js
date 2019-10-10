$(document).ready(function() {
    // $('th').removeClass('underline');
    // $('td').removeClass('border');
    // $('tr:nth-child(even)>td').addClass('even');
    // $('tr:nth-child(odd)>td').addClass('odd');
    // $('tr:even').addClass('even');
    // $('tr:odd').addClass('odd');
    $('th').click(function() {
        $('tr').children().removeClass('highlight');
        // $(this).addClass('highlight');
        $(this).siblings().addClass('highlight');
        // $(this).parent().children().addClass('highlight');
    });
});

// $(document).ready(function() {

    $("#BestMatch").chosen();
    $("#AnyBudget").chosen();
    $("#Delivery").chosen();
    $("#Location").chosen();



    const url = 'http://localhost:3000/posts';





    const template = document.getElementById('template').innerHTML;

    function loadUser() {

            const template = $('#template').html();
        Mustache.parse(template);

        axios.get(url).then(res => {
            const data = res.data;

            const renderedStuff = Mustache.render(template, {data});
            $('#root').html(renderedStuff);


        });

    }
// });



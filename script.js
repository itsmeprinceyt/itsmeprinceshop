document.getElementById('showButton').addEventListener('click', function() {
    var myDiv = document.getElementById('orders');
    if (myDiv.style.opacity === 0)
    {
        myDiv.style.opacity = 1;
    }
    else
    {
        myDiv.style.opacity = 1;
    }
    });
    document.getElementById('hideButton').addEventListener('click', function() {
    var myDiv = document.getElementById('orders');
    myDiv.style.opacity = 0;
    });
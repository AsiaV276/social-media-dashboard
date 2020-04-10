checkBox.checked = true;

function changeDarkMode() {
    //var checkBox = document.getElementById('toggle-dark-mode');

    /* selecting elements */
    var socialBox = document.getElementsByClassName('social-box');
    var igBox = document.getElementsByClassName('ig-border-inner');
    var overviewBox = document.getElementsByClassName('overview-box');
    var background = document.body;

        //changing social boxes
        var i;
        for (i = 0; i < socialBox.length; i++) {
            socialBox[i].classList.toggle('light-social-box');
        }

        //changing ig background box
        igBox[0].classList.toggle('light-social-box');

        //changing overview boxes
        var x;
        for (x = 0; x < overviewBox.length; x++) {
            overviewBox[x].classList.toggle('light-overview-box');
        }
        
        //changing background
        background.classList.toggle('light-body');

        

    
    
}

changeDarkMode();
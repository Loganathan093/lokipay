var num = document.getElementById("n");
    var form = document.getElementById("form");
    var price = document.getElementById("rs").textContent;
    
    var val = 5;
    var countdown = setInterval(() => {
        val--;
        num.textContent = val;
        if(val === 0){
            clearInterval(countdown)
            num.textContent = "Please enter coupon code given to you"
            form.classList.remove("dis")
        }
    }, 1000);

    document.getElementById("btn").addEventListener("click", function(){
        var inp = document.getElementById("cc").value;
        var price = document.getElementById("rs");
        
            num.textContent = "Coupon Code Applied";
            document.getElementById("cc").value = "";
            form.classList.add("dis");
            setInterval(() => {
                num.classList.add("dis");
                price.classList.remove("dis");
            }, 1000);
       
    })
    // function pay(){
    //     var inp = document.getElementById("cc").value;
    //     var price = document.getElementById("rs");
    //         if(inp == "keerthi"){
    //         num.textContent = "Coupon Code Applied :)";
    //         document.getElementById("cc").value = "";
    //         form.classList.add("dis");
    //         setInterval(() => {
    //             num.classList.add("dis");
    //             price.classList.remove("dis");
    //         }, 1000);
    //     }
    //     else{
    //         num.textContent = 'Please enter "keerthi" eruma maadu'
    //     }
    // }

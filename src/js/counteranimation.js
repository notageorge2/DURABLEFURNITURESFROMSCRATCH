let counts = setInterval(updated);
        let counts2 = setInterval(updated2);
        let counts3 = setInterval(updated3);
        let upto = 0;
        
        function updated() {
            let count = document.getElementById("number");
          
           
            count.innerHTML = ++upto;
           


            if (upto >= 1509) {
                clearInterval(counts)
            }
            
        
        }

        function updated2(){
            let count2 = document.getElementById("number2");
            count2.innerHTML = ++upto;
            
            if (upto >= 30) {
                clearInterval(counts2)
            }
        }



        function updated3(){
            let count3 = document.getElementById("number3");
            count3.innerHTML = ++upto;
            
            if (upto >= 2500) {
                clearInterval(counts3)
            }
        }
    
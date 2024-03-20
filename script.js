const result = document.getElementById("final");
const submit = document.getElementById("submit");


submit.addEventListener('click', () => {

        // const physics = document.getElementById("phy").value;
        // const chemistry = document.getElementById("chem").value;
        // const maths = document.getElementById("math").value;
        const marks = document.getElementById("mrk").value;

        
        if(marks>=90){
               var grade = 'A';
        }
        else if(marks>=80){
                var grade = 'B';
        }
        else if(marks>=70){
                var grade = 'C';
        }
        else if(marks>=60){
                var grade = 'D';
        }
        else{
                var grade = 'F';
        }
        

        result.innerHTML = "Your grade is "+ grade;

});


// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    service.initialize().done(function () {
        console.log("Service initialized");
    });

    /* --------------------------------- Event Registration -------------------------------- */
    $('.search-key').on('keyup', findByName);
    $('.search-key2').on('keyup', findByL_Name);
    $('.help-btn').on('click', function() {
        alert("Employee Directory v3.4");
    });

    /* ---------------------------------- Local Functions ---------------------------------- */
    function findByName() {
        //if($('.search-key').val().length<2)return;
         var firstName=$('.search-key').val();
         var DR;
        firstName= firstName.replace(/\s+/g, '');
        service.findByName(firstName).done(function (employees){ 
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i = 0; i < l; i++) {
             e = employees[i];
             DR=  e.firstName + '  ' + e.lastName;
            }
        });
         if($('.search-key').val().length>1){
                document.getElementById('output').innerHTML= DR;
                } else{
                 document.getElementById('output').innerHTML=[];
                }          
            
    }

    function findByL_Name(){
        //if($('.search-key2').val().length<2)return;
         var lastName=$('.search-key2').val();
         var DR;
        lastName= lastName.replace(/\s+/g,'');
        service.findByL_Name(lastName).done(function (employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i = 0; i < l; i++) {
                e = employees[i];
            DR= e.firstName + '  ' + e.lastName;
            }
            
        });
        
        if($('.search-key2').val() length>1){
            document.getElementById('output').innerHTML= DR;
            } else{
            document.getElementById('output').innerHTML=[];
            }
    }

});
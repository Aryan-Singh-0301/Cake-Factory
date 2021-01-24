function calculate(){
    var Style, Decoratons, ShapeAndStructure, FlavoursAndFillings, Colours;
    Decoratons = document.getElementsByName("Decorations");
    ShapeAndStructure = document.getElementsByName("Shape&Structure");
    FlavoursAndFillings = document.getElementsByName("Flavours&Fillings");
    Colours = document.getElementsByName("Colours");
    Style = document.getElementsByName("cakeStyle");
    ShapeAndStructure = document.getElementsByName("Shape&Structure");
    if(document.getElementById("Budget").value == "" || document.getElementById("Slices").value == ""){
        alert("You need to specify a value for the first two fields!");
    }
    else{
        var num_slices = parseInt(document.getElementById("Slices").value);
        if(isChecked(Style)==true){
            if(isChecked(Decoratons)){
                var DecorationsValue = 20 * num_slices ;
                if(isChecked(ShapeAndStructure)){
                    var Shapevalue
                    if(ShapeAndStructure[0].checked||ShapeAndStructure[3].checked||ShapeAndStructure[8].checked){
                        Shapevalue = 20 * num_slices;
                    }
                    else if(ShapeAndStructure[2].checked){
                        Shapevalue = 30 * num_slices;
                    }
                    else if(ShapeAndStructure[1].checked||ShapeAndStructure[5].checked||ShapeAndStructure[7].checked){
                        Shapevalue = 40 * num_slices;
                    }
                    else{
                        Shapevalue = 50 * num_slices;
                    }
                    if(isChecked(FlavoursAndFillings)){
                        var FlavourValue = 10 * num_slices;
                        if(isChecked(Colours)){
                            var ColourValue = 5 * num_slices;
                            var sub_total = DecorationsValue + Shapevalue + FlavourValue + ColourValue;
                            if(sub_total > parseFloat(document.getElementById("Budget").value)){
                                alert("Your sub total amount surpasses your budget");
                            }
                            else{
                                document.getElementById("sub-total").innerHTML = "$"+ sub_total;
                                document.getElementById("Tax").innerHTML = "$" + (sub_total*0.13);
                                document.getElementById("TotalPrice").innerHTML = "$" + ((sub_total*0.13) + sub_total);
                            }
                        }
                        else{
                            alert("The fifth category needs to be checked");
                        }
                    }
                    else{
                        alert("The fourth category needs to be specified");
                    }
                }
                else{
                    alert("The third category needs to be checked");
                }
            }
            else{
                alert("The second category needs to be checked");
            }
        }
        else{
            alert("First catgory needs to be checked");
        }
    }

function isChecked(array){
    for(i = 0; i<array.length; i++){
        if(array[i].checked){
            return true;
        }
    }
}
}
//start buy & rent
$(document).ready(function(){
    $("#Make").change(function(){
        var val = $(this).val();
        if(val == "op1"){
            $("#Model").html("<option>1 Series</option><option>1 Series M</option><option>2 Series</option><option>3 Series</option><option>4 Series</option><option>5 Series</option><option>6 Series</option><option>7 Series</option><option>8 Series</option><option>i3</option><option>i4</option><option>i8</option><option>iX</option><option>M2</option><option>M3</option><option>M4</option><option>M5</option><option>M6</option><option>M8</option><option>X1</option><option>X2</option><option>X3</option><option>X3 M</option><option>X4</option><option>X4 M</option><option>X5</option><option>X5 M</option><option>X6</option><option>X6 M</option><option>X7</option><option>Z3</option><option>Z4</option><option>Z8</option>")
        }
        else if(val == "op2"){
            $("#Model").html("<option>Aerostar Cargo Van</option><option>Aerostar Wagon</option><option>Aspire/option><option>Bronco</option><option>Bronco Sport</option> <option>C-Max</option><option>Club Wagon</option><option>Contour</option><option>Crown victoria</option><option>Econoline Cargo Van</option><option>Econoline Wagon</option><option>EcoSport</option><option>Edge</option><option>Escape</option><option>Escort</option><option>Excursion</option><option>Expedition</option><option>Explorer</option><option>Explorer Sport Trac</option><option>F-150</option><option>F-150 Lightning</option><option>Fiesta</option><option>Five Hundered</option><option>Flex</option><option>Focus</option><option>Freestar Cargo Van</option><option>Freestar Wagon</option><option>Freestyle</option><option>Fusion</option>")
        }
        else if(val == "op3"){
            $("#Model").html("<option>200SX</option><option>240SX</option><option>350Z</option><option>370Z</option><option>Altima</option><option>Armada</option><option>Cube</option><option>Frontier</option> <option>GT-R</option><option>JUKE</option><option>Kicks</option><option>LEAF</option><option>Maxima</option><option>Murano</option><option>NV</option><option>NV Cargo</option><option>NV Passenger</option><option>NV 200</option><option>NV 200 Compact Cargo</option><option>Pathfinder</option><option>Pathfinder Armada</option><option>Quest</option><option>Rogue</option><option>Rogue Select</option><option>Rogue Sport</option><option>Sentra</option><option>Titan</option><option>Titan XD</option><option>Trucks</option><option>Versa</option><option>Xterva</option>")
        }
        else if(val == "op4"){
            $("#Model").html("<option>A3</option><option>A4</option><option>A4</option><option>A4  ALLROAD</option><option>A5</option><option>A6</option><option>A6 allroad</option><option>A7</option><option>A8</option><option>allroad</option><option>Cabriolet</option><option>e-tron</option><option>e-tron GT</option><option>e-tron s</option><option>Q3</option><option>Q4 e-tron</option><option>Q5</option><option>Q7</option><option>Q8</option><option>R8</option><option>RS 3</option><option>RS 4</option><option>RS 5</option><option>RS 6 Avant</option><option>RS 7</option><option>RS e-tron GT</option><option>RS Q8</option><option>RS6</option><option>S3</option><option>S4</option><option>S5</option><option>S6</option><option>S7</option><option>S8</option><option>SQ5</option><option>SQ7</option><option>SQ8</option><option>TT</option><option>TT RS</option><option>TTS</option>")
        }
        else if(val == "op5"){
            $("#Model").html("<option>Cherokee</option><option>Commander</option><option>Compass</option><option>Gladiator</option><option>Grand Cherokee</option><option>Grand Cherokee WK</option><option>Grand Wagoneer</option><option>Liberty</option><option>Patriot</option><option>Renegade</option><option>Wagoneer</option><option>Wrangler</option>")
        }
        else if(val == "op6"){
            $("#Model").html("<option>Clubman</option><option>Convertible</option><option>Cooper</option><option>Cooper Coupe</option><option>Cooper Paceman</option><option>Cooper Roadster</option><option>Countryman</option><option>Hardtop</option>")
        }
        else if(val == "op7"){
            $("#Model").html("<option>4Runner</option><option>86</option><option>Avalon</option><option>C-HR</option><option>Camry</option><option>Camry Solara</option><option>Celica</option><option>Corolla</option><option>Corolla Cross</option><option>Corolla Hatchback</option><option>Corolla iM</option><option>Echo</option><option>FJ Cruiser</option><option>GR Supra</option><option>GR86</option><option>Highlander</option><option>Land Cruiser</option><option>Matrix</option><option>Mirai</option><option>MR2 Spyder</option><option>Paseo</option><option>Previa</option><option>Prius</option><option>Prius C</option><option>Prius Prime</option><option>Prius V</option><option>RAV4</option><option>RAV4 Prime</option><option>Sequoia</option><option>Sienna</option><option>Supra</option><option>T100</option><option>Tacoma</option><option>Tercel</option><option>Tundra</option><option>Venza</option><option>Yaris</option><option>Yaris iA</option>")
        }
        else if(val == "op8"){
            $("#Model").html("<option>Astro Cargo Van</option><option>Astro Passenger</option><option>Avalanche</option><option>Aveo</option><option>Blazer</option><option>Bolt EUV</option><option>Bolt EV</option><option>C/K 1500</option><option>C/K 2500</option> <option>C/K 3500</option><option>Camaro</option><option>Captiva Sport Fleet</option><option>Cavalier</option><option>Chevy Cargo Van</option><option>City Express Cargo Van</option><option>Cobalt</option><option>Colorado</option><option>Corvette</option><option>Cruze</option>")
        }
        else if(val == "op9"){
            $("#Model").html("<option>A-Class</option><option>AMG GT</option><option>B-Class</option><option>C-Class</option><option>CL</option><option>CLA</option><option>CLK</option><option>CLS</option><option>E-Class</option><option>EQS</option><option>G-Class</option><option>GL</option><option>GLA</option><option>GLC</option><option>GLE</option><option>GLK</option><option>GLS</option><option>MClass</option>")
        }
        else if(val == "op10"){
            $("#Model").html("<option>Accent</option><option>Azera</option><option>Elantra</option><option>Entourage</option><option>Equus</option><option>Genesis</option><option>Genesis Coupe</option><option>Ioniq</option><option>IONIQ 5</option><option>Ioniq Electric</option><option>Kona</option><option>Kona Electric</option><option>NEXO</option><option>palisade</option><option>Santa Cruz</option><option>Santa Fe</option><option>Santa Fe Sport</option><option>Santa Fe XL</option><option>Santa </option>")
        }
    });
});
$(document).ready(function(){
    var val = $(this).val();
    for(i=800; i<=6400; i+=100){
        
    }
});

//end buy & rent

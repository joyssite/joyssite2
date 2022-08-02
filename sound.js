for( var i=0;i<28;i++){
document.querySelectorAll(".but")[i].addEventListener("click",function(){

    var text=this.innerHTML;
    console.log(text);
    

    switch(text){
        case "GLASS BREAK":
            var audio=new Audio("song/gls.mp3");
            audio.play();
            break;
        case "GUN":
                var audio=new Audio("song/gun.mp3");
                audio.play();
                break;

        case "THUNDER":
                    var audio=new Audio("song/thd.mp3");
                    audio.play();
                    break;

        case "RAIN":
                        var audio=new Audio("song/rain.mp3");
                        audio.play();
                        break;
                        
        case "FIRE":
                    var audio=new Audio("song/fir.mp3");
                    audio.play();
                    break;

        case "TRAIN":
                    var audio=new Audio("song/trn.mp3");
                    audio.play();
                    break;

        case "HEARTBEAT":
                    var audio=new Audio("song/hb.mp3");
                    audio.play();
                    break;

        case "WRONG":
                    var audio=new Audio("song/xx.mp3");
                    audio.play();
                    break;

         case "CLAP":
                    var audio=new Audio("song/clp.mp3");
                    audio.play();
                    break;

        case "SIREN":
                    var audio=new Audio("song/sir.mp3");
                    audio.play();
                    break;

                    case "KITNI AWESOME":
                        var audio=new Audio("song2/aws.mp3");
                        audio.play();
                        break;
                    case "STYLE":
                            var audio=new Audio("song2/babu.mp3");
                            audio.play();
                            break;
            
                    case "TATA":
                                var audio=new Audio("song2/bye.mp3");
                                audio.play();
                                break;
            
                    case "HERA PHIRI":
                                    var audio=new Audio("song2/hp.mp3");
                                    audio.play();
                                    break;
                                    
                    case "hERA 2":
                                var audio=new Audio("song2/hp2.mp3");
                                audio.play();
                                break;
            
                    case "HERA 3":
                                var audio=new Audio("song2/hp3.mp3");
                                audio.play();
                                break;
            
                    case "JALI NA":
                                var audio=new Audio("song2/jali.mp3");
                                audio.play();
                                break;
            
                    case "ITNI KHUSI":
                                var audio=new Audio("song2/khusi.mp3");
                                audio.play();
                                break;
            
                     case "KON HAIN":
                                var audio=new Audio("song2/kon.mp3");
                                audio.play();
                                break;
            
                    case "LAUGH 1":
                                var audio=new Audio("song2/laf.mp3");
                                audio.play();
                                break;
                                case "LAUGH 2":
                                    var audio=new Audio("song2/laf2.mp3");
                                    audio.play();
                                    break;
                                case "MAAF":
                                        var audio=new Audio("song2/maf.mp3");
                                        audio.play();
                                        break;
                        
                                case "VAI MARO":
                                            var audio=new Audio("song2/maro.mp3");
                                            audio.play();
                                            break;
                        
                                case "MARO 2":
                                                var audio=new Audio("song2/maro2.mp3");
                                                audio.play();
                                                break;
                                                
                                case "MAZA A GEYA":
                                            var audio=new Audio("song2/maza.mp3");
                                            audio.play();
                                            break;
                        
                                case "SAKT LAUNDA":
                                            var audio=new Audio("song2/sakt.mp3");
                                            audio.play();
                                            break;
                        
                                case "UTHA LERE":
                                            var audio=new Audio("song2/utha.mp3");
                                            audio.play();
                                            break;
                        
                                case "KEYA SCENE":
                                            var audio=new Audio("song2/wah.mp3");
                                            audio.play();
                                            break;
                        
                                 
                    
                                
            
    }

});
}

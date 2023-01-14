let s = "playing je hy football."
            let c, i
            b = 0
            a = 0
            console.log (s.length)
            
            for (i=0; i<=s.length; i++){
            c = s[i]
            if (c=="a"|| c=="e" || c=="i" || c=="o" || c=="u" ||
            c=="A"|| c=="E"|| c=="I" || c=="O" || c=="U"){
                
                b = b + 1;
             
            }
            if (c == " "){
                a = a + 1
            }
            
            }

            console.log("le nombre de caratere est :" , a+1)
            console.log("le nombre de vowels est :" +b)
            
            
        

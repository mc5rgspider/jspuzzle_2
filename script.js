//Loop through magazine (j)
//Another loop inside of the magazine loop
//Loop through ransomNote and compare a letter in ransomNote to magazine 
//Check if the first character of the magazine is in ransomNote 
//Increment count if the letter is identical
//Outside of the ransomNote loop
//If count != 1 then, return false and break
//If j == length of magazine then return true

//It works if break works 
function puzzle() {

    //let ransomNote = "green grape";
    let ransomNote = "its grape";
    let magazine = "grape";

    let count = 0;

    //Loop through magazine (j)
    for(let j=0; j < magazine.length; j++) {

        //Loop through ransomNote 
        for(let i=0; i < ransomNote.length; i++) {
            
            //Compare each letter magazine and ransomNote
            //Increment count if they are identical
            if(magazine[j] == ransomNote[i])
            {
                count++;
            }
            
            //When loop goes through all the elements
            if(i == ransomNote.length){

                //If same latter appear more than once, return false
                if(count > 1){
                    return false;

                    //break doesn't work 
                    break;
                }
            }

        }

        //When all the elements are checked without exiting the loops, return true
        if(j == (magazine.length - 1)){
            return true;
        }

        //Reset count
        count = 0;
    }
}

//Run function
if(puzzle())
{
    console.log("True");
}
else
{
    console.log("False");
}
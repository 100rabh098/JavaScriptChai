//IMMIEDIETLY INVOLED FUNCTION EXPRESION (IIFE)

//GLOBAL SCOPE KE POLLUTION SE FUNCTION KO BACHANE K LIYE IIFE USE KRTE H


(function chai(){

    ///NAMED IIFE : CHAI
    console.log("DB- Connected")
}) () ;  //////***.    HERE ; IS MADATORY TO END IIFE ANS START NEXT       */

//=>.  ()() : second paranthesis for function call

( (name)=> {
    //NOT NAMED IIFE
    console.log( `${name} , helooo DB-connected Two`)
})('saurabh')

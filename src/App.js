function HelloUser()
{
    return 
    (
        
               <h1>Hello</h1>
        
    )
}



function GreetingGM()
{
     const date=new Date();
     const ch=date.getHours();
     const cm=date.getMinutes();
    return(
        <h1>Good Morning({ch}:{cm})</h1>
    )
}
function GreetingGE()
{
     const date=new Date();
     const ch=date.getHours();
     const cm=date.getMinutes();
    return(
        <h1>Good Evening({ch}:{cm})</h1>
    )
}

  export default HelloUser;  {/* default export . it can   present only once in js file , use for mostly used components.*/}

export {
    GreetingGM,
    GreetingGE
}; {/* namedexport */}
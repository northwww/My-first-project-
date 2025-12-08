async function dogAsync()
{
    try{
        let query = await fetch("https://dog.ceo/api/breeds/image/random");
        let Dogs = await query.json();
        document.getElementById("dog").src = Dogs.message;
    }
    catch(error)
    {
        console.error(error);
    }
}
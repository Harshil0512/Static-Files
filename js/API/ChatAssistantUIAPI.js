const getUI = async ()=>{
    try
    {
        data = await fetch("http://127.0.0.1:8000/AIC/api/chat_assistant/ui/?api=8Mu7135B.yGit9mZ4ZhvhLwvNz7BcrURxHhfQGrEj",
            {mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin':'*'
          }
            }
        )
        data = await data.text()
        document.getElementById("AIC_Chat_Assistant").innerHTML = data;
            
    }
    catch(e)
    {
        console.log(e)
    }
}

getUI();
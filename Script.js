function generateVoice(){

    let text=document.getElementById("scriptBox").value
    
    let voice=document.getElementById("voice")
    
    voice.src="https://api.streamelements.com/kappa/v2/speech?voice=Brian&text="+encodeURIComponent(text)
    
    }
    
    function playPresenter(){
    
    let voice=document.getElementById("voice")
    let mouth=document.getElementById("mouth")
    
    voice.play()
    
    let shapes=["neutral.png","ai.png","ee.png","oh.png","m.png"]
    
    let i=0
    
    let talking=setInterval(function(){
    
    mouth.src=+shapes[i]
    
    i++
    
    if(i>=shapes.length){
    i=0
    }
    
    },150)
    
    voice.onended=function(){
    clearInterval(talking)
    mouth.src="neutral.png"
    }
    
    }
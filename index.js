var mainElement = document.querySelectorAll('.cozyMessage-3V1Y8y')
mainElement.forEach(item => {
   var btnNum = 0;
   item.addEventListener('mouseover', event => {
      // console.log(item.childNodes[2].childNodes[0].childNodes[0])
      if (btnNum == 0) {

         try {
            var buttonGroupDiv = item.childNodes[2].childNodes[0].childNodes[0]
            var button = document.createElement("BUTTON");
            button.innerHTML = "Button";
            buttonGroupDiv.style.backgroundColor = 'red'
            buttonGroupDiv.appendChild(button)
            btnNum = 1;
            button.addEventListener('click', event => {
               console.log('clicked')

               var messageContainer = item.childNodes[0]

               console.log(messageContainer.childNodes.length != 3)

               if (messageContainer.childNodes.length != 3) {
                  console.log('contained')
                  console.log(messageContainer.childNodes[1].innerHTML)
               } else {
                  console.log('alone')
                  console.log(messageContainer.childNodes[2].innerHTML)
               }
            })
         } catch (err) {
            // if any error, Code throws the error
         }
      }
   })
})
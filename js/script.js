console.log('Vue ok', Vue);

//per collegarlo con l' estensione
Vue.config.devtools = true;

const root = new Vue (
    {
        el: '#root', 
        data: {
            helloText: 'Hello Vue!',
            media: 'https://picsum.photos/200/300',
        }
    } 
);
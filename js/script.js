console.log('Vue ok', Vue);

const root = new Vue (
    {
        el: '#root', 
        data: {
            helloText: 'Hello World!',
            media: 'https://picsum.photos/200/300',
        }
    } 
);
AFRAME.registerComponent("log",{
    schema:{
        message:{type:"string",default:"Hello World I am Alive!!!"}
    },
    init:function(){
        console.log(this.data.message);
    }
})
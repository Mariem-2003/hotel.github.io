class slider {
    constructor(){
        this. images =[];
        this.images [0]="img/puyt.jpg";
        this.images [1]="img/Thanks For Reading.png";
          

        this. links=[];
        this. links[0]="#";
        this. links[1]="#";
        this.counter=0;
        this.playslider();
        setInterval(()=>{
            this.playslider();
        },4000)
    }
    playslider(){
        if(this.counter< this.counter.length-1){
            this.counter++;
        }
        else{
            this.counter=0;
        }
        document.slider_show.src = this.images[this .counter];
        document .getElementById("show").href=this. links[this.counter];
    }
}
onload=new slider();
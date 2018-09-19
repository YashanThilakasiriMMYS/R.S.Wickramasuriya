var arr=[[null,null,null],[null,null,null],[null,null,null]];
var player=false;
var winner;
var won=false;
var point1=0,point2=0;

function doClick(id,i,j){
    if(won){
        restart();
        return;
    }

    if(player==0){
        arr[i][j]=false;
        id.innerHTML='O';
        
    }else{
        arr[i][j]=true;
        id.innerHTML='X';
        
    }

    for(var i=0;i<=2;i++){
        if(arr[i][0]==player && arr[i][1]==player && arr[i][2]==player){
            winner=player;
            won=true;
        }
    }

    for(var j=0;j<=2;j++){
        if(arr[0][j]==player && arr[1][j]==player && arr[2][j]==player){
            winner=player;
            won=true;
        }
    }

    if((arr[0][0]==player && arr[1][1]==player && arr[2][2]==player) || (arr[0][2]==player && arr[1][1]==player && arr[2][0]==player)){
        winner=player;
        won=true;
    }

    if(won){
        console.log("Winner is "+winner);
        if(winner){
            point1+=1;
            var p1=document.getElementById('point1');
            p1.innerHTML=point1;
        }else{
            point2+=1;
            var p2=document.getElementById('point2');
            p2.innerHTML=point2;
        }
        
    }

    player = !player;
    
}

function restart(){
    for(i=0;i<2;i++){
        for(j=0;j<2;j++){
            arr[i][j]=null;
        }
    }
    var b1=document.getElementById('b1');
    b1.innerHTML=" ";
    var b2=document.getElementById('b2');
    b2.innerHTML="";
    var b3=document.getElementById('b3');
    b3.innerHTML="";
    var b4=document.getElementById('b4');
    b4.innerHTML="";
    var b5=document.getElementById('b5');
    b5.innerHTML="";
    var b6=document.getElementById('b6');
    b6.innerHTML="";
    var b7=document.getElementById('b7');
    b7.innerHTML="";
    var b8=document.getElementById('b8');
    b8.innerHTML="";
    var b9=document.getElementById('b9');
    b9.innerHTML="";

    won=!won;
}


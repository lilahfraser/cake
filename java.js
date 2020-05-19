function eat_cake(str){
    var num = 0;
    var pt1 = "";
    var pt2 = "";
    var pt3 = "";

    if(str.length % 2 == 0){
        pt1 = str.substring(0,str.length/2 +0.5);
        pt2 = str.substring(str.length/2 +0.5, str.length);
        }else{
        pt1 = str.substring(0,str.length/2);
        pt2 = str.substring(str.length/2, str.length);
    }
    for(var i = 0; i < pt2.length; i++) {
        if (pt2.substring(i, i +1) == pt1.substring(0, 1)) {
            num = 0;
            for(var q = i; q < pt2.length; q++){
                if(pt2.substring(q, q +1) == pt1.substring(num, num +1)){
                } else {
                    break;
                }
                num++;
                if(q == pt2.length -1){
                    pt3 = pt1.substring(0, num);
                }
            }
        }
    }
    if(pt3 == ""){
        return 1;
    }
    return str.length/pt3.length;
}

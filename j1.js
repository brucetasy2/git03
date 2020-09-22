
for (i=3 ; i <= 15 ; i++) {     
    var o2="";
     for (j=3 ; j <= 15 ; j++) {   
        var o1=i.toString()+"*"+j.toString()+"="+(i*j).toString();
        o2=o2+"  "+o1
    }
    console.log(o2);   
}


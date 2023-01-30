//  let str = "Open Web Academy";
//  console.log(str.endsWith('y'));
// let str = 'Open Web Academy'
// console.log(str.indexOf('e' , 7 ))
// let str = 'Open Web Academy'
// console.log(str.substr(5));
// let str = "Open Web Academy";
// console.log(str.substring(-2, 2));
// let str = "Open Web Academy";
// console.log(str.includes("Web"));
 let str = "Amir Temurning oilasiAmir Temurning onasi Takina xonim edi. Otasi Amir Taragay esa turkiy barlos urugining oqsoqollaridan hamda Chigatoy ulusining etiborli beklaridan hisoblangan. Uning ajdodlari Kesh viloyatida hokimlik qilishgan. Shu bois Amir Temurning otasi amir Taragay ham yilda bir marotaba Ili daryosi boyida xon tomonidan chaqiriladigan el-yurt beklarining qurultoyiga taklif etilar va u bunday yiginlarda muttasil qatnashar edi. Shu bilan birga u, Sharafuddin Yazdiyning taʼkidlashiga koʻra, „ulamo va sulaho va muttaqiylargʻa mushfiq va mehribon erdi va bularning majlisiga borur erdi…“. Taragʻayjon piri Shamsuddin Kulolni ayniqsa chuqur ehtirom qilgan. Keyinchalik shayx Kulol Amir Temurning ham piri boʻlgan. Taragʻaybek 1405-yilda vafot etgan.Amir Temurning katta opasi Qutlugʻ Turkon ogʻo va singli"



function checkText(x){
    let i = 0
    let i2 = x.length
    let result 
    let text = x
   
    while( i < x.length + 1){
    
        if( x.indexOf("A" , i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{
        }

        if( x.indexOf("a", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}
        if( x.indexOf("E", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{} 
        if( x.indexOf("e", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}
      
        if( x.indexOf("I", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}
        if( x.indexOf("i", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}
        if( x.indexOf("U", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}
        if( x.indexOf("u", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}
        if( x.indexOf("O", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}
        if( x.indexOf("o", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}
        if( x.indexOf("O'", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}
        if( x.indexOf("o'", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}
        i++
        i2--
        
       
    }
    console.log(x.substring(0, i))
    console.log(text)
    
} 

checkText(str)
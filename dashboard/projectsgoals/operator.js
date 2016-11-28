calculardias = function(f1,f2,f3)
{
    var aFecha1 = f1.split('-');
    var aFecha2 = f2.split('-');
    var aFecha3 = f3.split('-');
    var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
    var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
    var fFecha3 = Date.UTC(aFecha3[2],aFecha3[1]-1,aFecha3[0]);
    var total = (fFecha2 - fFecha1);
    var ret =  (fFecha1 -fFecha3);
    var dif = (total+ret);
    var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
    return dias;
}
diastotales = function(f1,f2)
{
    var aFecha1 = f1.split('-');
    var aFecha2 = f2.split('-');
    var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
    var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
    var dif = (fFecha2 - fFecha1);
    var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
    return dias;
}
var f1=document.getElementById("fecha_inicial" ).innerText;
var f2=document.getElementById("fecha_final" ).innerText;
var f3=document.getElementById("fecha_reto" ).innerText;
document.getElementById('myDiv').innerHTML = calculardias(f1,f2,f3);
document.getElementById('total').innerHTML = diastotales(f1,f2);


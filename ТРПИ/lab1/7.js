let a = prompt("Сколько экзаменов сдал студент?","")
if(a==="3"){
  alert("Его переведут на следующий курс")
}
else if(a==="2"||a==="1"){
  alert("Его ожидает пересдача")
}
else if(a=="0"){
  alert("Его отчислят")
}
else{
  alert("Некорректное значение")
}

function createitem(parent,x,y)
{
    console.log(x,y)
    var item=Qt.createComponent("GroundItem.qml");
        var t= item.createObject(parent);
        t.x=x
        t.y=y

}

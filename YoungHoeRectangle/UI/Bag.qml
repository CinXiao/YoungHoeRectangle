import QtQuick 2.9
import "../Data.js" as Data
Item {
    width:1000
    height:600
    signal selecteitem(var name)
    id:root



    Rectangle
    {
    color:"#cccccc"
    radius:3
    anchors.fill: parent

    Flow
    {
        id:bag
        spacing: 10
        anchors
        {
         left:parent.left
         leftMargin:5
         right:parent.right
         rightMargin:5
         top:parent.top
         topMargin:5
         bottom:parent.bottom
         bottomMargin:5

        }




        Component.onCompleted:
        {
            for(var i=0;i<Data.GroundNameData.length;i++){
           var item=Qt.createComponent("SelectButtonItem.qml")
            var t=item.createObject(bag,{"name":Data.GroundNameData[i]})
            t.selected.connect(selecteitem);
                }
        }


        SelectButtonItem
        {
            name:"sandstone"
               onSelected:
               {
                root.selecteitem(name)
               }
        }


    }



    }



}

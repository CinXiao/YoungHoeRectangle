import QtQuick 2.9

Item {
    property string name:""
    width: 111/2
    height: 128/2
    id:root
  Image {
      width: 111/2
      height: 128/2
      anchors.right: parent.right
      id:img
      source: "qrc:/source/img/ground/"+name
  }
  Component.onCompleted:
  {
      root.x-=(root.width/2)
      root.y-=(root.height/2)
  }


}

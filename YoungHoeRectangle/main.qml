import QtQuick 2.15
import QtQuick.Window 2.15
import QtQuick.Controls 2.5
import QtMultimedia 5.15
import "UI"

Window {

    property string selectedname: ""
   // property alias selecteditem:
    MediaPlayer {
        source:  ""//"qrc:/source/music/main.mp3"
        loops: 5000
        autoPlay: true
    }

    minimumHeight: 800
    minimumWidth: 1200
    maximumHeight: 800
    maximumWidth: 1200
    visible: true
    title: "YoungHoe方块"

    id: window

    MouseArea {
        anchors.fill: parent
        onClicked: {
            createitem(mouseX, mouseY)
        }
    }

    Bag
    {
     z:1
     anchors.centerIn: parent
     id:bag
     visible: false
     onSelecteitem:
     {
       tools.setitem(name)
         selectedname=name
     }
    }

    MainMenu {
        id:tools
        z:1
        onOpenbag: {
            bag.visible=isopen
        }
        onSelectitem:
        {
            selectedname=name;
        }
    }


    function createitem(x, y) {
        console.log(x, y)

        var item = Qt.createComponent("GroundItem.qml")
        if (item.status === Component.Ready) {
            item.createObject(window, {
                                  "x": x,
                                  "y": y,
                                  "name":selectedname
                              })
        }
    }
}

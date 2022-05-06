import QtQuick 2.15
import QtQuick.Controls 2.5

Item {

    property bool bagisopen: false
    signal selectitem(var name)
    signal openbag(var isopen)
    property int selected_x: item1.x
    property int current: 1
    function setitem(name) {
        switch (current) {
        case 1:
            item1.name = name
            break
        case 2:
            item2.name = name
            break
        case 3:
            item3.name = name
            break
        case 4:
            item4.name = name
            break
        case 5:
            item5.name = name
            break
        case 6:
            item6.name = name
            break
        case 7:
            item7.name = name
            break
        case 8:
            item8.name = name
            break
        case 9:
            item9.name = name
            break
        case 10:
            item10.name = name
            break
        }
    }
    width: 680
    height: 60
    anchors.bottom: parent.bottom
    anchors.horizontalCenter: parent.horizontalCenter
    id: root
    Rectangle {
        id: back
        radius: 2
        color: "#6B6B6B"

        anchors.fill: parent
        MouseArea {
            anchors.fill: parent
            onClicked: {

            }
        }
    }

    Button {

        anchors {
            right: root.right
            top: root.top
            rightMargin: 10
            topMargin: 5
        }
        width: 50
        height: 50
        text: "..."
        onClicked: {
            bagisopen = !bagisopen
            root.openbag(bagisopen)
        }
    }
    Rectangle
    {
    width: 60
    height: 52
    x:selected_x+15
   anchors.top: back.top
   anchors.topMargin: 1
    radius:2


    }

    Flow {

        width: 640
        height: 55
        spacing: 10
        anchors.centerIn: root
        id: menuitem
        SelectButtonItem {

            id: item1
            name: "gress.png"
            onSelected: {
                current = 1
                selected_x=item1.x
                root.selectitem(name)
            }
        }
        SelectButtonItem {
            id: item2
            name: "basalt.png"
            onSelected: {
                current = 2
                 selected_x=item2.x
                root.selectitem(name)
            }
        }
        SelectButtonItem {
            id: item3
            name: "granite.png"
            onSelected: {
                current = 3
                selected_x=item3.x
                root.selectitem(name)
            }
        }
        SelectButtonItem {
            id: item4
            name: "Ironblocks.png"
            onSelected: {
                current = 4
                selected_x=item4.x
                root.selectitem(name)
            }
        }
        SelectButtonItem {
            id: item5
            name: "RedRock.png"
            onSelected: {
                current = 5
                selected_x=item5.x
                root.selectitem(name)
            }
        }
        SelectButtonItem {
            id: item6
            name: "rock.png"
            onSelected: {
                current = 6
                selected_x=item6.x
                root.selectitem(name)
            }
        }
        SelectButtonItem {
            id: item7
            name: "Sand.png"
            onSelected: {
                current = 7
                selected_x=item7.x
                root.selectitem(name)
            }
        }
        SelectButtonItem {
            id: item8
            name: "stone.png"
            onSelected: {
                current = 8
                selected_x=item8.x
                root.selectitem(name)
            }
        }
        SelectButtonItem {
            id: item9
            name: "Stonebricks.png"
            onSelected: {
                current = 9
                selected_x=item9.x
                root.selectitem(name)
            }
        }
        SelectButtonItem {
            id: item10
            name: "sandstone.png"
            onSelected: {
                current = 10
                selected_x=item10.x
                root.selectitem(name)
            }
        }
    }
}

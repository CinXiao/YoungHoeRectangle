import QtQuick 2.9
import QtMultimedia 5.15

Item {

    signal selected(var name);
    id:root
    property string name: ""
    width: 50
    height: 50

    MediaPlayer
    {

        id:_audio
        source:"qrc:/source/audio/hover.mp3"
        volume:0.2

    }
    Image {
     width:parent.width-5
     height: parent.height-5

     id:img

     anchors.centerIn: parent
     source: "qrc:/source/img/ground/"+name
     MouseArea
     {

         anchors.fill: parent
         hoverEnabled: true
         onEntered:
         {

             img.width=55
             img.height=55
             _audio.play()


         }
         onExited:
         {
             img.width=50
             img.height=50
         }
         onClicked:
         {

             root.selected(name)
         }

     }
   }



}

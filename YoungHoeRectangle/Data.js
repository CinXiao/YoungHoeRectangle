.pragma library

var GroundNameData = ["basalt.png", "bricks.png", "coal mine.png",
                      "diamond mine.png", "granite.png", "gress.png",
                      "Ironblocks.png", "magma.png", "RedRock.png",
                      "rock.png", "Sand.png", "sandstone.png",
                      "stone.png", "Stonebricks.png", "Whitebirch.png",
                      "wood.png"

                      //以下是测试模块
                      ,
                      "Testground/Voxel tiles/voxelTile_01.png"                      ,
                      "Testground/Voxel tiles/voxelTile_02.png"                      ,
                      "Testground/Voxel tiles/voxelTile_03.png"                      ,
                      "Testground/Voxel tiles/voxelTile_04.png"                      ,
                      "Testground/Voxel tiles/voxelTile_05.png"                      ,
                      "Testground/Voxel tiles/voxelTile_07.png"                      ,
                      "Testground/Voxel tiles/voxelTile_09.png"                      ,
                      "Testground/Voxel tiles/voxelTile_10.png"                      ,
                      "Testground/Voxel tiles/voxelTile_11.png"                      ,
                      "Testground/Voxel tiles/voxelTile_12.png"                      ,
                      "Testground/Voxel tiles/voxelTile_13.png"                      ,
                      "Testground/Voxel tiles/voxelTile_16.png"                      ,
                      "Testground/Voxel tiles/voxelTile_17.png"                      ,
                      "Testground/Voxel tiles/voxelTile_18.png"                      ,
                      "Testground/Voxel tiles/voxelTile_19.png"                      ,
                      "Testground/Voxel tiles/voxelTile_20.png"                      ,
                      "Testground/Voxel tiles/voxelTile_21.png"                      ,
                      "Testground/Voxel tiles/voxelTile_22.png"                      ,
                      "Testground/Voxel tiles/voxelTile_23.png"                      ,
                      "Testground/Voxel tiles/voxelTile_24.png"                      ,
                      "Testground/Voxel tiles/voxelTile_25.png"                      ,
                      "Testground/Voxel tiles/voxelTile_26.png"                      ,
                      "Testground/Voxel tiles/voxelTile_27.png"                      ,
                      "Testground/Voxel tiles/voxelTile_28.png"                      ,
                      "Testground/Voxel tiles/voxelTile_29.png"                      ,
                      "Testground/Voxel tiles/voxelTile_32.png"                      ,
                      "Testground/Voxel tiles/voxelTile_33.png"                      ,
                      "Testground/Voxel tiles/voxelTile_34.png"                      ,
                      "Testground/Voxel tiles/voxelTile_35.png"                      ,
                      "Testground/Voxel tiles/voxelTile_37.png"                      ,
                      "Testground/Voxel tiles/voxelTile_39.png",
                      "Testground/Voxel tiles/voxelTile_40.png",
                      "Testground/Voxel tiles/voxelTile_41.png",
                      "Testground/Voxel tiles/voxelTile_42.png",
                      "Testground/Voxel tiles/voxelTile_43.png",
                      "Testground/Voxel tiles/voxelTile_44.png",
                      "Testground/Voxel tiles/voxelTile_45.png",
                      "Testground/Voxel tiles/voxelTile_47.png",
                      "Testground/Voxel tiles/voxelTile_48.png",
                      "Testground/Voxel tiles/voxelTile_49.png",
                      "Testground/Voxel tiles/voxelTile_50.png",
                      "Testground/Voxel tiles/voxelTile_51.png",
                      "Testground/Voxel tiles/voxelTile_52.png",
                      "Testground/Voxel tiles/voxelTile_53.png",
                      "Testground/Voxel tiles/voxelTile_54.png",
                      "Testground/Voxel tiles/voxelTile_55.png"

                      //以下是测试模块2
                      ,"Testground/Platformer tiles/platformerTile_02.png"
                      ,"Testground/Platformer tiles/platformerTile_04.png"
                      ,"Testground/Platformer tiles/platformerTile_06.png"
                      ,"Testground/Platformer tiles/platformerTile_07.png"
                      ,"Testground/Platformer tiles/platformerTile_09.png"
                      ,"Testground/Platformer tiles/platformerTile_10.png"
                      ,"Testground/Platformer tiles/platformerTile_12.png"
                      ,"Testground/Platformer tiles/platformerTile_16.png"
                      ,"Testground/Platformer tiles/platformerTile_17.png"
                      ,"Testground/Platformer tiles/platformerTile_18.png"
                      ,"Testground/Platformer tiles/platformerTile_21.png"
                      ,"Testground/Platformer tiles/platformerTile_22.png"
                      ,"Testground/Platformer tiles/platformerTile_23.png"
                      ,"Testground/Platformer tiles/platformerTile_24.png"
                      ,"Testground/Platformer tiles/platformerTile_26.png"
                      ,"Testground/Platformer tiles/platformerTile_28.png"
                      ,"Testground/Platformer tiles/platformerTile_29.png"
                      ,"Testground/Platformer tiles/platformerTile_30.png"
                      ,"Testground/Platformer tiles/platformerTile_32.png"
                      ,"Testground/Platformer tiles/platformerTile_33.png"
                      ,"Testground/Platformer tiles/platformerTile_34.png"
                      ,"Testground/Platformer tiles/platformerTile_36.png"
                      ,"Testground/Platformer tiles/platformerTile_37.png"
                      ,"Testground/Platformer tiles/platformerTile_38.png"
                      ,"Testground/Platformer tiles/platformerTile_39.png"
                      ,"Testground/Platformer tiles/platformerTile_40.png"
                      ,"Testground/Platformer tiles/platformerTile_41.png"
                      ,"Testground/Platformer tiles/platformerTile_42.png"
                      ,"Testground/Platformer tiles/platformerTile_43.png"
                      ,"Testground/Platformer tiles/platformerTile_44.png"
                      ,"Testground/Platformer tiles/platformerTile_45.png"
                      ,"Testground/Platformer tiles/platformerTile_46.png"
                      ,"Testground/Platformer tiles/platformerTile_47.png"
                      //以下是测试模块3
                      ,"Testground/Abstract tiles/abstractTile_01.png"
                      ,"Testground/Abstract tiles/abstractTile_02.png"
                      ,"Testground/Abstract tiles/abstractTile_03.png"
                      ,"Testground/Abstract tiles/abstractTile_04.png"
                      ,"Testground/Abstract tiles/abstractTile_05.png"
                      ,"Testground/Abstract tiles/abstractTile_06.png"
                      ,"Testground/Abstract tiles/abstractTile_07.png"
                      ,"Testground/Abstract tiles/abstractTile_08.png"
                      ,"Testground/Abstract tiles/abstractTile_09.png"
                      ,"Testground/Abstract tiles/abstractTile_10.png"
                      ,"Testground/Abstract tiles/abstractTile_11.png"
                      ,"Testground/Abstract tiles/abstractTile_12.png"
                      ,"Testground/Abstract tiles/abstractTile_13.png"
                      ,"Testground/Abstract tiles/abstractTile_14.png"
                      ,"Testground/Abstract tiles/abstractTile_15.png"
                      ,"Testground/Abstract tiles/abstractTile_16.png"
                      ,"Testground/Abstract tiles/abstractTile_17.png"
                      ,"Testground/Abstract tiles/abstractTile_18.png"
                      ,"Testground/Abstract tiles/abstractTile_19.png"
                      ,"Testground/Abstract tiles/abstractTile_20.png"
                      ,"Testground/Abstract tiles/abstractTile_21.png"
                      ,"Testground/Abstract tiles/abstractTile_22.png"
                      ,"Testground/Abstract tiles/abstractTile_23.png"
                      ,"Testground/Abstract tiles/abstractTile_24.png"
                      ,"Testground/Abstract tiles/abstractTile_25.png"
                      ,"Testground/Abstract tiles/abstractTile_26.png"
                      ,"Testground/Abstract tiles/abstractTile_27.png"
                      ,"Testground/Abstract tiles/abstractTile_28.png"
                      ,"Testground/Abstract tiles/abstractTile_29.png"
                      ,"Testground/Abstract tiles/abstractTile_30.png"
                      ,"Testground/Abstract tiles/abstractTile_31.png"
                      ,"Testground/Abstract tiles/abstractTile_32.png"
                      ,"tree.png"


        ]

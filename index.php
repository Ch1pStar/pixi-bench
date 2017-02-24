<!DOCTYPE html>
<html>
<head>
    <title>Party кълки</title>

    <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSMglEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII=" rel="icon" type="image/x-icon" />
    <style type="text/css">
        body{
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
    </style>
    <script type="text/javascript" src="lib/proton.js"></script>
    <script type="text/javascript" src="lib/pixi.js"></script>
    <script type="text/javascript" src="lib/pixi-animate.js"></script>

    <?php
        $path = "js/export/";
        $handle=opendir($path);
        while (($file = readdir($handle))!==false) {
            if($file != '..' && $file != '.') echo "<script type=\"text/javascript\" src=\"$path$file\"></script>\n";
        }
        closedir($handle);
    ?>

    <script type="text/javascript" src="js/main.js"></script>
</head>
<body>

</body>
</html>
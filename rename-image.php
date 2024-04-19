<?php

// 函式：遞迴處理資料夾中的檔案
function processFolder($folderPath) {
    // 取得資料夾中所有檔案和子資料夾
    $items = scandir($folderPath);

    // 迴圈處理每個項目
    foreach ($items as $item) {
        // 忽略 "." 和 ".."
        if ($item == "." || $item == "..") {
            continue;
        }

        // 檢查項目是否為資料夾
        if (is_dir($folderPath . $item)) {
            // 如果是資料夾，遞迴處理子資料夾
            processFolder($folderPath . $item . "/");
        } else {
            // 如果是檔案，執行修改檔名的動作
            echo 'file:' . $folderPath . $item . "\n";
            processFile($folderPath, $item);
        }
    }
}

// 函式：處理單個檔案
function processFile($folderPath, $fileName) {
    // 檢查檔案是否為圖片檔案
    $fileExt = pathinfo($fileName, PATHINFO_EXTENSION);
    if (in_array($fileExt, array("jpg", "jpeg", "png", "gif"))) {
        // 取得檔案名稱和副檔名
        $fileNameOnly = pathinfo($fileName, PATHINFO_FILENAME);

        // 判斷檔名是否符合修改條件
        if (preg_match('/^(.+)\s\((\d+)\)$/U', $fileNameOnly, $matches)) {
            // 修改檔名
            $newFileName = $matches[1] . "-" . $matches[2] . "." . $fileExt;
            // 移動檔案並重新命名
            rename($folderPath . $fileName, $folderPath . $newFileName);
            echo "已將 $fileName 修改為 $newFileName <br>";
        }
    }
}

// 指定的主資料夾路徑
$mainFolderPath = "image/";

// 呼叫遞迴處理資料夾函式
processFolder($mainFolderPath);

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crop images with Cropper</title>
    <!-- Normalize CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
<!-- Cropper CSS -->
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/cropper/2.3.4/cropper.min.css'>
<!-- Cropper JS -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/cropperjs/0.8.1/cropper.min.js'></script>
<link rel="stylesheet" href="style.css">
</head>
<body>
<main class="page">
    <div class="box">
        <input type="file" class="file-input" data-index="1">
    </div>
    <div class="box">
        <input type="file" class="file-input" data-index="2">
    </div>
    <div class="box">
        <input type="file" class="file-input" data-index="3">
    </div>
    <div class="box-2">
        <div class="result"></div>
    </div>
    <div class="box-2 img-result hide">
        <img class="cropped" src="" alt="">
    </div>
    <div class="box">
        <button class="btn save hide">Save</button>
    </div>
    <div class="box submit-box">
        <button class="btn submit-btn" disabled>Submit</button>
    </div>
</main>
<script src="app.js"></script>
</body>
</html>
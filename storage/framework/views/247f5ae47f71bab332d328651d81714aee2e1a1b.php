<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
        <link href="<?php echo e(asset('css/app.css')); ?>" rel="stylesheet">

        <script src="<?php echo e(asset('js/app.js')); ?>" defer></script>
    </head>
    <body class="antialiased">
        <div id="app">
            <?php echo $__env->yieldContent('main'); ?>
        </div>
    </body>
</html>
<?php /**PATH /Applications/MAMP/htdocs/productcatalogue/resources/views/layouts/main.blade.php ENDPATH**/ ?>
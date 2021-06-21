<?php $__env->startSection('content'); ?>
    <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('example')->html();
} elseif ($_instance->childHasBeenRendered('BnyUyf1')) {
    $componentId = $_instance->getRenderedChildComponentId('BnyUyf1');
    $componentTag = $_instance->getRenderedChildComponentTagName('BnyUyf1');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('BnyUyf1');
} else {
    $response = \Livewire\Livewire::mount('example');
    $html = $response->html();
    $_instance->logRenderedChild('BnyUyf1', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Applications/MAMP/htdocs/productcatalogue/resources/views/livewire.blade.php ENDPATH**/ ?>
<?php

namespace Accessibility;

use MapasCulturais\App;
use MapasCulturais\i;


class Plugin extends \MapasCulturais\Plugin
{
    function __construct(array $config = [])
    {
              
        parent::__construct($config);
    }

    public function _init()
    {
        $app = App::i();

        // enqueue scripts and styles
        $app->view->enqueueScript('app', 'accessibility', 'js/accessibility.js');
        $app->view->enqueueStyle('app', 'accessibility', 'css/accessibility.css');
         
        // add hooks
        $app->hook('template(<<*>>.<<*>>.main-footer):begin', function () use ($app) {
            $this->part('accessibility/controls');
        });

        $app->hook('template(<<*>>.<<*>>.main-footer):end', function () use ($app) {
            $this->part('accessibility/vlibras');    
        });    
    }
    /**
     * Registra os controladores e metadados das entidades
     *
     * @return void
     */
    public function register()
    {
        $app = App::i();

       
             
    }
}
?>

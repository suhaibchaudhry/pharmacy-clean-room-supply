<?php print $doctype; ?>
<html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf->version . $rdf->namespaces; ?>>
    <head<?php print $rdf->profile; ?>>
        
         <?php if ($_SERVER['HTTP_HOST'] == 'www.pharmacycleanroomsupply.com' && $_SERVER['REQUEST_URI'] == '/') { ?>
            <title>Pharmacy Cleanroom Supply | Medical Equipments and Supplies</title>
            <meta name="description" content="Pharmacy Cleanroom is your exclusive supplier of various medical equipments and supplies including healthcare, IV infusion, Janitorial etc. Call: (409)6591309" />
        <?php } else { ?>
            <title><?php print $head_title; ?></title>  
        <?php } ?>
            
        <?php print $head; ?>
        <?php print $styles; ?>
        <?php print $scripts; ?>
<!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
    </head>
    <body<?php print $attributes; ?>>
        <div id="skip-link">
            <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
        </div>
        <?php print $page_top; ?>
        <?php print $page; ?>
        <?php print $page_bottom; ?>
    </body>
</html>
